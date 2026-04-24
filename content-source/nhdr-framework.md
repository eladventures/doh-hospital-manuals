---
title: "National Health Data Repository (NHDR) Framework"
short_title: "NHDR Framework"
category: "health-it"
year: 2022
status: "current"
issuing_body: "PhilHealth / Department of Health"
hospital_levels: [1, 2, 3]
uhc_section: "Sec 31, 36"
related_docs: ['ra11223-uhc-act.md', 'phcdi-fhir-guide.md', 'philhealth-claimform-guidelines.md']
extraction_date: "2026-04-24"
tier: "data"
platform_role: "api_contract"
source_pdf: null
supersedes: null
superseded_by: null
edition: null
---

# National Health Data Repository (NHDR) Framework
National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
1 | P a g e  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
National Health Data Repository Framework 
 
 
 
 
 
 
 
 
 
 
 
Release 1.a 
(As of 28 March 2022) 
 
 
 
 
 
 
 
 
 
 
 
Department of Health 
and 
Philippine Health Insurance Corporation 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
2 | P a g e  
 
By the Staff of PhilHealth’s Executive Vice-President & Chief Operating Officer, 
Information Management Sector, and Department of Health’s Knowledge 
Management and Information Technology Service: 
 
 
PHILHEALTH 
DEPARTMENT OF HEALTH 
 
ATTY. ELI DINO D. SANTOS 
Executive Vice President and Chief Operating 
Officer 
Office of the EVP and COO 
DR. ENRIQUE A. TAYAG 
Director IV 
Knowledge Management and Information 
Technology Service 
 
 
JOVITA V. ARAGONA 
Senior Vice-President 
Special Assignment on UHC Systems  
Development and Enhancement 
Office of the EVP and COO 
 
CHERRIE D. ESTEBAN 
Chief 
eHealth Systems Division 
Knowledge Management and Information 
Technology Service 
 
JEANIE T. BERNOLIA 
Acting Senior Vice-President and  
Chief Information Officer 
Information Management Sector 
CHARITY L. TAN 
Division Chief 
Knowledge Management Division 
Knowledge Management and Information 
Technology Service 
 
DR. ISRAEL FRANCIS PARGAS 
Senior Vice-President 
Special Assignment on UHC Policy 
Development 
Office of the EVP and COO 
 
ROBERT S. MANUEL 
Chief 
ICT Infrastructure and Security Division 
Knowledge Management and Information 
Technology Service 
 
GREGORIO C. RULLODA 
Vice-President  
 
Special Assignment on UHC Systems 
Development and Enhancement 
Office of the EVP and COO 
 
JOHN ULYSSES M. GALO 
Information Officer IV / Program Manager 
Knowledge Management Division / 
National eHealth PMO 
Knowledge Management and Information 
Technology Service 
  
 
HEALTH PLANNING, MONITORING AND EVALUATION, AND GOVERNANCE – 
TECHNICAL WORKING GROUP 
Frances Rose E. Mamaril, MPH 
Chair and Director IV – Health Policy Development and Planning Bureau 
 
Administrative & Technical Support Offices: 
 
- 
PhilHealth’s Project Management Office 
- 
DOH’s National eHealth Program Management Office 
 
 
 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
3 | P a g e  
 
ACKNOWLEDGEMENTS 
 
The Department of Health and Philippine Health Insurance Corporation gratefully 
acknowledge the attendees, participants, and/or contributors whose dedication, expertise, 
and support made this National Health Data Repository Framework possible. 
 
Health Enterprise Architecture Expert Group - National eHealth Program 
 
1. Dr. Alvin Marcelo - Director, Asia eHealth Information Network (AeHIN) 
2. Dennis B. Batangan, MD, MSc (Heidelberg) - Institute of Philippine Culture (IPC) 
School of Social Sciences (SOSS); Member 
3. Dr. Raymund Sarmiento – Director, National Telehealth Center, National Institutes of 
Health, University of the Philippines, Manila 
4. Francis Uy – Chief Architect, CEO and Founder, Sinag Solutions 
 
Department of Information and Communications Technology 
 
Arnold P. De Castro – Director, Infostructure Management Bureau  
and IT Personnel – Infostructure Management Bureau 
 
National Privacy Commission 
 
Atty. Vida Zora G. Bocar – National Privacy Commission 
 
Resource Persons 
 
1. Juan Miguel Cantero -  Information Technology 
2. Romeo Fernando J. Aquino Jr. -  IT Resource Person 
3. Angelito S. Abando – Information Technology 
4. Philip Christian Zuňiga – Standards and Interoperability Lab (SIL) – Asia 
 
International Organization (World Health Organization, Philippines) 
 
1. Rajendra Yadav, Team Coordinator - Disease Control 
2. Tom Hiatt, Technical Officer 
3. April Joy David, Technical Officer 
 
 
 
 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
4 | P a g e  
 
TABLE OF CONTENTS 
 
INTRODUCTION ........................................................................................................... 7 
LEGAL BASES ............................................................................................................... 8 
THIS DOCUMENT .......................................................................................................... 9 
INTENDED AUDIENCE ................................................................................................... 9 
SCOPE AND LIMITATIONS ............................................................................................. 9 
ACRONYMNS ............................................................................................................... 10 
PART 1: NHDR FRAMEWORK ........................................................................................ 12 
Methodology ................................................................................................................ 12 
Target Environment ..................................................................................................... 13 
Guiding Principles ......................................................................................................... 14 
Definition .................................................................................................................... 15 
Vision .......................................................................................................................... 16 
Objectives ................................................................................................................... 17 
Outcomes and Benefits ................................................................................................. 18 
Benefits ....................................................................................................................... 19 
Health and Health-related Data ..................................................................................... 20 
Data Sources ............................................................................................................... 21 
Architectural Components ............................................................................................. 23 
Building Blocks ............................................................................................................. 26 
Enabling Environments .............................................................................................. 27 
ICT Environments ..................................................................................................... 27 
A. LEADERSHIP AND GOVERNANCE ......................................................................... 29 
COBIT for Effective IT Governance ............................................................................. 30 
B. LEGISLATION, ETHICS, POLICY AND COMPLIANCE ............................................... 32 
Legislations .............................................................................................................. 32 
Ethics ...................................................................................................................... 33 
Policies .................................................................................................................... 33 
Compliance .............................................................................................................. 36 
C. INVESTMENT STRATEGY AND SUSTAINABILITY ................................................... 37 
Funding Models ........................................................................................................ 37 
D. STANDARDS AND INTEROPERABILITY ................................................................. 38 
National Health Data Standards ................................................................................. 38 
Data Codes .............................................................................................................. 39 
Standards Conformance and Interoperability Validation ................................................ 41 
Interoperability Layer ................................................................................................ 41 
E. 
SERVICES AND APPLICATIONS ............................................................................ 42 
Dataset Submission................................................................................................... 42 
Business Intelligence and Analytics ............................................................................. 45 
Data Access Request ................................................................................................. 49 
Open Data ............................................................................................................... 51 
eHealth Services and Applications .............................................................................. 51 
F. 
DIGITAL INFRASTRUCTURE ................................................................................ 53 
G. HUMAN RESOURCE ............................................................................................ 54 
PART 2: ACTION PLAN ................................................................................................. 61 
Phase 1: Standards Setting and EMR-NHDR Model Development and Implementation ....... 61 
Two (2) Use Cases of the Initial MODEL ......................................................................... 61 
Phase 2:  Updating of the EMR-NHDR Model and Implementation .................................... 63 
Scaling Up the MODEL .................................................................................................. 63 
RISK MANAGEMENT ..................................................................................................... 64 
MONITORING AND EVALUATION .................................................................................. 64 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
5 | P a g e  
 
Action Points ............................................................................................................... 65 
ANNEX 1.0 REFERENCES .............................................................................................. 68 
ANNEX 2.0 – LIST OF ICT MODELS AND OUTPUTS ......................................................... 70 
ANNEX 3.0 – ROLES AND RESPONSIBILITIES ................................................................. 72 
ANNEX 4.0 – LIST OF SURVEYS .................................................................................... 74 
ANNEX 5.0 – MATRIX OF ROLES AND RESPONSIBILITIES OF DOH AND PHILHEALTH 
(BASED ON THE INTERDEPENDENT POLICIES OF THE NHDR)......................................... 76 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
6 | P a g e  
 
Document Revision Log 
 
Release 
# 
Date Updated 
 
Added By 
 
1.a 
18 March 2022 
Jovita V. Aragona 
 
Updates: 
 
1. Updated the positions and office names of Ms. Esteban and Mr. Manuel 
of DOH; and name, position, office name of Mr. Galong. 
2. Guiding Principles:  
- Added Data Privacy Principle 
- Updated “Data Security” to “Data Protection” 
3. Outcomes and Benefits: 
- #3, Added “Health System Managers” & updated contents of 
outcomes 
4. Benefits: 
- #1, Updated “Access to Services” to “Access to Health Services and 
Information” 
- #6, Updated “Operations Planning and Management” to “Health 
System Operations Planning and Management” 
- Added #9 “Performance Management and Accountability” and its 
benefits. 
5. NHDC Security Standards, Risk and Compliance Division 
Added “Note: This will serve as the Data Protection Unit which will 
report to the overall Corporate Data Protection Officer of PhilHealth.  
The functions will be for updating and presentation to the Change 
Management Committee of PhilHealth.”. 
6. Part 2: Action Plan 
- Updated the 1st paragraph 
- Added Two (2) Use Cases of the Initial Model, and Integrated 
Health Information System 
- Development and Implementation (Updated the 2nd paragraph) 
-  Updating of the EMR-NHDR Model and Implementation 
o Added “Scaling Up the Mode” 
o Added “Note: Detailed activities and monitoring of 
accomplishments and status will be included in the Integrated 
Workplan 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
7 | P a g e  
 
INTRODUCTION 
 
The National Health Insurance Program administered by the Philippine Health Insurance 
Corporation (PhilHealth) was established in 1995 with the passage of Republic Act No. 
7875 and was amended by Republic Act Nos. 9241 and 10606.  The mandate of 
PhilHealth is to provide health insurance coverage to all Filipinos.  PhilHealth achieved 
significant accomplishments and progress throughout the years with the implementation 
of continuing benefit packages and enhancements of existing ones which have 
contributed to the increasing trend in benefit availments, improved access through its 
service facilities, continued expansion of coverage to other segments of society, 
expansion of accreditation, and others to make health insurance more responsive to the 
health needs of the Filipino people. 
 
Republic Act (RA) 11223 (An Act Instituting Universal Health Care (UHC) For All Filipinos, 
Prescribing Reforms in the Health Care System, and Appropriating Funds Therefor), also 
known as the “Universal Health Care Act” provides the legal basis for health reforms in 
the country.  Health reforms are guided by the principles of whole-of-government, whole-
of-society, and whole-of-system approach to ensure that health funds are spent 
judiciously, address the increasing demand for better health services, and increased 
accountability for results or outcomes.   
 
All public and private, national and local health-related entities shall be required to submit 
health and health-related data to PhilHealth including, among others, administrative, 
public health, medical, pharmaceutical and health financing data.1  All health service 
providers and insurers shall each maintain a health information system consisting of 
enterprise resource planning, human resource information, electronic health records, and 
an electronic prescription log consistent with DOH standards, which shall be electronically 
uploaded on a regular basis through interoperable systems.2 
 
The Implementing Rules and Regulations of the UHC Act provided details on Sections 31 
and 36.  Section 31.1 defines health and health-related data collectively referring to a set 
of specific variables or parameters that relates to individual and population health and 
well-being, including but not limited to administrative, public health, medical, 
pharmaceutical and health financing data.  Such data shall be submitted to PhilHealth by 
all health-related entities through a National Health Data Repository (NHDR), in 
compliance with guidelines that shall be jointly developed by the DOH and PhilHealth, in 
consultation with the Department of Information and Communication Technology (DICT) 
and the National Privacy Commission (NPC).  Provided that the submission of data by 
health related entities shall be a requirement in the licensing and contracting 
arrangements.   
 
The NHDR will address the critical challenge of collecting, integrating, and harmonizing 
existing health information systems and sources of data.  It will change how the health 
care is delivered, as well as how the health systems will be managed and operated.  The 
submission and processing of health and health-related data to the NHDR will be an 
integral component of the health care system to promote better performance in the 
health system, while ensuring data integrity/protection at all levels of implementation.   
 
                                                             
 
1 §31, Republic Act 11223 “Universal Health Care Act” 
2 §36 Republic Act 11223 “Universal Health Care Act” 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
8 | P a g e  
 
LEGAL BASES 
 
The following are the legal basis for the establishment of the NHDR: 
 
1. RA 11223 or “Universal Health Care Act” - Section 31 (Evidence-Informed Sectoral 
Policy and Planning for UHC) 
 
“(a) All public and private, national and local health-related entities shall be required 
to submit health and health-related data to PhilHealth including, among others, 
administrative, public health, medical, pharmaceutical and health financing 
data: Provided, That PhilHealth shall furnish the DOH a copy of the health 
data: Provided, further, That these shall be used for the purpose of generating 
information to guide research and policy-making: Provided, finally, That the DOH 
shall strengthen its research capability by supporting health systems development 
and reform initiatives through policy and systems research, and shall support the 
growth of research consortia in line with the vision of the Philippine National Health 
Research System.” 
 
2. RA 11223 or “Universal Health Care Act” - Implementing Rules and Regulations - 
Section 31.1 
 
“For the purpose of these Rules, health and health-related data collectively refer to a 
set of specific variables or parameters that relates to individual and population health 
and well-being, including, but not limited to, administrative, public health, medical, 
pharmaceutical and health financing data. Such data shall be submitted to PhilHealth 
by all health-related entities through a National Health Data Repository, in 
compliance with guidelines that shall be jointly developed by DOH and PhilHealth, in 
consultation with the Department of Information and Communications Technology 
(DICT) and the National Privacy Commission (NPC); Provided, That submission of 
data by health related entities shall be a requirement in the licensing and contracting 
arrangements; Provided, further, That health-related entities shall include, but not 
limited to, health care facilities, national and local government agencies involved in 
the provision of health services, and agencies involved in the collection of health 
data; Provided, finally, That PhilHealth shall provide the DOH access to the National 
Health Data Repository.” 
 
3. DOH and PhilHealth Joint Memorandum Circular No. 2021-0001 dated May 21, 2021: 
Implementing Guidelines of Section 31 of the Republic Act No. 11223, otherwise 
known as the “Universal Health Care (UHC) Act” on the Processing and Submission 
of Health and Health-related Data - Item V. General Guidelines, letter D 
 
“The PhilHealth shall establish and maintain the NHDR for all health and health-
related data submitted by health care providers, insurers, and health-related entities. 
It shall be considered as the overall Data Controller insofar as it controls the 
processing of health and health-related data through the NHDR. It shall assume full 
responsibility in complying with existing and applicable laws, rules, and other 
relevant issuances relating to the processing and submission of all health and health-
related data through the NHDR, including data protection. 
 
Appropriate operational guidelines shall be developed by PhilHealth in the 
establishment and maintenance of the NHDR, in coordination with DOH and other 
relevant agencies, subject to the approval of the NeHSC-TWG.” 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
9 | P a g e  
 
THIS DOCUMENT 
 
This document is named as the “National Health Data Repository Framework” and 
organized into two (2) parts, namely: 
 
Part 1 
NHDR 
Framework 
- 
Defines the objectives of the framework, methodology, 
target environment, guiding principles on which a well-
functioning NHDR needs to operate; what the NHDR is, 
vision, objectives, outcomes and benefits, health and 
health-related data, and data sources. 
 
 
 
- 
Defines the architectural components that make up the 
NHDR to achieve integration and interoperability of all 
data processing systems of the DOH and PhilHealth. 
 
 
 
- 
Defines the seven (7) building blocks to guide the 
establishment and maintenance of the NHDR. 
 
Part 2 
Action Plan 
Defines the action points derived from the NHDR Framework 
that must be undertaken by the DOH and PhilHealth.  It also 
includes a high-level strategy to implement the NHDR 
Framework. 
 
INTENDED AUDIENCE 
 
This document is intended for all public and private, national and local health care 
providers, insurers, and health-related entities involved in the provision of health 
services, and/or processing and submission of health and health-related data; all 
national, regional, local and branch offices under the DOH and PhilHealth; and all others 
concerned. 
 
Health-Related Entities refer to academic and research institutions, civil society 
organizations, medical societies, health professional associations, non-government 
organizations, donor or funding agencies, development partners, local and international 
information and communications technologies (ICT) service providers, national and local 
government agencies, and other stakeholders involved in the provision of health services, 
and/or processing and submission of health and health-related data, and those identified 
by the DOH and PhilHealth. 
 
SCOPE AND LIMITATIONS 
 
1. 
This NHDR Framework covers the entire country as ALL public and private, national 
and local health-related entities shall be required to submit health and health-related 
data to PhilHealth, including, among others, administrative, public health, medical, 
pharmaceutical and health financing data.   
 
2. 
The entire country covers the seventeen (17) administrative regions i.e. the National 
Capital Region, Cordillera Administrative Region, Region I (Ilocos Region), Region II 
(Cagayan Valley), Region III (Central Luzon), Region IV-A (CALABARZON), Region 
IV-B (MIMAROPA), Region V (Bicol Region), Region VI (Western Visayas), Region VII 
(Central Visayas), Region VIII (Eastern Visayas), Region IX (Zamboanga Peninsula), 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
10 | P a g e  
 
Region X (Northern Mindanao), Region XI (Davao Region), Region XII 
(SOCCSKSARGEN), Caraga Region, and the Bangsamoro Autonomous Region in 
Muslim Mindanao (BARMM).  
 
3. 
The regions are composed of provinces, highly urbanized cities or other special 
areas, which are subdivided into cities, municipalities and barangays. The country 
has 81 provinces, 146 cities, 1,488 municipalities, and 42,046 barangays.3  Thirty-
three of these are highly urbanized cities (HUC), five are independent component 
cities (ICC), and one hundred eight being component cities (CC). 
 
4. 
This NHDR Framework is guided by the Universal Health Care (UHC) Act’s principles 
and policies, general objectives, provisions, and approved DOH and PhilHealth 
issuances. 
 
5. 
This NHDR Framework is a high level conceptual structure based on building blocks 
to guide the establishment and maintenance of the NHDR.  Details shall be 
formulated in consultation or coordination with concerned business process units, 
health program managers, offices, and/or entities during the development of the 
functional and technical design specifications; and placed in a separate document 
like appropriate policy issuance, functional and technical design documents, standard 
operating procedures or workflows, joint memorandum, and other applicable forms.   
The details are as follows, among others: 
 
a. Unified operational guidelines that conform to the data management and 
governance principles; specific procedures and quality standards in the 
processing of health and health-related data, including data access; and specific 
accountabilities of all those involved in the processing of health and health-
related data, including those for data protection. 
 
b. 
Guidelines in the receiving, evaluating, and managing data access requests for 
health and health-related data that DOH and PhilHealth control. 
 
6. 
This NHDR Framework will be reviewed on a quarterly basis in its first year of 
release, and semi-annual thereafter.  Any updated version will be released a month 
after the end of each quarter or semi-annual period. 
 
7. 
This NHDR Framework does not purport to be all-inclusive or to contain all of the 
information that a bidder or an information technology service provider may consider 
material or desirable in making its decision to participate in the bidding.  The DOH 
and PhilHealth may amend or replace any of the information contained in this 
document at any time, without giving any prior notice or providing any reason.  
 
ACRONYMNS 
 
 
DICT 
Department of Information and Communications Technology 
DOH 
Department of Health 
DOST 
Department of Science and Technology 
                                                             
 
3 
Regional 
and 
Provincial 
Summary 
- 
Number 
of 
Provinces, 
Cities, 
Municipalities and Barangays as of 30 September 2020 - Facts and Figures - 
DILG (As of September 30, 2020) 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
11 | P a g e  
 
EA 
Enterprise Architecture 
eClaims 
Electronic Claims System 
EMR 
Electronic Medical Record 
EU 
European Union 
HCI 
Health Care Institution 
HIE 
Health Information Exchange 
HIS 
Hospital Information System 
ICT 
Information and Communications Technology 
iHIS 
Integrated Health Information System 
IRR 
Implementing Rules and Regulations 
ISSP 
Information System Strategic Plan 
JAO 
Joint Administrative Order 
JMC 
Joint Memorandum Circular 
KPI 
Key Performance Indicator 
NeHSC 
National eHealth Steering Committee 
NeHTWG 
National eHealth Technical Working Group 
NeHP 
National eHealth Program 
NHDD 
National Health Data Dictionary 
NHDR 
National Health Data Repository 
NHDS-SWG 
National Health Data Standards Sub-Working Group 
NPC 
National Privacy Commission 
PCEO 
President and Chief Executive Officer 
PHIE 
Philippine Health Information Exchange 
PhilHealth 
Philippine Health Insurance Corporation 
PKI 
Public Key Infrastructure 
PSA 
Philippine Statistics Authority 
RA 
Republic Act 
RACI 
Responsible, Accountable, Consulted, Informed 
S&I 
Standards and Interoperability 
SCIV 
Standards Conformance and Interoperability Validation 
SHF 
Special Health Fund 
SOH 
Secretary of Health 
SOPs 
Standard Operating Procedures 
SSOT 
Single Source of Truth 
TWG 
Technical Working Group 
UHC 
Universal Health Care 
WHO 
World Health Organization 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
12 | P a g e  
 
