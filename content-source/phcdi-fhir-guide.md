---
title: "Philippine Core Data for Interoperability (PHCDI) — FHIR Implementation Guide Reference"
short_title: "PHCDI FHIR Guide"
category: "health-it"
year: 2024
status: "current"
issuing_body: "UP Manila SILab / PhilHealth / Department of Health"
hospital_levels: [1, 2, 3]
uhc_section: "Sec 31, 36"
related_docs: ["nhdr-framework.md", "philhealth-claimform-guidelines.md", "ra11223-uhc-act.md"]
extraction_date: "2026-04-24"
source_url: "https://build.fhir.org/ig/UP-Manila-SILab/PhilHealth-NHDR-IG-Review/"
tier: "data"
platform_role: "api_contract"
supersedes: null
superseded_by: null
edition: null
---

# Philippine Core Data for Interoperability (PHCDI) — FHIR Implementation Guide

> Source: https://build.fhir.org/ig/UP-Manila-SILab/PhilHealth-NHDR-IG-Review/
> Version: Release 1.0 v0.1.0
> Base: FHIR R4 (4.0.1)
> Developed by: UP Manila National TeleHealth Center / SILab, with CSIRO Australia technical assistance

## Overview

PHCDI sets the minimum requirements for FHIR resource use in Philippine health systems. It defines PH-specific profiles, extensions, value sets, and code systems that enable interoperability between hospitals, primary care facilities, PhilHealth, and DOH systems via the National Health Data Repository (NHDR).

Modeled after global initiatives (US Core Data for Interoperability, Argonaut Project) but tailored to Philippine healthcare needs.

## Architecture Layers

```
PH Base IG (foundational national rules)
  └→ PH Core IG (common profiles, terminology)
       └→ NHDR IG / PHCDI (NHDR-specific use cases)
            └→ Program-specific IGs (future)
```

## Actors

- **Philippine Core Requestor**: Client applications that initiate data access requests
- **Philippine Core Responder**: Server systems providing patient data in response

## FHIR Profiles Defined

### Foundation
| Profile | FHIR Resource | Purpose |
|---------|--------------|---------|
| PH Provenance | Provenance | Records entities and processes involved in producing resources |

### Base (Administrative)
| Profile | FHIR Resource | Purpose |
|---------|--------------|---------|
| PH Appointment | Appointment | Healthcare event bookings |
| PH Encounter | Encounter | Patient-provider interactions |
| PH Organization | Organization | Healthcare facility/org records |
| PH Patient | Patient | Demographics and admin info |
| PH Person | Person | Demographics independent of health context |
| PH Practitioner | Practitioner | Healthcare providers |
| PH PractitionerRole | PractitionerRole | Practitioner roles at organizations |
| PH RelatedPerson | RelatedPerson | Non-primary care participants (family, guardians) |

### Clinical
| Profile | FHIR Resource | Purpose |
|---------|--------------|---------|
| PH AllergyIntolerance | AllergyIntolerance | Adverse substance reactions |
| PH CarePlan | CarePlan | Care delivery intentions |
| PH ClinicalImpression | ClinicalImpression | Clinical assessments |
| PH Condition | Condition | Diagnoses and clinical problems |
| PH DiagnosticReport | DiagnosticReport | Test findings and interpretations |
| PH FamilyMemberHistory | FamilyMemberHistory | Related health conditions |
| PH Goal | Goal | Intended care objectives |
| PH Immunization | Immunization | Vaccine administration events |
| PH Medication | Medication | Medication identification |
| PH MedicationAdministration | MedicationAdministration | Medication consumption events |
| PH MedicationDispense | MedicationDispense | Medication dispensing records |
| PH MedicationRequest | MedicationRequest | Medication orders (prescriptions) |
| PH MedicationStatement | MedicationStatement | Active medication records |
| PH Observation | Observation | Measurements, vitals, lab results |
| PH Procedure | Procedure | Performed healthcare actions |
| PH QuestionnaireResponse | QuestionnaireResponse | Structured form responses |
| PH ServiceRequest | ServiceRequest | Diagnostic/treatment requests |
| PH Specimen | Specimen | Analysis samples |

### Financial
| Profile | FHIR Resource | Purpose |
|---------|--------------|---------|
| PH Claim | Claim | Professional services reimbursement (maps to CF1-CF4) |
| PH Coverage | Coverage | Insurance and payment instruments (PhilHealth membership) |
| PH EnrollmentRequest | EnrollmentRequest | Insurance enrollment |

