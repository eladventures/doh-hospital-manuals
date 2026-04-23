export interface CoveredItem {
  uhcRequirement: string;
  section: string;
  coverage: 'FULL' | 'PARTIAL';
  keyFiles: string[];
}

export interface GapItem {
  uhcRequirement: string;
  section: string;
  description: string;
}

export const covered: CoveredItem[] = [
  {
    uhcRequirement: 'Hospital Classification',
    section: 'Sec 22',
    coverage: 'FULL',
    keyFiles: [
      'ao2012-0012-hospital-classification',
      'ao2012-0012a',
      'ao2012-0012b',
      'dc2018-0131-licensing-assessment',
      'ao2021-0015-basic-nonbasic',
    ],
  },
  {
    uhcRequirement: 'Staffing Standards',
    section: 'Sec 28',
    coverage: 'FULL',
    keyFiles: [
      '10b-staffing-standards-revised-2023',
      '10a-staffing-standards-L3-2022',
      '10-staffing-standards-2013',
      '03-nursing-service-admin-4th-ed',
    ],
  },
  {
    uhcRequirement: 'Emergency Care Access',
    section: 'Sec 9',
    coverage: 'FULL',
    keyFiles: [
      '09-emergency-department-2nd-ed-2022',
      'ao2020-0007-patient-safety',
    ],
  },
  {
    uhcRequirement: 'Patient Financing',
    section: 'Sec 10-11',
    coverage: 'FULL',
    keyFiles: [
      '19-pcf-manual-2020',
      '17-hospital-finance-standards-1st-ed',
      'ao2022-0020-per-capita-budget',
      'ao2021-0044-patient-eligibility',
    ],
  },
  {
    uhcRequirement: 'Infection Prevention & Control',
    section: 'Sec 22',
    coverage: 'FULL',
    keyFiles: [
      'ao2022-0051-ipc',
      'ao2020-0003-ipchf',
    ],
  },
  {
    uhcRequirement: 'Facility Development Plan',
    section: 'Sec 25-26',
    coverage: 'FULL',
    keyFiles: [
      'doh-facility-development-plan-2020-2040',
      '15-hospital-design-250bed-L3',
      '16-hospital-design-100bed-L2',
    ],
  },
  {
    uhcRequirement: 'Quality Improvement',
    section: 'Sec 22-23',
    coverage: 'FULL',
    keyFiles: [
      'ao2020-0034-cqi',
      'ao2020-0007-patient-safety',
    ],
  },
  {
    uhcRequirement: 'Service Delivery Design',
    section: 'Sec 18-19',
    coverage: 'FULL',
    keyFiles: [
      'ao2020-0019-sdd',
      '18-procedures-manual-3rd-ed',
      'ao2022-0021-ihomp',
    ],
  },
  {
    uhcRequirement: 'Waste Management',
    section: 'Sec 25',
    coverage: 'FULL',
    keyFiles: [
      '12-waste-management-4th-ed-2020',
      '29-waste-management-audit',
    ],
  },
  {
    uhcRequirement: 'WASH Standards',
    section: 'Sec 25',
    coverage: 'FULL',
    keyFiles: [
      '23-wash-facility-improvement-tool',
      '24-water-safety-plan',
      '25-sanitation-safety-plan',
      '27-wash-roadmap',
      '28-washfit-guidelines',
    ],
  },
  {
    uhcRequirement: 'Laboratory & Blood Services',
    section: 'Sec 22',
    coverage: 'FULL',
    keyFiles: [
      '13-lab-specimen-transport',
      '14-lab-biosafety-biosecurity',
      'nvbsp-bsf-standards',
      'nvbsp-blood-donor-selection',
      'nvbsp-clinical-practice-guidelines',
    ],
  },
  {
    uhcRequirement: 'Green & Safe Facilities',
    section: 'Sec 25-26',
    coverage: 'FULL',
    keyFiles: [
      '21-green-safe-facilities-2021',
      '22-green-safe-operational-guidelines',
    ],
  },
  // Previously gaps, now covered:
  {
    uhcRequirement: 'PhilHealth Benefit Packages & Case Rates',
    section: 'Sec 10-12',
    coverage: 'FULL',
    keyFiles: [
      'annex-a-medical-case-rates',
      'annex-b-procedure-case-rates',
    ],
  },
  {
    uhcRequirement: 'PhilHealth Accreditation',
    section: 'Sec 22',
    coverage: 'FULL',
    keyFiles: [
      'peaches-manual',
      'pc2023-0024-accreditation',
      'accreditation-requirements',
    ],
  },
  {
    uhcRequirement: 'Primary Care Facility Licensing',
    section: 'Sec 20-21',
    coverage: 'FULL',
    keyFiles: [
      'pcf-manual-standards',
      'ao2020-0047-pcf-licensing',
    ],
  },
  {
    uhcRequirement: 'Health Human Resources Plan',
    section: 'Sec 28',
    coverage: 'FULL',
    keyFiles: [
      'hhrh-masterplan-2020-2040',
    ],
  },
  {
    uhcRequirement: 'National Formulary & Essential Medicines',
    section: 'Sec 35',
    coverage: 'FULL',
    keyFiles: [
      'pnf-essential-medicines',
      '04-pharmacy-management-4th-ed',
    ],
  },
  {
    uhcRequirement: 'Health Information Systems & Interoperability',
    section: 'Sec 36',
    coverage: 'FULL',
    keyFiles: [
      'phcdi-fhir-guide',
      'nhdr-framework',
      'philhealth-claimform-guidelines',
      '11-health-info-management-4th-ed',
      'ra10173-data-privacy',
    ],
  },
  // Laws (the actual legal foundation)
  {
    uhcRequirement: 'UHC Act Full Text & IRR',
    section: 'Full Act',
    coverage: 'FULL',
    keyFiles: [
      'ra11223-uhc-act',
      'ra11223-uhc-irr',
    ],
  },
  {
    uhcRequirement: 'Mental Health Services',
    section: 'Complementary law',
    coverage: 'FULL',
    keyFiles: [
      'ra11036-mental-health',
    ],
  },
  {
    uhcRequirement: 'Patient Data Privacy',
    section: 'Sec 36',
    coverage: 'FULL',
    keyFiles: [
      'ra10173-data-privacy',
    ],
  },
  {
    uhcRequirement: 'Disease Surveillance & Reporting',
    section: 'Sec 17',
    coverage: 'FULL',
    keyFiles: [
      'ra11332-disease-reporting-irr',
      'pidsr-manual',
    ],
  },
];

export const gaps: GapItem[] = [
  {
    uhcRequirement: 'Population Health Approach (beyond surveillance)',
    section: 'Sec 17',
    description:
      'No document covers population-based health planning, community health needs assessment, epidemiological surveillance (PIDSR manual exists but was not yet acquired), or catchment area management.',
  },
];