PART 1: NHDR FRAMEWORK 
 
This NHDR Framework is a conceptual structure or architecture based on building blocks 
to provide knowledge and understanding on what the NHDR is, and guide the 
establishment and maintenance of the NHDR.  The objectives are as follows:  
 
- Enable DOH and PhilHealth to implement a unified data architecture to ensure an 
integrated approach to processing, submission, data management, data sharing and 
exchange, data access, and governance of health and health related data. 
 
- Serve as guide in the development of the functional and technical specifications of the 
NHDR. 
 
- Define the roles and/or responsibilities of key agencies or offices involved in the 
establishment and maintenance of the NHDR. 
 
Methodology 
 
The following are the processes that were done to develop this NHDR Framework: 
 
1. Review of The Law:  Legal basis of the NHDR as to objectives, scope, models, 
guiding principles, rules and regulations, among others.  A legal basis justifies the 
need to establish and maintain the NHDR. 
 
2. Review of the World Health Organization Global Strategy on Digital Health 
2020-2025: Resolutions adopted by the United Nations General Assembly and the 
World Health Assembly, related WHO global and regional reports, regional strategies, 
the two-part report of the ISO Technical Committee on Health Informatics on 
eHealth architecture, the resolution on ICD-11 and the WHO Family of international 
classifications and terminologies, the three-part National eHealth strategy toolkit, 
Member States’ current digital health situation and status, actions, strategies, policies 
and investments, and recommendations of various United Nations panels on digital 
and 
innovation 
topics. 
(Source: 
https://www.who.int/docs/default-
source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf) 
 
3. Review of the Philippines eHealth Strategic Framework & Plan:  How the 
eHealth vision will be achieved to guide national coordination and collaboration, and 
sets clear direction and guidance to the on-going and future eHealth activities in the 
country. 
 
4. Review of the DOH and PhilHealth’s Enterprise Architecture:  Alignment of 
ICT strategy with the organizational performance strategy; provides the shared 
principles and models that guide investment, development and utilization of 
information system and technology infrastructure to serve the performance goals of 
the organizations related to value creation, customer experience, operational 
excellence, and future orientation of the enterprise.   
 
5. Review of the DOH and PhilHealth’s Information System Strategic Plans 
(ISSPs):  Agencies’ overall strategy for their ICT thrusts, strategies, programs, and 
projects for development. 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
13 | P a g e  
 
6. Review of Relevant ICT Models, Outputs, and Issuances:  Models or 
frameworks, systems or outputs from previous ICT engagements or projects, 
development and implementation of systems, and issuances that are vital to the 
development of the NHDR Framework.   
 
7. Development of the NHDR Framework: Writing of the NHDR Framework based 
on its intended objectives, and using the inputs from Item #s 1 to 6. 
 
8. Review of the NHDR Framework: Conduct of meetings to discuss the NHDR 
framework and/or specific topics related thereto to get inputs, reactions, comments, 
or recommendations from concerned stakeholders. 
 
9. Review & Updating of the NHDR Framework:  Appropriate updating of the 
NHDR Framework based on the evaluation of the inputs, reactions, comments, or 
recommendations from concerned stakeholders. 
 
Target Environment 
 
The end-state or environment that the NHDR intends to achieve is as follows: 
 
1. There is a unified data management and governance in the processing of health and 
health-related data. 
 
2. The NHDR is the single point of submission and authoritative repository of the 
country’s health and health-related data in a central database system; and the single 
source of truth for health. 
 
3. There is a national interoperable digital health ecosystem where health information 
systems are interoperable among each other, and can share or exchange health and 
health-related data.  All health-related entities are complying with the national health 
data standards for interoperability. 
 
4. The submission, processing, management, sharing and exchange, access, and 
governance of health and health-related data are integrated through the unified data 
architecture.  There are no data processing systems that are implemented as a 
stand-alone system. 
 
5. There is a unified report generation and analysis to support the national health 
programs towards improved health care service delivery; support to operational, 
tactical, and strategic planning; support to the monitoring and surveillance of 
diseases and health outcomes; promote research and development; and work 
towards achieving universal health coverage and the health-related sustainable 
development goals. 
 
6. The citizenry can easily, immediately and safely access their health information, 
health care services, and information they need.  There is an integrated, single and 
complete view of one’s health information. 
 
7. There is a shared responsibility between the DOH and PhilHealth, and requires multi-
sectoral approach and integration with concerned sectors or entities like the DICT 
and NPC. 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
14 | P a g e  
 
Guiding Principles 
 
The guiding principles are means to achieve the target environment in terms of 
harmonizing the decision-making process; creating policies, procedures, and standards; 
and supporting resolution of contradictory nature.  The guiding principles4 are as follows: 
 
1 
Primacy of Principles 
The only way to provide a consistent and measurable 
level of quality information to decision-makers is if all 
organizations abide by the principles. 
 
2 
People-oriented to 
Maximize Benefit  
People-oriented focuses on meeting the needs of the 
citizenry like ease of access to accurate, complete, 
reliable, and timely health data or information, 
products and services; and right to choose the path for 
accessing the NHDR.  Decisions are from an enterprise-
wide perspective to maximize benefit to the citizenry, 
and have greater long-term value than made from any 
particular organizational perspective.   
 
3 
Information 
Management is 
Everybody’s Business 
All concerned organizations participate in information 
management decisions to accomplish the objectives of 
the NHDR. 
 
4 
Compliance with Law 
All concerned organizations or entities must be mindful 
to comply with laws, regulations, policies, procedures, 
guidelines, and other protocols, i.e. data submission 
and processing, data security, data access, others. 
 
5 
Service Orientation 
The architecture must be based on a design of services 
comprising the health sector to deliver enterprise agility 
and “boundaryless information flow”5 
 
6 
IT Responsibility 
The IT Office is responsible for owning and 
implementing the IT processes and infrastructure that 
enable the NHDR to meet user-defined requirements 
for functionality, service levels, cost, and delivery 
timing. 
 
7 
Data is an Asset 
Data is a valuable resource and the foundation of 
decision-making; and must be carefully managed to 
ensure where it is, can rely upon its accuracy, and can 
obtain it when and where needed. 
 
                                                             
 
4 The Open Group Architecture Framework, as updated to govern the NHDR 
5 A shorthand representation of “access to integrated information to support 
business process improvements” represents a desired state of an enterprise’s 
infrastructure and is specific to the business needs of the organization. 
https://www.opengroup.org/about-
us/vision/bif#:~:text=What%20is%20Boundaryless%20Information%20Flow,business%2
0needs%20of%20the%20organization. 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
15 | P a g e  
 
8 
National Health Data 
Standards and 
Interoperability 
 
Data is defined consistently, and definitions are 
understandable and available to all users.  The systems 
conform to defined national health data standards that 
promote interoperability for data, applications, and 
technology. 
 
9 
Data Privacy Principle 
 
The processing of personal data shall be allowed, 
subject to compliance with the requirements of the 
Data Privacy Act of 2012 and other laws allowing 
disclosure of information to the public, and adherence 
to the principles of transparency, legitimate purpose, 
and proportionality. 
 
10 Data Protection 
 
Adopts the principles set out under the Data Privacy 
Act of 2012 and the National Cybersecurity Plan of 
ensuring a good balance between free flow of 
information and privacy rights of individuals, and 
acknowledges the need to implement data protection 
measures on the processing of health information as 
the health sector moves from paper-based systems to 
“paper-lite” eHealth services and applications.  
 
It adheres to the duty of maintaining privacy, 
confidentiality, and security of the health information 
and health records of every Filipino as provided by 
relevant laws, issuances and guidelines, Rules of Court, 
and the Code of Ethics adopted by the different 
healthcare providers. Ultimately, the aim is a trusted 
eHealth environment where data protection is an 
integral principle for delivering optimum benefits. 
 
11 Data is Accessible and 
Shared 
Data is securely accessible and shared for users to 
efficiently and effectively perform their duties.  There is 
one source of accurate and timely managed data for 
decision making. 
 
12 Flexibility, Scalability, 
and Elasticity 
Services and applications are flexible to adapt to 
changes based on needs or requirements, scalable to 
accommodate increased loads, and elastic to fit the 
resources needed to cope with the loads.  
 
 
Definition 
 
The National Health Data Repository is the single point-of-submission and authoritative 
repository of the country’s health and health-related data, and the Single Source of Truth 
(SSOT) for Health6 as the basis of health policy and standards, decision-making, health 
                                                             
 
6 Single source of truth refers to the practice of structuring data so that 
every data point is stored only once; any change in the data at source will be 
automatically updated in integrated systems.   


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
16 | P a g e  
 
program planning and implementation, health systems strengthening, and performance 
monitoring and evaluation.   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Vision 
 
 
“Enable access to health care services, health information, and securely share and 
exchange information in support to a safer, quality health care, more equitable and 
responsive health system for all Filipino people by transforming the way information 
is used to plan, manage, deliver, and monitor health services.”. 
  
The NHDR will be at the core of a “responsive health system” to: 
 
- 
Improve the quality and safety of the health system through empowerment of health 
consumers to better manage their health records; availability of information like 
single view of the patients’ information at the point of care, decision support tools, 
and knowledge-based information. 
 
- 
Securely share and exchange information without repeating effort and time in 
providing the same information to different healthcare providers; use of services or 
applications to speed up processes like ordering system and results reporting; 
reduced time and cost of health consumers undergoing unnecessary or duplicated 
diagnostic tests; improved diagnosis and treatment activities; and efficient and 
effective disease monitoring and response. 
 
- 
Support a more equitable health system through presence of information about the 
availability, location, expertise and services of healthcare providers. This will provide 
health consumers with ready information for reference purpose and healthcare 
providers for referral process.  
PUBLIC & PRIVATE, NATIONAL & LOCAL HEALTH RELATED ENTITIES
Academic & 
Research 
Institutions
Civil Society 
Organizations
Medical 
Societies
Health 
Professional 
Associations
Non-
Government 
Organizations
Development 
Partners
Local & 
International 
ICT Service 
Providers
National & 
Local 
Government 
Agencies
Health Care 
Facilities, *Other 
Agencies/
Stakeholders
Identifed by 
DOH & 
PhilHealth
* Involved in the provision of health services, and/or processing and submission of health and health-
related data
Donor or 
Funding 
Agencies
HEALTH & HEALTH-
RELATED DATA
National Health Data 
Repository
NHDR
Department of Health & PhilHealth


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
17 | P a g e  
 
 
Objectives 
 
The general objective of the NHDR is to establish and implement an integrated approach 
to the submission, processing, data management, data sharing and exchange, data 
access, and governance of health and health-related data for evidence-informed sectoral 
policy and planning for UHC. 
 
Detailed objectives are as follows: 
 
1. Address the recurring issues and problems on poor quality and untimely generation 
and reporting of health and health-related data.7 
 
2. Ensure that quality health and health-related data and reports are readily available 
and made accessible to every stakeholder in the right way, and processed in a 
lawful, ethical, secure, consistent and efficient manner at all levels of health care 
utilization.8 
 
3. Promote better performance in the health system, while ensuring data protection at 
all levels of data processing at all times.9 
 
4. Enable continuous systematic collection, analysis, interpretation, and timely 
dissemination of accurate, sensitive, and timely epidemiologic surveillance data for 
planning, implementation, and evaluation of public health programs.10 
 
5. Enable real-time collection, consolidation, and analysis of data on the use of the 
Special Health Fund.11 
 
6. Enable collection, submission, and publication of price data of health services, which 
include among others, laboratory fees, cost of procedures, cost of amenities, 
professional fees, other health services provided by hospitals and other health care 
providers, health goods such as drugs and medicines, health and medical devices, 
and laboratory and medical supplies.12 
 
                                                             
 
7 DOH and PhilHealth JMC No. 2021-0001, dated May 21, 2021 Implementing 
Guidelines of Section 31 of the Republic Act No. 11223, otherwise known as the 
“Universal Health Care (UHC) Act” on the Processing and Submission of Health 
and Health-related Data - Rationale 
8 DOH and PhilHealth JMC No. 2021-0001, dated May 21, 2021 Implementing 
Guidelines of Section 31 of the Republic Act No. 11223, otherwise known as the 
“Universal Health Care (UHC) Act” on the Processing and Submission of Health 
and Health-related Data - Rationale 
9 DOH and PhilHealth JMC No. 2021-0001, dated May 21, 2021 Implementing 
Guidelines of Section 31 of the Republic Act No. 11223, otherwise known as the 
“Universal Health Care (UHC) Act” on the Processing and Submission of Health 
and Health-related Data – General Guidelines A 
10 Reference: §17.3.b. IRR of RA 11223 
11 Reference: §20.6. IRR of RA 11223 
12 Reference: §28.18.a. and 28.18.b. IRR of RA 11223 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
18 | P a g e  
 
7. Enable submission of health and health-related data by health maintenance 
organizations, life and non-life Private Health Insurers in aid of developing policies, 
standards, and plans.13 
 
8. Enable regular data sharing on health promotion programs, projects, and activities 
for the Department of Education and Department of Health, in accordance with 
relevant provisions of RA 10173 (Data Privacy Act), and other relevant laws and 
policies.14 
 
9. Ensure that all Filipinos are guaranteed equitable access to quality and affordable 
health care goods and services.15 
 
Outcomes and Benefits 
 
The following are the target outcomes (changes or results) from using the NHDR: 
 
Stakeholders 
Outcomes 
 
1 Clients/Patients 
- Enable clients or patients to access knowledge and 
services that support early detection and treatment 
of 
preventable 
communicable 
and 
non-
communicable diseases. 
 
 
- Improved care coordination by ensuring that their 
health information can be easily exchanged 
between their health care providers. 
 
 
- Improved access to knowledge resources and 
support for better management of their chronic 
conditions, and their adherence to treatment and 
medication regimes. 
 
2 Health Care Providers 
- Improved ability of health care providers to access 
health information at the point of care. 
 
 
- Improved ability of health care providers to 
exchange patient information with other health 
care providers. 
 
 
- Enable health care providers to monitor and track 
their patients more effectively. 
 
 
- Enable health care providers to access clinical 
knowledge, evidence and expertise to support skills 
development and the delivery of health care within 
their local communities. 
 
3 Health System 
Managers, Health 
Care Managers and 
Administrators 
- Support national, regional, and local health 
agencies, policy and decision makers, health 
system and resource managers, public and private 
health entities to predict and plan for the spread of 
infectious diseases. 
                                                             
 
13 Reference: §28.23.b. IRR of RA 11223 
14 Reference: §30.9. IRR of RA 11223 
15 Reference: §3.1.b. IRR of RA 11223 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
19 | P a g e  
 
 
 
- Enable health authorities to monitor and respond to 
outbreaks and other emergencies more effectively 
and to meet reporting obligations. 
 
 
- Support the education, training and development of 
the country’s health human resource. 
 
 
- Provide reliable and quality data to inform and 
monitor the results of clinical, policy, investment 
and administrative decisions. 
 
 
- Provide access to quality data sources that inform 
service and health human resource planning and 
management. 
 
 
- Enable effective management of the supply, 
distribution and availability of vaccines and 
essential medicines. 
 
4 Health and Medical 
Researchers 
- Provide 
researchers 
with 
greater 
access 
to 
evidence-based information to support clinical 
decision 
making 
and 
treatment 
design 
and 
assessment. 
 
 
- Improved 
access 
to 
the 
medical 
literature, 
knowledge networks and resources. 
 
5 National and Local 
Government 
- Improved health action plans, and determination of 
issues and challenges. 
 
 
- Make informed decisions. 
 
 
- Enhanced analysis of disease patterns and trends. 
 
 
- Deliver more reliable, responsive, and timely health 
reporting. 
 
6 Health-related Entities 
- Provide health content as a commodity. 
 
 
- Facilitate research and development. 
 
 
- Enable broad and cost effective marketing of health 
products and services. 
 
Benefits 
 
The following are the expected benefits (improvements) resulting from the outcomes: 
 
Benefit Areas 
Benefits 
 
1 Access to Health 
Services and 
Information 
 
Ability for patients to locate health care providers that 
offer the services they require. 
 
2 Efficiency Gains in 
Health Service 
Delivery 
Enhanced health human resource productivity due to 
greater efficiencies in obtaining patient information, 
record keeping, administration and referrals. 
 
3 Quality and Safety of 
Care 
- Reduced instances of medically avoidable adverse 
events. 
 
 
- Improved 
ability 
to 
monitor 
compliance 
to 
medications and other treatment regimes. 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
20 | P a g e  
 
 
4 Health Monitoring 
and Reporting 
- Improved 
ability 
to 
support 
surveillance 
and 
management of public health interventions 
 
 
- Improved ability to analyze and report on population 
health outcomes. 
 
5 Access to Knowledge 
and Education 
- Improved access to health care provider knowledge 
sources, including medical literature, education, 
training, and other resources. 
 
 
- Improved access to consumer health knowledge 
sources, including health education and awareness, 
and prevention information for certain health 
conditions. 
 
6 Health System 
Operations Planning 
and Management 
- Improved access to quality data sources to inform 
health care service and health human resource 
planning and development. 
 
7 Health Empowerment 
- Improved 
participation 
of 
individuals 
in 
self-
monitoring and chronic disease management. 
 
 
- Improved access to trusted health knowledge 
sources. 
 
8 Innovation and 
Growth 
- Increased standardization of information exchange 
and communication between different segments, 
agencies and organizations. 
 
 
 
- Increased opportunity for market innovation through 
access to national health data standards. 
 
 
 
9 Performance 
Management and 
Accountability 
- Improved 
overall 
management 
of 
national 
monitoring and reporting functions (i.e. planning and 
scheduling, progress monitoring, financials, risk 
management). 
- Improved monitoring of the delivery of action plan 
and achievement of the NHDR vision. 
 
 
Health and Health-related Data 
 
Health and health-related data collectively refers to a set of specific variables or 
parameters that relates to an individual and population health and well-being, including, 
but not limited to administrative and investment planning in health, public health, 
medical, pharmaceutical, and health financing data.16  The DOH shall lead the 
standardization of health and health-related data, in coordination with PhilHealth and 
other relevant stakeholders.   
 
Examples of health and health-related data are as follows: 
 
1. Accidents/Injuries 
20. Impact Assessments 
                                                             
 
16 §31.1 Implementing Rules & Regulations of RA11223 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
21 | P a g e  
 
2. Accomplishments 
3. Availed Health Services (Population 
and Individual) 
4. Birth Data 
5. Blood Donors and Recipients 
6. Death Data 
7. Drug Test Results 
8. Environmental Health 
9. Financial (Budgets and Expenditures) 
10. Grants 
11. Health Care Institutions/Providers 
Licensing and Accreditation 
12. Health / Medical Records 
13. Health and Medical Travels 
14. Health Human Resources 
15. Health Promotions 
16. Health Regulations 
17. Health Services 
18. Health Technology Assessments 
19. Health Maintenance Organizations 
and Private Insurance Data 
21. Medical Care Assistance 
22. Membership Contributions to 
PhilHealth 
23. Monitoring and Evaluation 
24. Network Contracting 
25. Nutrition Data 
26. Organ Donors and Recipients 
27. PhilHealth Membership 
28. Population Data 
29. Program Activities and Projects 
30. Researches 
31. Resolutions 
32. Resource Centers 
33. Surveys 
34. Technical Assistance 
35. Vaccination Data 
36. Water and Social Hygiene 
37. Workplace Safety and Health 
Standards 
 
Data Sources 
 
Health-related entities include, but not limited to, health care facilities, national and local 
government agencies involved in the provision of health services, and agencies involved 
in the collection of health data.17  These are as follows: 
 
1. Academic and Research Institutions 
2. Civil Society Organizations 
3. Development Partners 
4. Donor or Funding Agencies 
5. Health Professional Associations 
6. Local and International ICT Service 
Providers 
7. Medical Societies 
8. National 
and 
Local 
Government 
Agencies 
9. Non-government Organizations 
10. Other Stakeholders involved in the 
Provision of Health Services, and/or 
Processing and Submission of Health 
and Health-related Data 
11. Those Identified by the DOH and 
PhilHealth 
 
At present, health and health-related data originates from the various information 
systems or applications that health-related entities use to perform their functions. Some 
of the data sources are as follows: 
 
 
1 
Census 
Data on population and housing census for determining 
the size of the population and its geographical 
distribution, 
social, 
demographic 
and 
economic 
characteristics of its people.18 
                                                             
 
17 §31.1 Implementing Rules & Regulations of RA 11223 
18 Reference:  
https://www.who.int/healthinfo/country_monitoring_evaluation/who-hmn-


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
22 | P a g e  
 
 
2 
Civil Registration and 
Vital Statistics 
Data on births, death, and other major life events that are 
essential to understanding the development of a country 
and its people.19 
 
3 
Disease Registry 
Data on people with a specific disease or condition. 
 
4 
Disease Surveillance 
Data that evaluates the effectiveness of control and 
preventive health measures, monitor changes in infectious 
agents, identify high risk populations or areas to target 
interventions, others.   
 
5 
Health Insurance 
Claims 
Data on health insurance accreditation, membership, 
contributions, claims,  legal cases, others. 
 
6 
Medical Records 
Data on events, encounters, and/or transactions between 
patients and health care providers.  It includes the 
identification 
information, 
consent 
forms, 
medical 
histories, family histories, treatment histories, medication 
information, 
medical 
directives, 
laboratory 
results, 
progress notes, and other relevant details about the 
patient or individual. 
 