### Specialized
| Profile | FHIR Resource | Purpose |
|---------|--------------|---------|
| PH Questionnaire | Questionnaire | Structured data collection forms |

## PH-Specific Extensions (30)

### Geographic (Philippine addressing)
- Barangay Code, City Code, Province, Region Code — mapped to PSGC (Philippine Standard Geographic Code)

### Patient Demographics
- Age in Days/Months/Years
- Educational Attainment (PSCED codes)
- Indigenous Group, Indigenous Status
- Marital Status, Occupation, Race, Sex at Birth

### Clinical/Administrative
- Date of Interview, Investigation, Result
- Encounter (extension), Address (extension)
- Interviewer, Investigator, Reporter names
- Medication Type, Package Description
- Member Type, Patient Classification, Patient Type
- Position of Signatory, Reason for Signature
- Specimen Release Date
- HFLastUpdated, HFRecordedDate (facility timestamps)

## Value Sets (21)

### Geographic (Philippine-specific)
- Barangay Codes (PSGC), City Codes, Province Codes, Region Codes

### Clinical
- Drug Codes (FDA pharmaceutical products)
- ICD-10 Codes (disease classification)
- Procedure Codes (RVS — Relative Value Scale)
- Observation Values

### Administrative
- Educational Attainment (PSCED)
- Facility Major Type
- Health Facility Codes (DOH NHFR)
- Indigenous Groups
- Member Type (PhilHealth)
- Occupation Classification (PSOC)
- Patient Type
- Practitioner Role
- Service Type
- Sex, Signature Type
- PhilHealth Regional Offices
- Local Health Insurance Offices
- Coverage Copay Type

## Code Systems (16)

### Philippine Standards
- PSGC (geographic), PSCED (education), PSOC (occupation)

### Healthcare
- Drug Codes (FDA), NHFR (facility registry), RVS (procedures)

### Local
- Coverage copay types, facility types, indigenous groups, insurance offices, member types, observation values, organization types, ownership classifications, patient types, PhilHealth regional offices, signature types

## Claims Form Mapping

The FHIR IG includes example bundles mapping PhilHealth Claims Forms to FHIR:
- **CF1** → Bundle with Patient, Coverage, EnrollmentRequest resources
- **CF2** → Bundle with Encounter, Condition, Procedure, Claim resources
- **CF3** → Practitioner, PractitionerRole, ServiceRequest resources
- **CF4** → Medication, MedicationAdministration, MedicationDispense resources

## Global Standards Referenced

| Standard | Usage in PHCDI |
|----------|---------------|
| HL7 FHIR R4 | Base specification |
| ICD-10 (WHO) | Diagnosis coding via PH Condition profile |
| RVS (Relative Value Scale) | Procedure coding |
| PSGC (PSA) | Geographic coding for addresses |
| PSCED (PSA) | Educational attainment coding |
| PSOC (PSA) | Occupation classification |
| NHFR (DOH) | Health facility identification |
| FDA Drug Codes | Medication identification |

## What PHCDI Does NOT Cover (gaps for platform builders)

1. **Lab result coding** — no LOINC adoption yet. Lab results use free-text observations.
2. **Clinical terminology** — no SNOMED CT. Diagnoses use ICD-10 only.
3. **Imaging** — no DICOM integration profile.
4. **Referral workflows** — no formal referral resource profile.
5. **Scheduling** — Appointment profile exists but scheduling workflow not defined.
6. **Consent management** — no Consent resource profile despite Data Privacy Act requirements.
7. **Care coordination** — CarePlan profile exists but no care team or episode of care profiles.
8. **Real-time messaging** — no Subscription or messaging framework defined.

## For Platform Builders

If building a system that interoperates with NHDR:
1. Implement PH Patient, PH Encounter, PH Condition, PH Claim at minimum
2. Use PSGC for all geographic data (barangay → city → province → region)
3. Map PhilHealth Claims Forms to the FHIR bundle examples
4. Support ICD-10 for diagnoses, RVS for procedures
5. Register with DOH NHFR for facility codes

If building a system that GOES BEYOND NHDR:
1. Add LOINC for lab results (NHDR will eventually adopt this)
2. Add SNOMED CT for clinical terminology (future-proofing)
3. Add DICOM references for imaging
4. Implement Consent resource for Data Privacy Act compliance
5. Add CareTeam, EpisodeOfCare for care coordination
6. Build Subscription-based real-time notifications
