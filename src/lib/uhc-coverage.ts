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
  {
    uhcRequirement: 'Health Information Systems',
    section: 'Sec 36',
    coverage: 'PARTIAL',
    keyFiles: [
      '11-health-info-management-4th-ed',
      'dc2022-0293-mccod',
    ],
  },
  {
    uhcRequirement: 'Pharmacy & Drug Management',
    section: 'Sec 35',
    coverage: 'PARTIAL',
    keyFiles: [
      '04-pharmacy-management-4th-ed',
      '02-property-supply-management',
    ],
  },
];

export const gaps: GapItem[] = [
  {
    uhcRequirement: 'PhilHealth Benefit Packages',
    section: 'Sec 10-12',
    description:
      'No DOH hospital manual covers PhilHealth benefit package design, case rate computation, or claims processing workflows. Hospitals rely on PhilHealth circulars.',
  },
  {
    uhcRequirement: 'Health Technology Assessment',
    section: 'Sec 31',
    description:
      'No manual addresses health technology assessment processes. The UHC Act established HTA as a basis for benefit coverage decisions.',
  },
  {
    uhcRequirement: 'Population Health Approach',
    section: 'Sec 17',
    description:
      'No hospital manual covers population-based health planning, community health needs assessment, or catchment area management.',
  },
  {
    uhcRequirement: 'Primary Care Facility Licensing',
    section: 'Sec 20-21',
    description:
      'Existing licensing tools focus on hospitals. No manual covers primary care network licensing or integration with hospital referral systems.',
  },
  {
    uhcRequirement: 'Health Human Resources for Health Plan',
    section: 'Sec 28',
    description:
      'Staffing standards exist, but a comprehensive HHRH plan covering training, deployment, retention, and career pathways is not addressed.',
  },
  {
    uhcRequirement: 'EHR & IT Specifications',
    section: 'Sec 36',
    description:
      'Health information management is covered, but electronic health record system specifications, interoperability standards, and IT infrastructure requirements are absent.',
  },
  {
    uhcRequirement: 'National Formulary Compliance',
    section: 'Sec 35',
    description:
      'Pharmacy management is covered, but alignment with the Philippine National Formulary and essential medicines list procurement requirements is not addressed.',
  },
  {
    uhcRequirement: 'PhilHealth Accreditation',
    section: 'Sec 22',
    description:
      'Hospital licensing is covered, but PhilHealth-specific accreditation requirements, quality benchmarks, and reaccreditation processes are not included in DOH manuals.',
  },
];
