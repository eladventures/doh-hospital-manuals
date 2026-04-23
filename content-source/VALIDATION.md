# Corpus Validation: Schema Generation Test

> Test date: 2026-04-23
> Source file: 10a-staffing-standards-L3-2022.md
> Purpose: Can an LLM read this markdown and produce correct, usable data structures?

## Test 1: Staffing Standards Schema

Generated from the staffing tables in 10a-staffing-standards-L3-2022.md.

### SQL Schema

```sql
-- Hospital staffing standards per DOH guidelines
-- Source: Phase I (CY 2022) Revised Organizational Structure and Staffing Standards
-- for Level III General Government Hospitals

CREATE TABLE hospital_levels (
  id INTEGER PRIMARY KEY,
  level INTEGER NOT NULL CHECK (level IN (1, 2, 3)),
  description TEXT NOT NULL
);

CREATE TABLE organizational_units (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,                    -- e.g. "Office of the Medical Center Chief"
  parent_unit_id INTEGER REFERENCES organizational_units(id),
  service TEXT NOT NULL                  -- e.g. "Medical Service", "Allied Health Professional Service"
);

CREATE TABLE position_titles (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,                   -- e.g. "Medical Center Chief II"
  salary_grade INTEGER NOT NULL,         -- DOH salary grade (1-33)
  unit_id INTEGER NOT NULL REFERENCES organizational_units(id)
);

CREATE TABLE staffing_standards (
  id INTEGER PRIMARY KEY,
  position_id INTEGER NOT NULL REFERENCES position_titles(id),
  bed_capacity INTEGER NOT NULL,         -- 200, 300, 400, 500, 600, 700, 800, 900, 1000-1500
  required_count INTEGER NOT NULL,       -- number of positions required
  standard_edition TEXT NOT NULL,         -- "2013", "2022-phase1", "2023-phase2"
  hospital_level INTEGER NOT NULL,       -- 1, 2, or 3
  UNIQUE(position_id, bed_capacity, standard_edition)
);
```

### Sample Data (from 10a tables)

```sql
-- Office of the Medical Center Chief, Level 3
INSERT INTO organizational_units (id, name, parent_unit_id, service) VALUES
  (1, 'Office of the Medical Center Chief', NULL, 'Office of the Medical Center Chief'),
  (2, 'Legal Unit', 1, 'Office of the Medical Center Chief'),
  (3, 'Public Health Unit', 1, 'Office of the Medical Center Chief'),
  (4, 'Planning and Management Unit', 1, 'Office of the Medical Center Chief'),
  (5, 'Quality Improvement, IPC and Patient Safety Unit', 1, 'Office of the Medical Center Chief'),
  (6, 'Professional Education, Training and Research Unit', 1, 'Office of the Medical Center Chief');

INSERT INTO position_titles (id, title, salary_grade, unit_id) VALUES
  (1, 'Medical Center Chief II', 27, 1),
  (2, 'Administrative Officer IV', 15, 1),
  (3, 'Administrative Assistant III', 9, 1),
  (4, 'Attorney IV', 23, 2),
  (5, 'Legal Assistant II', 12, 2),
  (6, 'Legal Assistant I', 10, 2);

-- Staffing counts by bed capacity (200-900 beds, Level 3)
INSERT INTO staffing_standards (position_id, bed_capacity, required_count, standard_edition, hospital_level) VALUES
  -- Medical Center Chief II (SG 27): 1 at every bed capacity
  (1, 200, 1, '2022-phase1', 3),
  (1, 300, 1, '2022-phase1', 3),
  (1, 400, 1, '2022-phase1', 3),
  (1, 500, 1, '2022-phase1', 3),
  (1, 600, 1, '2022-phase1', 3),
  (1, 700, 1, '2022-phase1', 3),
  (1, 800, 1, '2022-phase1', 3),
  (1, 900, 1, '2022-phase1', 3),
  -- Legal Assistant II (SG 12): 0 for 200-500 beds, 1 for 600+ beds
  (5, 200, 0, '2022-phase1', 3),
  (5, 300, 0, '2022-phase1', 3),
  (5, 400, 0, '2022-phase1', 3),
  (5, 500, 0, '2022-phase1', 3),
  (5, 600, 1, '2022-phase1', 3),
  (5, 700, 1, '2022-phase1', 3),
  (5, 800, 1, '2022-phase1', 3),
  (5, 900, 1, '2022-phase1', 3);
```

### TypeScript Types

```typescript
interface StaffingStandard {
  positionTitle: string;
  salaryGrade: number;
  unit: string;
  service: string;
  /** Required headcount by bed capacity */
  countByBeds: Record<number, number>;
  /** Which edition of standards this comes from */
  standardEdition: '2013' | '2022-phase1' | '2023-phase2';
  hospitalLevel: 1 | 2 | 3;
}

interface HospitalStaffingRequirement {
  hospitalLevel: 1 | 2 | 3;
  bedCapacity: number;
  positions: {
    title: string;
    salaryGrade: number;
    unit: string;
    requiredCount: number;
  }[];
  totalPositions: number;
}

// Example query: "What staff does a 400-bed Level 3 hospital need?"
// Answer from 10a: 32 positions in Office of Medical Center Chief alone
//   - 3 in OMCC core (Chief + Admin Officer + Admin Assistant)
//   - 2 in Legal Unit (Attorney IV + Legal Assistant I)
//   - 5 in Public Health Unit
//   - 5 in Planning and Management Unit
//   - 11 in Quality/IPC/Patient Safety Unit
//   - 6 in Professional Education/Training/Research Unit
```

## Validation Result

**PASS.** The markdown tables are parseable enough to extract:
- Position titles and salary grades (accurate)
- Organizational unit hierarchy (clear from section headers)
- Staffing counts by bed capacity (numbers readable)
- Subtotals match (e.g., OMCC 200-bed subtotal = 30 = 3+2+5+5+9+6 ✓)

**Known gaps:**
- Some 900-bed column values missing (empty cells in source)
- 10b (Phase II) has formulas for 1000-1500 beds that need different extraction logic
- Cross-referencing between 10, 10a, and 10b needed for complete staffing picture across all levels

**Conclusion:** Corpus is ready for health platform development. An LLM can read these files and generate correct schemas, SQL, and TypeScript types.