7 
Peer-reviewed 
Literature 
Information that have gone through an evaluation process 
in which journal editors and other expert scholars assess 
the quality and scientific merit of the article and its 
research.20 
 
8 
Researches 
Data or information from studies regarding a particular 
concern, problem, or topic using scientific method. 
 
9 
Resource and 
Administrative Records 
Data on logistics of health service inputs like health 
facilities, 
health 
human 
resources, 
budgets 
and 
expenditures, drugs, health-related commodities, and 
others. 
 
10 
Sensor Data 
Data produced by sensor-based devices like vital signs, 
ECG, and handheld devices. 
 
11 
Service Records 
Data on events with health consequences from other 
sectors other than the records of health service providers 
like police, environmental health authorities, occupational 
health 
agencies, 
veterinary 
services, 
health-related 
                                                                                                                                                                                             
 
framework-standards-chi.pdf (Framework and Standards for Country Health 
Information Systems – Second Edition) 
19 https://www.sdsntrends.org/research/2018/12/4/case-study-civil-
registration-vital-
statistics?locale=en#:~:text=Civil%20registration%20and%20vital%20statistics%2
0(CRVS)%20record%20births%2C%20deaths,12%20of%20the%2017%20SDGs. 
20 https://www.nlm.nih.gov/nichsr/stats_tutorial/section3/mod6_peer.html 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
23 | P a g e  
 
projects and programs, and others.   
 
12 
Smartphones and 
Health Apps 
Data on health and activity-related like tracking of routine 
exercise, amount and quality of sleep. 
 
13 
Social Media 
Data from interactions among people in which they 
create, share, and/or exchange data, information, or ideas 
in virtual networks and communities like social networking 
(e.g. facebook and twitter);  uploaded photos and videos; 
interactive media like snapchat and tiktok; blogs like 
tumblr and reddit. 
 
14 
Surveys 
Data on predefined group of respondents to gain 
information and insights into various topics or subject 
matters. 
 
15 
Wearables and Remote 
Patient Monitoring 
Devices 
Data from fitness trackers, smart watches, biosensors, 
blood pressure monitors, glucose trackers, and electronic 
devices that are designed to collect health information 
and transfer the data to the user’s smartphone and/or a 
cloud server where it can be retrieved accordingly. 
 
The DOH and PhilHealth shall study and evaluate the current data sources to ensure that 
there are no repetitive or duplicate datasets to be collected or submitted to the NHDR.  
Health and health-related data must come from the primary data source or as close as 
possible to the point of creation. Some examples of ensuring that there are no repetitive 
or duplicate datasets to be collected are as follows: 
 
1. Datasets from a disease registry can be integrated into the electronic medical record. 
2. Common datasets collected by the DOH and PhilHealth can be integrated like the 
patient’s demographic data, clinical record, health care institution information, 
patient’s confinement information, and others. 
 
Challenges to ensure that there are no repetitive or duplicate datasets to be collected 
from the source will have to be taken into account and/or address by the DOH and 
PhilHealth. 
 
Architectural Components 
 
The NHDR is not just a physical storage of health and health-related data.  There are 
architectural components that make up the NHDR in order to achieve integration and 
interoperability of all data processing systems.  The architectural components that make 
up the NHDR are the Data Storage Component, Compute Services Component, and Client 
Services Component. 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
24 | P a g e  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
1 Data Storage 
Component 
 
The physical storage of health and health-related data. 
 
2 Compute Services 
Component 
The resources, tools, systems, and other services to ensure that 
the NHDR is available, accessible and serves the client services’ 
component.  It has the following sub-components: 
 
 
 
 
a. Application Management: Manages the lifecycle process of 
developing, 
implementing, 
and 
maintaining 
systems, 
applications, or software. 
 
b. Business Intelligence and Analytics Management:  Enables 
build of business intelligence applications by providing 
capabilities in analysis, information delivery, and platform 
integration.  Business intelligence uses data to make 
decisions by collecting, reporting, and monitoring data for 
interpretation; and filters existing data to determine trends 
and patterns in the past and present for better decision 
making.  Analytics utilizes business intelligence to interpret 
data to predict future patterns based on current data. 
 
c. Security Management: The tools or actions to establish and 
Data Access 
Request
Shared Health 
Record
Dataset 
Submission
Open Data
Business 
Intelligence & 
Analytics
Client Services Component
(Philippine Health Services & Data Access System)
NATIONAL HEALTH DATA REPOSITORY
Network/ 
Connectivity 
Management
Operational 
Database 
Management
Server / 
Virtualization 
Management
Identification & 
Authentication
Data 
Management
Application 
Management
Data Storage 
Component
Business 
Intelligence & 
Analytics 
Management
Security 
Management
Users  Account 
Management
Storage 
Management
Data 
Warehouse 
Management
Standard 
Registries 
Management
eHealth Services & Applications
Frontline Applications | Special Health Fund Operations, Monitoring & Management System | 
Mobile Health Applications | Statistical Data Access/Query | Electronic Prescription | Alerts 
Monitoring & Management | Personal Health Record Management | Centralized Online Integrated 
HIS Registration and Status Monitoring System | Centralized Online Standards Conformance and 
Interoperability Validation System, Others
and
[Links to DOH and PhilHealth Systems]
Client Services Component
Compute Services Component
Data Storage Component
Compute Services Component


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
25 | P a g e  
 
maintain security like information security, application or 
system security, network and internet security. 
 
d. Users’ Account Management:  Core part of the identity and 
access management; manages users’ access to various IT 
resources 
like 
data, 
systems, 
applications, 
storage, 
networks, others. 
 
Grants data access to different users as reinforced by 
permission rights and security levels, and structured 
according to data governance policies.  This enables 
execution of health information access, data sharing and 
exchange between health care providers and entities 
involved in the provision of health service, including health 
care provider networks. 
 
e. Data Management: Ensures that quality data is stored, 
processed, transformed, and used to drive the decision 
making process.   
 
f. Data Warehouse Management:  Maintains important or 
critical historical data that has been extracted from the 
operational database, and transformed into accessible 
formats for analytical users.  It is designed to analyze, 
integrate, and report data coming from different sources; 
and uses Online Analytical Processing (OLAP). 
 
g. Identification and Authentication:   Enables identification of 
a user, and verification/proof that such user is who that 
person is. 
 
h. Standard Registries and Codes Management Standard 
Registries and Codes Management: Enables identification or 
verification of codes or references that are considered 
standards to all who will be availing of the NHDR services. 
 
i. 
Network / Connectivity Management:   Manages the data 
networking and connectivity infrastructure to support the 
NHDR services and applications. 
 
j. 
Operational Database Management: Ensures or guarantees 
the integrity and consistency of the submitted health data in 
the database through appropriate management of the 
following: data dictionary, data storage, security, access 
control, integrity, communication interfaces, others.  It is 
designed to record the submitted health data; and uses 
Online Transactional Processing (OLTP). 
 
k. Storage Management:  Associated services to support the 
secure storage of and access to the NHDR. 
 
l. 
Server/Virtualization Management:  Manages the virtual 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
26 | P a g e  
 
servers to support the NHDR services and applications. 
 
 
 
 
3 Client Services 
Component 
The services, systems, or applications that clients can use to 
interact with the NHDR.  The “Philippine Health Services  and  
Data Access System” is  the collective name to  represent   all  
systems  or  application.    Initial  systems are  as follows: 
 
a. Dataset Submission:   Enables all health-related entities to 
submit health and health-related data to the NHDR. 
 
b. Business Intelligence and Analytics:  Enables end-users   to  
generate meaningful data or information for decision 
making. 
 
c. Data Access Request:  Enables health care providers, 
patients, 
pharmacies, 
laboratories, 
and 
others 
to 
appropriately access and securely share health data. 
 
d. eHealth Services and Applications:  Systems,   applications, 
or  services   to improve the efficiency and effectiveness of 
the health system management and health care delivery. 
 
e. Open Data:  Dissemination of health and health-related 
data that are available to everyone to access, use and 
share.  This can be linked to the Open Data Philippines that 
collects datasets from different government agencies that 
are deemed “open”. 
 
 
 
 
Building Blocks 
 
The NHDR Framework uses building blocks that describe the needed components to be in 
place to achieve the NHDR vision and objectives.  The building blocks are grouped into 
two (2) dimensions, i.e. enabling environment and ICT environment.  Enabling 
environment refers to views, actions, and practices that support the efficient and 
effective functioning of the NHDR.  The ICT environment refers to the infrastructure and 
mechanisms for executing the digital or electronic health interventions like hardware, 
network, services, and applications. 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
27 | P a g e  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Enabling Environments 
1 Leadership and 
Governance 
Ensure that strategic policy frameworks exist and are 
combined with effective oversight, coalition-building, 
regulation, attention to system-design and accountability.21 
 
2 Legislation, Ethics, 
Policy and Compliance 
Govern the NHDR within the ambit of legislature, ethics, 
and policy for compliance. 
 
3 Investment Strategy 
and Sustainability 
Availability of resources like funds to sustain the NHDR in 
terms of development, operations, and maintenance. 
 
4 Standards and 
Interoperability 
Enable consistent and accurate collection and exchange of 
health information across geographical and health-sector 
boundaries; and health systems and services. 
 
5 Human Resource 
The people who make up the workforce of an organization 
to design, build, operate, support, and maintain the NHDR. 
ICT Environments 
6 Services and 
Applications 
Systems, applications, innovations, solutions,  software, 
and other services to achieve the benefits of the NHDR. 
 
7 Digital Infrastructure 
Resources to operationalize the NHDR which includes the 
physical infrastructure (servers, storages, networking, 
                                                             
 
21 https://www.who.int/health-topics/health-systems-governance#tab=tab_1 
Data Access 
Request
Shared Health 
Record
Dataset 
Submission
Open Data
Business 
Intelligence & 
Analytics
Client Services Component
(Philippine Health Services & Data Access System)
BUILDING BLOCKS
Network/ 
Connectivity 
Management
Operational 
Database 
Management
Server / 
Virtualization 
Management
Identification & 
Authentication
Data 
Management
Application 
Management
Data Storage 
Component
Business 
Intelligence & 
Analytics 
Management
Security 
Management
Users  Account 
Management
Storage 
Management
Data 
Warehouse 
Management
Standard 
Registries 
Management
eHealth Services & Applications
Frontline Applications | Special Health Fund Operations, Monitoring & Management System | 
Mobile Health Applications | Statistical Data Access/Query | Electronic Prescription | Alerts 
Monitoring & Management | Personal Health Record Management | Centralized Online Integrated 
HIS Registration and Status Monitoring System | Centralized Online Standards Conformance and 
Interoperability Validation System, Others
and
[Links to DOH and PhilHealth Systems]
Compute Services Component
Services & Applications
Digital Infrastructure
Legislation, Ethics, Policy & Compliance
Standards & Interoperability
Investment Strategy & 
Sustainability
Leadership & 
Governance
Human Resource


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
28 | P a g e  
 
connectivity, 
others), 
operating 
system, 
database 
management and administration, network management 
and administration, among others. 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
29 | P a g e  
 
A. LEADERSHIP AND GOVERNANCE 
 
“The PhilHealth shall establish and maintain the NHDR for all health and health-related 
data submitted by health care providers, insurers, and health-related entities. It shall be 
considered as the overall Data Controller insofar as it controls the processing of health 
and health-related data through the NHDR. It shall assume full responsibility in complying 
with existing and applicable laws, rules, and other relevant issuances relating to the 
processing and submission of all health and health-related data through the NHDR, 
including data protection.”22 
 
Even if PhilHealth shall establish and maintain the NHDR, good governance is needed for 
its successful implementation and sustainability.  Governance is the process of decision-
making and the process by which decisions are implemented (or not implemented).23  
Good governance is measured by the eight (8) factors of participation, rule of law, 
transparency, responsiveness, consensus oriented, equity and inclusiveness, effectiveness 
and efficiency, and accountability.   
 
Effective leadership and governance will improve transparency and credibility, facilitate 
guidance, and ensure that procedures for endorsing, approving, and owning the NHDR 
are in place.  Effective management will ensure that the process will be undertaken in a 
systematic, organized, structured and timely manner with appropriate consultations with 
stakeholders.  Leadership and governance will ensure that strategic policy frameworks 
exist and are combined with effective oversight, coalition-building, regulation, attention to 
system-design and accountability.24. 
 
e-Health is the cost‐effective and secure use of information and communication 
technologies in support of health and health‐related fields.25  “ICT applications in 
healthcare need to be governed by the highest accountable officials.  This means they 
define the expected benefits, the risks to watch out for, and allocate resources”.26 The 
NHDR is a national e-Health directive, solution, or mechanism to support the UHC Act, 
and falls within the ambit of the Philippine eHealth Governance Framework.   
 
 
                                                             
 
22 Letter D, Item V General Guidelines, JMC No.2021-0001 Implementing 
Guidelines of Section 31 of the Republic Act No. 11223, otherwise known as the 
“Universal Health Care (UHC) Act” on the Processing and Submission of Health 
and Health-related Data 
23 https://www.unescap.org/sites/default/files/good-governance.pdf 
24 https://www.who.int/health-topics/health-systems-governance#tab=tab_1 
25 https://www.who.int/westernpacific/activities/using-e-health-and-
information-technology-to-improve-health 
26 The AeHIN’s GAPS Framework, 
https://socialdigital.iadb.org/sites/default/files/2019-
02/Session%208_Alvin%20Marcelo%20and%20Boonchai%20Kijsanayothin_0.pdf 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
30 | P a g e  
 
 
PHILIPPINE EHEALTH GOVERNANCE FRAMEWORK 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
The Philippine eHealth Governance Framework consists of inter-agencies and multi-
sectoral groups to ensure a more efficient process of planning, harmonization, alignment 
and interoperability, financing, development, implementation, monitoring and evaluation, 
and sustainability of various eHealth initiatives, programs and projects across the country.   
 
The current organization and composition of the NeHSC, TWG, Expert Groups, and 
Program Management Office must be revisited and restructured by the DOH and 
PhilHealth to align with the UHC Act; and ensure that stakeholders’ needs are evaluated, 
direction is set through prioritization and decision-making, and performance and 
compliance monitored against agreed performance indicators. 
COBIT for Effective IT Governance 
The Controlled Objectives for Information and Related Technology (COBIT) is a 
framework created by the Information Systems Audit and Control Association (ISACA) 
that can be used for the IT governance and management of technical issues, business 
risks, and control requirements. The COBIT framework makes a clear distinction between 
governance and management. 
 
