export interface UseCaseDoc {
  slug: string;
  why: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  uhcRelevance: string;
  docs: UseCaseDoc[];
}

export const useCases: UseCase[] = [
  {
    id: 'staffing-workforce',
    title: 'Staffing & Workforce',
    description:
      'Organizational structure and staffing standards for government hospitals across all levels, including the latest Phase II revised standards and nursing service administration.',
    icon: 'Users',
    uhcRelevance:
      'UHC Act Sec 28 mandates adequate health human resources; these manuals define the staffing ratios and organizational structures required.',
    docs: [
      { slug: '10b-staffing-standards-revised-2023', why: 'Latest Phase II staffing standards for all hospital levels (2023)' },
      { slug: '10a-staffing-standards-L3-2022', why: 'Phase I staffing standards specific to Level 3 hospitals' },
      { slug: '10-staffing-standards-2013', why: 'Original 2013 staffing standards (superseded but useful for historical reference)' },
      { slug: 'ao2012-0012-hospital-classification', why: 'Defines hospital levels that determine staffing requirements' },
      { slug: '03-nursing-service-admin-4th-ed', why: 'Nursing workforce administration and service standards' },
    ],
  },
  {
    id: 'compliance-licensing',
    title: 'Compliance & Licensing',
    description:
      'Hospital classification, licensing assessment tools, and regulatory compliance requirements for operating government hospitals.',
    icon: 'ShieldCheck',
    uhcRelevance:
      'UHC Act Sec 22 requires health facility standards and licensing; these orders define classification and assessment criteria.',
    docs: [
      { slug: 'dc2018-0131-licensing-assessment', why: 'Revised licensing assessment tools for hospitals' },
      { slug: 'ao2012-0012-hospital-classification', why: 'Foundational hospital classification system (Levels 1-3)' },
      { slug: 'ao2012-0012a', why: 'First amendment to hospital classification order' },
      { slug: 'ao2012-0012b', why: 'Second amendment to hospital classification order' },
      { slug: 'ao2021-0015-basic-nonbasic', why: 'Defines basic and non-basic service requirements per hospital level' },
    ],
  },
  {
    id: 'emergency-department',
    title: 'Emergency Department',
    description:
      'Standards and guidelines for managing hospital emergency departments, including patient safety protocols.',
    icon: 'Siren',
    uhcRelevance:
      'UHC Act Sec 9 guarantees emergency care access; these manuals set the operational standards for emergency departments.',
    docs: [
      { slug: '09-emergency-department-2nd-ed-2022', why: 'Comprehensive emergency department management standards (2nd edition)' },
      { slug: 'ao2020-0007-patient-safety', why: 'Patient safety administrative order applicable to emergency care' },
    ],
  },
  {
    id: 'billing-finance',
    title: 'Billing & Finance',
    description:
      'Patient care financing, hospital finance standards, per capita budgeting, patient eligibility determination, and administrative finance operations.',
    icon: 'Receipt',
    uhcRelevance:
      'UHC Act Sec 10-11 address patient financing and PhilHealth coverage; these manuals operationalize hospital-level financial management.',
    docs: [
      { slug: '19-pcf-manual-2020', why: 'Patient Care Financing manual for hospital billing processes' },
      { slug: '17-hospital-finance-standards-1st-ed', why: 'Standards for hospital finance service management' },
      { slug: 'ao2022-0020-per-capita-budget', why: 'Per capita budget allocation policy for hospitals' },
      { slug: 'ao2021-0044-patient-eligibility', why: 'Patient eligibility determination for hospital services' },
      { slug: '01-admin-finance-org-management', why: 'Administrative and finance service organization and management' },
    ],
  },
  {
    id: 'pharmacy-drug-management',
    title: 'Pharmacy & Drug Management',
    description:
      'Pharmacy operations, drug handling, and property/supply management for hospitals.',
    icon: 'Pill',
    uhcRelevance:
      'UHC Act Sec 35 covers pharmaceutical regulation; these manuals guide hospital pharmacy operations and supply chain management.',
    docs: [
      { slug: '04-pharmacy-management-4th-ed', why: 'Hospital pharmacy management manual (4th edition)' },
      { slug: '02-property-supply-management', why: 'Property and supply management including pharmaceutical supplies' },
    ],
  },
  {
    id: 'laboratory-blood-bank',
    title: 'Laboratory & Blood Bank',
    description:
      'Laboratory specimen handling, biosafety/biosecurity standards, and national voluntary blood services program manuals.',
    icon: 'Microscope',
    uhcRelevance:
      'UHC Act Sec 22 requires quality diagnostic services; these manuals set laboratory and blood bank operational standards.',
    docs: [
      { slug: '13-lab-specimen-transport', why: 'Standards for packaging and transporting lab specimens' },
      { slug: '14-lab-biosafety-biosecurity', why: 'Laboratory biosafety and biosecurity standards' },
      { slug: 'nvbsp-bsf-standards', why: 'Manual of standards for blood service facilities' },
      { slug: 'nvbsp-blood-donor-selection', why: 'Blood donor selection criteria and procedures' },
      { slug: 'nvbsp-clinical-practice-guidelines', why: 'Clinical practice guidelines for blood services' },
    ],
  },
  {
    id: 'infection-prevention-control',
    title: 'Infection Prevention & Control',
    description:
      'IPC policies, health facility infection control, and healthcare waste management as it relates to infection prevention.',
    icon: 'ShieldPlus',
    uhcRelevance:
      'UHC Act Sec 22 mandates safe health facilities; IPC is a core requirement for hospital licensing and accreditation.',
    docs: [
      { slug: 'ao2022-0051-ipc', why: 'Latest IPC administrative order (2022)' },
      { slug: 'ao2020-0003-ipchf', why: 'IPC in health facilities policy framework' },
      { slug: '12-waste-management-4th-ed-2020', why: 'Waste management practices critical to infection control' },
    ],
  },
  {
    id: 'facility-planning-design',
    title: 'Facility Planning & Design',
    description:
      'Hospital planning and design guidelines for Level 2 and Level 3 facilities, facility development planning, and green/climate-resilient facility standards.',
    icon: 'Building2',
    uhcRelevance:
      'UHC Act Sec 25-26 address health facility development and planning; these manuals provide the technical design and sustainability standards.',
    docs: [
      { slug: '15-hospital-design-250bed-L3', why: 'Technical design guidelines for 250-bed Level 3 hospitals' },
      { slug: '16-hospital-design-100bed-L2', why: 'Technical design guidelines for 100-bed Level 2 hospitals' },
      { slug: 'doh-facility-development-plan-2020-2040', why: 'Long-term national health facility development plan' },
      { slug: '21-green-safe-facilities-2021', why: 'Green and safe health facilities manual' },
      { slug: '22-green-safe-operational-guidelines', why: 'Operational guidelines for climate-resilient facilities' },
    ],
  },
  {
    id: 'health-info-medical-records',
    title: 'Health Information & Medical Records',
    description:
      'Health information management systems, medical records standards, and medical certificate of cause of death procedures.',
    icon: 'FileText',
    uhcRelevance:
      'UHC Act Sec 36 covers health information systems; these manuals define hospital-level health data management practices.',
    docs: [
      { slug: '11-health-info-management-4th-ed', why: 'Comprehensive health information management manual (4th edition)' },
      { slug: 'dc2022-0293-mccod', why: 'Medical Certificate of Cause of Death standards and procedures' },
    ],
  },
  {
    id: 'wash-environmental-health',
    title: 'WASH & Environmental Health',
    description:
      'Water, sanitation, and hygiene standards for health facilities including safety plans, WASHFIT tools, and the national WASH roadmap.',
    icon: 'Droplets',
    uhcRelevance:
      'UHC Act Sec 25 requires safe facility environments; WASH compliance is essential for licensing and patient safety.',
    docs: [
      { slug: '23-wash-facility-improvement-tool', why: 'WASH facility improvement assessment tool' },
      { slug: '24-water-safety-plan', why: 'Guide for developing water safety plans' },
      { slug: '25-sanitation-safety-plan', why: 'Guide for developing sanitation safety plans' },
      { slug: '26-standards-for-sanitaria', why: 'Standards for hospital sanitaria' },
      { slug: '27-wash-roadmap', why: 'National WASH roadmap for health facilities' },
      { slug: '28-washfit-guidelines', why: 'WASHFIT safety plan guidelines' },
    ],
  },
  {
    id: 'nutrition-dietary-services',
    title: 'Nutrition & Dietary Services',
    description:
      'Hospital nutrition and dietetics service management standards and procedures.',
    icon: 'Apple',
    uhcRelevance:
      'UHC Act supports comprehensive hospital services; nutrition services are a required component of hospital care delivery.',
    docs: [
      { slug: '05-nutrition-dietetics-3rd-ed', why: 'Nutrition and dietetics service management manual (3rd edition)' },
    ],
  },
  {
    id: 'quality-improvement-patient-safety',
    title: 'Quality Improvement & Patient Safety',
    description:
      'Continuous quality improvement programs, patient safety policies, and service delivery design for hospitals.',
    icon: 'Award',
    uhcRelevance:
      'UHC Act Sec 22-23 mandate quality standards and continuous improvement; these orders establish the CQI and patient safety frameworks.',
    docs: [
      { slug: 'ao2020-0034-cqi', why: 'Continuous quality improvement administrative order' },
      { slug: 'ao2020-0007-patient-safety', why: 'National patient safety policy framework' },
      { slug: 'ao2020-0019-sdd', why: 'Service delivery design for quality care pathways' },
    ],
  },
  {
    id: 'hospital-operations-administration',
    title: 'Hospital Operations & Administration',
    description:
      'Comprehensive procedures manuals, integrated hospital operations and management program, and PHU operations.',
    icon: 'Settings',
    uhcRelevance:
      'UHC Act Sec 18-19 address service delivery networks; these manuals define operational procedures for government hospital management.',
    docs: [
      { slug: '18-procedures-manual-3rd-ed', why: 'Current procedures manual for government hospitals (3rd edition)' },
      { slug: '18-1-procedures-manual-2nd-ed-part1', why: 'Historical procedures manual Part 1 (superseded, reference use)' },
      { slug: '18-2-procedures-manual-2nd-ed-part2', why: 'Historical procedures manual Part 2 (superseded, reference use)' },
      { slug: 'ao2022-0021-ihomp', why: 'Integrated Hospital Operations and Management Program policy' },
      { slug: '30-phu-manual-2025', why: 'PHU manual of operations (2025)' },
    ],
  },
  {
    id: 'waste-management-audit',
    title: 'Waste Management & Audit',
    description:
      'Healthcare waste management practices and audit guidelines for health facilities.',
    icon: 'Trash2',
    uhcRelevance:
      'UHC Act Sec 25 requires safe waste handling in health facilities; audit tools ensure ongoing compliance.',
    docs: [
      { slug: '12-waste-management-4th-ed-2020', why: 'Comprehensive healthcare waste management manual (4th edition)' },
      { slug: '29-waste-management-audit', why: 'Waste management audit guidelines and tools' },
    ],
  },
];