The NeHSC agreed to adopt COBIT5 as the IT Governance Framework for the Philippine 
eHealth Strategic Framework and Plan and mandated the TWG to move forward on 
consensus agreements reached by the participating agencies.27   
                                                             
 
27 eHEALTH GOVERNANCE IN THE PHILIPPINES: STATE-OF-THE-
ART(https://journals.ukzn.ac.za/index.php/JISfTeH/article/view/189/html) 
Health Sector 
Leadership
National eHealth 
Steering Committee
National eHealth 
Technical Working 
Group
National eHealth 
Program Management 
Office
National Health Data 
Standards Expert 
Group
National Health Data 
Privacy Experts Group
Electronic Medical 
Record Experts Group
Information Technology 
Experts Group
Health Information 
Technology Team
Health Enterprise 
Architecture Experts 
Group
Capability Building 
Experts Group
Terminology Asset 
Management Team
Risk Management 
Experts Group
Finance & 
Sustainability Experts 
Group
Monitoring & Evaluation 
Experts Group
Data Management 
Experts Group
Research Experts 
Group


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
31 | P a g e  
 
 
 
The 
DOH 
and 
PhilHealth can review 
and adopt the COBIT 
2019 to facilitate a 
flexible 
and 
tailored 
Enterprise Governance 
of 
Information 
Technology 
(EGIT) 
system, and ensure the 
quality, 
control, 
and 
reliability of the NHDR. 
 
 
Source: Introducing COBIT 2019, Executive Summary Nov 2018 
 
Refer to https://www.isaca.org/resources/cobit for more information on COBIT 2019. 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
32 | P a g e  
 
B. LEGISLATION, ETHICS, POLICY AND COMPLIANCE 
 
Legislations 
 
Legislations are the national laws and regulations that are set by the government for 
compliance.   The minimum list of legislations relevant to the NHDR is as follows: 
 
1. Memorandum Circular No. 5 – Directing all Government Agencies, Offices, 
Instrumentalities, as well as Local Government Units, to Prepare for the 
Implementation of the Philippine Identification System and its Integration into 
Government Processes, Databases, Systems and Services (from the Office of the 
President of the Philippines) 
 
2. Republic Act 11223 - An Act Instituting Universal Health Care for All Filipinos, 
Prescribing Reforms in the Health Care System, and Appropriating Funds Therefor or 
“Universal Health Care Act”; and its Implementing Rules and Regulations 
 
3. Republic Act 11055 – An Act Establishing the Philippine Identification System or 
“Philippine Identification System Act”; and its Implementing Rules and Regulations 
 
4. Republic Act 11032 – An Act Promoting Ease of Doing Business and Efficient Delivery 
of Government Services, Amending for the Purpose Republic Act No. 9485, otherwise 
known as the Anti-Red Tape Act of 2007, and For Other Purposes or “Ease of Doing 
Business and Efficient Government Service Delivery Act of 2018”; and its 
Implementing Rules and Regulations 
 
5. Republic Act 10175 – An Act Defining Cybercrime, Providing for the Prevention, 
Investigation, Suppression and the Imposition of Penalties Therefor and for other 
Purposes or “Cybercrime Prevention Act of 2012”; and its Implementing Rules and 
Regulations 
 
6. Republic Act 10173 – An Act Protecting Individual Personal Information in 
Information and Communications Systems in the Government and the Private Sector, 
Creating for this Purpose a National Privacy Commission, and for other Purposes or 
“Data Privacy Act of 2012”; and its Implementing Rules and Regulations 
 
7. Republic Act 10055 – An Act Providing the Framework and Support System for the 
Ownership, Management, Use, and Commercialization of Intellectual Property 
Generated From Research and Development Funded by Government and for other 
Purposes or “Philippine Technology Transfer Act of 2009”; and its Implementing 
Rules and Regulations 
 
8. Republic Act 8792 – An Act Providing for the Recognition and Use of Electronic 
Commercial and Non-commercial Transactions and Documents, Penalties for 
Unlawful Use Thereof, and for other Purposes or “Electronic Commerce Act of 2000”; 
and its Implementing Rules and Regulations 
 
9. Exceptions to Right to Access of Information as per Memorandum Circular No. 89 – 
Updating the Inventory of Exceptions to the Right to Access of Information Under 
Executive Order No. 02, Series of 2016 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
33 | P a g e  
 
10. Executive Order # 2, s. 2016 on “Operationalizing in the Executive Branch the 
People's Constitutional Right to Information and the State Policies of Full Public 
Disclosure and Transparency in the Public Service and Providing Guidelines 
Therefor,” in coordination with the concerned agency’s Freedom of Information (FOI) 
Unit 
Ethics 
The activities to establish, operate, and maintain the NHDR deal with people and are all 
subject to ethical inquiry.  The NHDR is expected to deliver positive outcomes and 
benefits, and may be compromised when personal interests are prioritized.  The 
implementation of the NHDR shall be strengthened by the commitment of all 
implementers and/or stakeholders to abide by established ethical principles.  The DOH’s 
Administrative Order No. 2020-0061 dated 22 December 2020 on Guidelines on the Public 
Health Ethics Review and Creation of the DOH Public Health Ethics Committee can be 
reviewed and/or enhanced as to its applicability in the establishment, operations, and 
maintenance of the NHDR. 
Policies 
Policies are sets of rules or guidelines to follow in order to achieve a specific goal.  The 
minimum list of policies relevant to the NHDR is as follows: 
 
1. DOH-PhilHealth Joint Memorandum Circular # 2021-0001 (May 21, 2021) -  
Implementing Guidelines of Section 31 of the Republic Act No. 11223, otherwise 
known as the “Universal Health Care (UHC) Act” on the Processing and Submission of 
Health and Health-related Data 
 
2. DOH-PhilHealth Joint Administrative Order # 2021-0002 (April 21, 2021) - Mandatory 
Adoption and Use of National Health Data Standards for Interoperability 
 
3. DOH-PhilHealth Joint Administrative Order # 2021-0001 (April 21, 2021) - Guidelines 
on the Implementation and Maintenance of an Integrated Health Information System 
 
4. DOH-PhilHealth-DICT Joint Administrative Order # 2021-0001 (August 11, 2021) – 
Guidelines on the Implementation of the Standards Conformance and Interoperability 
Validation 
 
5. DOH-DOST-PhilHealth Joint Administrative Order # 2016-0002  (January 20, 2016) – 
Privacy Guidelines for the Implementation of the Philippine Health Information 
Exchange 
 
6. DOH-DOST-PhilHealth Joint Administrative Order # 2016-0001 (January 20, 2016) – 
Implementation of the Philippine Health Information Exchange 
 
7. PhilHealth Corporate Order # 2021-0079 (December 22, 2021) – Secure System 
Engineering Principles 
 
Note: Apply Privacy by Design Principles 
 
8. PhilHealth Corporate Order # 2021-0070 (October 19, 2021) - Securing Cloud 
Computing Services (Revision 2) 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
34 | P a g e  
 
 
9. DICT Department Circular # 010 (June 2, 2020) – Amendments to Department 
Circular # 2017-002,  Re: Prescribing the Philippine Government’s Cloud First Policy 
 
10. DICT Department Circular # 007 (April 16, 2020) – Prescribing the Use of Updated 
Versions of Cryptographic Protocols for All Government Owned, Controlled, Managed, 
Contracted, or Sponsored Websites 
 
11. DICT Department Circular # 003 (March 5, 2020) – Supplementing the DICT 
Memorandum Circular #s 005, 006, and 007, series of 2017, and Policies, Rules and 
Regulations on the Implementation of the National Cybersecurity Plan 2022 
 
12. DICT Memorandum Circular # 007 (August 1, 2017) – Prescribing the Policies, Rules 
and Regulations on the Protection of Individuals Stipulated in the National 
Cybersecurity Plan 2022 
 
13. DICT Memorandum Circular # 006 (August 1, 2017) – Prescribing the Policies, Rules 
and Regulations on the Protection of Government Agencies Stipulated in the National 
Cybersecurity Plan 2022 
 
14. DICT Memorandum Circular # 005 (August 1, 2017) – Prescribing the Policies, Rules 
and Regulations on the Protection of Critical Infostructure Stipulated in the National 
Cybersecurity Plan 2022 
 
15. DICT Memorandum Circular # 2017-004 (June 9, 2017) – Prescribing the Philippine 
Web Accessibility Policy and Adopting for this Purpose ISO/IEC 40500:2012 
Information Technology – W3C Web Content Accessibility Guidelines (WCAG) 2.0 as 
The Philippine Standard for Making Web Content More Accessible to a Wider Range  
of People with Disabilities 
 
16. DICT Department Circular # 2017-002, as amended by  010, s. 2020, re Prescribing 
the Philippine Government’s Cloud First Policy, declared it the policy of the 
government to adopt a “cloud first” approach and for government departments and 
agencies to consider cloud computing solutions as a primary part of the infostructure 
planning and procurement 
 
17. DICT Department Circular # 2017-001 (January 18, 2017) – Amending the National 
Public Key Infrastructure (PNPKI) Root Certification Authority Certificate Policy 
Version 1.0 
 
18. DOST Information and Communications Technology Office (now the DICT) 
Memorandum Circular # 2015-003 (April 27, 2015) – Approval of the Philippine 
Electronic Government Interoperability Framework (PEGIF) Part 2, otherwise known 
as the Information Interoperability Framework (IIF), for Implementation by 
Government Agencies 
 
19. DOST Information and Communications Technology Office (now the DICT) 
Memorandum Circular # 2014-09001 (July 30, 2014) – Approval of the Philippine 
Electronic Government Interoperability Framework (PeGIF) Version 1.0 for 
Implementation by Government Agencies 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
35 | P a g e  
 
20. NPC Circular # 2021-02 (November 8, 2021) – Guidelines on the Processing of 
Personal Data During Public Health Emergencies for Public Health Measures 
 
21. NPC Circular # 2020-03 (December 23, 2020) – Data Sharing Agreements 
 
22. NPC Circular #18-02 (September 20, 2018 ) – Guidelines on Compliance Checks 
 
23. NPC Circular # 17-01 (July 31, 2017) – Registration of Data Processing and 
Notifications Regarding Automated Decision-Making 
 
24. NPC Circular # 16-03 (December 15, 2016) – Personal Data Breach Management 
 
25. NPC Circular # 16-01 (October 10, 2016) – Security of Personal Data in Government 
Agencies 
 
26. NPC Circular # 16-02 (October 10, 2016) – Data Sharing Agreements Involving 
Government Agencies 
 
There are operational policies or directives that have to be formulated by the DOH and 
PhilHealth.  Operational policies are lines of action with regard to the operations and 
administration of the NHDR.  The minimum list of operational policies relevant to the 
NHDR is as follows: 
 
1. Access and Consent Policy 
2. Audit and Compliance Policy 
3. Data Classification 
4. Data Governance and Management System 
5. Data Retention Policy 
6. Data Sharing, including Memorandum of Agreement/Understanding 
7. Governance Policy and SOPs of the NeHSC, TWG, and expert Groups 
8. Guidelines in the receiving, evaluating, and managing data access requests  
9. Implementation and Maintenance of the National Health Data Dictionary 
10. Implementing Guidelines and SOPs of the Centralized Online Integrated HIS 
Registration and Status Monitoring System 
11. Implementing Guidelines and SOPs of the Centralized Online SCIV System (together 
with its performance indicators, method, and tool for monthly monitoring by the 
Regional SCIV Administrators) 
12. Licensing and Accreditation Policy to Strengthen Compliance 
13. National Trust Framework Implementation Guidelines 
14. Performance indicators, method, and tool for monthly monitoring by the regional 
integrated HIS Coordinators 
15. Performance Monitoring and Evaluation to include metrics to measure the progress 
and success of implementing or adopting the health data standards in the country, 
implementation of an integrated health information system, standards conformance 
validation, and NHDR services 
16. Privacy Policy 
17. RACI Chart or Matrix of DOH and PhilHealth to set specific responsibilities and 
accountabilities on adopting the health and health-related data standards in the 
country, implementation of an integrated health information system, standards 
conformance validation, and NHDR services 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
36 | P a g e  
 
18. Regional Manual of Procedures on Technical Support to the adoption of health data 
standards, implementation of integrated HIS, standards conformation validation, and 
submission of health and health-related data 
19. SOPs on the approval and disapproval of data access requests, particularly among 
the concerned Data Stewards 
20. SCIV testing methodology and SCIV Toolkit 
21. SCIV TWG Policies and SOPs to include working arrangements, testing methodology, 
toolkit, others 
22. SOPs in Updating the National Health Data Standards 
23. SOPs or Operational Guidelines in the submission of health and health-related data 
to the NHDR 
24. Standard Template of Transition Plan and Monthly Status Report on the Integrated 
HIS 
25. Storage and Retention Policy 
26. Unified Data Analysis and Reporting Generation in the Business Intelligence and 
Analytics Platform of the NHDR 
27. Unified operational guidelines that conforms to the data management and 
governance principles; specific procedures and quality standards in the processing of 
health data, and data access; specific accountabilities of all those involved in the 
processing of health data are set, established, or defined 
28. Unified Operational Guidelines that defines the specific procedures and quality 
standards in the processing of health and health-related data like data access, data 
protection; and specific accountabilities of those involved in the processing of health 
and health-related data 
29. Unique Patient/Health Identifier for Data Collection and Sharing 
30. Updated 
DOH-DOST-PHIC 
JAO 
2016-0002 
– 
Privacy 
Guidelines 
for 
the 
Implementation of the Philippine Health Information Exchange 
31. Updated DOH-PHIC-DOST JAO 2016-0003 – Implementation of the Philippine Health 
Information Exchange 
32. Usage and Disclosure Policy 
 
Compliance 
 
Compliance supports the development of eHealth systems, solutions or products and that 
are compatible with the NHDR.  The issuances for compliance by all health-related 
entities are: 
 
1. DOH-PhilHealth Joint Administrative Order # 2021-0002 : Mandatory Adoption and 
Use of National Health Data Standards for Interoperability 
 
2. DOH-PhilHealth-DICT Joint Administrative Order # 2021-0001 : Guidelines on the 
Implementation of the Standards Conformance and Interoperability Validation 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
37 | P a g e  
 
C. INVESTMENT STRATEGY AND SUSTAINABILITY 
 
Investment Strategy and Sustainability refers to the availability of resources like funds to 
sustain the NHDR in terms of development, operations, and maintenance. The DOH and 
PhilHealth shall provide funds and counterpart resources necessary and appropriate to 
the overall and regularly funded functions of each agency for the proper implementation 
of the Processing and Submission of Health and Heath-related Data, subject to the usual 
government accounting and auditing rules and regulations.28 
Funding Models 
PhilHealth can consider several funding models or approaches to support the 
sustainability of the NHDR like public-private partnership, pooled DOH-PhilHealth 
budgets, hybrid sharing of budgets, and development partners. 
 
1 Public-Private 
Partnership (PPP) 
A contractual agreement between the Government and a 
private 
firm 
targeted 
towards 
financing, designing, 
implementing and operating infrastructure facilities and 
services that were traditionally provided by the public 
sector.29 
 
PhilHealth can enter into a PPP with a private firm to 
develop, operate, and maintain the NHDR.  Payment of 
fees can be paid on agreed schedule, i.e. total investments 
expended on the project, plus a reasonable rate of return 
 
2 Pooled DOH-
PhilHealth Budgets 
The DOH and PhilHealth can pool their budgets to fund the 
development, operations, and/or maintenance of the NHDR 
if there are no transfer restrictions between both parties. 
 
3 Hybrid Sharing of 
Budgets 
Additional budgets may come from the following: 
 
- 
DICT:  may fund the adoption of cloud infrastructure 
to operationalize the NHDR through its Government 
Cloud service. 
 
- 
Development partners, international organizations and 
donors such as the World Bank, International 
Monetary Fund, United Nations specialized agencies, 
aid agencies, others.   
 
4 Development 
Partners 
Organizations, bilateral donors and multilateral agencies 
working in partnership with national and local bodies to 
provide assistance or support. 
 
                                                             
 
28 Reference: Joint Memorandum Circular No. 2021-0001 Implementing Guidelines 
of Section 31 of RA No. 11223, otherwise known as the “Universal Health Care 
(UHC) Act,” on the Processing and Submission of Health and Health-related 
Data, Item IV. Definition of Terms, Item VIII Budget Requirements   
29 https://ppp.gov.ph/ppp-program/what-is-ppp/ 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
38 | P a g e  
 
D. STANDARDS AND INTEROPERABILITY 
 
Interoperability is the ability of different information systems, applications, and devices to 
access, share, exchange, integrate, and use data.  Interoperability requires the use of 
standards to ensure that data is available and retains its meaning through the various 
processes of the health system.  Standards provide a common language and set of 
expectations that enable interoperability between different information systems, 
applications, and devices.  Standards and interoperability enable the consistent and 
accurate collection and exchange of health data or information across geographical and 
health-sector boundaries. 
 
Components of standards and interoperability are as follows: 
 
1 Common 
Terminologies 
Use of common language for describing symptoms, 
treatments, diagnoses and treatments like clinical coding 
standards, medicines terminology standards, and medical 
terminology standards. 
 
2 Data Structure 
Standards 
Govern the way health datasets are submitted and stored 
using consistent data structures to ensure that information 
is not misinterpreted and can perform operations on stored 
data more efficiently. 
 
3 Messaging 
Standards 
Standards on message structure to enable health and 
health-related data to be transmitted and received through 
secure messaging infrastructure from one entity to 
another.  This also includes acknowledgements that should 
be provided when a message is delivered or opened, and 
warnings if not delivered or declined. 
 
4 Secure Messaging 
Standards 
Standards for the secure transmission and delivery of 
messages, and appropriate authentication of the message 
receiver to ensure that health and health-related data are 
securely transmitted and delivered to the correct recipient. 
 
5 Standards 
Conformance and 
Interoperability 
Validation 
A validation or certification process to confirm compliance 
of different information systems, applications, or software 
products to national health data standards.  
 
National Health Data Standards 
 
The National Health Data Standards refers to a set of standardized health or health-
related terminology, definition and structure for interoperability.  The DOH and PhilHealth 
issued Joint Memorandum Circular No. 2021-0020 – Mandatory Adoption and Use of 
National Health Data Standards for Interoperability dated April 23, 2021.  All health-
related entities shall adopt and use the national health data standards in their information 
systems for their administrative and investment planning in health, public health, medical, 
pharmaceutical and health financing data, including enterprise resource planning, human 
resource information management, electronic medical/health records, laboratory and 
diagnostics, electronic prescription and dispensing log, telemedicine, referral system, 
supply chain management, claims processing and provider payment, financial and capital 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
39 | P a g e  
 
asset, quality management, and other eHealth services, products, systems and 
applications, networks, and technologies for public health use. 
 
The list of national health data standards will be regularly updated with new standards 
being added, and existing standards continuously being monitored, reviewed and 
evaluated.  The complete and updated list of the mandatory national health data 
standards, including their structure, shall be published in a standard health data 
catalogue and made available electronically in the DOH-maintained National Health Data 
Dictionary until such time that a national terminology service is established, or otherwise 
through DOH-Knowledge Management and Information Technology Service. 
 
Data Codes 
 
A data code is a short word used to abbreviate a data.  It can be a number, letter, 
character, or combination thereof to represent a data element or data item.30  It 
facilitates consolidation of data, aggregation, reporting, integration, and interpretation for 
better insights or meaningful analysis.  Other than those defined in the National Health 
Data Standards, the DOH and PhilHealth must review and finalize (update, delete, or 
add) the codes of the following data for its applicability or use: 
 
1. Accommodation Type 
2. Activity (iClinicSys) 
3. Action Taken (iClinicSys) 
4. Alert Identifier 
5. Alert for Disability (Integrated Clinic 
IS) 
6. Allergy Category 
7. Allergy/Intolerance Type 
8. Amniotic Fluid 
9. Anatomical Location 
10. Animal Type 
11. Attendant (iClinicSys) 
12. Baby Delivered (iClinicSys) 
13. Birth Multiplicity – Number Code 
14. Birth Multiplicity – Type Code 
15. Blood Type 
16. Body Mass Index - Category 
17. Body Mass Index - Result 
18. Body Site 
19. Bowel Movement 
20. Cause of Death  
21. Chief Complaint 
22. Child Care – Sick Age Range 
23. Child Care – Vitamin Dose 
24. Child Care Plan 
25. Child Protection  
26. Citizenship 
27. Civil Status 
28. Claims Document Type 
76. 
Hired (iClinicSys) 
77. 
Imaging (iClinicSys) 
78. 
Immunization / Vaccination Type 
79. 
Injury Intent 
80. 
Injury Nature 
81. 
Injury Risk 
82. 
Injury Type 
83. 
Involvement (iClinicSys) 
84. 
Laboratory Type 
85. 
Laterality 
86. 
Leprosy Classification 
87. 
Leprosy Mode 
88. 
Malaria Method 
89. 
Malaria Outcome 
90. 
Malaria Species 
91. 
Menu Type 
92. 
Menu Privilege 
93. 
Mode of Transaction (iClinicSys) 
94. 
Mode of Transportation (iClinicSys) 
95. 
Nationality 
96. 
Negative-Positive Code (iClinicSys) 
97. 
Newborn Screening 
98. 
Occupational Category 
99. 
Occupational Exposure 
100. Oral Health 
101. Past Medical History (iClinicSys) 
102. Place of Occurrence 
103. Personnel Status 
104. Postpartum Supplement 
                                                             
 
30 https://www.thefreedictionary.com/data+code 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
40 | P a g e  
 
29. Clinical Sign (iClinicSys) 
30. Commodity Code 
31. COPD Code (iClinicSys) 
32. Consultation Type 
33. Country 
34. Covid-19 Classifications 
35. Covid-19 Tests 
36. Death Certificate Code (iClinicSys) 
37. Death - Disposal 
38. Death – Manner 
39. Death – Maternal Condition 
40. Death - Stage 
41. Death – Type 
42. Delivery – Mode 
43. Delivery – Place 
44. Dental – Health Condition Status 
45. Dependent Type 
46. Detected Issue Category  
47. Disability Type 
48. Disposition 
/ 
Condition 
Upon 
Discharge 
49. Doctor’s Order 
50. Drugs / Medicine – Dosage 
51. Drugs / Medicine - Intake 
52. Drugs / Medicine - Prescription 
53. Drugs / Medicine – Regimen 
54. Educational Attainment 
55. Educational Level 
56. Encounter Type 
57. Ethnicity 
58. Family Member 
59. Family Planning Form 
60. Family Planning Drop-out 
61. Family Planning Method 
62. Family Planning Type 
63. Fecundity 
64. Feed (iClinicSys) 
65. Filariasis - Clinical 
66. Filariasis - Result 
67. Firecracker Type 
68. First Aid Given  
69. Food Received 
70. Frequency – No. of Exercise Unit of 
Measure (iClinicSys) 
71. Geography (Region, Province, 
City/Municipality, District, Barangay, 
Zipcode) 
72. Growth Height 
73. Growth Weight 
74. Growth Height-Age 
75. Health Insurance Membership Type 
 
105. Postpartum Visit 
106. Prefix 
107. Prenatal Abdominal Leopold 
108. Prenatal Danger Sign 
109. Prenatal Delivery Type 
110. Prenatal Delivered 
111. Prenatal Maturity 
112. Prenatal Outcome 
113. Past Medical History 
114. Patient Type 
115. Patient Status 
116. PhilHealth Membership Type 
117. PhilHealth RVS  
118. PhilHealth’ Benefit Packages / Case 
Rate 
119. Physical Examination 
120. Place of Death 
121. Program Code (iClinicSys) 
122. Program Type (iClinicSys) 
123. Rapid Assessment 
124. Reason for Signing On Behalf of the 
Member/Patient 
125. Referral – Reason 
126. Referral – Service 
127. Referral – Status 
128. Referral – To Consultation 
129. Referral - Type 
130. Relationship 
131. Religion 
132. Schistosomiasis Case Examination 
133. Schistosomiasis Outcome 
134. Severity 
135. Sex / Gender 
136. Smoking Type 
137. Specimen Type 
138. Sputum Method 
139. Sputum Result 
140. System Review 
141. Suffix 
142. System Type 
143. Tetanus Toxoid 
144. Treatment 
145. Tuberculosis – Classification 
146. Tuberculosis Duration 
147. Tuberculosis Outcome 
148. Type Exposure 
149. Unit of Measurement 
150. Vaccination Type 
151. Vaginal Bleeding 
152. Vital Signs 
153. Assessment - Vital Signs Blood 
Pressure  


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
41 | P a g e  
 
 
154. Assessment - Weight-Age  
 
Standards Conformance and Interoperability Validation 
 
The Standards Conformance and Interoperability Validation is a compliance monitoring 
mechanism to achieve an integrated and interoperable health and health-related data 
submission and report processing.   It will enable different health information systems 
and eHealth solutions of health care providers, insurers, and health-related entities to 
submit health and health-related data to the NHDR. 
 
All health information systems and eHealth solutions that are being implemented or will 
be implemented by health care providers, insurers, and health-related entities shall be 
required to undergo and pass the Standards Conformance and Interoperability Validation 
to verify conformance with national health data standards for interoperability, and 
compliance with rules on processing and submission of health and health-related data to 
the NHDR. 
 
Interoperability Layer 
 
All 
health 
care 
providers, 
insurers 
and 
health-related 
entities have to submit health 
and health-related data to the 
NHDR, as defined by the DOH 
and PhilHealth through the 
National 
Health 
Data 
Standards for Interoperability.   
In 
order 
to 
submit 
data 
electronically to the NHDR, 
their systems or applications 
(e.g. 
EMR, 
Hospital 
Information 
System, 
Pharmacy 
System, 
Finance 
System, Administrative and 
Logistic Systems, others) must 
pass 
the 
Standards 
Conformance 
and 
Interoperability 
Validation 
(SCIV).   
 
The interoperability layer is 
the single point of entry to 
enable submission of health 
and health-related data to the 
NHDR. It identifies and authenticates users; checks access rights and privileges; logs 
transactions; checks compliance with data codes, data privacy rules, data confidentiality, 
data integrity, data security, data quality; and others as defined by the DOH and 
PhilHealth. 
 
 
 
PUBLIC & PRIVATE, NATIONAL & LOCAL HEALTH RELATED ENTITIES
Academic & 
Research 
Institutions
Civil Society 
Organizations
Medical 
Societies
Health 
Professional 
Associations
Non-
Government 
Organizations
Development 
Partners
Local & 
International 
ICT Service 
Providers
National & 
Local 
Government 
Agencies
Health Care 
Facilities, *Other 
Agencies/
Stakeholders
Identifed by 
DOH & 
PhilHealth
* Involved in the provision of health services, and/or processing and submission of health and health-
related data
Donor or 
Funding 
Agencies
STANDARD HEALTH & HEALTH-
RELATED DATA
National Health Data 
Repository
NHDR
I N T E R O P E R A B I L I T Y   L A Y E R
Routing
Transformation
Messaging
Security
Validation
Queuing & Staging
Data Privacy Rules
Data Confidentiality 
Rules
Data Integrity Rules
Data & Security 
Rules
Data Quality Rules
Others


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
42 | P a g e  
 
E. SERVICES AND APPLICATIONS 
 
Services and applications are the systems, applications, innovations, solutions, software, 
and other services that clients can use to interact with the NHDR.   
Dataset Submission 
Health care providers, insurers and health-related entities with certified or validated 
information systems or applications can submit health and health-related data to the 
NHDR using centralized or decentralized model of submission.   
 
Centralized Dataset Submission Model 
 
The Centralized Dataset Submission Model enables the health care providers, insurers, 
and health-related entities to submit health and health-related data directly to the NHDR.  
These health and health-related data are health or medical records, accidents/injuries, 
health programs or projects, and others as will be determined by the DOH and 
PhilHealth. 
 
 
 
 
 
Others
MANDATORY NATIONAL HEALTH DATA STANDARDS (HEALTH & HEALTH-RELATED 
DATA):
Individual & Population Health and Well-Being Data, Administrative Data, Public Health Data, 
Medical Data, Pharmaceutical Data, Health Financing Data, Others
STANDARDS & INTEROPERABILITY SERVICES
Authentication
Health Care Providers
Health Facilities / 
Health Care 
Facilities
Health Care 
Professionals
Community-based 
Health Care 
Organizations
Pharmacies or 
Drug Outlets
Laboratories & 
Diagnostic Clinics
Health-Related Entities
Stakeholders/Agencies Involved in the Provision of Health Services and/or Processing and Submission 
of Health and Health-Related Data, and those identified by the DOH & PhilHealth
Academic & 
Research 
Institutions
Civil Society 
Organizations
Medical Societies
Health Professional 
Associations
Non-Government 
Associations
Donor or Funding 
Agencies
Development 
Partners
National & Local 
Government 
Agencies
Insurers
    Standard Registries
Terminology 
Services
Client 
Registry
Facility 
Registry
Human Resource 
Registry
Health Product 
Catalogue
Others
Data Privacy, Confidentiality, 
Protection, and Security Rules
Entity Mapping
Data Quality Validation 
Rules
Interlinking Service
Others
DB
DB
DB
DB
DB
DB
DB
DB
DB
Local & 
International ICT 
Service Providers
DB
DB
DB
DB
DB
DB
DB
Integrated Health Information System
National Health 
Data Repository
NHDR
Department of Health & 
PhilHealth


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
43 | P a g e  
 
Decentralized Dataset Submission Model 
 
National and local government units collect data to serve their mandates or functions.  
There are health-related data that have to undergo processing at the national and local 
government units before it can be submitted to the NHDR.  An example of this is the 
DOH Integrated Licensing Information System (for health facilities and services) that 
includes the licensing and accreditation of health facilities (hospitals, clinics, laboratories, 
and other health service establishments) and services that require document review and 
actual site inspection.  The DOH and PhilHealth will review and decide what data will be 
submitted to the NHDR, i.e. all or only those that passed the document review and actual 
site inspection of the DOH. 
 
Another example is the Philippine Statistics Authority that conducts periodic censuses on 
population, housing, agriculture, fisheries, business, industry, and other sectors of the 
economy.  Data on birth and death can be submitted to the NHDR.   The DOH and 
PhilHealth will review and decide the data that can be directly submitted or pass the 
national or local government units’ processing to the NHDR. 
 
Datasets for Integration/Harmonization into the NHDR 
 
MANDATORY NATIONAL HEALTH DATA STANDARDS 
(HEALTH & HEALTH-RELATED DATA):
(Processed/Validated Data)
STANDARDS & INTEROPERABILITY SERVICES
Authentication
    Standard Registries
Terminology 
Services
Client 
Registry
Facility 
Registry
Human Resource 
Registry
Health Product 
Catalogue
Others
Data Privacy, Confidentiality, 
Protection, and Security Rules
Entity Mapping
Data Quality Validation 
Rules
Interlinking Service
Others
National & Local Government Agencies 
Information Systems
DBs
Health Care Providers
Health Facilities / 
Health Care 
Facilities
Health Care 
Professionals
Community-based 
Health Care 
Organizations
Pharmacies or 
Drug Outlets
Laboratories & 
Diagnostic Clinics
Health-Related Entities
Stakeholders/Agencies Involved in the Provision of Health Services and/or Processing and Submission 
of Health and Health-Related Data, and those identified by the DOH & PhilHealth
Academic & 
Research 
Institutions
Civil Society 
Organizations
Medical Societies
Health Professional 
Associations
Non-Government 
Associations
Donor or Funding 
Agencies
Development 
Partners
National & Local 
Government 
Agencies
Insurers
DB
DB
DB
DB
DB
DB
DB
DB
DB
Local & 
International ICT 
Service Providers
DB
DB
DB
DB
DB
DB
DB
Required
Data
Examples of Information Systems:
- Health Regulation & Licensing Systems
- National Blood Bank Network System
- Electronic Drug Price Management System
- Quarantine Services and International Health 
Regulation System
- Health Emergency Management Service Integrated 
Information System
- Public Assistance System
National Health 
Data Repository
NHDR
Department of Health & 
PhilHealth


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
44 | P a g e  
 
There are existing DOH information or application systems where the datasets have to be 
integrated or harmonized into the NHDR.  Examples of these information or application 
systems are: 
 
- 
Electronic Drug Price Management System 
- 
Family Planning Registry 
- 
Field Health Service Information System 
- 
Filariasis Information System 
- 
Integrated Clinic System 
- 
Integrated Drug Test Operations and Management Information System 
- 
Integrated Hospital Operations and Management Information System 
- 
Integrated Licensing Information System 
- 
Integrated TB Information System 
- 
Leprosy Information System/Leprosy Alert Response And Surveillance Network 
- 
Maternal And Neonatal Death Reporting System 
- 
National Blood Bank Network System 
- 
National Health Facility Registry 
- 
National Health Workforce Registry 
- 
National Rabies Information System 
- 
Other Vertical Health Programs Info/Reporting Systems like Malaria and Other 
Infectious Diseases (ID), and also Non-Communicable Diseases 
- 
Philippine Integrated Disease Surveillance Reporting System 
- 
Schistosomiasis Information System 
- 
Watching Over‘ Mothers And Babies 
- 
Others as Defined in the Information System Strategic Plan 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
45 | P a g e  
 
Business Intelligence and Analytics 
All health and health-related data (whether restricted, private, or public) shall be integrated, processed, and analyzed for insights to support 
the operational, tactical, and strategic planning of the DOH and PhilHealth.  Business Intelligence (BI) is a technology-driven process for 
analyzing data and delivering actionable information that helps executives, managers, and workers make informed business decisions.31   
 
The diagram below shows the Business Intelligence and Analytics Framework of the NHDR.  The framework includes data collection, data 
integration, data storage, data analysis, and data distribution.  
 
Mandatory
 National Health 
Data Standards
National & Local 
Government Agencies 
Information Systems
Required Data
Health-related Entities
DBs
 Data Warehouse
 Data Lake
 Operational Data Store
 Data Marts
 Cubes
 Others
Presentation & Visualization
 Dashboards
 Standard Reports
 Adhoc Reports
 Machine Learning
 Others
Raw-Integrated Structured
& Unstructured Data
 Transactions
 Reports
 Sensor-Based
 Images
 Social Media
 Business Documents
 Video
 Publications
 Others
Distinct DOH, PhilHealth, & Partner Transaction & Decision Support Apps
Interoperability Services Layer
Integrated Data Warehouse
Extract-Transform-Load
(ETL/ELT)
DBs
Foresights
Insights
Integrated Analytics
Desciptive
Diagnostic
Predictive
Prescriptive
1 Data Collection
2 Data Integration
3 Data Warehouse Storage
4 Data Analysis
5 Data Distribution
 
 
                                                             
 
31 https://searchbusinessanalytics.techtarget.com/definition/business-intelligence-BI 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
46 | P a g e  
 
1. Data Collection: All health and health-related data submitted by all health-related 
entities will be initially stored in a database for integration and further processing. 
 
2. Data Integration: Health and health-related data will be pulled from the initial 
storage, cleaned and loaded to the final stage, i.e. data warehouse storage.  As the 
data is moved to the data warehouse, it can be formatted, reorganized, cleaned, 
validated, aggregated or summarized, integrated, and transformed as applicable.  
Depending on the architectural design (as will be finalized during the detailed 
technical design phase of the business intelligence), an extract, transform, and load 
(ETL) or extract, load, and transform (ELT) process will move the data from the 
initial source to the data warehouse.   
 
3. Data Warehouse Storage: The data warehouse is the centralized repository of 
integrated health and health-related data from the initial source.  It stores current 
and historical data that are used for reporting and analysis.  The data in the data 
warehouse can be stored in the lowest level of detail (e.g. patient level), with 
aggregated views for reporting; and becomes a permanent storage for reporting, 
analysis, and business intelligence. 
 
The data warehouse represents the single source of truth for health where it is also 
easier to create business intelligence solutions, such as online analytical processing 
(OLAP) cubes.  Datasets can be organized into analytics data models or OLAP cubes 
to prepare them for data analysis.  OLAP cubes can provide self-service business 
intelligence capabilities to users.  It can provide rapid analysis of data, can display 
and aggregate huge amounts of data, provide users with searchable access to any 
data points, and users can slice and dice the data depending on their needs or 
interests. 
 
4. Data Analysis: Health and health-related data in the data warehouse can be 
visualized and shared using powerful business intelligence or analytics tool or 
solution.  The tool will enable connection to the data in the data warehouse, 
transform and model the data, create graphs and charts, and create dashboards and 
reports.  There are models to support the spectrum of DOH and PhilHealth analytics 
requirements like:  
  
- 
Descriptive Analytics: This answers the question: “What happened?” - Uses 
aggregation and data mining techniques to provide historical insights on health 
indicators using dashboards, reports, and other types of presentation. 
 
- 
Diagnostic Analytics: This technique answers the question “Why did it happen?” 
- Diagnostic analytics takes a deeper look at data to understand the causes of 
events and behaviors.  It is a form of advance analytics which could examine 
why certain diseases may have different claim level (amount and count) patterns 
based on payment schemes.  It could also help understand the effects of 
vaccinations in reducing the incidences of diseases.    
 
- 
Predictive and Prescriptive Analytics:  These techniques answer the questions: 
“What could happen?” and “What should we do?” 
 
- 
Text Analytics: This converts large volumes of textual data into summaries from 
surveys, news, emails, blogs,  forums, transcripts, and documents. 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
47 | P a g e  
 
- 
Advanced techniques like Audio Analytics, Video Analytics, and Social Media 
Analytics - Audio analytics extract information from audio files, and can help 
analyze human language, linguistics, and speech; video analytics helps monitor 
and analyze video streams; social media analytics can mine structured and 
unstructured data from social networks like FB, blogs like Twitter, media sharing 
sites like Instagram, others. 
 
5. Data Distribution: Information presented in the form of graphs, charts, 
dashboards, and reports can be shared with others.  Users like executives, 
managers, and business process units can use the information for decision-making, 
strategic, operational, and tactical planning, development of policies and program 
interventions, among others. 
 
Integrated /Harmonized Reports 
 
The NHDR will address the recurring issues and problems on poor quality and untimely 
generation and reporting of data/information for evidenced-informed sectoral policy and 
planning.  Integrated or unified reports or dashboards can be created like: 
 
- Electronic health record showing the unified view of a patient’s record (e.g. 
demographic information and clinical information on examination tests and results, 
others) 
 
- Integrated reports on disease surveillance, disaster preparedness and response, 
financial management, health advisories, health activities and services, health human 
resources, health laws/policies/standards, health programs, logistics, licensing and 
accreditation, medical assistance, performance monitoring, national health insurance 
program, technical reports/publications/researches, surveys, and others 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
48 | P a g e  
 
National Health Insurance 
Program
 Membership & 
Contributions
 Benefits
 Claims
 Others
Electronic Health Record
(Unified View of Patient s Record)
Logistics
 Health Logistics Inventory 
(Items, Quantities 
Received, Quantities 
Delivered/Dispensed, 
Stocks on Hand, others)
 Others
Health Human Resource
 Health Human Resource By  
Particulars (e.g. 
Scholarship Programs; 
Course, Institution, 
Batches,Scholars)
 Health Human Resource By  
Particulars (e.g. 
Scholarship Programs; 
Origin of Scholars 
[Indigenous Community, 
GIDA, Others]; Degree 
Program / Course [Doctor 
of Medicine, Diploma in 
Midwifery, BS in 
Midwifery])
 Health Human Resource 
Deployment By  Particulars 
(e.g. Nurses, Doctors, 
Dentists, Midwives, 
Medical Technologies, 
Nutritionists-Dieticians, 
Public Health Associates, 
Pharmacists, Physical 
Therapists)
 Health Human Resource 
Deployment By  Particulars 
(e.g. Specialists under 
Residency Programs)
 Others
Health Laws, Policies, & 
Standards
 Health Laws, Policies, 
Frameworks, Public Health 
Standards, others
 Manuals, Modules, 
Standard Operating 
Procedures, Guidelines, 
Technical Guides, 
Handbooks
 Sectoral Engagement & 
Partnerships (e.g. 
Memorandum of 
Agreement/Understanding, 
Task Force Groups, 
Committees, Technical 
Working Groups, 
Coordinated Operations)
 Others
Demographic Information
 Demographic Profile (e.g. 
Health Care Providers, 
Number and Ratio to 
Population by Region, 
Province and City)
 Others
Examination Tests & Outputs
Disease Surveillance & Health 
Programs
 Disease Surveillance
 Notifiable Diseases
Health Programs:
 Blindness Prevention 
Program
 Cancer Prevention & 
Control
 Cardiovascular Disease 
and Diabetes Mellitus 
Prevention and Control
 Deworming Services
 Environmental Health & 
Sanitation Services
 Family Planning Services
 Filariasis Prevention & 
Control
 HIV-AIDS/STI Prevention 
and Control Services
 Immunization Services
 Intrapartum Care and 
Delivery Outcome
 Leprosy
 Lifestyle Related Diseases
 Malaria
 Management of Sick 
Infants and Children
 Nutrition Services
 Oral Health Care
 Prenatal Care
 Rabies
 Safe Motherhood Program
 Schistosomiasis 
Prevention & Control
 Soil Transmitted 
Helminthiasis Prevention 
and Control
 Tuberculosis
 Others
Disaster Preparedness & 
Response
 Death Cases
 Disasters by 
Particulars(e.g. Volcanic 
Eruptions, Typhoons, 
Earthquakes)
 Essential Health Services 
Delivered
 Hospitals, Bed Utilization & 
Availability
 Hotlines
 Isolation & Quarantine 
Sites, Utilization & 
Availability
 Treatment & Monitoring 
Facilities, Utilization & 
Availability
 Telemedicine, Schedules, 
Contact Information
 Logistics & Estimated 
Costs
 Damaged Health Facilities 
& Estimated Costs
 Others
Health  Activities & Services
 F1 Plus Botika ng Bayan 
and Botika ng Bayani 
Program - Licensed Outlets
 Official Development 
Assistance on Health, 
Buget, Activities, 
Utilization, 
Accomplishments & Status
 Health Technology 
Inventories & Results
 Health Activities (e.g. 
Events, Campaigns); 
Particulars (Round/Batch, 
Vaccine, Target 
Population/Areas, Eligible 
Population, Dates of 
Activity, Coverage, 
Coverage Rate)
 Health Promotion 
Awareness Campaigns 
(e.g. BIDA Solusyon sa 
COVID-19, Healthy 
Pilipinas)
 LGU Health services like 
maintenance of Barangay 
health center and day-care 
center
 LGU Services and Facilities 
related to general hygiene 
and sanitation, 
beautification, and solid 
waste collection
 LGU health services like 
implementation of 
programs and projects on 
primary health care, 
maternal and child care, 
and
 communicable and non-
communicable disease 
control services; access to 
secondary and tertiary 
health services; purchase 
of medicines, medical 
supplies, and equipment
 LGU Infrastructure 
facilities like clinics, health 
centers and other health 
facilities necessary to 
carry out health services
 Others
Medical Assistance
 Medical Assistance 
Programs; Particulars (By 
establishments' list and 
count [e.g. Malasakit 
Centers])
 Others
Performance Monitoring
 Performance Scorecards 
(e.g. City/Municipality 
Composite Measure 
Scorecard, LGU Health 
Scorecard, Hospital 
Scorecard)
 Outcomes Assessment of 
Services Rendered by 
Health Care Providers - 
NHIP
 Others
Financial Management
 Approved Budget for the 
Contract of Procurement 
Packages by Particulars, 
e.g. (Vaccines, drugs and 
medicines, medical, dental, 
laboratory supplies, family 
planning commodities, and 
supplies); (type of 
procurement (goods and 
services, consulting 
services, infrastructure)
 Health Budget (i.e. DOH, 
DOH Attached 
Corporations, DOH 
Attached Agencies, 
National & Local 
Government Units, Health 
Care Providers, Insurers, 
Others): By Particulars 
(Personnel Services, 
MOOE, Capital Outlay, 
Others); (by Programs); By 
Organizational Outcomes 
(Administration & Support 
Services, Support to 
Operations, Operations 
Budget); Others like 
Bayanihan I and II
 Health Budget Allotment & 
Obligation
 Health Budget Utilization / 
Disbursement
 Medical Assistance Budget 
& Utilization
 NHIP Reserve Funds
 Others
Capability Building
 Unified eLearning 
Programs by Particulars 
(e.g. Courses)
 Others
Health Advisories
 Classification, Types, 
Counts, Percentages
 Others
Surveys, Publications
 Classification, Types, 
Counts, Percentages
 Client Satisfaction Surveys
 Others
Technical Reports, 
Publications,  & Researches
 Classification, Types, 
Counts, Percentages
 Others
Administrative Cases
 Health Care Providers and 
Members - NHIP
<Others>
Licensing & Accreditation
 Licensed Health Care Facilities, 
Establishments, Others
 Registered or Certified Health 
Products
 Accredited Health Care 
Providers - NHIP
 Certified/Validated IT Service 
Providers
 Accredited Health Care Provider 
Networks
 LGU Issued Health-related 
Licenses & Permits
 Health Certifications
 Others
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
49 | P a g e  
 
Data Access Request 
Data access refers to data release and data sharing.32  Data sharing refers to the 
disclosure of health and health-related data of public interest available as open to the 
public.  Data sharing refers to the sharing, disclosure, or transfer to a third-party of 
health and health-related data under the custody of a data controller to one or more 
other data controllers.  All data sharing of private or restricted data shall require the 
execution of a data sharing agreement (DSA) or its equivalent.  Health and health-related 
data will be made available and accessible to every stakeholder in the right way, and 
processed in a lawful, ethical, secure, consistent, and efficient manner at all levels of 
health care utilization.   
 
An individual can have the right of access to his/her personal data which have been 
submitted to the NHDR.  Approval and disapproval of data access requests shall be a 
shared responsibility between the DOH and PhilHealth.  As such, a policy and detailed 
procedures on data access request and response shall be formulated by the DOH and 
PhilHealth to include the following major areas of concern: 
 
1. Legitimate basis for the data access request 
 
2. Exceptions to Right to Access of Information as per Memorandum Circular No. 89 – 
Updating the Inventory of Exceptions to the Right to Access of Information Under 
Executive Order No. 02, Series of 2016 
 
3. Determination of data classification of health and health-related data being requested 
as basis for approval or disapproval33 
 
Data Classification 
Action 
 
a Contains personal data 
Comply 
with 
the 
National 
Privacy 
Commission Circular 2020-003 on “Data 
Sharing Agreement” 
 
b Contains only non-personal data 
but considered as private data 
Comply with the DOH and PhilHealth 
Policy on data access 
 
c Contains only public data 
Approval and directed to the Open Data 
Platform of the NHDR 
 
d Contains restricted data 
Automatic disapproval 
 
 
 
                                                             
 
32 Item IV Definition of Terms, JMC No. 2021-0001 Implementing Guidelines of 
Section 31 of RA No. 11223, otherwise known as the “Universal Health Care 
(UHC) Act,” on the Processing and Submission of Health and Health-related Data 
33 1b of Letter C, Item VI Specific Guidelines, JMC No. 2021-0001 Implementing 
Guidelines of Section 31 of RA No. 11223, otherwise known as the “Universal 
Health Care (UHC) Act,” on the Processing and Submission of Health and Health-
related Data 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
50 | P a g e  
 
Health Information Exchange (HIE) 
 
Health Information Exchange (HIE) allows health care professionals and patients to 
appropriately access and securely share a patient’s medical information electronically.34  
There are several benefits in the electronic exchange of medical information like 
improving the quality of health care by reducing medical errors like in the case of 
medication; reduce the amount of time patients spend in filling out their medical histories 
and other data that has been previously provided; and reduce unnecessary tests and 
services.  
 
The DOH, DOST and PhilHealth Joint Administrative Order No. 2016-0001 (January 20, 
2016) – Implementation of the Philippine Health Information Exchange institutionalized 
the adoption and implementation of the Philippine Health Information Exchange (PHIE) 
as an integral component of the health care delivery system to support and facilitate the 
attainment of Universal Health Care.  It set the direction and defined the policies to guide 
decisions and achieve rational outcomes in the implementation of the PHIE, and provided 
the operational mandate and management guidelines for the implementation of the PHIE 
based on the agreed upon policies and protocols. 
 
Another DOH, DOST, and PhilHealth Joint Administrative Order No. 2016-0002 (January 
20, 2016) – Privacy Guidelines for the Implementation of the Philippine Health 
Information Exchange was released for the processing of health information to ensure 
that public health goals are achieved and the quality of patient care is improved through 
utilization of information and communications technology, while protecting the privacy of 
patients and their health information. It defined and limited the circumstances in which 
an individual’s health information is collected, accessed, disclosed or otherwise 
processed; provided parameters for obtaining consent from the patient for participation in 
the PHIE; defined the rights of patients participating in the PHIE; and provided guidelines 
for data protection. 
 
The Philippine Health Information Exchange and its privacy guidelines were not 
implemented.  The NHDR is an enabler to support the implementation of the PHIE to 
facilitate the attainment of UHC.  As such, the joint administrative issuances in the 
implementation of the PHIE and its privacy guidelines must be reviewed, evaluated, 
and/or updated by the DOH and PhilHealth to align with the UHC Act. 
 
HIE Use Cases: 
 
There are a number of HIE use cases to improve care coordination and integration into 
various care transitions.  Examples of some use cases using the NHDR are as follows: 
 
Query-based Exchange:  Enables health care professionals to find and/or request 
information on a patient from other health care professionals using the NHDR.  
Emergency room health professionals can utilize the query-based exchange to access 
a patient’s information such as medications and alerts to avoid duplicative testing or 
adverse medication reactions. 
 
                                                             
 
34 https://www.healthit.gov/topic/health-it-and-health-information-exchange-
basics/health-information-exchange 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
51 | P a g e  
 
Network Referral System:  The referral system is a process undertaken by a health 
care provider with insufficient resources to manage a patient’s condition, and seeks 
the assistance of a better resourced health care provider.  A rural health unit health 
care provider (RHU-HCP) can send a referral request to a specialist in a hospital via 
the NHDR.  The RHU-HCP searches for a specialist using the NHDR, uploads the 
referral request and health record to the NHDR.  The specialist will be notified, able to 
receive the referral request and health record from the NHDR, and set the 
appointment schedule.  The specialist uploads the patient’s encounter data after 
consultation or discharge. 
Open Data 
Statistical data or reports can be generated from the data warehouse, i.e. items of 
numerical health data, information, or facts that are grouped into definite areas or 
subjects.  The NHDR’s Open Data will include the presentation of statistical data with 
visualizations, and its metadata.  Open Data will allow the DOH and PhilHealth to share 
data under an open data license where data can be freely used, re-used and redistributed 
by anyone without restrictions other that proper source attribution.  
 
The NHDR’s Open Data site can be linked with Open Data Philippines, the Philippine 
Government’s program to proactively release public sector datasets and generate an 
ecosystem for its use and reuse by the public. 35 
eHealth Services and Applications 
eHealth is the use of information and communication technologies for health to improve 
the efficiency and effectiveness of health system management and care delivery.  eHealth 
services, applications or solutions using the NHDR can be designed, developed, and 
implemented by the DOH and PhilHealth.  Examples of eHealth services are as follows: 
 
1. Frontline Applications that directly benefit an individual.  Examples are: 
 
- 
Find a Doctor, Experiences, Services, and Fee 
- 
Check a DOH Licensed and PhilHealth Accredited Health Care Facility 
- 
Find a Drug/Medicine, Lowest Price, and Nearest Pharmacy 
- 
Find a Health Insurance Institution, Packages, and Amount 
- 
Find a Laboratory / Examination Services, with Lowest Cost, and Nearest 
Health Care Institution 
- 
Find a Licensed / Accredited Health Product or Equipment, with Lowest Price, 
and Nearest Store 
- 
Find a Specific Medical Assistance 
- 
Find a Telemedicine Provider, Experiences, Desired Services, and Fee 
 
2. Special Health Fund Operations, Monitoring and Management System: enables 
pooling, management, and monitoring of all resources intended for health services. 
 
3. Mobile Health Applications or Services through mobile technology like mobile 
phones and handheld computers.  Examples are: Treatment support, health advice 
and medication compliance; Health information to health care providers, 
                                                             
 
35 https://www.opengovpartnership.org/members/philippines/commitments/PH0031/ 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
52 | P a g e  
 
researchers, and patients; Health education and awareness programs; diagnostic 
and treatment support; communication for health-care workers 
 
4. Electronic Prescription: serves as hub that routes e-prescription data from a health 
care provider to a participating pharmacy electronically; pharmacy checks 
availability of prescribed drugs or medications; and sends notification to the patient 
of its availability. 
 
5. Alerts Monitoring and Management:  trigger alerts based on policies or when 
certain conditions occur. 
 
6. Personal Health Record Management: allows individuals or patients to maintain 
and manage their health information; or that of others for whom they are 
authorized in a secured environment.  It may also include a dashboard for their 
health monitoring. 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
53 | P a g e  
 
F. DIGITAL INFRASTRUCTURE 
 
Digital Infrastructure refers to the digital technologies to enable the NHDR to operate 
efficiently and effectively.  The DICT DC No. 2017-002 re: Philippine Government’s 
Cloud First Policy, declared it the policy of the government to adopt a “cloud first” 
approach and for government departments and agencies to consider cloud computing 
solutions as a primary part of their infostructure planning and procurement.  DC No. 
010 Series 2020 provided amendments to DC No. 2017-002. 
 
PhilHealth’s Corporate Order No. 2021-0070 Securing Cloud Computing Services 
(Revision 2) aims to ensure that the use of cloud computing services is implemented in 
accordance with the amended Circular of the DICT (DC No. 010 Series 2020 provided 
amendments to DC No. 2017-002), the Right to Privacy as enshrined in the 1987 
Constitution of the Philippines, the e-Commerce Law of 2000, Data Privacy Act of 2012, 
National Cybersecurity Plan of 2022, and existing Corporate policies. 
 
The NHDR shall adopt cloud computing as the preferred ICT deployment strategy, 
method, or technology for the delivery of its intended objectives and services, aligned 
with Section 1.2 of the amended DICT’s CFP.  All risks and vulnerabilities associated 
with the data stored or processed using the public cloud deployment model shall be 
adequately and efficiently addressed through appropriate controls and security 
protocols. 
 
In case the DICT will shoulder the cloud computing infrastructure service, a 
Memorandum of Agreement must be executed between the DOH, PhilHealth, and DICT 
for the DICT to host the NHDR including its applications or information systems, disaster 
recovery, security, network/internet connectivity, others; administrative, technical and 
end-users support to manage the cloud operations;  and responsibilities of concerned 
parties. 
 
Detailed technical specifications of the cloud computing infrastructure service shall be 
done by the DOH and PhilHealth, in coordination with the DICT.  The technical 
specifications will include among others the backup and recovery strategy, and 
mechanism for DOH to have a copy of the NHDR health and health-related data. 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
54 | P a g e  
 
G. HUMAN RESOURCE 
 
Human Resource refers to the personnel who shall design, develop, operate, support, 
and maintain the NHDR.  The human resource must have the necessary knowledge, 
skills, expertise, and experiences to undertake the NHDR’s activities and tasks.  There is 
a proposed National Health Data Center Office (NHDCO) to be lodged in PhilHealth to 
oversee, develop, implement, and maintain the NHDR.   
 
The DOH and PhilHealth shall provide adequate human resource development for select 
personnel to undergo relevant and appropriate trainings, seminars, and certification 
courses, and programs of the DICT or its partner institutions for capacity building and 
development of the essential skills relating to compliance with local and international 
standards and best practices for ICT design, infrastructure, security and operations. 
 
Organizational Structure and Functions of the NHDCO 
 
 
General Functional Statements 
 
National Health Data Center Office 
 
1. Oversee, develop, implement, and maintain ICT initiatives, innovations, 
solutions to ensure that such run smoothly and align with the overall strategy 
of the UHC; 
2. Perform strategic planning and recommend courses of action for technology-
related improvements; and  
3. Create schedules, define the scope and budget (usual project management 
tasks) and oversee ICT project from end to end.  
 
NHDC Technology Innovation Department  
KMITS-DOH
Health Sector Leadership
(Secretary of Health & PhilHealth 
President and Chief Executive 
Officer
UHC Core Group
Joint DOH-PhilHealth NHDR 
Enterprise Architecture & Strategy 
Management Group
National eHealth 
Steering Committee & 
Technical Working 
Group
National Health Data Center 
Office
GOVERNANCE
(Evaluate, Direct & Monitor)
MANAGEMENT
Align, Plan & Organize
Build, Acquire & Implement
Deliver, Service & Support
Monitor, Evaluate & Assess
MANAGEMENT
Align, Plan & Organize
Monitor, Evaluate & Assess
MANAGEMENT
Align, Plan & Organize
Build & Acquire
Support
Monitor, Evaluate & Assess
MANAGEMENT
Align, Plan & Organize
Monitor, Evaluate & Assess
MANAGEMENT
Build, Acquire & Implement
Monitor, Evaluate & Assess
National Health Data 
Center Office
NHDC 
Infrastructure & 
Service 
Management 
Department
NHDC 
Technology 
Innovation 
Department
NHDC Solution 
Development & 
Maintenance Division
NHDC Infrastructure 
Resource Management 
Division
** NHDC Service 
Management Division
NHDC ICT 
Security 
Department
NHDC Security 
Standards, Risk & 
Compliance Division
NHDC Security 
Operations 
Management
*NHDC Standards 
Conformance & 
Interoperability 
Validation Division
 NHDC Database & Data 
Warehouse 
Management Division
MANAGEMENT
Build, Acquire & Implement
Deliver, Service & Support
Monitor, Evaluate & 
Assess
MANAGEMENT
Build, Acquire & Implement
Deliver, Service & Support
Monitor, Evaluate & 
Assess
MANAGEMENT
Build, Acquire & Implement
Deliver, Service & Support
Monitor, Evaluate & 
Assess
NHDC Enterprise 
Architecture Division


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
55 | P a g e  
 
 
1. Set national standards, review of policies, work instructions, guidelines, 
procedures including SOPs, maintenance, monitoring, and evaluation, systems 
integration and harmonization, and technology innovation or research and 
development;  
2. Harmonize national ICT health activities and align with the UHC;  
3. Develop and maintain citizen-centric applications or solutions; and  
4. Optimize use of resources; and address weaknesses or inefficiencies that occur 
when undertaking a project and eliminating potential risks, which can occur due 
to lack of information or system available.  
 
NHDC EA Division  
 
1. Enterprise Architecture: Formulate and maintain the NHDC Enterprise 
Architecture to standardize and organize the ICT infrastructure, ensure 
alignment to UHC or national goals, able to support digital transformation 
and growth of data;  
2. NHDC Planning and Budget Management: Prepare the necessary plans 
and budget requirements, and relevant documents for compliance;  
3. NHDC Standards (Policies, Standard Operating Procedures, Guidelines, 
and other Protocols) Formulation, Review and Evaluation: Develop new 
standards; update existing standards; review terms of references, ICT 
proposals, and other NHDC related projects or programs. (Examples are 
NHDC Data Management and Administration, Users’ Access Policy, NHDC 
Security Manual, NHDC Backup and Recovery, Cybersecurity Policy, 
Backup and Recovery policies, NHDC Data Privacy, others);  
4. NHDC Standards Compliance Monitoring: Monitor and assess the 
performance of the NHDC using metrics as agreed by PhilHealth and 
DOH;  
5. NHDC Risk Management: Identify, assess, and control threats; implement 
a risk management plan or strategy to protect the NHDC; and  
6. Artifacts Maintenance: Maintain a central ICT artifact, a granular 
architectural work product that describes an architecture from a specific 
viewpoint. Examples include a network diagram, a server specification, a 
use-case specification, a list of architectural requirements, and a business 
interaction matrix.  
 
NHDC Solution Development and Maintenance Division  
 
1. National Data Submission: Develop and maintain the data submission 
programs or scripts, and other utilities to enable submission of health and 
health-related data to the NHDC;  
2. Enables build of business intelligence applications by providing capabilities 
in analysis, information delivery, and platform integration. Business 
intelligence uses data to make decisions by collecting, reporting, and 
monitoring data for interpretation; and filters existing data to determine 
trends and patterns in the past and present for better decision making. 
Analytics utilizes business intelligence to interpret data to predict future 
patterns based on current data;  
3. Machine Learning and Big Data Analytics: Build/Maintain models using 
appropriate technology to support the health sector’s strategic planning, 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
56 | P a g e  
 
e.g., use predictive analytics to examine unstructured data like social 
media posts; use of machine learning to evaluate behavior, others;  
4. Grants data access to different users as reinforced by permission rights 
and security levels, and structured according to data governance policies. 
This enables execution of health information access, data sharing and 
exchange between health care providers and entities involved in the 
provision of health service, including health care provider networks;  
5. Health 
Information 
Exchange: 
Build/maintain 
a 
secure 
data 
exchange/sharing among health care providers/institutions to reduce 
spending, duplicative testing and services; fraud prevention and detection, 
others; 
6. NHDC Data Dictionary Management: Manage the data dictionary, where 
the NHDC stores definitions of the data elements and their relationships 
(metadata);  
7. Database Access Languages and Application Programming Interfaces: 
Create queries and Application Programming Interfaces to make it easy for 
user to specify what they want done without the headache of explaining 
how to specifically do it;  
8. Database Communication Interfaces: Create Database Communication 
Interfaces to accept different end user requests through different network 
environments;  
9. Transaction Management. Manage transaction database to guarantee that 
all the updates in a given transaction are made or not made and complies 
with the properties on atomicity, consistency, isolation, and durability;  
10. Enable generation of meaningful data or information to assist health care 
providers in the decision-making process (e.g., diagnosis and treatment; 
identification of potential drug interactions, others);  
11. Enable use of priority eHealth services and applications to improve the 
efficiency and effectiveness of the health system management and health 
care delivery; 
12. Enable use of mobile devices for data collection, real time monitoring of 
individual’s health; diagnosis and treatment support, among others; and  
13. Support for electronic consultations or provision of health-care services at 
a distance.  
 
NHDC Standards Conformance and Interoperability Validation Division  
 
1. Issue schedules for orientation and testing for software validation;  
2. Conduct orientation of software validation;  
3. Conduct software validation testing;  
4. Confirm result of software validation testing and recommend for issuance 
of validation certification;  
5. Provide technical support in software validation testing; and  
6. Monitor performance of implementing sites on standards conformance 
and interoperability implementation.  
 
NHDC Infrastructure and Service Management Department  
 
1. NHDC Infrastructure:  
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
57 | P a g e  
 
a. Plan, design, implement and maintain server configurations, routing 
protocols, network configurations and storage environments to facilitate 
the needs of the NHDCO; 
b. Configure server backups, monitor network use statistics and loads, and 
implement contingency plans to minimize network and system downtime; 
and  
c. Ensure implementation of security policies and protocols.  
  
2. Service Management: Deliver information technology services through Service 
Management, a framework to structure IT-related activities and the interactions 
of IT technical personnel with clients.  
 
NHDC Database and Data Warehouse Management Division  
 
1. Data Integrity Management: Manage data integrity to reduce things such 
as data redundancy, which is when data is stored in more than one place 
unnecessarily, and maximizing data consistency, making sure database is 
returning correct/same answer each time for same question asked; 
2. Ensure that quality data is stored, processed, transformed, and used to 
drive the decision-making process. This also establishes the policies and 
processes for building trust in the data;  
3. Maintain important or critical historical data that has been extracted from 
the operational database, and transformed into accessible formats for 
analytical users. It is designed to analyze, integrate, and report data 
coming from different sources; and uses Online Analytical Processing 
(OLAP);  
4. Enable identification or verification of codes or references that are 
considered standards to all who will be availing of the NHDC services;  
5. Ensure or guarantee the integrity and consistency of the submitted health 
and 
health-related 
data 
in 
the 
database 
through 
appropriate 
management of the following: data dictionary, data storage, security, 
access control, integrity, communication interfaces, others. It is designed 
to record the submitted health and health-related data; and uses Online 
Transactional Processing (OLTP); and  
6. Enable dissemination of health and health-related data that is available to 
everyone to access, use and share. This can be linked to the Open Data 
Philippines that collects datasets from different government agencies that 
are deemed “open”.  
 
NHDC Resource Management Division  
 
1. NHDC Technology Improvements: ensure continuous improvements in 
the data center using applicable emerging or advanced technologies to 
improve power and storage efficiency, and user’s experience;  
2. Manage the data networking and connectivity infrastructure to support 
the NHDC services and applications;  
3. Manage the virtual servers to support the NHDC services and 
applications;  
4. NHDC User’s Access Management: Enable multiple users to access the 
NHDC without affecting the integrity of the database;  


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
58 | P a g e  
 
5. Backup and Recovery Management: Manage backup and recovery to 
ensure data safety and integrity; and  
6. Associated services to support the secure storage of and access to the 
NHDC.  
 
NHDC Service Management Division  
  
1. Define and maintain service request / incidence classification and 
prioritization to ensure consistent approaches to handle and address 
problems;  
2. Establish and maintain service/ incident models for issues or problems to 
enable efficient and effective resolution;  
3. Log all service requests and incidents; record all relevant data or 
information; and maintain historical record;  
4. Maintain the log or catalogue to establish audit trails of the problem’s 
processes, including its status like closed, open, in progress, others;  
5. Using manual or automated system, classify service requests and 
incidents;  
6. Address service requests and incidents based on impact and urgency;  
7. Identify service request/incident resolution; Assign to expert functions if 
needed;  
8. Engage appropriate level of management if needed;  
9. Perform recovery action if needed to resolve and recover from incidents; 
10. Document incident resolution for future reference;  
11. Verify with concerned users that the service request/incident has been 
accomplished or resolved within acceptable or agreed period of time;  
12. Close service requests/incidents;  
13. Monitor status of the problem; track service request/ incident escalations 
and resolutions to completion;  
14. Identify problems in coordination with the other sections through 
correlation of incident reports, error logs and others;  
15. Handle problems using evidenced data;  
16. Consult with business process unit/office to ensure that problem 
identification and root cause analysis are performed; and  
17. Monitor the continuing impact of problems.  
 
NHDC ICT Security Department  
 
1. Define, communicate, and enforce technology-related policies, standards and 
procedures; 
2. Mitigate risk related to data breaches and cyber-attacks; and  
3. Develop security incident management plans and ensures that all technology-
related systems, innovations, or solutions meet defined security requirements.  
 
NHDC Security Standards, Risk and Compliance Division  
 
1. ICT Security Risks Management: Identify, assess, and mitigate ICT 
security risks; monitor changes in current threats and trend for future 
threat analysis; conduct periodic risk evaluations; and identify mitigation 
measures;  


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
59 | P a g e  
 
2. ICT Security Standards Development: Conceptualize and formulate 
viable, efficient and effective security measures, policies and procedures 
related, but not limited to Business Continuity Plans, Backup and Archival, 
Database Security, Access Controls, Incident Management, Software 
Development and Acquisition Security; and Wireless Networking Security; 
establish framework to control the collection, use, and disclosure of the 
personal information;  
3. ICT Security Review and Evaluation: Review Data Sharing Agreements; 
outsourcing Agreements; Consent Forms, Non-Disclosure Agreements, 
and other documents affecting data protection;  
4. Privacy Impact Assessment: Conduct regular privacy impact assessment 
to ensure compliance with the requirements of Data Privacy Act;  
5. ICT Security Research and Development: Research on mainstream, new, 
cutting-edge technologies and methodologies designed to ensure the 
security and integrity on information resources;  
6. ICT Security Investigation: Investigate security/data breaches; and  
7. ICT Security Compliance: Formulate annual reports of security incidents 
and data breaches to the NPC, and other privacy requirements required 
by the government. 
 
Note: 
 
This will serve as the Data Protection Unit which will report to the overall 
Corporate Data Protection Officer of PhilHealth.  The functions will be for 
updating and presentation to the Change Management Committee of 
PhilHealth. 
 
NHDC Security Operations Division 
 
1. Responsible for the day-to-day operational component or continuous 
monitoring of ICT infrastructure security to enable timely detection and 
response of security incidents;  
2. Implement the ICT Security strategy, policies, procedures and protocols; 
and point of collaboration in coordinated efforts to monitor, assess, and 
defend against attacks;  
3. Monitor and analyze on day-to-day the security health/posture of the 
NHDC, i.e., activity on networks, endpoints, servers, databases, 
applications/systems, websites, and other systems, for anomalous activity 
related to security incident or compromise;  
4. Detect, analyze, and respond to ICT security incidents; 
5. Ensure that potential security incidents are identified, analyzed, 
defended, investigated, and reported to the Corporate Information 
Security Department;  
6. Collaborate with national ICT Security operations’ initiatives, programs, 
and projects to enhance operational security mechanisms or processes;  
7. Provide technical support to external national ICT Security operations’ 
initiatives, programs, and projects;  
8. Assess and mitigate threats; identify emerging risks;  
9. Preserve, identify, extract, and document evidence which can be used in 
the court of law (i.e., computer forensics, disk forensics, network 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
60 | P a g e  
 
forensics, database forensics, email forensics, wireless forensics, others); 
and  
10. ICT Security Management: Manage/Administer the following:  
a. Hardware inventories, disposal of obsolete equipment, physical 
access to servers and storage devices, running of patches, conduct 
of network scans, intrusion detection and prevention, external access 
or inter-linkages with offices, and penetration testing;  
b. Databases, software and information systems;  
c. Application Vulnerabilities;  
d. System Security Testing;  
e. Systems hardening;  
f. Log management and review;  
g. Administration of Security Event and Information Management;  
h. Logical access rights review and maintenance;  
i. 
Data Archival; and  
j. Data backup and restoration 
 
Joint 
DOH-PhilHealth 
NHDR 
Enterprise 
Architecture 
and 
Strategy 
Management Group 
 
1. Establish the NHDR framework and enterprise architecture. 
2. Execute the strategic direction in line with the enterprise architecture. 
3. Manage activities, budget, risks, communication, and mechanisms to achieve the 
vision and benefits of the NHDR. 
4. Establish quality requirements in all activities, processes, and procedures. 
5. Establish effective management of the health sector’s data across the data life 
cycle. 
6. Formulate relevant policies and guidelines to support the establishment, 
operations, and maintenance of the NHDR. 
7. Identify, assess, and address risks. 
8. Monitor progress, performance, and status of establishing, operationalizing, and 
maintenance of the NHDR. 
 
Health Care Providers or Institutions’ Information Technology Support 
Personnel 
 
The KMITS-DOH can formulate the required number and qualifications of information 
technology support personnel to implement or operationalize an integrated health 
information system at different levels of the hospitals and rural health unit facilities; 
and including the datasets submission or transmission to the NHDR. 
 
 
 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
61 | P a g e  
 
PART 2: ACTION PLAN 
 
The Action Plan is built on the NHDR’s building blocks, and serves as a roadmap that defines 
the two (2) strategic phases to develop and implement the NHDR. 
  
Phase 1: Standards Setting and EMR-NHDR Model Development and 
Implementation 
 
At present, there is inconsistent adoption of health data standards across the healthcare 
service delivery chain in the country.  There are different eHealth services, systems, 
applications, networks, and technologies with different data definitions, terminologies, 
elements, and structures being used by healthcare providers.  Standards Setting 
encompasses the development and/or updating of the National Health Data Standards for 
Interoperability that shall serve as basis for the submission of the required health and 
health-related data to the NHDR, and standards conformance and interoperability 
validation of health information systems or eHealth services. 
 
In Phase 1, the DOH shall also update its health enterprise architecture and integrated 
health information system framework, and restructure the Philippine eHealth Governance 
structure to ensure commitment and accountability in the development and 
implementation of the NHDR.  The NHDR is a large and complex project, i.e. with 
multiple goals to achieve; variety of tasks to accomplish; collaboration, coordination, 
and/or engagement with different stakeholders; feasibility or applicability of using new 
standards and/or emerging technologies; presence of autonomous and independent 
systems and people that have to be integrated or harmonized; readiness of health-related 
entities to comply; and availability of resources for implementation.  
 
As such, a use-case driven approach or MODEL (also refers to Electronic Medical Record 
– National Health Data Repository Model) shall be used to develop and implement the 
NHDR. The MODEL shall use “use cases” to effectively envision the outcomes, manage 
the scope, capture a set of requirements, focus on useful ways to use and gain value if 
the system is used, and drive the incremental development of the NHDR to completion. 
 
Two (2) Use Cases of the Initial MODEL 
 
1. Dataset Submission.  This is the ability of one information technology system to 
send quality health data from an Electronic Medical Record to the NHDR’s data 
storage (FHIR Server36).  The NHDR will not interpret the submitted health data, 
but acknowledges receipt of the health data, stores the health data, and exports 
the health data to a data lake37 storage. 
 
2. Unified Business Intelligence & Analytics.  This allows the flow of health data 
from the data lake into the data warehouse where health data are transformed, 
enriched, standardized, cleansed, integrated, stored, and modelled to support 
various analytics needs or requirements. 
                                                             
 
36 A FHIR Server supports the processing, validation, and storage of health data according 
to the HL7 Fast Healthcare Interoperability Resources (FHIR) specification. 
37 A data lake is a storage repository that holds a vast amount of raw data in its native 
format 
until 
it 
is 
needed 
for 
analytics 
applications. (https://www.techtarget.com/searchdatamanagement/definition/data-lake) 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
62 | P a g e  
 
Integrated Health Information System (IHIS) 
 
There are three (3) minimum requirements for compliance under the Enterprise 
Architecture Implementation Area, i.e. (1) fully functional, integrated health information 
system (HIS) as evidenced by capacity to demonstrate required functionalities, (2) 
compliance with the national health standards for interoperability as provided under the 
order and any subsequent issuances, and (3) Passing the DOH, PhilHealth, and DICT 
Standards Conformance and Interoperability Validation (SCIV) for application software as 
provided in the released issuance from the DOH, PhilHealth, and DICT. 
 
A fully functional integrated HIS at the level of the health facilities is an important 
consideration or requirement prior to compliance with the national health standards for 
interoperability, and will affect the overall integration timeline.  The specifications for 
DOH, PhilHealth, and DICT to issue SCIV Certification must be based on criteria or 
evidence measures to demonstrate the required functionalities.  The Integrated IHIS-
NHDR Workplan will be updated accordingly once we received the target timeline. 
 
List of Minimum Datasets with the Data Dictionaries & Data Quality Rules, and 
initially aligned with the FHIR Standards to be Uploaded or Submitted to the 
NHDR: Please see DOH-PhilHealth Joint Administrative Order No. 2021-0001 dated 21 
April 2021 – Guidelines in the Implementation and Maintenance of an Integrated Health 
Information System, Annex A – Integrated HIS Implementation Model, page 2, IHISIM 
Implementation Diagram).   
 
1. Electronic Health/Medical Record – On-going with DOH-KMITS 
2. Referral System Management 
3. Telemedicine 
4. Laboratory & Diagnostics 
5. Electronic Prescription and Dispensing 
6. Human Resources Information 
i. 
Clinical Decision Support 
ii. 
Enterprise Resource Planning 
iii. 
Supply Chain Management 
iv. 
Financial & Capital Asset Management 
v. 
Quality Management System 
 
This is an important consideration or requirement prior to compliance with the national 
health standards for interoperability, and will affect the overall integration timeline, as 
well as the submission of health and health-related datasets to the NHDR.  The 
Integrated IHIS-NHDR Workplan will be regularly updated. 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
63 | P a g e  
 
 
Phase 2:  Updating of the EMR-NHDR Model and Implementation 
 
Scaling Up the MODEL 
 
The MODEL shall be enhanced and extended as 
new use cases are included (see Annex 1.0 – 
Examples of Use Cases).  There will be a 
continuous 
and 
incremental 
integration 
and 
delivery of services and systems.  The MODEL will 
evolve and can be applied to health-related data.   
 
Major activities to be undertaken in scaling up the 
MODEL are as follows: 
 
1. Design of the Process Flows 
This is the development of an optimized 
process flows to describe a particular use case.  
An 
optimized 
process 
flow 
is 
efficient, 
integrated, 
and 
aligned 
with 
the 
NHDR 
Framework.  The design of the process flows 
will include the use case name, actors, 
processes, business rules, and relationships or 
links to the other processes. 
 
2. Expansion of the Minimum Standard Health Datasets 
This is the identification of data to achieve the objectives of a use case, validation 
of data, and inclusion of new data in the list of minimum standard health data sets. 
This will also include the review and identification of data sources, standardization 
of data, and definition of data quality rules. 
  
3. Development and/or Enhancement of the Dataset Submission and Unified Business 
Intelligence & Analytics 
The process and data requirements of a use case will be incorporated or integrated 
into the Dataset Submission and Unified Business Intelligence & Analytics. 
 
4. Review and Enhancement of the Data Governance Standards 
The data management requirements of a use case will be incorporated or integrated 
into the Data Governance Standards. 
 
5. Testing of the System 
The updated dataset submission and unified business intelligence and analytics will 
be tested to confirm the requirements of a use case. 
 
6. Production Deployment of the System 
The updated dataset submission and unified business intelligence and analytics will 
be deployed in a production environment. 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
64 | P a g e  
 
 
 
Note: 
 
Detailed activities and monitoring of accomplishments and status will be included in the 
Integrated Workplan. 
 
RISK MANAGEMENT 
 
The development and implementation of the NHDR involve a level of risks or 
uncertainties that can have positive or negative impacts or effects.  It is necessary to 
manage the risks to achieve the intended objectives of the NHDR, avoid failure and 
reworks, and maintain proper focus.  The Health Sector Risk Registry (HSRR) of the 
National eHealth Program can be used to record and monitor all identified risks during 
the development and implementation of the NHDR.   
 
The HSRR can include a unique identifier for ease of reference, type of risk, description, 
probability of the risk to occur,  impact of the risk if it will occur, mitigation strategy, 
person or entity responsible for monitoring the risk, and date stamped like date logged 
and reviewed.  The Risk Management Experts Group of the Philippine eHealth 
Governance can provide procedures on how to use the HSRR. 
 
MONITORING AND EVALUATION 
 
Monitoring and evaluation shows the progress in implementing this NHDR Framework and 
measures the outputs and/or outcomes in the development and implementation of the 
NHDR based on agreed indicators by the DOH and PhilHealth.  Monitoring and evaluation 
also identifies the planned activities or guidelines that are achieved and address those 
that are not being achieved.  Output indicators provide insights into the adoption of the 
NHDR, and outcome indicators provide insights into the tangible results for concerned 
users or stakeholders from the use of the NHDR. 
 
A results-based management strategy is appropriate to track and assess the results of 
developing and implementing the NHDR using this framework.  It focuses on the 
performance and achievement of outputs and outcomes.  Further, there are two (2) 
components of the monitoring and evaluation, as follows: 
 
1. NHDR Framework Monitoring and Evaluation - monitors the execution of this NHDR 
Framework. 
 
Year 1 Year 2
Year 3
Year 4
Year 5
Year 6
Year 7
Year 8
Year 9
Year 10
2020
2021
2022
2023
2024
2025
2026
2027
2028
2029
PHASE 2
PHASE 1
Standards Setting
Electronic Medical Record 
(EMR) - National Health Data
Repository (NHDR) Modelling
Continuing System Maintenance
Performance Monitoring & Evaluation
Updating and
Implementation of the
EMR-NHDR Model (Health
Data)
Updating and
Implementation of the
EMR-NHDR Model
(Health-related Data)
Continuous Integration and Delivery
Support to Operations


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
65 | P a g e  
 
2. Results Monitoring and Evaluation - complements the NHDR’s monitoring and 
evaluation of the NHDR Framework by measuring results from the execution of this 
NHDR Framework. 
 
Action Points 
 
Leadership and 
Governance 
Action 
Point 1 
Develop 
the 
structure, 
roles 
and 
responsibilities of concerned agencies or 
offices 
to 
ensure 
accountability, 
transparency, and effective leadership in 
the 
establishment, 
operations, 
and 
maintenance of the NHDR. 
 
DOH 
 
Action 
Point 2 
Restructure the National eHealth Steering 
Committee, Technical Working Group, and 
Expert Groups to support the NHDR. 
 
DOH 
 
Action 
Point 3 
Develop or finalize the matrix of roles and 
responsibilities of DOH and PhilHealth based 
on the interdependent policies of the NHDR. 
 
DOH 
Legislation, 
Ethics, Policy 
and Compliance 
Action 
Point 4 
Review 
all 
issuances 
relative 
to 
the 
establishment and maintenance of the 
NHDR if compliant with Section 5 of 
Republic Act 11032 or Anti-Red Tape Act of 
2007 and its implementing rules and 
regulations, and initiate appropriate action. 
 
DOH 
 
Action 
Point 5 
Identify other policies, guidelines, and 
standard operating procedures to support 
the NHDR. 
 
PhilHealth 
 
Action 
Point 6 
Develop the NHDR Ethics Framework to 
strengthen public trust in the submission 
and processing of health and health-related 
data. 
 
PhilHealth 
 
Action 
Point 7 
Evaluate models to fund the establishment 
and maintenance of the NHDR, and ensure 
its sustainability. 
 
PhilHealth 
Standards and 
Interoperability 
Action 
Point 8 
Complete the standard health and health-
related data to be submitted to the NHDR. 
 
DOH 
 
Action 
Point 9 
Establish the matrix of health and health-
related data vis-à-vis the health-related 
entities responsible for its submission. 
 
DOH 
 
Action 
Point 10 
Complete and check the accuracy of the 
standard registries and other needed codes 
through the National Health Data Dictionary 
DOH 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
66 | P a g e  
 
to facilitate the mandatory adoption and use 
of national health data standards for 
interoperability. 
 
 
Action 
Point 11 
Ensure the completeness and accuracy of 
the data elements that must have standard 
data codes through the National Health 
Data Dictionary to facilitate the mandatory 
adoption and use of national health data 
standards for interoperability. 
 
DOH 
Services and 
Applications 
Action 
Point 12 
Define and evaluate models of dataset 
submission to the NHDR. 
 
PhilHealth 
 
Action 
Point 13 
Define the policies, protocols, formats, and 
standards needed to implement a National 
Trust Framework for the NHDR. 
 
PhilHealth 
 
Action 
Point 14 
Identify 
the 
eHealth 
Services 
and 
Applications that can be implemented using 
the NHDR. 
 
PhilHealth 
 
Action 
Point 15 
Develop the Centralized Online Integrated 
HIS Registration and Status Monitoring 
System, and Centralized Online Standards 
Conformance and Interoperability Validation 
System. 
 
This 
must 
include 
the 
Implementing Policies and Guidelines and 
Standard Operating Procedures. 
 
DOH 
 
Action 
Point 16 
Define 
the 
Business 
Intelligence 
and 
Analytics Framework for a unified data 
analysis and reporting between the DOH 
and PhilHealth. 
 
PhilHealth 
 
Action 
Point 17 
Identify the data and/or reports that can be 
made available to the public for free. 
 
DOH 
Digital 
Infrastructure 
Action 
Point 18 
Confirm the cloud computing infrastructure 
support of the DICT and enter into a 
Memorandum of Agreement as applicable. 
 
PhilHealth 
Human 
Resource 
Action 
Point 19 
Review 
and 
evaluate 
the 
proposed 
organizational NHDR structure to establish, 
operate, and maintain the NHDR. 
 
PhilHealth 
Implementa-
tion Mode 
Action 
Point 20 
Finalize the priorities of health and health-
related 
data 
for 
Phase 
1 
and 
2 
implementations. 
and 
define 
the 
implementation activities (Implementation 
Plan) to roll out the NHDR. 
DOH 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
67 | P a g e  
 
 
Transition 
Model 
Action 
Point 21 
Finalize the transition approach or strategy 
on how to move from current state to the 
NHDR 
to 
include 
activities, 
timeline, 
responsible entities, and deliverables. 
 
DOH 
Monitoring and 
Evaluation 
Model 
Action 
Point 22 
Develop an inclusive and effective platform 
for 
monitoring 
and 
evaluating 
the 
performance of the NHDR in the context of 
the UHC implementation. 
 
DOH 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
68 | P a g e  
 
ANNEX 1.0 REFERENCES 
 
1. PhilHealth ICT Infrastructure Roadmap (Asian Development Bank Technical Assistance 
Project) by Romeo Fernando J. Aquino Jr. 
 
2. Knowledge Development Support for Southeast Asia – Health Insurance ICT Enterprise 
Architecture Specialist (Asian Development Bank Project) by Juan Miguel Cantero 
 
3. Rapid functional Review of PhilHealth Information Management Processes ( World 
Bank Technical Assistance) by International IT Consultant Ozren Pezo 
 
4. Developing a Harmonized Analytics Roadmap and Initial Solutions for the DOH and 
PhilHealth (EU Technical Assistance); and Data Mapping of Data to Target UHC 
Integrated Data and KPIs (WHO Technical Assistance) by International IT Consultant 
Angelito S. Abando 
 
5. PhilHealth Information System Strategic Plans 2018-2020 and 2021-2023 
 
6. PhilHealth Enterprise Architecture 
 
7. Stages of Implementation for the National Health Data Repository - Research Paper 
prepared by the ICT Planning, Policies and Standards Division, Information 
Management Sector of PhilHealth 
 
8. Framework and Standards for Country Health Information Systems Second edition – 
World Health Organization 
 
 
9. DICT Department Circular # 2017-002 Prescribing the Philippine Government’s Cloud 
First Policy 
 
10. PhilHealth’s Corporate Order # 2021-0070, Securing Cloud Computing Services 
(Revision 2): Date Signed 15 October 2021 
 
11. National Cybersecurity Plan 2022 
 
12. DOH Health Enterprise Architecture 2011 
 
13. DOH 
Information 
System 
Strategic 
Plan 
for 
the 
Period 
2018-2020 
(https://doh.gov.ph/sites/default/files/publications/ISSP%202018-2020.pdf) 
 
14. National eHealth Strategy Toolkit, World Health Organization and International 
Telecommunication Union 2012 
 
15. UHC Approved Issuances: 
 
16. DOH and PhilHealth Joint Memorandum Circular # 2021-0001 : Implementing 
Guidelines of Section 31 of the Republic Act No. 11223, otherwise known as the 
“Universal Health Care (UHC) Act” on the Processing and Submission of Health data 
 
17. DOH and PhilHealth Joint Administrative Order # 2021-0002 : Mandatory Adoption and 
Use of National Health Data Standards for Interoperability 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
69 | P a g e  
 
18. DOH and PhilHealth Joint Administrative Order # 2021-0001 : Guidelines on the 
Implementation and Maintenance of an Integrated Health Information System 
 
19. DOH, PhilHealth, and DICT Joint Administrative Order # 2021-0001 : Guidelines on the 
Implementation of the Standards Conformance and Interoperability Validation 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
70 | P a g e  
 
ANNEX 2.0 – LIST OF ICT MODELS AND OUTPUTS 
 
1. 
Developing a Harmonized Analytics Roadmap and Initial Solutions for the DOH and 
PhilHealth:  An EU Technical Assistance Project to enhance the analytics roadmap to 
further solidify the foundation for developing and implementing harmonized analytics 
that is aligned with the enterprise architectures of DOH and PhilHealth, as well as its 
specific-agency analytics initiatives; build capacity in DOH and PhilHealth to develop 
and maintain production business intelligence solutions; and assist DOH in establishing 
the DOH data warehouse and analytics. 
 
2. 
Data Mapping of Data to Target UHC Integrated Data and KPIs: A WHO Technical 
Assistance Project on data mapping of relevant data towards integrated data model or 
framework setting on health data collection, processing, analysis, and utilization in the 
light of the passing of the UHC.  
 
3. 
PhilHealth ICT Infrastructure Roadmap: An Asian Development Bank Technical 
Assistance Project to develop a short and long term ICT infrastructure roadmap to 
serve as a sound basis for investment and reliable PhilHealth’s services and support to 
the UHC Act. 
 
4. 
Assessment of PhilHealth’s ICT Infrastructure: An Asian Development Bank Technical 
Assistance Project to evaluate PhilHealth’s ICT Enterprise Architecture and ICT Human 
Resources. 
 
5. 
DICT Department Circular No. 010, s. 2020 Amendments to Department Circular No. 
2017-002 Philippine Government’s Cloud First Policy: Prescribes the Philippine 
Government’s Cloud First Policy to adopt a “cloud first” approach and for government 
departments and agencies to consider cloud computing solutions as a primary part of 
their infostructure planning and procurement. 
 
6. 
DICT’s National Cybersecurity Plan 2022: Assures the continuous operation of our 
nation’s critical infostructures, public and military networks; implements cyber 
resiliency measures to enhance our ability to respond to threats before, during and 
after attacks; effective coordination with law enforcement agencies; and cybersecurity 
educated society. 
 
7. 
National eHealth Strategy Toolkit, World Health Organization and International 
Telecommunication Union 2012: An expert, practical guide that provides governments, 
their ministries and stakeholders with a solid foundation and method for the 
development and implementation of a national eHealth vision, action plan and 
monitoring framework.  
 
8. 
Joint Administrative Order No. 2016-0003 between DOH and PhilHealth on the 
Adoption of the Philippine Health Information Exchange (PHIE) Lite:  An enabling 
strategic instrument to rationalize, harmonize and unify the DOH and PhilHealth's 
architecture, data and technology solutions. 
 
9. 
PhilHealth’s Circular No. 2016-016 Full Implementation of Electronic Claims System 
(eClaims) and Circular No. 2017-0030 Implementation of the eClaims Using Hybrid 
Approach: A data submission interoperability model with software certification or 
validation to enable different EMRs and HISs to electronically submit or transmit claims 
data to PhilHealth. 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
71 | P a g e  
 
 
10. Joint Administrative Order No. 2016-0003 between DOH, PhilHealth, and DOST on the 
Implementation of the PHIE: Adopts a use case/scenario approach, with the initial 
implementation essentially focusing on the PHIE Lite, the harmonization of applications 
and health information systems of DOH and PhilHealth.  
 
11. Joint Administrative Order No. 2016-0003 between DOH, PhilHealth, and Department 
of Science and Technology on the Privacy Guidelines for the Implementation of the 
PHIE: Defines and limits the circumstances in which an individual's health information 
is collected, accessed, used, disclosed or otherwise processed; provides parameters for 
obtaining consent from the patient for participation in the PHIE; defines the rights of 
patients participating in the PHIE; and provides guidelines for data protection. 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
72 | P a g e  
 
ANNEX 3.0 – ROLES AND RESPONSIBILITIES 
 
(Source:  
Implementing Rules and Regulations of the UHC  (RA No. 11223) 
DOH and PhilHealth JMC No. 2021-0001 dated May 21, 2021: Implementing Guidelines of 
Section 31 of the Republic Act No. 11223, otherwise known as the “Universal Health Care 
(UHC) Act” on the Processing and Submission of Health and Health-related Data) 
 
Department of Health 
 
1. Provide policy directions and oversight, together with the interagency NeHSC-TWG 
and other relevant stakeholders, in the processing, submission, data management 
and governance of health and health-related data. 
2. Activate the interagency NeHSC-TWG. 
3. Develop guidelines in the submission of health and health-related data, together with 
the PhilHealth, and in consultation with the DICT and NPC.38 
4. Establish mechanisms that integrate explicit use of evidence into the policy and 
decision-making process, strengthen health policy and systems research, and 
support the growth of research consortia in line with the vision of the Philippine 
National Health Research System as stipulated in RA 10532 (Philippine National 
Health Research System Act of 2013).39 
5. Act as data controller of all health and health-related data it processes within its 
Department. 
6. Act as receiver of all health and health-related data submitted through the NHDR 
provided as by PhilHealth, and make available the infrastructure and related platform 
to receive the hared health and health-related data. 
7. Lead the standardization of health and health-related data, in coordination with 
PhilHealth and other relevant stakeholders. 
8. Develop and implement operational guidelines in the processing of health and 
health-related data under its control, including those for data access and data 
protection. 
9. Implement strong, appropriate and reasonable data protection measures at all levels 
of data processing. 
10. Provide technical assistance to PhilHealth in the management of the NHDR. 
11. Build capacity and provide technical assistance to all health care providers, insurers, 
and health-related entities to ensure compliance with the standards on the 
processing and submission of health and health-related data set forth under this JMC 
and other related issuances. 
 
PhilHealth 
 
1. Provide policy directions and oversight, together with the interagency NeHSC-TWG 
and other relevant stakeholders, in the processing, submission, data management 
and governance of health and health-related data. 
2. Develop guidelines in the submission of health and health-related data, together with 
the DOH, and in consultation with the DICT and NPC.40 
                                                             
 
38 § 31.1 IRR of RA11223 or UHC Act 
39 § 31.3 IRR of RA11223 or UHC Act 
40 40 § 31.1 IRR of RA11223 or UHC Act 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
73 | P a g e  
 
3. Establish mechanisms that integrate explicit use of evidence into the policy and 
decision-making process, strengthen health policy and systems research, and 
support the growth of research consortia in line with the vision of the Philippine 
National Health Research System as stipulated in RA 10532 (Philippine National 
Health Research System Act of 2013).41 
4. Act as data controller of all health and health-related data it processes within the 
Corporation. 
5. Establish and maintain the NHDR, and act as its data controller. 
6. Provide access to DOH on all health and health-related data submitted through the 
NHDR. 
7. Co-lead the standardization of health and health-related data DOH, in coordination 
with relevant stakeholders. 
8. Develop and implement corporate operational guidelines in the processing of health 
and health-related data under its control, including those for data access and data 
protection. 
9. Implement strong and reasonable data protection measures at all levels of data 
processing. 
 
Department of Information and Communications Technology and National 
Privacy Commission 
 
Set organizational, physical, and technical security measures for data protection in the 
processing of health and health-related data for DOH and PhilHealth to implement. 
 
Local Government Units 
 
Establish mechanisms that integrate explicit use of evidence into the policy and decision-
making process, strengthen health policy and systems research, and support the growth 
of research consortia in line with the vision of the Philippine National Health Research 
System as stipulated in RA 10532 (Philippine National Health Research System Act of 
2013).42 
 
Interagency Committee on Health and Nutrition Statistics 
 
Formulate policies and guidelines on data access relative to the covered public data, 
through the PSA and DOH. 
 
Health Care Providers, Insurers, and Health-Related Entities 
 
Process and submit health and health-related data for local and national health data 
reporting to PhilHealth through the NHDR, and/or DOH using their iHIS, or any equivalent 
reporting mechanism as necessary, following the standards set forth in this JMC and 
other related issuances. 
 
 
 
 
                                                             
 
41 41 § 31.3 IRR of RA11223 or UHC Act 
42 42 § 31.3 IRR of RA11223 or UHC Act 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
74 | P a g e  
 
ANNEX 4.0 – LIST OF SURVEYS 
 
Source: 1st Meeting of Technical Working Group on Health, Nutrition, and Demographic –
related Data, 23 November 2021 
 
1. 2014 Philippine Integrated HIV Behavioural and Serologic Survey 
2. A Study of Health Seeking Behaviour of the Poor in the NHTS 
3. A Survey of the Effects of Sin Tax on the Behaviour of Attitude of Filipino Towards 
Tobacco, Alcohol, and PhilHealth Benefit Utilization 
4. Access to and Utilization of Health Care and Services in Selected Geographically 
Isolated Disadvantaged Areas (GIDAs) in the Country 
5. Annual Poverty Indicators Survey (PSA) 
6. Assessment of the Philippine Emergency Obstetric and Newborn Care Initiative 
7. Bi-Annual Responsiveness Report 
8. Climate Change Impact on Human Health, Water/Sanitation and Food Safety 
9. Community-based Survey on the Prevalence of Soil-Transmitted Helminthiasis, 
Schistosomiasis and other in Intestinal Parasitic Infections among Preschool age 
Children, Adolescents and Adults 
10. COVID-19 Vaccine Government Employees Survey 
11. COVID-19 Vaccine Feedback Survey 
12. COVID-19 Vaccine General Population Survey 
13. COVID-19 Vaccine Health Care Workers Survey 
14. COVID-19 Vaccine Patient Group Survey 
15. COVID-19 Vaccine Senior Citizens Survey 
16. COVID-19 Vaccine Youth and Parents Survey 
17. COVID-l9 Vaccine Non-Healthcare Workers Survey 
18. Determination of the Nutrient Composition of Popular Street Foods Within the Vicinity 
of Selected Members of South Manila Inter-Institutional Consortium Schools 
19. Diversity and Inclusion Programs in Health Care Facilities 
20. DOH Quarterly National Face-to-Face Survey 
21. Expanded National Nutrition Survey (FNRI) 
22. Gender Responsiveness of TB Prevention and Management in a High TB-Burden Urban 
Area: An Exploratory Study Gender Responsiveness of TB Prevention and Management 
in a High TB-Burden Urban Area: An Exploratory Study 
23. Global Adult Tobacco Survey 
24. Global School-Based Health Survey 
25. Global Youth Tobacco Survey 
26. Graphic Health Warnings Survey on Vapes, Heated Tobacco Products and Other 
Similar Products 
27. Health Care Waste Management Self Assessment Tool 
28. Health Literacy and Knowledge, Attitude, and Practices (KAP) Survey on Health 
Promotion 
29. Health System Responsiveness 
30. Health System Responsiveness Rider Questions to Pulse Asia Research Inc.’s Ulat ng 
Bayan Survey 
31. Hepatitis B Seroprevalance Survey (UP-NIH) 
32. In-depth Assessment of the Causes and Effects of Adolescent Pregnancy in Selected 
Regions in the Philippines 
33. Longitudinal Cohort Study on Filipino Boy and Girl (Wave 4) 
34. Medical Facilities for Overseas Workers and Seafarers in Hospitals 
35. National Demographic Health Survey 
36. National Drug Resistance Survey on Tuberculosis in the Philippines 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
75 | P a g e  
 
37. National Health Expenditure Survey 
38. National Health Literacy Survey 
39. National Nutrition Survey (FNRI) 
40. National Prevalence Survey for Mental Health and Well-Being 
41. National Prevalence Survey of Leprosy in the Philippines 
42. National Survey on Mental Health Literacy 
43. National Survey on Oral Health 
44. National Survey on the Prevalence of Soil Transmitted Helminthiasis, Schistosomiasis 
and other in Intestinal Parasitic Infections among Public School Children in the 
Philippines 
45. National Survey to Monitor the Impact of the Sin Tax Law 
46. National Tuberculosis Prevalence Survey 
47. Philippine National Blindness Survey and Eye Disease Study 
48. Population Based Survey using Lot Quality Assurance Sampling (LQAS) Methodology to 
Determine Contraceptive Coverage in 17 Provinces of the Philippines (One Province 
Per Region) 
49. Survey on the BIDA Solusyon sa COVID-19 Campaign of the Department of Health 
50. The Epidemiologic Status of Yaws in the Philippines: A Nationwide Survey and Clinico-
Seroprevalence Study 
51. Young Adult Fertility and Sexuality Study (UPPI and DRDF) 
 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
76 | P a g e  
 
ANNEX 5.0 – MATRIX OF ROLES AND RESPONSIBILITIES OF DOH AND 
PHILHEALTH (BASED ON THE INTERDEPENDENT POLICIES OF THE 
NHDR) 
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
1. Mandatory Adoption and Use of National Health Data Standards for Interoperability 
 
Provide policy directions and oversight in 
consultation, 
coordination, 
and/or 
networking 
with 
interagency 
eHealth 
partners and concerned stakeholders, on 
all 
matters 
relating 
to 
planning, 
formulation, adoption and use, monitoring, 
evaluation, and updating of national health 
data standards. 
 
 
Recommend 
policies 
and 
implementation 
strategies 
for 
mandatory adoption and use based 
on the assessment and monitoring 
reports of the National Health Data 
Standards 
Sub-Working 
Group 
(NHDS-SWG). 
 
Assist the DOH and PhilHealth in 
planning, implementation, monitoring 
and evaluation of the adoption and 
use of national health data standards 
for interoperability in consultation and 
collaboration with with all concerned 
stakeholders. 
 
Formulate 
new 
national 
health 
data 
standards, update, and maintain existing 
ones in consultation and coordination with 
interagency eHealth partners.  Monitoring 
and evaluation results shall serve as basis 
or reference for the addition of new 
national health data standards, and update 
to existing ones. 
 
Set and approve the national health data 
standards for mandatory adoption and use. 
 
Comply with the national health data 
standards change management process in 
the 
formulation, 
adoption 
and 
use, 
monitoring, evaluation, and updating of 
national health data standards. 
 
Recommend national health data 
standards for mandatory adoption 
and use based on the assessment and 
monitoring reports of the NHDS-SWG. 
 
With the assistance of the National 
Health Data Standards Sub-working 
Group, 
review 
and 
recommend 
national 
health 
data 
standards, 
conduct the necessary consultations 
and 
coordination 
with 
concerned 
stakeholders, conduct researches to 
facilitate 
application 
of 
emerging 
health 
data 
standards, 
support 
capacity-building 
initiatives, 
and 
monitor the adoption and use.  
 
Receive inputs and feedback from 
implementers of the national health 
data standards for improving the 
current data sets/standards. 
 
Regularly monitor, review, and evaluate 
the adoption and use of mandatory 
national health data standards using 
agreed method, tool, and set of indicators 
for performance monitoring, and measured 
by the progress made in improving local 
and national health data reporting from the 
source to PhilHealth and/or DOH. 
 
Develop performance metrics to measure 
the progress and success of adoption and 
use of the national health data standards. 
 
 
 
Publish the complete and updated list of 
the 
mandatory 
national 
health 
data 
standards, including their structure in a 
standard health data catalogue and made 
available electronically in the DOH – 
maintained National Health Data Dictionary 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
77 | P a g e  
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
which 
can 
be 
accessed 
at 
www.nhdd.doh.gov.ph until such time that 
a 
national 
Terminology 
Service 
is 
established, or otherwise through KMITS-
DOH. 
 
Oversee the monitoring of adoption and 
use of mandatory national health data 
standards with the assistance of the 
interagency NeHTWG and NHDS-SWG. 
Assist the DOH and PhilHealth in 
overseeing the monitoring of adoption 
and use of mandatory national health 
data standards. 
 
Regularly perform monitoring, and provide 
annual advisory updates issued every 
January of the succeeding year. 
 
 
Perform evaluation every two (2) years 
with clear directions on the scope and 
method of execution; and evaluation 
results shall be use to determine if the 
adoption of national health data standards 
is effective in attaining its goals and 
objectives in relation to UHC Act, and 
consequently 
serve 
as 
the 
basis 
or 
reference for improvements in policy and 
program implementation. 
 
 
Issue new authoritative releases every 
January of the succeeding year. 
 
 
Provide the necessary resources to support 
the mandatory adoption and use of 
national 
health 
data 
standards 
for 
interoperability. 
 
 
Provide technical assistance and guidance 
to all implementers and other concerned 
stakeholders on national 
health 
data 
standards for interoperability. 
 
 
 
National eHealth Program Management Office – KMITS, DOH 
Serve as the overall technical and administrative secretariat on all matters relating 
to the formulation, adoption and use, monitoring, evaluation and updating of 
national health data standards, in accordance with the policy directions from the 
SOH and PhilHealth PCEO as informed through the NeHTWG and NHDS-SWG. 
 
2. Implementation and Maintenance of an Integrated Health Information Systems 
 
Provide 
overall 
policy 
directions 
and 
oversight relating to the implementation 
and maintenance of an integrated HIS. 
 
Collaborate with corresponding healthcare 
providers, insurers, interagency ehealth 
partners, other relevant national and local 
government agencies, and health related 
entities in the planning and adoption of the 
most practical and feasible approaches to 
an integrated HIS. 
 
 
Set the the minimum uniform standards on 
enterprise architecture, cybersecurity, data 
privacy, ICT service components, and other 
requirements as provided under Section 36 
of the UHC Act and its implementing rules 
and regulations for conformance and 
compliance by all health care providers and 
insurers implementing and maintaining an 
integrated health information system. 
 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
78 | P a g e  
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
Provide the minimum standards that will 
guide all health care providers and insurers 
in integrating their existing or planned 
health information system. 
DOH 
Provides an integrated 
health 
information 
system 
for 
those 
entities that have no 
means or capacity to 
develop 
and 
implement, and which 
can be availed at no 
cost. 
 
 
 
Include in the licensing and accreditation 
requirements 
the 
implementation 
and 
maintenance of an integrated health 
information system starting October 2022. 
It 
shall 
also 
form 
part 
of 
the 
certification/license to operate for health-
related 
entities 
existing 
outside 
the 
jurisdiction of DOH and PhilHealth that will 
implement 
or 
are 
implementing 
any 
integrated 
health 
information 
system 
module. 
 
 
Incentivize heath care 
providers 
and 
insurers through appropriate mechanism, 
and formalized through an appropriate 
issuance. 
 
 
Establish and maintain the Centralized 
Online Integrated HIS Registration and 
Status Monitoring System to enable all 
healthcare 
providers 
and 
insurers 
to 
register 
their 
existing 
or 
ongoing 
development of HIS (Scheduled start date 
was 01 July 2021); transition plan; and 
monthly status report. 
 
Develop the transition plan and monthly 
status report templates, and process for 
their accomplishments. 
 
 
Adopt the Integrated HIS Implementation 
Module 
in 
the 
implementation 
and 
maintenance of an integrated HIS to 
progressively 
achieve 
the 
full 
implementation of all core modules and 
appropriate functionalities of integrated 
HIS. 
 
 
Define the implementation strategies and 
standards, and oversee and monitor the 
implementation and maintenance of an 
integrated HIS. 
 
 
Designate 
regional 
integrated 
HIS 
Coordinators 
who 
shall 
provide 
administrative, coordination, and technical 
assistance 
or 
support 
in 
the 
implementation and maintenance of an 
integrated HIS.  
 
 
Set performance indicators, method, and 
tool for monthly monitoring by the regional 
integrated HIS Coordinators. 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
79 | P a g e  
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
 
Issue annual advisory updates every 
January of the succeeding year based on 
monitoring results. 
 
Perform evaluation every two (2) years to 
determine if the implementation of an 
integrated HIS is effective in attaining its 
goals and objectives in relation to the UHC 
Act, and consequently, serve as basis or 
reference for improvements in policy and 
program implementation. 
 
Issue 
new 
policy 
and 
programmatic 
updates every January of the succeeding 
year. 
 
 
3. Implementation of the Standards Conformance and Interoperability Validation 
 
Together with the DICT, provide overall 
policy direction and oversight relating to 
the SCIV implementation; and act as the 
lead administrators of the SCIV. 
 
 
Plan 
and 
adopt 
ICT 
best 
practices, 
standards, and approaches to software 
validation in collaboration with healthcare 
providers, insurers, health-related entities, 
and other relevant stakeholders. 
 
 
Ensure the creation of the SCIV TWG that 
shall define the implementation strategies 
and standards, oversee, and monitor the 
implementation of the SCIV. 
 
 
Ensure 
the 
conduct 
of 
a 
bi-annual 
assessment of the SCIV implementation. 
 
 
Designate Regional SCIV Administrators 
who shall implement the SCIV process, and 
provide administrative, coordination, and 
technical assistance or support to all 
applicants.  
 
 
Ensure the creation of a SCIV testing 
methodology and SCIV Toolkit which shall 
be, 
implemented, 
and 
maintained 
accordingly following best practices, and 
standards on software validation . 
 
 
Ensure development of the Centralized 
Online 
Standards 
Conformance 
and 
Interoperability Validation System, together 
with its guidelines and standard operating 
procedures. 
 
   
 
Set performance indicators, method, and 
tool 
for 
monthly 
monitoring 
by 
the 
Regional SCIV Administrators. 
 
Issue annual advisory updates every 
January of the succeeding year based on 
monitoring results. 
 
 
Perform evaluation every two (2) years to 
determine if the implementation of the 
SCIV in attaining its goals and objectives is 
effective in relation to the UHC Act, and 
consequently, serve as basis or reference 
for improvements in policy and program 
implementation. 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
80 | P a g e  
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
 
Issue 
new 
policy 
and 
programmatic 
updates every January of the succeeding 
year. 
 
4. Implementation Guidelines on the Processing and Submission of Health and Health-Related Data 
PHILHEALTH 
Establish and maintain 
the NHDR for all health 
and health-related data 
submitted 
by 
health 
care 
providers, 
insurers, and health-
related 
entities; 
and 
Assume 
FULL 
RESPONSIBILITY 
in 
complying with existing 
and 
applicable 
laws, 
rules, 
and 
other 
relevant 
issuances 
relating 
to 
the 
processing 
and 
submission of health 
and health-related data  
through 
the 
NHDR, 
including 
data 
protection. 
  
Together with the NeHSC evaluates, 
directs, monitors, aligns, plans, and 
organizes the policy directions and 
activities relating to the processing, 
submission, data management, and 
governance of health and health-
related data. 
 
PHILHEALTH 
Act as the overall Data 
Controller as it controls 
the 
processing 
of 
health 
and 
health-
related data  through 
the NHDR. 
 
Ensures that DOH and PhilHealth shall be 
the overall Data Controller of all health and 
health-related data that their respective 
organization is processing; and assume 
FULL RESPONSIBILITY  as data custodians 
and personal information controllers. 
 
Oversee and ensure that all Data Stewards 
within their organization comply with 
existing and applicable laws, rules, and 
other relevant issuances relating to the 
processing of health and health-related 
data, including those for data protection. 
Serves as the intermediary among the 
Data Controller, Data Stewards, and 
other 
relevant 
stakeholders 
(e.g. 
standards development organizations, 
and standards setting bodies). 
 
 
PHILHEALTH 
Develop 
appropriate 
guidelines 
in 
the 
establishment 
and 
maintenance 
of 
the 
NHDR, in coordination 
with the DOH and other 
relevant agencies. 
 
 
Review and approve the operational 
guidelines in the establishment and 
maintenance of the NHDR. 
PHILHEALTH 
Provide DOH access to 
all 
health 
data 
submitted through the 
NHDR, 
subject 
to 
agreed 
service/ 
operational 
level 
agreement; 
and 
existing and applicable 
laws, 
rules, 
and 
policies. 
Ensure that a service/operational level 
agreement or its equivalent shall be 
executed by PhilHealth and DOH on access 
to all health data submitted through the 
NHDR, subject to existing and applicable 
laws, rules, and policies. 
 
 
 
Ensure implementation of a unified data 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
81 | P a g e  
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
architecture 
to 
ensure 
an 
integrated 
approach to processing, submission, data 
management, and governance of health 
and health related data, including seamless 
data sharing and exchange between them, 
and ease of data access by various 
stakeholders. 
 
Ensure that all data processing systems of 
DOH and PhilHealth shall be integrated and 
interoperable, and mandatory adopt and 
use the approved national health data 
standards for interoperability.  No data 
processing system shall be implemented as 
a stand-alone system. 
 
Ensure 
development 
of 
a 
unified 
operational guidelines that conforms to the 
data 
management 
and 
governance 
principles; specific procedures and quality 
standards in the processing of health data, 
and data access. 
 
 
Ensure that specific accountabilities of all 
those involved in the processing of health 
data are set, established, or defined. 
 
 
Ensure that DOH and PhilHealth implement 
a strong, reasonable, and appropriate 
organizational, 
physical, 
and 
technical 
security measures for data protection as 
set by the NPC and DICT in the processing 
of health data, and shall uphold and 
protect the data protection rights of all 
data subjects and the data controller at all 
times. 
 
 
Ensure compliance of the NHDR to all laws, 
regulations, policies, procedures, and other 
relevant protocols and standards. 
 
 
Determine data classification and release 
accordingly. 
 
 
Ensure unified data analysis and reporting 
generation in the BIA platform of the 
NHDR where all health data  shall be 
integrated, processed and analyzed for 
insights to support the operational, tactical, 
and strategic planning of the DOH and/or 
PhilHealth; and release of appropriate 
issuance to this effect. 
 
 
Ensure that all health care providers, 
insurers, and health-related entities shall 
process and submit health data for local 
and national health data reporting to 
PhilHealth through the NHDR, or DOH 
using their integrated health information 
system (iHIS), or any equivalent reporting 
mechanism as necessary, provided that 
health data collected from other reporting 
mechanisms shall also be submitted to 
NHDR as a single source of truth for 
health; and release of appropriate issuance 
to this effect. 
 
 
Ensure that the implementation of data 
access conforms or complies to existing 
 


---

National Health Data Repository Framework 
As of 28 March 2022 
 --------------------------------------------------------------------------------------------------------------------------------------------------- 
82 | P a g e  
 
SPECIFIC TO DOH 
OR PHILHEALTH 
DOH AND PHILHEALTH 
NeHSC/NeHTWG 
laws, rules, regulations, policies, and other 
protocols or standards. 
 
Shared responsibility in the approval and 
disapproval 
of 
data 
access 
requests, 
particularly among the concerned Data 
Stewards.   Develop guidelines in the 
receiving, evaluating, and managing data 
access requests for health data being 
controlled, in accordance with approved 
standards and other relevant policies 
issued by the NeHSC-TWG. 
 
 
FOR QUESTIONS OR FEEDBACK, 
PLEASE CONTACT 
 
Jovita V. Aragona 
Senior Vice President 
Special Assignment on UHC 
Systems Development and Enhancement 
Office of the Chief Operating Officer 
aragonaj@philhealth.gov.ph 
 
Jeanie Bernolia 
Acting Senior Vice President & CIO 
Information Management Sector 
bernoliaj@philhealth.gov.ph 
 
 
