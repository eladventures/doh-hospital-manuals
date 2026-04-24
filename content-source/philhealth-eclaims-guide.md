---
title: "PhilHealth Electronic Claims Implementation Guide v3.1"
short_title: "eClaims Implementation Guide"
category: "health-it"
year: 2013
status: "current"
issuing_body: "PhilHealth"
hospital_levels: [1, 2, 3]
uhc_section: "Sec 10-12 (claims processing)"
tier: "data"
platform_role: "api_contract"
related_docs: ['philhealth-claimform-guidelines.md', 'annex-a-medical-case-rates.md', 'phcdi-fhir-guide.md']
supersedes: null
superseded_by: null
edition: null
source_pdf: null
extraction_date: "2026-04-24"
---

# PhilHealth Electronic Claims Implementation Guide v3.1
 
 
 
 
 
 
 
 
 
 
PhilHealth  
 
 
Implementation Guide 
 
 
 
 
 
 
 
 
 
 
 
 
Date  20130109 
Version 3.1 
 
 


---

Page 1 of 74 
 
 
 
Amendment History 
 
Version 
Date 
Remarks 
Version 1.0 
20090500 
Parameters for Phase 1 & 2 , re:submission of claims 
physical documents   
Version 2.0 
20120709 
Updated version converted eClaims Phases into  Modules 
re: Full eClaims with PDF attachment 
Version 2.5 
20120718 
Parameters for Z-BITS observation feature included 
Version 3.0 
20120727 
Included Parameters for Module 3: Claim Status 
Verification re: Field/Attributes, Web service method of 
eClaims Status and eClaims Voucher 
Version 3.0 
20120924 
-Provision for copyright and disclaimer in the introduction 
- Attached PC Circular on the accreditation of HITP 
- On-site validation Tool , component 1 of Part II,    
  Conformance and Compliance Testing 
 
Version 3.0 
20121016 
- Included  provision of Confidentiality 
Version 3.1 
20121030 
- Added web services for PIN verification, Doctor 
accreditation code, Doctor accredited and Single Period of 
Confinement 
Version 3.1 
20121109 
- Excluded live urls 
Version 3.1 
20121219 
-Modified validation tools re: 
*Component 1: item K (deleted) 
*Component 2: module 1, item 9 
                                      1, item 13 
                         module 2, item A  
                         module 3, item G (deleted) 
                                      3, deleted email capability to reply 
                                          within 1 day 
 Created Component 3 for policy document and 
technical support                           
Version 3.1 
20130109 
Included document type codes and descriptions 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 2 of 74 
 
 
CONTENTS 
 
1. INTRODUCTION…………………………………………………………………………..3 
2. PREPARATIONS.…………………………….……..…………………………………….4 
    
     Procedures on how to connect to PhilHealth Web Service…………………………...4-15 
3. eClaims SYSTEM PARAMETER DEFINITIONS.………….……………………..…..16 
  Module 1: Claims Eligibility Web Service (CEWS)……….…………………………….…16-20 
           1A: PIN Verification Utility…………………………………………………….21 
           1B: Doctor Accreditation Check……...…………………………………………...21 
 
1C: Doctor Accreditation Number Utility….……………………………………...22 
 
1D: Single Period of Confinement ………………………………………………..22 
  Module 2: Electronic Claims Submission (ECS)…………………………………......…….23-26 
                   File Structure…..…………………………………………………………27-30 
 
       Document Type Definition (DTD version 3)………..…………………………....31 
                  Procedures on checking for XML conformity………………………………..……32 
                  XML File Transmission Web Service Method……………………...……........…33 
                 Hospital and PhilHealth Claims Mapping………….…………………………..34 
  Module 3): Claim Status Verification (CSV)….………………….…….…………………..…...35 
 
     Field/Attribute/Parameter…………………………………………………..35-36 
                 Getting the Current Claim Status DTD.……………………………………….37 
 
                     eClaims Status Web Service Method…………………………………38 
                 Getting the Voucher Details DTD.............................................................................39 
                                 eClaims Voucher Web Service Method…………………………...39-42 
4. CONFIDENTIALITY……………………………………………………………..…43-44    
5. ANNEXES……………………………………………………………………………….45 
Annex A: Sample Z-claims XML……………………………………………………...46-47 
Annex B: Sample eClaims Voucher Def-Formatted-With Value.XML………………………..48 
Annex C:Tips on Consuming PhilHealth Web Service……………………………………49-56 
Annex D: Connectivity Troubleshooting……………………………………………………57  
     How to install Certificates in the browser using Firefox users……………………..57-58 
     How to install Certificates using Internet Explorer……………………………...59-60 
Annex E: Revocation of Certificates and Procedure…………………………………………...61 
Annex F: eClaims Account Profile for Digital Certificate Generation…………………………..62 
          F-1:Non Disclosure Agreement……………………………………………………..63 
Annex G: PhilHealth Circular 38-Accreditation of Health Information Technology Providers…...64-67 
Annex H: Conformance and Compliance Testing Validation Tool Component 1………….…...68-69 
Annex I: Conformance and Compliance Testing Validation Tool Component  2……….……...70-72 
 
            Annex J: Conformance and Compliance Testing Validation Tool Component  3…. …………...73 
 
Annex K: List of document types and codes……………………………………………….74 
 
 


---

Page 3 of 74 
 
 
1.  INTRODUCTION 
 
Philippine Health Insurance Corporation (PhilHealth), Republic of the Philippines (2012) 
 
Copyright to this material belongs to PhilHealth. Apart from any fair dealing for personal, academic, 
research or non-commercial use, no part may be reproduced without written permission of PhilHealth. 
PhilHealth is under no obligation to grant this permission. Please acknowledge the Philippine Health 
Insurance Corporation when reproducing or quoting material from this source 
 
Important Disclaimer: 
All information and content in this Material is provided in good faith by PhilHealth, and is based on 
sources believed to be reliable and accurate at the time of development. The Philippine Health 
Insurance Corporation, and their respective officers, employees and agents, do not accept legal liability 
or responsibility for the Material, or any consequences arising from its use. 
 
Philippine Health Insurance Corporation (PhilHealth) is committed to ensuring ease of availment at the 
point of care for all its beneficiaries. 
 
As such, in 2011, the Corporation launched the eClaims Project through PhilHealth Circular No.14 and 
Office Order No. 69 which broadly aims to streamline key processes such as eligibility check, claims 
submission, verification and payment in order to serve both members and partner providers better. The 
eClaims Project had three phases, namely 
 
 
 Phase I or Claims Eligibility Web Service (CEWS)  
 
Phase II or Electronic Claims Submission (ECS) 
 
Phase III or Claims Status Verification/Payment (CSV) 
 
Republic Act 8792 or the e-Commerce Act was signed into law on June 14, 2000, and mandated all 
government agencies to, among others, transact government business and perform government 
functions using electronic data messages or electronic documents. It therefore provides for the legal 
recognition of electronic documents, data messages, electronic signatures and electronic contracts. RA 
8792 provides the legal framework and environment for the PhilHealth eClaims System. 
 
In view thereof, PhilHealth is scaling up the eClaims project to ensure key processes are performed with 
utmost efficiency.  The goal of the enhanced eClaims system is to reform business transactions between 
PhilHealth and IHCPs by establishing an efficient web-based online information technology scheme in 
all IHCPs that would effectively improve claims processing systems. 
 
The enhanced eClaims system shall introduce the following features, to wit: 1) a paper-free claims 
transaction through a fully electronic and online submission of reimbursement claim documents by 
IHCPs; 2) online evaluation and processing of claims in PhilHealth regional and service offices; and 3) 
online tracking and status verification of claims; and,  
 
This document applies to accredited IHCP and Health Information Technology Provider (HITP) which 
will serve as conduits between PhilHealth and IHCPs and provide the latter with utilities to enable 
access to the PhilHealth eClaims system. 
 


---

Page 4 of 74 
 
 
2. PREPARATIONS 
 
 
PROCEDURES ON HOW TO CONNECT TO eCLAIMS WEB SERVICE WITH DIGITAL 
CERTIFICATES  USING PROXYSERVER 
 
Step 1.  Prepare the I.T. hardware/Operating system requirements 
 
 
a. Computer with Windows OS (Windows XP or later and Windows 2003 or Later) with direct    
 
    Internet Connection and WinRAR installed.  
 
 
 
b. Claims Web Service package named “eClaims Web Service.rar” which contains the following:  
  OpenSSL application  
 Dll files  
 
      i. libeay32.dll  
 
      ii. ssleay32.dll  
 Cert folder containing  
       i. Certificate (.pfx file) - This is your PhilHealth assigned client digital certificate  
       ii. Root certificate (.cer file)  
 Proxy Server Application (ProxyServer.exe)  
 Client Test Application (ClientTest.exe)  
 Updator. exe – This is used by the Proxy Server Application to get updates from the server  
 
Step 2.  Get the e Claims Web Service Package:  
 
a. Fill-up the eClaims Account Profile (eCAP) Form (Annex F) and Non-Disclosure Agreement 
(Annex F-1).  
 
b. Email the forms at hitpac@philhealth.gov.ph for digital certificate generation. 
 
c. PhilHealth will only email the eClaims Web Service Package to the official email address as 
specified in the eCAP. 
 
d. Upon receipt of the packages, confirm directly to PhilHealth at network@philhealth.gov.ph  or 
it.helpdesk@philhealth.gov.ph for the certificate password and the password to extract the 
eClaims Web Service Package. 
 
Step 3.  Proceed with the configuration of digital certificate  
 
Overview:  
 
a. Extract the package, i.e., “eClaims Web Service.rar”  
 
 
 
b. Extract the key and certificate from the .pfx file.  
i. Extract the certificate file (.pem) from the client certificate (.pfx), i.e.  
 
openssl.exe pkcs12 -clcerts -nokeys -in "C:\eClaims Web Service\cert\phichospital.pfx" -out 
"C:\eClaims Web Service\Cert\phichospitalcert.pem"  
 
ii. Extract the certificate key (.pem) from the same client certificate (.pfx), i.e.  
 


---

Page 5 of 74 
 
openssl.exe pkcs12 -nocerts -in "C:\eClaims Web Service\cert\phichospital.pfx" –out "C:\eClaims 
Web Service\Cert\phichospitalkey.pem"  
 
 
c. Run the Proxy Server and point to the URLs to connect to the eClaims web services and  
certificates, i.e.,  
 
i. For eClaims Module 1 & 2 Test environment, use  
 
 
 
                   https://cws.philhealth.gov.ph/bin  
 
 
ii. c:\eClaims web service\cert\phichospitalcert.pem  
 
iii. c:\eClaims web service\cert\phichospitalkey.pem  
 
iv. c:\eClaims web service\cert\phicrootca.cer  
 
v. Enter the passphrase  
 
vi. Start the Server  
 
 
 
d. Point your eClaims modules to connect to the computer where the PROXY SERVER is 
running,  
 
 
 
i.e., http://computername:8098/soap 
 
Step by Step Configuration:  
 
 
1. Save the “eClaims Web Service.rar” in drive “C” or any drive in your workstation  
 
 
 
 
2. Extract the .rar file  
 
 
 


---

Page 7 of 74 
 
 
3. Input the password provided in the email that was sent by PhilHealth then click “OK”.  
 
 
 
 
4. Click on the eClaims Web Service folder to open.  
 
 
 
 
5. The contents of the folder should be the following: OpenSSL folder containing the openSSL application, 
libeay32.dll file, ssleay32.dll file, “cert” folder, “Proxy Server” Application, “Client Test” Application, 
and the “Updator.exe”.  
 
 
 


---

Page 8 of 74 
 
 
6. After checking the contents of the folder, click on the “Start” button or the “Windows Logo” button 
then go to “Accessories” then right click on the “Command Prompt” application. Click on “Run as 
Administrator” the command prompt should appear.  
 
 
 
7. Locate the Key file (phichospitalkey.pem) and Client certificate (phichospitalcert.pem) which will be used by 
the Proxy Server Application to connect to the Claims Web Service. On the Command Prompt window, go 
to the folder where the openssl.exe resides. In this guideline, the openssl.exe resides in the “C:\eClaims 
Web Service\openssl\bin\ “.  
 
 
 
8. To extract the Key file (phichospitalkey.pem) type the following script into the Command Prompt then press 
ENTER:  
openssl.exe pkcs12 -nocerts -in "<path where the .pfx file resides>\certificate.pfx"-out "<path 
where you want to save the .pem file>\key.pem”  
In this guideline, use the following script:  
openssl.exe pkcs12 -nocerts -in "C:\eClaims Web Service\cert\phichospital.pfx" -out "C:\eClaims Web 
Service\cert\phichospitalkey.pem"  
 


---

Page 9 of 74 
 
 
 
9. Input the password of the certificate (.pfx) exactly as provided in the email that PhilHealth sent then press 
ENTER. 
 
 
10. If you have entered the password successfully, the command prompt will ask you to provide a “PEM 
pass phrase” for the “Key file”. Copy the PEM pass phrase exactly as 
provided. 
 


---

Page 10 of 74 
 
11. After successfully inputting the “PEM pass phrase”, a new file (phichospitalkey.pem) will be created in the 
“cert” folder. This is the certificate key file.  
 
 
 
12. To extract the Client certificate file (phichospitalcert.pem) type the following script into the Command 
Prompt then press ENTER:  
openssl.exe pkcs12 -clcerts -nokeys -in "<path where the .pfx file resides>\certificate.pfx" –
out"<path where you want to save the .pem file>\cert.pem”  
In this guideline, use the following script:  
openssl.exe pkcs12 -clcerts -nokeys -in "C:\eClaims Web Service\cert\phichospital.pfx" -out "C:\eClaims Web 
Service\cert\phichospitalcert.pem"  
 
 
 
13. Input the password of the certificate (.pfx) which was provided in the email that PhilHealth has sent then 
press ENTER. A new file (phichospitalcert.pem) will be created in the “cert” folder. This is the certificate file.  
 


---

Page 11 of 74 
 
 
 
 
 
14. Once the Key and the Client Certificate have been successfully extracted into the .pem file, these will be 
used together with the Root Certificate to run the Proxy Server Application. But before running the proxy 
server application, set the compatibility properties of the said application. Right click the “Proxy Server” 
application then click on “Properties”.  
 
 
 


---

Page 12 of 74 
 
15. Click on the “Compatibility” tab then check if the “Run this program in compatibility mode” is 
enabled then select “Windows XP (Service Pack3)” on the drop down list under the Compatibility mode, 
put a check on the Run the program as an administrator under the Privilege Level, then Click “OK”.  
 
 
 
16. Open “Proxy Server” application. 
 
17. The Proxy Server application will appear. Input the following then click “Start Server” button:  
 
 
 
a. At the “Add Server” portion, input https://cws.philhealth.gov.ph/bin . The proxy server will 
load on the Test environment. 
 
 
 
 


---

Page 13 of 74 
 
 
b. Select the “Client Certificate” (.pem) that you created on Step 11. Input “C:\eClaims Web 
Service\cert\phichospitalcert.pem”  
 
 
 
c. Select the “Key file” (.pem) that you created on Step 8. Input “C:\eClaims Web 
Service\cert\phichospitalkey.pem”  
 
d. Key in the PEM Pass Phrase you created on Step 10.  
 
 
e. Select the Root Certificate. Input “C:\eClaims Web Service\cert\publicrootca.cer”  
 
 
 
f. “Check for Updates” button is used to run the “Updator.exe” which will automatically update 
the version of the Proxy Server application. PhilHealth will send an email if there is a new version of 
the Proxy Server application.  
 
g. The button is disabled by default but when the server is started it will automatically be enabled. 
This button is used to verify connectivity of the servers listed.  
 
 
 
h. “Clear List” button is used to clear the contents of the PhilHealth Servers list.  
 
i. Click the “Start Server” button to run the Proxy Server application.  
 
 
 
18. To test whether your application is now connected to PhilHealth’s Claims Web Service, use the “Client 
Test” application.  
 
19. Open the     
. Then click on the “Server Date Time” button. The application should display 
the correct date and time of the server. If the application window is minimized, click the maximize button to 
check whether the application displays the correct date and time of the server.  
 


---

Page 14 of 74 
 
 
 
Congratulations! You have successfully connected to the PhilHealth Web Service with Digital Certificates 
using the PhilHealth Proxy Server.  
 
 
20. To use these proxy servers, direct your eClaims modules to the following: http://localhost:8098/soap 
(for local clients) or http://<PCNAME>:8098/soap, replacing <PCNAME> with the IP address or 
computer name of the workstation where the proxy runs.  
 
Step 4. Proceed with the development of eClaims Modules 
            ……………………………………………………………...Module 1,  see pages 13-16 
 
……………………………………………………………..Module 2, see pages   17-28 
 
…………………………………………………….……….Module 3. see pages  29-36 
 
In conducting the test with all the modules, check always your URL.Refer to the sample screenshots below. 
 
A. This should be the appearance of your proxy server running on a test environment 
 
 
 
A prompt message  “HOSPITAL NOT REGISTERED FOR ONLINE” will display on your first 
encounter while sending an eligibility test query to CEWS. Kindly inform and provide the hitpac secretariat 
the screenshot of the message for documentation and registration.   
 
Note: (Not applicable to Phase 1 CEWS users) 


---

Page 15 of 74 
 
 
 
 
 
 
 
 
Step 5. If all modules are completed, email hitpac@philhealth.gov.ph for 
scheduling of conformance and compliance testing of PhilHealth. 
 
 
Step 6. Applicant provider will be notified through email of the results of the 
conformance and compliance testing. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 16 of 74 
 
 
 
 
 
 
 
 
 
 
3. eClaims System  
Parameter Definition 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 17 of 74 
 
MODULE 1: CLAIMS ELIGIBILITY WEB-SERVICE (CEWS) 
 
The CEWS addresses eligibility of a member and valid dependents. Particularly it validates status the 
profile information of the following: 
a. Member validity; 
b. Patient who is a dependent of the member; 
c. 45 days confinement 
d. Qualifying posted contribution (3/6 and 9/12) 
 
Verification should be made upon admission (initial call) and after discharge (final call). The final call is 
where the authorization code (AC) is generated for confirming eligibility for member to avail of his/her 
appointment. 
 
The following are the proposed format to be used as guide for developing the prototype for claims 
eligibility function: 
 
Web Service Method: 
 
isClaimEligible ( pUserName, pUserPassword, pHospitalCode, pPIN, pMemberLastName, 
pMemberFirstName, pMemberMiddleName, pMemberSuffix, pMemberBirthDate, pMailingAddress, 
pZipCode, pPatientIs, pAdmissionDate, pDischargeDate, pPatientLastName, pPatientFirstName, 
pPatientMiddleName, pPatientSuffix, pPatientBirthDate, pPatientGender, pMemberShipType, pPEN, 
pEmployerName, pRVS, pTotalAmountActual, pTotalAmountClaimed, pIsFinal) 
 
 
Parameter Definition 
 
Name 
Length 
Description 
Valid Values 
pUserName 
String(20) 
Provider user id 
To be provided by PhilHealth 
pUserPassword 
String(20) 
Provider user password 
To be provided by PhilHealth 
pHospitalCode 
String(12) 
Facility Accreditation Number 
For now PMCC number should be used 
pPIN 
String(12) 
PhilHealth Identification Number – a unique 12 
digit number assigned to a member. 
The last character in the PIN is a 
modulus 11 check digit. 
pMemberLastNa
me 
String(60) 
Member‟s Complete Surname 
Any value consisting of : „A‟ to „Z‟, „Ñ‟. 
Can include a space in between 
characters 
pMemberFirstna
me 
String(60) 
Member‟s Complete First name 
pMemberMiddle
Name 
String(60) 
Member‟s Complete Middle name 
pMemberSuffix 
String(5) 
Member‟s Suffix name 
„JR‟, „SR‟, „III‟, …etc  
Suffixes can be blank 
pMemberBirthDa
te 
String(10) 
Member‟s Birth Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pMailingAddress 
String(150) 
Mailing Address (address where the benefit 
payment notice will be sent) 
Should not be blank 
pZipCode 
String(4) 
Philippine Zip Code of the municipality 
Should not be blank 
pPatientIs 
String(1) 
Flag whether patient is the member or if 
dependent the relationship of patient with the 
member. 
 „M‟ – patient is member(Self) 
 „S‟ – patient is spouse 
 „C‟ – patient is child 
 „P‟ – patient is parent  
pAdmissionDate 
String(10) 
Admission Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pDischargeDate 
String(10) 
Discharge Date 
pPatientLastNam
e 
String(60) 
Patient‟s Complete Surname 
Same as for the member. These can be 
blank since these are disregarded if the 
value of pPatientIs is „M‟ 
pPatientFirstNa
me 
String(60) 
Patient‟s Complete First name 
pPatientMiddleN
ame 
String(60) 
Patient‟s Complete Middle name 


---

Page 18 of 74 
 
pPatientSuffix 
String(5) 
Patient‟s Suffix name 
„JR‟, „SR‟, „III‟, …etc  
Suffixes can be blank 
pPatientBirthDat
e 
String(10) 
Patient‟s Birth Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pPatientGender 
String(1) 
Patient‟s Gender 
M – Male 
F - Female 
pMemberShipTy
pe 
String(2) 
PhilHealth membership type of the member 
(Not limited to the following :) 
„S‟ – Employed Private 
„G‟ – Employer Government 
„I‟ – Indigent 
„NS‟ – Individually Paying 
„NO‟ – OFW 
„PS‟ – Non Paying Private 
„PG‟ – Non Paying Government 
pPEN 
String(12) 
PhilHealth Employer Number – a unique 12 digit 
number assigned to an employer 
These are disregarded if 
pMemberShipType is not („S‟ or „G‟) 
pEmployerName 
String(100) 
The Registered name of the employer 
pRVS 
String(6) 
RVS code of the surgical procedure to be done 
to the patient. 
Leave blank if no surgery is to be done. 
pTotalAmountAc
tual 
String(12) 
Actual Amount of the Hospital Bill 
Hospital Charges only. Formatted as: 
„#######.##‟ 
pTotalAmountCl
aimed 
String(12) 
Amount to be reimbursed by PhilHealth 
pIsFinal 
String(1) 
Flag for Initial and Final Call. 
Limited to the following: 
„0‟ – Initial 
„1‟ - Final 
Note : All the fields are required unless otherwise specified that it can be blank or disregarded. 
 
Response Definition 
The response of the service is in the form of an XML file.  
 
An example “YES” Xml Response :  
 
<RESPONSE  
      ISOK="YES"  
      TRACKING_NUMBER="1234561212000011" 
      REMAINING_DAYS="44" 
      ASOF="12-19-2012"> 
  <PATIENT 
      PATIENTIS="M" 
      LASTNAME="DELA CRUZ" 
      FIRSTNAME="JUAN" 
      MIDDLENAME="OCAMPO" 
      SUFFIX="JR" 
      BIRTHDATE="09-15-1970" 
  ></PATIENT> 
  <CONFINMENT> 
      ADMITTED="12-19-2012" 
      DISCHARGE="12-19-2012" 
  </CONFINMENT> 
  <MEMBER 
      PIN="190905703882" 
      MEMBER_TYPE="P" 
      LASTNAME="DELA CRUZ" 
      FIRSTNAME="JUAN" 
      MIDDLENAME="OCAMPO" 
      SUFFIX="SR" 
      BIRTHDATE="09-15-1970" 
  ></MEMBER> 
  <EMPLOYER> 
      PEN="019000029665" 


---

Page 19 of 74 
 
      NAME="SAMPLE HOSPITAL" 
  </EMPLOYER> 
  <DOCUMENTS> 
  </DOCUMENTS> 
</RESPONSE> 
For the “YES” Response, the developer of the module 1 should be able to display the Tracking Number 
(TN) . The same TN will later be used for the uploading of  electronic claims. 
 
The following sample can be used: 
 
 
 
 
 
An example “NO” Xml Response :  
 
<RESPONSE  
      ISOK="NO"  
      TRACKING_NUMBER="" 
      REMAINING_DAYS="" 
      ASOF="12-19-2012"> 
  <PATIENT 
      PATIENTIS="D" 
      LASTNAME="DELA CRUZ" 
      FIRSTNAME="MARIA" 
      MIDDLENAME="BAUTISTA" 
      SUFFIX="" 
      BIRTHDATE="01-01-2005" 
  ></PATIENT> 
  <CONFINMENT> 
      ADMITTED="12-19-2012" 
      DISCHARGE="12-19-2012" 
  </CONFINMENT> 
  <MEMBER 
      PIN="190905703882" 
      MEMBER_TYPE="S" 
      LASTNAME="DELA CRUZ" 
      FIRSTNAME="JUAN" 
      MIDDLENAME="OCAMPO" 
      SUFFIX="JR" 
      BIRTHDATE="09-15-1970" 
  ></MEMBER> 
  <EMPLOYER> 
      PEN="019000029665" 


---

Page 20 of 74 
 
      NAME="SAMPLE HOSPITAL" 
  </EMPLOYER> 
  <DOCUMENTS> 
      <DOCUMENT  
       CODE="PBC"  
       NAME="PATIENT'S BIRTH CERTIFICATE">UNDECLARED DEPENDENT 
      </DOCUMENT> 
      <DOCUMENT  
       CODE="MBC"  
       NAME="MEMBER'S BIRTH CERTIFICATE">DISCREPANCY-MEMBER’S FIRSTNAME;DISCREPANCY-  
       MEMBER’S LAST NAME 
      </DOCUMENT> 
  </DOCUMENTS> 
</RESPONSE> 
 
The message remarks should be relayed to the member or authorized representative of the member for 
compliance of the listed documents to be submitted to the hospital for document scanning which will be 
part of module 2. 
 
The following sample can be used. 
 
 
 
 
 
 
 
 
  
 
 
 
 
 
 
 


---

Page 21 of 74 
 
Module 1A : PIN Verification Utility (PVU) 
 
This utility allows member through the IHCP to look up its PhilHealth Identification Number (PIN)  in 
the event the member does not know his PIN. The hospital needs to enter the information of the member 
such as the complete name including the suffix if applicable and birth date. 
 
Web Service Method: 
 
GetMemberPIN 
(Result, 
pUserName, 
pUserPassword, 
pHospitalCode, 
pMemberLastName, 
pMemberFirstName, pMemberMiddleName, pMemberSuffix, pMemberBirthDate) 
 
 
For successful transaction, a PhilHealth Number will display:  
e.g. 
 
 
 
For unsuccessful transaction, the method will return either of the following: 
a.) No PhilHealth Identification Number  
 
 
 
 
b.) Multiple PIN 
 
 
 
 
 
Module 1B: Doctor Accreditation Check  
 
isDoctorAccredited (Result, pUserName, pUserPassword, pHospitalCode, pDoctorAccreCode, 
pAdmissionDate, pDischargeDate) 
 
For case rates, cases attended by non-accredited doctors are denied. Another functionality of the system is 
its capacity to check whether or not the attending doctor is accredited. The hospital clerk needs to enter 
the information of the doctor such as doctor accreditation code, admission date and discharge date. The 
admission date and discharge date will be checked against the validity of the doctor‟s accreditation.  
 
< eACCREDITATION 
IsAccredited=”” 
 
pDoctorAccreCode=”” 
 
pAdmissionDate=”” 
pDischargeDate=””> 
 
 
 
For successful transaction, 
 
PhilHealth will display “Doctor is accredited based on admission or discharge date” 
 
 
For unsuccessful transaction, 
 
PhilHealth will display “Doctor is not accredited based on admission or discharge”  
 
 
NO RECORD FOUND. REGISTER ONLINE OR 
PROCEED TO ANY PHILHEALTH OFFICE  
MULTIPLE 
RECORDS 
FOUND. 
PLEASE 
PROCEED TO ANY PHILHEALTH OFFICE FOR 
PIN CLEANUP 
19-0000220202 


---

Page 22 of 74 
 
Module 1C: Doctor Accreditation Number Utility (under construction) 
 
GetDoctorPAN (Result, pUserName, pUserPassword, pHospitalCode, pDoctorTIN, pDoctorLastName, 
pDoctorFirstName, pDoctorMiddleName, pDoctorSufix, pDoctorBirthDate) 
 
In the event the doctor does not know his accreditation number, he can check using the Doctor 
Accreditation Number Utility. This utility is a free look up of Doctor Accreditation Number. The hospital 
clerk needs to enter the information of the doctor such as complete name and date of birth. 
(For implementation) 
 
 
For successful transaction, 
 
PhilHealth will display the 12 digits accreditation number “0000-0000000-0”  
 
 
For unsuccessful transaction, 
 
PhilHealth will display “ Database exception: Doctor does not exist” 
 
 
Module 1D: Check Single Period of Confinement  
 
CheckSinglePeriod(Result,pPIN,pPatientIs,pPatientLastName,pPatientFirstName,pAdmissionDate,Philhe
althClaimType, pICDCodes, pHighRVSs, pCaseRateCode) 
 
Single period of confinement refers to a confinement or series of confinements for the same illness with 
intervals of not more than 90 days. In such cases, they can only avail of the unused portion of the benefits 
and room and board allowance until the 45 days allowance is exhausted.  
 
 
 
PhilHealth will display “ Same illness within 90 days”  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 23 of 74 
 
MODULE 2: ELECTRONIC CLAIMS SUBMISSION (VERSION 3.0) 
 
 
The following are the proposed format to be used as guide for hospital systems accomplishing and 
transmitting electronic PhilHealth claims.  These files should be submitted together with scanned images 
of the actual claim documents to support electronic version. These documents shall be uploaded to a web 
server provided by the hospital and later on will be viewed by PhilHealth via https. 
 
FIELD/ATTRUBUTE/PARAMETER DEFINITION 
Name 
Length 
Description 
Valid Values 
pUserName 
String(20) 
Provider user id 
To be provided by PhilHealth 
pUserPassword 
String(20) 
Provider user password 
To be provided by PhilHealth 
pHospitalCode 
String(12) 
Facility Accreditation Number 
For now PMCC number should be used 
pHospitalTransmittalNo 
 
Hospital Transmittal Number 
Generated by the Hospital own batching system. 
This should be unique per hospital. 
pTotalClaims 
String(3) 
Claims counter 
Integer format 
pHospitalEmail 
 
String(150) 
Hospital Email Address where communication will 
be sent 
Can be blank 
pClaimNumber 
String(12) 
Hospital Claim Number 
Hospital Generated Claim Case #, this should be 
unique per hospital 
pTrackingNumber 
String(20) 
The Claims Eligibility Tracking number assigned if 
undergone the Online Eligibility Checking 
Formatted as:  
„####-####-####-####‟ 
Can be blank 
pClaimSeriesLhio 
String(15) 
PhilHealth Generated and Assigned Unique Number 
per Claim 
Can be used by the hospital to reconcile their 
records with PhilHealth 
This will be returned after the claim are uploaded 
to PhilHealth 
pPIN 
String(12) 
PhilHealth Identification Number – a unique 12 digit 
number assigned to a member. 
The last character in the PIN is a modulus 11 
check digit. 
pMemberShipType 
String(2) 
PhilHealth membership type of the member 
(Not limited to the following :) 
„S‟ – Employed Private 
„G‟ – Employer Government 
„I‟ – Indigent 
„NS‟ – Individually Paying 
„NO‟ – OFW 
„PS‟ – Non Paying Private 
„PG‟ – Non Paying Government 
pMemberLastName 
String(60) 
Member‟s Complete Surname 
Any value consisting of : „A‟ to „Z‟, „Ñ‟. Can 
include a space in between characters 
pMemberFirstname 
String(60) 
Member‟s Complete First name 
pMemberMiddleName 
String(60) 
Member‟s Complete Middle name 
pMemberSuffix 
String(5) 
Member‟s Suffix name 
„JR‟, „SR‟, „III‟, …etc  
Suffixes can be blank 
pMemberBirthDate 
String(10) 
Member‟s Birth Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pMailingAddress 
String(150) 
Mailing Address (address where the benefit payment 
notice will be sent) 
This is where the notices will be mailed. 
pMobileNo 
String(20) 
Members Cell Number 
Can be blank 
pLandlineNo 
String(20) 
Members Landline Number 
Can be blank 
pZipCode 
String(4) 
Philippine Zip Code of the municipality 
4 digit Philippine zip code value of the 
municipality/city 
pEmailAddress 
String(150) 
Email Address 
Can be blank 
pPEN 
String(12) 
PhilHealth Employer Number – a unique 12 digit 
number assigned to an employer 
These are disregarded if pMemberShipType is 
not („S‟ or „G‟) 
pEmployerName 
String(100) 
The Registered name of the employer 
pPatientIs 
String(1) 
Flag whether patient is the member or if dependent 
the relationship of patient with the member. 
 „M‟ – patient is member(Self) 
 „S‟ – patient is spouse 
 „C‟ – patient is child 
 „P‟ – patient is parent  
pPatientLastName 
String(60) 
Patient‟s Complete Surname 
Same as for the member. These can be blank 
since these are disregarded if the value of 
pPatientIs is „M‟ 
pPatientFirstName 
String(60) 
Patient‟s Complete First name 
pPatientMiddleName 
String(60) 
Patient‟s Complete Middle name 
pPatientSuffix 
String(5) 
Patient‟s Suffix name 
„JR‟, „SR‟, „III‟, …etc  
Suffixes can be blank 
pPatientBirthDate 
String(10) 
Patient‟s Birth Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pPatientGender 
String(1) 
Patient‟s Gender 
M – Male 
F - Female 


---

Page 24 of 74 
 
pAdmissionDate 
String(10) 
Admission Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pDischargeDate 
String(10) 
Discharge Date 
pAdmissionTime 
String(10) 
Admission Time 
Time Format should be : 
„HH:MM:SSAM/PM‟ 
pDischargeTime 
String(10) 
Discharge Time 
pPatientExpired 
String(1) 
Flag whether the patient died 
 „T‟ – True 
 „F‟ – False 
pDateOfDeath 
String(1) 
Date of Death of patient 
Date Format should be :  
„MM-DD-YYYY‟ 
pTotalAmountActual 
String(12) 
Actual Amount of the Hospital Bill 
Hospital Charges only. Formatted as: 
„#######.##‟ 
pTotalAmountClaimed 
String(12) 
Amount to be reimbursed by PhilHealth 
pAdmissionDiagnosis 
String(500) 
Admission Diagnosis 
Can be multiple lines 
pFinalDiagnosis 
String(500) 
Final Diagnosis 
Can be multiple lines 
pIsOPD 
String(1) 
Flag whether Out-Patient case 
 „T‟ – True 
 „F‟ – False 
pIsEMG 
String(1) 
Flag whether Emergency case 
 „T‟ – True 
 „F‟ – False 
pICDCode 
String(10) 
ICD 10 Code of the illness 
Refer to ICD10 library 
pIllnessCaseType 
String(1) 
Case Type of the illness 
 „A‟ – Case Type A 
 „B‟ – Case Type B 
 „C‟ – Case Type C 
 „D‟ – Case Type D 
pClaimedDays 
String(2) 
Number of days being claimed  
Integer formatted as string sample for 3 day : 
„03‟ or „3‟ 
Usually equal to # of days confined, for 
opd/package this is default to „1‟ 
pRoomType 
String(1) 
Type of Room 
 „P‟ – Private 
 „W‟ – Ward 
pAmtActual 
String(12) 
Actual amount of charge per benefit 
Formatted as: „#######.##‟ 
pAmtClaimed 
String(12) 
Claimed amount of charge per benefit 
Formatted as: „#######.##‟ 
pAmtPaidByMember 
String(12) 
Amount Paid by the member as reflected in the SOA 
Formatted as: „#######.##‟ 
pDrugCode 
String(20) 
Hospital Assigned Drug Code 
Can be any format 
pPNDFCode 
String(20) 
PNDF Code (Blank until PNDF lib is available) 
Can be Blank for now 
pGenericName 
String(50) 
Generic Name of Medicines/Drugs taken 
Must not be blank 
pBrandName 
String(50) 
Brand Name of Medicines/Drugs taken 
Must not be blank 
pPreparation 
String(30) 
Dose/ Cap/ Syrup/ Injectible/ Tab with ml/mg/gm 
content 
Must not be blank 
pQuantity 
String(10) 
Unit quantity of item 
Integer format 
pUnitPrice 
String(10) 
Unit price of item 
Formatted as: „#######.##‟ 
pDiagnosticType 
String(20) 
Type of diagnostic/test done 
 „IMAGING‟ 
 „LABORATORY‟ 
 „SUPPLIES‟ 
 „OTHERS‟ 
pParticulars 
String(50) 
Name of Imaging procedure for Imaging,  
Name of Laboratory procedure for Laboratory,  
Name of Supplies for Supplies or Others for Supplies 
and Others 
Must not be blank 
pHospClaimantType 
String(1) 
Claimant type for the benefit 
 „H‟ – Hospital 
 „M‟ – Member 
pPhilhealthClaimType 
String(20) 
Flag whether Claims Payment Mechanism 
 „FEE-FOR-SERVICE‟ 
 „PACKAGE‟ 
 „CASE-MIX‟ 
 „CASE-RATE‟ 
pPackageRVS 
String(7) 
The Assigned RVSCode for the package 
Integer format 
Required when pPhilHealthClaimType=‟ 
PACKAGE‟ 
pPackageName 
String(10) 
Benefit Packages 
 „AH1N1‟ 
 „CATARACT‟ 
 „TBDOTS‟ 
 „MCP‟ – Maternity Care 
 „NSD‟ – Normal Spontaneous Delivery 
 „NBCP‟ – New-born care 
 „VASBTL‟ – Surgical Contraception 
 
Required when pPhilHealthClaimType=‟ 
PACKAGE‟ 
pMaternityClaimType 
String(1) 
Type of maternity package claim 
 „0‟ – Pre Natal 
 „1‟ – Normal Delivery 
 „2‟ – New Born Care 
 „3‟ – Post Natal 


---

Page 25 of 74 
 
Required for maternity package only 
pCaseRateCode 
String(7) 
Case Rate Codes 
 'IDENG1' - DENGUE I 
 'IDENG2' - DENGUE II 
 'IPNEU1' - PNEUMONIA I 
 'IPNEU2' - PNEUMONIA II 
 'IESSHY' - ESSENTIAL HYPERTENSION 
 'ICVA_1' - CVA I (INFARCTION) 
 'ICVA_2' - CVA II (HEMORRHAGE) 
 'IAGE' - ACUTE GASTROENTERITIS 
(AGE) 
 'ITYPOI' - TYPHOID FEVER 
 'IASTHM' - ASTHMA 
 'P47090' - APPENDECTOMY 
 'P51200' - CHOLECYSTECTOMY 
 'P74991' - CAESARIAN SECTION 
 'P75091' - DILATION AND CURETAGE 
 'P39950' - HEMODIALYSIS 
 'P53000' - HERNIORRHAPY 
 'P75095' - HYSTERECTOMY 
 'P85400' - MASTECTOMY 
 'P73594' – MCP (Maternity Care Package for 
Non-hospitals) 
 'P99430' – NCP (Newborn Care Package) 
 'P73591' - NSD 
 'P92290' - RADIOTHERAPHY 
 'P63900' - THYROIDECTOMY 
 'CATAR' - CATARACT 
 'TBDOTS' - TB-DOTS 
 'HIVAIDS' - HIV-AIDS 
 'MALARIA' – MALARIA 
pIsFirstPregnancy 
String(1) 
For pregnancy cases, flag whether case is first 
pregnancy of patient 
 „T‟ – True 
 „F‟ – False 
Required for NSD claims under non-hospital 
facility 
pLMPDate 
String(10) 
Last Menstrual Date 
Date Format should be :  
„MM-DD-YYYY‟ 
Required for prenatal claims under non-hospital 
facility 
pInitialCheckUpDate 
String(10) 
Initial Checkup Date 
Date Format should be :  
„MM-DD-YYYY‟ 
Required for prenatal claims under non-hospital 
facility 
pDeliveryDate 
String(10) 
Delivery Date 
Date Format should be :  
„MM-DD-YYYY‟ 
Required for postnatal claims under non-hospital 
facility 
pTBType 
String(1) 
Type of TB-Dots claim 
 „I‟ – Intensive Phase 
 „M‟ – Maintenance 
NOTE 
For „I‟, admission and discharge dates should be 
the first and last days of treatment in the 
intensive phase respectively. 
For „M‟, admission and discharge dates should 
be the first and last days of treatment in the 
maintenance phase respectively. 
Required for TB-DOTS claims only 
pNTPCardNo 
String(10) 
NTP Card No 
Required for TB-DOTS claims only 
pPhilhealthCBG 
String(5) 
PhilHealth Cost Based Group 
CBG Code 
Required when PhilHealthClaimType=‟CASE-
MIX‟ 
pCBGDescription 
String(50) 
CBD Description 
Can be Blank 
pDoctorAccreCode 
String(12) 
Doctor‟s Accreditation Number 
Formatted as: „####-######-##‟ 
pDoctorTIN 
String(12) 
Doctor‟s TIN 
Formatted as: „###-###-###‟ 
pDoctorLastName 
String(60) 
Doctor‟s Complete Surname 
Same as for the member. 
pDoctorFirstName 
String(60) 
Doctor‟s Complete First name 
pDoctorMiddleName 
String(60) 
Doctor‟s Complete Middle name 
pDoctorSuffix 
String(5) 
Doctor‟s Suffix name 
„JR‟, „SR‟, „III‟, …etc  
Suffixes can be blank 


---

Page 26 of 74 
 
pDoctorBirthdate 
String(10) 
Doctors‟s Birth Date 
Date Format should be :  
„MM-DD-YYYY‟ 
pVisitDate 
String(10) 
Doctor‟s date of daily visit 
Date Format should be :  
„MM-DD-YYYY‟ 
Visit dates must be enumerated 
Number of dates must coincide with pVisitDays 
Required for General practitioner and Specialist 
Visit claims only 
pVisitDays 
String(2) 
Doctor‟s number of daily visits 
Integer format 
Required for General practitioner and Specialist 
Visit claims only 
pRVSCode 
String(6) 
Relative Value Scale Code of the 
procedure/operation performed 
See RVS Library 
Required for Operating Room, Surgeons and 
Anesthesiologist claims only 
pRVU 
String(3) 
Relative Value Unit of the procedure/operation  
Integer format 
pOperationDate 
String(10) 
Date of surgery/operation/procedure 
Date Format should be :  
„MM-DD-YYYY‟ 
pDoctorClaimantType 
String(1) 
Claimant type for the benefit 
 „M‟ – Member 
 „D‟ – Doctor 
 „C‟ – Chief of Hospital 
pReceiptNumber 
String(18) 
PhilHealth Generated Transmittal file receipt control 
number. 
Will be blank if the pCheckedPassed is „NO‟ 
pCheckPassed 
String(3) 
Flag whether transmittal file passed the checking 
requirements 
 „YES‟ 
 „NO‟ 
pErrorCode 
String(3) 
Claim file error Code 
 
pErrorDescription 
String(100) 
Claim file error Description 
 
pConfirmationNumber 
String(18) 
PhilHealth Generated Upload Confirmation control 
number 
 
pUploadDate 
String(10) 
 
Date Format should be :  
„MM-DD-YYYY‟ 
pUploadTime 
String(10) 
 
 
TIME Format should be :  
„HH:MM:SSAM/PM‟ 
pDocumentType 
String(3) 
Document to support the claim  
 See Annex K for the list of document codes 
pDocumentURL 
String(250) 
URL of the document accessible via FTPS 
The document must first be encrypted using 
PhilHealth public key before publishing online.  
pZBenefitCode 
String(7) 
Z-Benefit Codes 
Standard Risk Acute Lymphocytic 
(lymphoblastic) Leukemia for Children 
 Z0011 – 1st tranche 
 Z0012 – 2nd tranche 
 Z0013 – 3rd tranche 
Early Stage Breast Cancer (Stage 0 to III-A) 
 Z0021 –1st tranche 
 Z0022 –2nd tranche 
Low to Intermediate Risk Prostate Cancer 
Requiring Prostatectomy 
 Z003 – full payment 
End Stage Renal Disease Eligible for Kidney 
Transplant (Low Risk) 
 Z0041 –1st tranche 
 Z0042 –2nd tranche 
 
pCode 
String(10) 
The observation code 
Observation code 
pCodeSystemName 
String(10) 
Observation coding system 
e.g. LOINC 
pDisplayName 
String(50) 
Observation description/name 
Common name/description of the observation 
pValue 
String(10) 
Observation value 
Alphanumeric values 
pUnit 
String(10) 
Unit of measurement of the observation 
Unit of measurement of the observation 
 
The above table defines the valid values for the attributes in the xml. These attributes will hold the actual 
value they represent.  
 
 
 
 
 
 
 


---

Page 27 of 74 
 
Module 2: FILE STRUCTURE 
 
 
Pertinent claims information will be transformed electronically by using the Extensible Markup 
Language (XML). The following sample is an illustration: 
 
<eCLAIMS  
 
pUserName=""  
 
pUserPassword=""  
 
pHospitalCode="123456"  
 
pHospitalEmail=""> 
 
<eTRANSMITTAL  
 
 
pHospitalTransmittalNo="0671"  
 
 
pTotalClaims="1"> 
 
 
<CLAIM  
 
 
 
pClaimNumber="01-31-12-671"  
 
 
 
pTrackingNumber=""  
 
 
 
pPIN="19-000092375-7"  
 
 
 
pMembershipType="G"  
 
 
 
pMemberBirthDate="09-19-1973"  
 
 
 
pMemberLastName="DE VERA"  
 
 
 
pMemberFirstName="NELSON"  
 
 
 
pMemberMiddleName="SALAZAR"  
 
 
 
pMemberSuffix=""  
 
 
 
pMailingAddress="PHILIPPINES"  
 
 
 
pZipCode="1234"  
 
 
 
pEmailAddress="delacruzjuan@yahoo.com.ph"  
 
 
 
pMobileNo=""  
 
 
 
pLandlineNo=""  
 
 
 
pPEN="11-047400000-2"  
 
 
 
pEmployerName="PHILHEALTH"  
 
 
 
pPatientIs="M"  
 
 
 
pPatientBirthDate="09-19-1973"  
 
 
 
pPatientGender="F"  
 
 
 
pPatientLastName="DE VERA"  
 
 
 
pPatientFirstName="NELSON"  
 
 
 
pPatientMiddleName="SALAZAR"  
 
 
 
pPatientSuffix=""  
 
 
 
pAdmissionDate="08-25-2009"  
 
 
 
pAdmissionTime="01:00:00PM"  
 
 
 
pDischargeDate="08-27-2009"  
 
 
 
pDischargeTime="03:00:00PM"  
 
 
 
pClaimedDays="3"  
 
 
 
pPatientExpired="F"  
 
 
 
pDateOfDeath=""  
 
 
 
pTotalAmountActual="9000.00"  
 
 
 
pTotalAmountClaimed="7000.00"  
 
 
 
pAdmissionDiagnosis="PNEUMONIA"  
 
 
 
pFinalDiagnosis="ACUTE PNEUMONIA WITH DIARRHEA"  
 
 
 
pIsOPD="F"  
 
 
 
pIsEMD="F"  
 
 
 
pPhilhealthClaimType="CASE-RATE"> 
 
 
 
<ICDCODES  
 
 
 
 
pICDCode="O13.012"  
 
 
 
 
pIllnessCaseType="A"> 
 
 
 
 
<ADDITIONAL pICDCode="A90.0"/> 
 
 
 
 
<ADDITIONAL pICDCode="B90.0"/> 
 
 
 
</ICDCODES> 
 
 
<!-- pPhilhealthClaimType="CASE-RATE" --> 
 
 
 
<CASERATE  
 
 
 
 
pCaseRateCode="IDENG1"  
 
 
 
 
pAmtActual="10000.00"  
 
 
 
 
pAmtClaimed="8000.00"  
 
 
 
 
pAmtPaidByMember="2000.00"/> 
 
 
<!-- pPhilhealthClaimType="Z-BENEFIT" --> 
 
 
 
<ZBENEFIT  
 
 
 
 
pZBenefitCode="Z0011"  
 
 
 
 
pAmtActual="100000.00"  
 
 
 
 
pAmtClaimed="100000.00"  
 
 
 
 
pAmtPaidByMember="0.00"> 
 
 
 
 
<OBSERVATION> 
 
 
 
 
 
<CODE  
 
 
 
 
 
 
pCode="33248-6"  
 
 
 
 
 
 
pCodeSystemName="LOINC"  
 
 
 
 
 
 
pDisplayName="Diabetes status Patient"/> 
 
 
 
 
 
<VALUE  
 
 
 
 
 
 
pValue="Y"  
 
 
 
 
 
 
pUnit=""/> 
 
 
 
 
</OBSERVATION> 
 
 
 
 
<OBSERVATION> 


---

Page 28 of 74 
 
 
 
 
 
 
<CODE  
 
 
 
 
 
 
pCode="33248-7"  
 
 
 
 
 
 
pCodeSystemName="LOINC"  
 
 
 
 
 
 
pDisplayName="Diabetes status Patient"/> 
 
 
 
 
 
<VALUE  
 
 
 
 
 
 
pValue="1.5"  
 
 
 
 
 
 
pUnit="mm[Hg]"/> 
 
 
 
 
</OBSERVATION> 
 
 
 
</ZBENEFIT> 
 
 
--> 
 
 
<!-- pPhilhealthClaimType="FEE-FOR-SERVICE" --> 
 
 
<!-- 
 
 
 
<FEEFORSERVICE> 
 
 
 
 
<ROOMANDBOARD  
 
 
 
 
 
pRoomType="W"  
 
 
 
 
 
pAmtActual="2000.00"  
 
 
 
 
 
pAmtClaimed="900.00"  
 
 
 
 
 
pHospClaimantType="H" /> 
 
 
 
 
<DRUGSMEDS  
 
 
 
 
 
pAmtActual="38.00"  
 
 
 
 
 
pAmtClaimed="27.75"  
 
 
 
 
 
pHospClaimantType="H" /> 
 
 
 
 
<XRAYLABOTHERS  
 
 
 
 
 
pAmtActual="760.00"  
 
 
 
 
 
pAmtClaimed="385.00"  
 
 
 
 
 
pHospClaimantType="H" /> 
 
 
 
 
<OPERATINGROOM> 
 
 
 
 
 
<ORFEE  
 
 
 
 
 
 
pRVSCode="79000"  
 
 
 
 
 
 
pProcedureName="Radioactive Iodine Therapy"  
 
 
 
 
 
 
pRVU="40"  
 
 
 
 
 
 
pOperationDate="08-26-2009"  
 
 
 
 
 
 
pAmtActual="600.00"  
 
 
 
 
 
 
pAmtClaimed="500.00"  
 
 
 
 
 
 
pHospClaimantType="H" /> 
 
 
 
 
 
<ORFEE  
 
 
 
 
 
 
pRVSCode="66983"  
 
 
 
 
 
 
pProcedureName="Cataract Extraction"  
 
 
 
 
 
 
pRVU="10"  
 
 
 
 
 
 
pOperationDate="08-27-2009"  
 
 
 
 
 
 
pAmtActual="600.00"  
 
 
 
 
 
 
pAmtClaimed="500.00"  
 
 
 
 
 
 
pHospClaimantType="H" /> 
 
 
 
 
</OPERATINGROOM> 
 
 
 
</FEEFORSERVICE> 
 
 
--> 
 
 
<!-- pPhilhealthClaimType="PACKAGE" --> 
 
 
<!-- 
 
 
 
<PACKAGE 
 
 
 
 
pPackageRVS="59400" 
 
 
 
 
pPackageName="NORMAL SPONTANEOUS DELIVERY PACKAGE" 
 
 
 
 
pAmtActual="5000.00" 
 
 
 
 
pAmtClaimed="2000.00" 
 
 
 
 
pHospClaimantType="H" > 
 
 
 
 
<PCKGDETAILS> 
 
 
 
 
 
<MATERNITY  
 
 
 
 
 
 
pMaternityClaimType="1"  
 
 
 
 
 
 
pIsFirstPregnancy=""  
 
 
 
 
 
 
pLMPDate=""  
 
 
 
 
 
 
pInitialCheckUpDate=""  
 
 
 
 
 
 
pDeliveryDate="" /> 
 
 
 
 
 
<TBDOTS  
 
 
 
 
 
 
pTBType="I"  
 
 
 
 
 
 
pNTPCardNo="" /> 
 
 
 
 
</PCKGDETAILS> 
 
 
 
</PACKAGE> 
 
 
--> 
 
 
<!-- pPhilhealthClaimType="CASE-MIX" --> 
 
 
<!-- 
 
 
 
<CASEMIX  
 
 
 
 
pPhilhealthCBG="X-001"  
 
 
 
 
pCBGDescription="TEST"  
 
 
 
 
pAmtActual="5000.00"  
 
 
 
 
pAmtClaimed="2000.00"  
 
 
 
 
pHospClaimantType="H"/> 
 
 
--> 
 
 
 
<PARTICULARS> 
 
 
 
 
<DRGMED  
 
 
 
 
 
pDrugCode="X0001234"  
 
 
 
 
 
pPNDFCode=""  
 
 
 
 
 
pGenericName="PARACETAMOL"  


---

Page 29 of 74 
 
 
 
 
 
 
pBrandName="GAYAGESIC"  
 
 
 
 
 
pPreparation="TABLET 250MG"  
 
 
 
 
 
pQuantity="3"  
 
 
 
 
 
pUnitPrice="5.50"  
 
 
 
 
 
pAmtActual="17.50"  
 
 
 
 
 
pAmtClaimed="17.50"  
 
 
 
 
 
pIsCompensable="T"/> 
 
 
 
 
<DRGMED  
 
 
 
 
 
pDrugCode="X0001235"  
 
 
 
 
 
pPNDFCode=""  
 
 
 
 
 
pGenericName="PARACETAMOL"  
 
 
 
 
 
pBrandName="GAYAGESIC"  
 
 
 
 
 
pPreparation="TABLET 250MG"  
 
 
 
 
 
pQuantity="3"  
 
 
 
 
 
pUnitPrice="5.50"  
 
 
 
 
 
pAmtActual="17.50"  
 
 
 
 
 
pAmtClaimed="17.50"  
 
 
 
 
 
pIsCompensable="T"/> 
 
 
 
 
<XLSO  
 
 
 
 
 
pDiagnosticType="IMAGING"  
 
 
 
 
 
pDiagnosticName="ULTRASOUND"  
 
 
 
 
 
pQuantity="2"  
 
 
 
 
 
pUnitPrice="200.00"  
 
 
 
 
 
pAmtActual="400.00"  
 
 
 
 
 
pAmtClaimed="200.00"  
 
 
 
 
 
pIsCompensable="T"/> 
 
 
 
 
<XLSO  
 
 
 
 
 
pDiagnosticType="IMAGING"  
 
 
 
 
 
pDiagnosticName="ULTRASOUND"  
 
 
 
 
 
pQuantity="2"  
 
 
 
 
 
pUnitPrice="200.00"  
 
 
 
 
 
pAmtActual="400.00"  
 
 
 
 
 
pAmtClaimed="200.00"  
 
 
 
 
 
pIsCompensable="T"/> 
 
 
 
</PARTICULARS> 
 
 
 
<PROFESSIONALFEES> 
 
 
 
 
<DAILYVISITS> 
 
 
 
 
 
<PHYSICIAN  
 
 
 
 
 
 
pDoctorAccreCode="1234-3265954-1"  
 
 
 
 
 
 
pIsSpecialist="F"  
 
 
 
 
 
 
pDoctorTIN="123-456-789"  
 
 
 
 
 
 
pDoctorLastName="TEST"  
 
 
 
 
 
 
pDoctorFirstName="TEST"  
 
 
 
 
 
 
pDoctorMiddleName=""  
 
 
 
 
 
 
pDoctorSuffix=""  
 
 
 
 
 
 
pAmtActual="3000.00"  
 
 
 
 
 
 
pAmtClaimed="1000.00"  
 
 
 
 
 
 
pAmtPaidByMember="2000.00"  
 
 
 
 
 
 
pDoctorClaimantType="D"  
 
 
 
 
 
 
pVisitDays="3"> 
 
 
 
 
 
 
<VISIT pVisitDate="08-25-2009"/> 
 
 
 
 
 
 
<VISIT pVisitDate="08-26-2009"/> 
 
 
 
 
 
 
<VISIT pVisitDate="08-27-2009"/> 
 
 
 
 
 
</PHYSICIAN> 
 
 
 
 
 
<PHYSICIAN  
 
 
 
 
 
 
pDoctorAccreCode="1234-3265954-1"  
 
 
 
 
 
 
pIsSpecialist="F"  
 
 
 
 
 
 
pDoctorTIN="123-456-789"  
 
 
 
 
 
 
pDoctorLastName="VISITING DOCTORS LASTNAME"  
 
 
 
 
 
 
pDoctorFirstName="VISITING DOCTORS FIRSTNAME"  
 
 
 
 
 
 
pDoctorMiddleName="VISITING DOCTORS MIDDLENAME"  
 
 
 
 
 
 
pDoctorSuffix=""  
 
 
 
 
 
 
pAmtActual="3000.00"  
 
 
 
 
 
 
pAmtClaimed="1000.00"  
 
 
 
 
 
 
pAmtPaidByMember="2000.00"  
 
 
 
 
 
 
pDoctorClaimantType="D"  
 
 
 
 
 
 
pVisitDays="1"> 
 
 
 
 
 
 
<VISIT pVisitDate="08-25-2009"/> 
 
 
 
 
 
</PHYSICIAN> 
 
 
 
 
</DAILYVISITS> 
 
 
 
 
<SURGERIES> 
 
 
 
 
 
<SURGICALPROCEDURE  
 
 
 
 
 
 
pRVSCode="90935"  
 
 
 
 
 
 
pRVU="10"  
 
 
 
 
 
 
pOperationDate="08-25-2009"> 
 
 
 
 
 
 
<SURGEON  
 
 
 
 
 
 
 
pDoctorAccreCode="1234-3265954-1"  
 
 
 
 
 
 
 
pDoctorTIN="123-456-789"  
 
 
 
 
 
 
 
pDoctorLastName="SURGEON LASTNAME"  
 
 
 
 
 
 
 
pDoctorFirstName="SURGEON FIRSTNAME"  
 
 
 
 
 
 
 
pDoctorMiddleName="SURGEON MIDDLENAME"  


---

Page 30 of 74 
 
 
 
 
 
 
 
 
pDoctorSuffix="JR"  
 
 
 
 
 
 
 
pAmtActual="1000.00"  
 
 
 
 
 
 
 
pAmtClaimed="1000.00"  
 
 
 
 
 
 
 
pAmtPaidByMember="0.00"  
 
 
 
 
 
 
 
pDoctorClaimantType="D"/> 
 
 
 
 
 
 
<ANESTHESIOLOGIST  
 
 
 
 
 
 
 
pDoctorAccreCode="1234-3265954-1"  
 
 
 
 
 
 
 
pDoctorTIN="123-456-789"  
 
 
 
 
 
 
 
pDoctorLastName="ANES LASTNAME"  
 
 
 
 
 
 
 
pDoctorFirstName="ANES FIRSTNAME"  
 
 
 
 
 
 
 
pDoctorMiddleName="ANES MIDDLENAME"  
 
 
 
 
 
 
 
pDoctorSuffix="SR"  
 
 
 
 
 
 
 
pAmtActual="1000.00"  
 
 
 
 
 
 
 
pAmtClaimed="1000.00"  
 
 
 
 
 
 
 
pAmtPaidByMember="0.00"  
 
 
 
 
 
 
 
pDoctorClaimantType="D"/> 
 
 
 
 
 
</SURGICALPROCEDURE> 
 
 
 
 
</SURGERIES> 
 
 
 
</PROFESSIONALFEES> 
 
 
 
<DOCUMENTS> 
 
 
 
 
<DOCUMENT  
 
 
 
 
 
pDocumentType="CF3"  
 
 
 
pDocumentURL="https://hospitalwebserver/eclaims/claimnumber/yyyymmdd000001.pdf"/> 
 
 
 
 
<DOCUMENT  
 
 
 
 
 
pDocumentType="OPR"  
 
 
 
pDocumentURL="https://hospitalwebserver/eclaims/claimnumber/yyyymmdd000002.pdf"/> 
 
 
 
 
<DOCUMENT  
 
 
 
 
 
pDocumentType="SOA"  
 
 
 
pDocumentURL="https://hospitalwebserver/eclaims/claimnumber/yyyymmdd000003.pdf"/> 
 
 
 
</DOCUMENTS> 
 
 
</CLAIM> 
 
</eTRANSMITTAL> 
</eCLAIMS> 
 
NOTE: <!-- and --> in the sample xml above are used to treat the block as commented out. To explain 
further when the value for pPhilHealthClaimType="CASE-RATE", the element tags for “PACKAGE” (<PACKAGE>), 
“FEE-FOR-SERVICE” (<FEEFORSERVICE>), and “CASE-MIX” (<CASEMIX>) must be omitted. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 31 of 74 
 
Module 2: DOCUMENT TYPE DEFINITION 
 
Ctrl+Click me for a sample case rate eClaims V3.0.xml 
 
Ctrl+Click me for a sample zbenefit eClaims File or see Annex A for sample copy. 
 
Document Type Definition url – http://cdp.philhealth.gov.ph/dtd/eClaimsDef.dtd 
 
Element Hierarchy – Defines the structure of the xml file, Elements/Tags are those entries in the xml that 
is enclosed in “<” and “>”, these tags should always be terminated either with “/>” or “</elementname>”. 
To explain further: the element eCLAIMS is started as <eCLAIMS > and ended with </eCLAIMS>. Another 
example is the element which is started as <DOCUMENT and ended with />. Please refer to the matrix below 
for hierarchy of the elements. 
 
 
Element/Tag   
 
 
Definition 
 
 
 
Appearance 
eCLAIMS 
 
 
 
Root Element  
 
 
only once 
eTRANSMITTAL 
 
 
Transmittal Header  
 
only once 
CLAIM  
 
 
 
Patient Claim Data 
 
1 or more 
 ICDCODES  
 
 
ICD Data 
 
 
 
only once 
  ADDITIONAL 
 
 
Additional ICDs 
 
 
0 or more 
 FEEFORSERVICE 
 
 
Hospital Charges   
 
only once 
  ROOMANDBOARD  
 
Room/Board Charge  
 
0 or 1 
  DRUGSMEDS 
 
 
Drug/Med Charge 
 
 
0 or 1 
  XRAYLABOTHERS  
 
Diagnostic Charge  
 
0 or 1 
  OPERATINGROOM  
 
Operating Room Charge 
 
0 or 1 
   ORFEE  
 
 
OR Details  
 
 
1 or more 
 PACKAGE 
 
 
 
Package Charges 
 
 
only once 
  PCKGDETAILS 
 
 
Package Details 
 
 
0 or 1 
   MATERNITY  
 
Maternity Details  
 
only once 
   TBDOTS 
 
 
TB Dots Details 
 
 
only once 
 CASEMIX 
 
 
 
Casemix Charges 
 
 
only once 
 
 CASERATE  
 
 
CaseRate Charges  
 
only once 
 
 ZBENEFIT  
 
 
Z Benefit Charges  
 
only once 
 
  
OBSERVATION  
 
Observations 
 
 
1 or more 
  
 
CODE  
 
Coding system 
 
 
only once 
  
 
VALUE  
 
observation Values 
 
only once 
PARTICULARS 
 
 
Drugs/Diagnostic Data 
 
only once 
 DRGMED  
 
 
Drug particulars  
 
0 or more 
 XLSO 
 
 
 
XRay,Lab,Supplies,etc..  
0 or more 
PROFESSIONALFEES 
 
Doctor Charges 
 
 
0 or 1 
 DAILYVISITS 
 
 
Visits 
 
 
 
0 or 1 
  PHYSICIAN  
 
Physician details  
 
1 or more 
   VISIT 
 
 
Visit dates  
 
 
1 or more 
 SURGERIES 
 
 
Surgeries performed 
 
0 or 1 
  SURGICALPROCEDURE  
Procedure Details  
 
1 or more 
   SURGEON  
 
Surgeon Details 
 
 
1 or more 
   ANESTHESIOLOGIST 
Anesthesiologist Details 
0 or more 
 
DOCUMENTS  
 
 
Supporting Documents 
 
only once 
 DOCUMENT 
 
 
Document Details  
 
1 or more 
 
 
After understanding the above, you can now proceed with creating your prototype system to generate an 
eclaims xml file. There are several ways to check if the xml file you have created is compliant with the 
eclaims dtd.  
 
 
 
 


---

Page 32 of 74 
 
Module 2 :CHECKING XML CONFORMITY  
 
I. 
Validating an xml file against a Document Type Definition (DTD) using the Internet Explorer 
 
Things you need 
 DTD location: http://cdp.philhealth.gov.ph/dtd/eClaimsDef.dtd 
 XML file: to be provided by hospital 
 Free Online XML-DTD Validator Site: http://www.w3schools.com/XML/xml_validator.asp 
 Browser: Internet Explorer 
 
Steps: 
1. Only Internet Explorer will actually check your XML against the DTD. Firefox, Mozilla, 
Netscape, and Opera will not. 
2. Navigate to the http://www.w3schools.com/XML/xml_validator.asp 
3. Find the “Validate Your XML Against a DTD” portion. Paste the following in the 
window provided to define the location of the dtd. 
 
<?xml version="1.0"?> 
<!DOCTYPE eCLAIMS PUBLIC "-//PHIC-ITMD//DTD eClaims File 1.0//EN" "http://cdp.philhealth.gov.ph/dtd/eClaimsDef.dtd" > 
 
4. Append your eClaims xml there after. 
5. Click validate button. This will check if the xml file you created conforms to the document type 
definition we have created. 
6. This will validate conformity to the DTD, however upon load to PHIC additional check will be 
made like existence checks, valid parameter values etc…. a prototype web page is already 
available now for loading of eClaims XML file. The same functionality is made available as a 
webservice for loading the xml files. 
 
II. 
Accessing the eClaims Test Portal – To facilitate checking of the DTD, PhilHealth provided a 
webpage which will check the xml file by uploading it to the test servers. This portal accesses also 
the eClaims Phase II methods. 
 
Things you need 
 Digital Certificates 
o publicrootca.cer – this is the PhilHealth server certificate 
o hospitalcertificate.pfx (file name may vary) – this is the hospital client certificate (right 
now temporarily issued by PhilHealth ITMD) 
 XML file: to be provided by hospital 
 Browser: Internet Explorer 
 
Steps: 
1. Install the certificates in the browser. (refer to install certificates in browser), (see Annex D) 
2. Navigate to https://cws.philhealth.gov.ph/eclaims and supply credentials. (username and password 
is blank for now). 
3. Browse for the xml file and click Submit. 
4. If the file is ok, a message with transmittal number information will be displayed otherwise a 
message displaying the first deficiency of the xml file. 
 
Inspecting the message displayed could prove to be very helpful in identifying the problems of your xml 
file. After successfully compliance to the PhilHealth eclaims xml standard proceed to call the web service 
method for uploading claims. 
 


---

Page 33 of 74 
 
Module 2: XML FILE TRANSMISSION 
 
Web Service Method 
 
     
eClaimsUpload(pUserName, pUserPassword, pHospitalCode, pXML) 
 
 
This can be used by the hospitals to make their application upload the eClaims file to PhilHealth. 
This method also checks for DTD compliance and validate the values of the xml attributes if they are 
valid. 
 
Unsuccessful upload, the method will return:  
 
<eRECEIPT 
 
pUserName="XXXXXX" 
 
pUserPassword="xxx123" 
 
pHospitalCode="123456"  
 
pHospitalTransmittalNo="001" 
 
pTotalClaims="1"  
 
pTransmissionControlNumber="" 
 
pTransmissionDate="08-26-2009" 
 
pTransmissionTime="00:00:00AM" > 
 
<REMARKS pErrCode="T01" pErrDescription="Invalid parameter value: pAmtActual" /> 
 
<REMARKS pErrCode="T02" pErrDescription="Invalid parameter value: pOperationDate" /> 
</eRECEIPT> 
 
 
Successful upload, the method will return:  
 
<eRECEIPT 
 
pUserName="XXXXXX" 
 
pUserPassword="xxx123" 
 
pHospitalCode="123456"  
 
pHospitalTransmittalNo="001" 
 
pTotalClaims="1"  
 
pTransmissionControlNumber="1234-5601-1234-1253" 
 
pTransmissionDate="08-26-2009" 
 
pTransmissionTime="00:00:00AM"  
pReceiptTicketNumber="1234-5601-1234"> 
</eRECEIPT> 
 
 
The values for the pReceiptTicketNumber should be saved. This will be used later to retrieve the 
mapping of the hospital claim id against the PhilHealth claim series number. 
 
The transmission date will be the official date received for the uploaded claims upon which the Turn 
Around Time (TAT) will be measured.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 34 of 74 
 
Module 2: HOSPITAL AND PHILHEALTH CLAIMS MAPPING 
 
To facilitate claims reconciliation and verification, hospital and PhilHealth must have a common 
reference when pertaining to the same case/claim. The PhilHealth claim series number will be used for 
this purpose. This is generated everytime a receipt ticket number is generated when calling the 
eClaimsUpload method. 
 
    Web Service Method 
 
GetUploadedClaimsMap (pUserName, pUserPassword, pHospitalCode, pReceiptTicketNumber) 
 
 
<eCONFIRMATION 
 
pReceiptTicketNumber="071311000005"  
 
pHospitalCode="300832"  
 
pHospitalTransmittalNo="3008321107000008"  
 
pTotalClaims="1"  
 
pReceivedDate="09-13-2009"> 
 
<MAPPING  
 
 
pClaimNumber="09-08-01-006" 
 
 
pPatientLastName="DELA CRUZ" 
 
 
pPatientFirstName="MARIA" 
 
 
pPatientMiddleName="C" 
 
 
pPatientSuffix="" 
 
 
pAdmissionDate="08-25-2009" 
 
 
pDischargeDate="08-25-2009" 
 
 
pClaimSeriesLhio="090801990000199" /> 
</eCONFIRMATION> 
 
Each hospital claim number (pClaimNumber) has a corresponding PhilHealth claim series number 
(pClaimSeriesLhio). This should be saved to a database which will be used when verifying claims status 
and for purposes of claims reconciliation. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 35 of 74 
 
MODULE 3: CLAIM STATUS VERIFICATION 
Electronic Claims Verification/Reconciliation (Version 1.0) 
 
 
This module will facilitate claims status inquiry on the side of the hospital and provide an online 
means of claims reconciliation between hospital and Philhealth. 
 
 
 
FIELD/ATTRIBUTE/PARAMETER DEFINITION 
pClaimSeriesLhio 
String(15) 
Philhealth Generated and Assigned Unique Number 
per Claim, Acquired in module 2, which is mapped 
to a specific hospital claim number. 
Will be used in verifying status/payment 
details for a specific hospital case. 
pClaimSeriesLhios 
 
Comma-separated values of one or more 
pClaimSeriesLhio 
e.g.  
121234567890119, 129876543211119, 120000000002119 
pPIN 
String(12) 
PhilHealth Identification Number – a unique 12 digit 
number assigned to a member. 
 
pStatus 
String(50) 
Describes the status of a claim 
 „WITH CHEQUE‟ 
 „WITH VOUCHER‟ 
 „VOUCHERING‟ 
 „IN PROCESS‟ 
 „RETURN‟ 
 „DENIED‟ 
pAsOf 
String(10) 
Date of Inquiry 
Date Format: „MM-DD-YYYY‟ 
pAsOfTime 
String(10) 
Time of Inquiry 
TIME Format: „HH:MM:SSAM/PM‟ 
pPatientLastName 
String(60) 
Patient‟s Complete Surname 
 
pPatientFirstName 
String(60) 
Patient‟s Complete First name 
 
pPatientMiddleName 
String(60) 
Patient‟s Complete Middle name 
 
pPatientSuffix 
String(5) 
Patient‟s Suffix name 
 
pAdmissionDate 
String(10) 
Admission Date 
Date Format: „MM-DD-YYYY‟ 
pDischargeDate 
String(10) 
Discharge Date 
Date Format: „MM-DD-YYYY‟ 
pDateReceived 
String(10) 
Date of Claim was received in Philhealth/ same as 
the date the claim was electronically submitted using 
Module 2, When Claim was return/ this would be the 
date of Refiling/ electronically sending the additional 
documents 
Date Format: „MM-DD-YYYY‟ 
pDateRefile 
String(10) 
Just in case the Claim was return/ this would be the 
date of Refiling. Synonymous to the date of 
electronically sending the additional requested 
documents. 
Date Format: „MM-DD-YYYY‟ 
pDeficiency 
String(100) 
Describes the reason why the status of the claims is 
RETURN. 
 
pRequirement 
String(100) 
For pStatus=‟RETURN‟, this is the needed 
documents that has to be complied with in order to 
facilitate/continue the claims process. 
 
pReason 
String(100) 
Describes the reason why the status of the claims is 
DENIED. 
 
pProcessStage 
String(100) 
Describes the process stage. 
 
pProcessDate 
String(10) 
Date of process 
Date Format: „MM-DD-YYYY‟ 
pVoucherNo 
String(5) 
 
Formatted as: „###-######-##X##‟ 
X can be: 
 „I‟ 
 „S‟ 
 „G‟ 
 „W‟ 
pVoucherDate 
String(10) 
Date voucher was generated 
Date Format: „MM-DD-YYYY‟ 
pCheckNo 
String(10) 
Check Number of reimbursement 
If value=‟AC‟ this is autocredit for doctors 
otherwise it is the check number 
pCheckDate 
String(10) 
Date when check was generated 
Date Format should be :  
„MM-DD-YYYY‟ 
pCheckAmount 
String(12) 
Amount reflected in Cheque,  
Note: Amount in Cheque is the sum of all claims 
included in a voucher. 
Formatted as: „#######.##‟ 
pClaimAmount 
String(12) 
Amount claimed 
Formatted as: „#######.##‟ 
pClaimPayeeName 
String(100) 
Name of payee reflected in Cheque 
Alpha-numeric 
pTotalClaimAmount
Paid 
String(12) 
Sum of all payment for a particular claim 
Formatted as: „#######.##‟ 
pPayeeCode 
String(14) 
Payee Code 
If pPayeeType=‟H‟ this is the Hospital 
accreditation code,  


---

Page 36 of 74 
 
if pPayeeType=‟D‟ this is the Doctor 
accreditation code,  
if pPayeeType=‟M‟ this is the Member PIN 
code,  
if pPayeeType=‟C‟ this is the Hospital 
accreditation code. 
pPayeeType 
String(1) 
Type of Payee 
 „H‟ – Hospital 
 „D‟ – Doctor 
 „M‟ – Member 
 „C‟ – Chief of Hospital 
pTaxAmount 
String(12) 
Payee Tax Amount 
Formatted as: „#######.##‟ 
pGrossAmount 
String(12) 
Payee Gross Amount 
Formatted as: „#######.##‟ 
pRMBD 
String(10) 
Room and Board 
Formatted as: „#######.##‟ 
pDRUGS 
String(10) 
Drugs and medicines 
Formatted as: „#######.##‟ 
pXRAY 
String(10) 
X-ray, Laboratories and othera 
Formatted as: „#######.##‟ 
pOPRM 
String(10) 
Operating Room fee 
Formatted as: „#######.##‟ 
pGPFee 
String(10) 
General Practitioner 
Formatted as: „#######.##‟ 
pSPFee 
String(10) 
Specialist 
Formatted as: „#######.##‟ 
pSURFee 
String(10) 
Surgeon 
Formatted as: „#######.##‟ 
pANESFee 
String(10) 
Anesthesiologist 
Formatted as: „#######.##‟ 
pNetAmount 
String(10) 
Net Amount (Gross less tax) 
Formatted as: „#######.##‟ 
pIsAdjustment 
String(3) 
Flag if claim is an adjustment 
 „T‟ – True 
 „F‟ – False 
pIsAutoCredit 
String(3) 
Flag if payee was paid through auto credit payment 
scheme 
 „T‟ – True 
 „F‟ – False 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 37 of 74 
 
Module 3: GETTING THE CURRENT STATUS OF A CLAIM 
 
eClaimsStatus Document Type Definition Version 1.0 
 
--> 
<!ELEMENT STATUS (CLAIM+)> 
<!ATTLIST STATUS 
 
pAsOf CDATA #REQUIRED  
 
pAsOfTime CDATA #REQUIRED > 
 
 
<!ELEMENT CLAIM (TRAIL|RETURN|DENIED|PAYMENT) > 
<!ATTLIST CLAIM  
 
pClaimSeriesLhio CDATA #REQUIRED 
 
pPin CDATA #REQUIRED 
 
pPatientLastName CDATA #REQUIRED  
 
pPatientFirstName CDATA #REQUIRED  
 
pPatientMiddleName CDATA #REQUIRED  
 
pPatientSuffix CDATA #REQUIRED  
 
pAdmissionDate CDATA #REQUIRED  
 
pDischargeDate CDATA #REQUIRED 
 
pClaimDateReceived CDATA #REQUIRED 
 
pClaimDateRefile CDATA #REQUIRED  
 
pStatus CDATA #REQUIRED > 
 
<!ELEMENT TRAIL (PROCESS+)> 
<!ELEMENT PROCESS EMPTY> 
<!ATTLIST PROCESS  
 
pProcessStage CDATA #REQUIRED  
 
pProcessDate CDATA #REQUIRED > 
 
<!ELEMENT RETURN (DEFECTS+)>  
 
<!ELEMENT DEFECTS (REQUIREMENT+)> 
<!ATTLIST DEFECTS 
 
pDeficiency CDATA #REQUIRED > 
 
<!ELEMENT REQUIREMENT EMPTY> 
 
<!ATTLIST REQUIREMENT 
 
pRequirement CDATA #REQUIRED > 
 
<!ELEMENT DENIED (REASON+)>  
 
<!ELEMENT REASON EMPTY> 
<!ATTLIST REASON 
 
pReason CDATA #REQUIRED > 
 
<!ELEMENT PAYMENT (PAYEE+)>  
<!ATTLIST PAYMENT 
 
pTotalClaimAmountPaid CDATA #REQUIRED > 
<!ELEMENT PAYEE EMPTY> 
<!ATTLIST PAYEE 
 
pVoucherNo CDATA #REQUIRED  
 
pVoucherDate CDATA #REQUIRED  
 
pCheckNo CDATA #REQUIRED  
 
pCheckDate CDATA #REQUIRED  
 
pCheckAmount CDATA #REQUIRED  
 
pClaimAmount CDATA #REQUIRED  
 
pClaimPayeeName CDATA #REQUIRED > 
 


---

Page 38 of 74 
 
Module 3: GET CLAIM STATUS Web Service Method 
 
The following method will facilitate this functionality. The pSeriesLhioNos can contain multiple 
claims by separating each parameter by comma (CSV, comma-separated value).  
 
 
GetClaimStatus(pUserName,  pUserPassword,  pHospitalCode,  pSeriesLhioNos) 
 
The method will return the status of a claim, formatted in xml based on the eClaimStatusDef.dtd, sample 
is shown below 
 
<STATUS  
 
pAsOf="07-25-2012"  
 
pAsOfTime="04:46:23PM"> 
 
<CLAIM  
 
 
pClaimSeriesLhio="120723190000119"  
 
 
pPin="190892937994"  
 
 
pPatientLastName="ALARCON"  
 
 
pPatientFirstName="MAMERTO"  
 
 
pPatientMiddleName="TRIA"  
 
 
pPatientSuffix=""  
 
 
pAdmissionDate="05-02-2012"  
 
 
pDischargeDate="05-06-2012"  
 
 
pClaimDateReceived="05-15-2012"  
 
 
pClaimDateRefile=""  
 
 
pStatus="IN PROCESS" 
<!-- pStatus="IN PROCESS"--> 
 
 
<TRAIL> 
 
 
 
<PROCESS pProcessStage="VALIDATION" pProcessDate="07-25-2012"/> 
 
 
 
<PROCESS pProcessStage="EDITING" pProcessDate="07-25-2012"/> 
 
 
 
<PROCESS pProcessStage="VALIDATION" pProcessDate="07-23-2012"/> 
 
 
 
<PROCESS pProcessStage="EDITING (RECEIVING)" pProcessDate="07-23-2012"/> 
 
 
 
<PROCESS pProcessStage="ENCODING" pProcessDate="07-23-2012"/> 
 
 
 
<PROCESS pProcessStage="RECEIVING" pProcessDate="07-23-2012"/> 
 
 
 
</TRAIL> 
<!-- pStatus="RETURN"--> 
<!-- 
 
 
<RETURN> 
 
 
 
<DEFECTS pDeficiency=""> 
 
 
 
 
<REQUIREMENT pRequirement=""/> 
 
 
 
 
<REQUIREMENT pRequirement=""/> 
 
 
 
</DEFECTS> 
 
 
</RETURN> 
--> 
<!-- pStatus="DENIED"--> 
<!-- 
 
 
<DENIED> 
 
 
 
<REASON pReason=""/> 
 
 
</DENIED> 
--> 
<!-- pStatus="WITH CHEQUE" or “WITH VOUCHER” or “VOUCHERING”--> 
<!-- 
 
 
<PAYMENT> 
 
 
 
PTotalClaimAmountPaid="1000.00"  
 
 
 
<PAYEE  
 
 
 
 
pVoucherNo=""  
 
 
 
 
pVoucherDate=""  
 
 
 
 
pCheckNo=""  
 
 
 
 
pCheckDate=""  
 
 
 
 
pCheckAmount=""  
 
 
 
 
pClaimAmount="600.00"  
 
 
 
 
pClaimPayeeName=""/> 
 
 
 
<PAYEE  
 
 
 
 
pVoucherNo=""  
 
 
 
 
pVoucherDate=""  
 
 
 
 
pCheckNo=""  
 
 
 
 
pCheckDate=""  
 
 
 
 
pCheckAmount=""  
 
 
 
 
pClaimAmount="400.00"  
 
 
 
 
pClaimPayeeName=""/> 
 
 
</PAYMENT> 
--> 
 
</CLAIM> 
</STATUS> 
Click me for a blank xml sample 


---

Page 39 of 74 
 
Module 3: GETTING THE VOUCHER DETAILS 
 
eClaimsVoucher Document Type Definition Version 1.0 
 
 
 
--> 
<!ELEMENT VOUCHER (CLAIM+, SUMMARY)> 
<!ATTLIST VOUCHER 
pVoucherNo CDATA #REQUIRED 
pVoucherDate CDATA #REQUIRED> 
 
<!ELEMENT CLAIM (CHARGE+) > 
<!ATTLIST CLAIM 
pClaimSeriesLhio CDATA #REQUIRED 
pPin CDATA #REQUIRED 
pPatientLastName CDATA #REQUIRED 
pPatientFirstName CDATA #REQUIRED 
pPatientMiddleName CDATA #REQUIRED 
pPatientSuffix CDATA #REQUIRED 
pAdmissionDate CDATA #REQUIRED 
pDischargeDate CDATA #REQUIRED 
pClaimDateReceived CDATA #REQUIRED 
pClaimDateRefile CDATA #REQUIRED 
pIsAdjustment CDATA #REQUIRED > 
 
<!ELEMENT CHARGE EMPTY> 
<!ATTLIST CHARGE 
pPayeeType CDATA #REQUIRED 
pPayeeCode CDATA #REQUIRED 
pPayeeName CDATA #REQUIRED 
pRMBD CDATA #REQUIRED 
pDRUGS CDATA #REQUIRED 
pXRAY CDATA #REQUIRED 
pOPRM CDATA #REQUIRED 
pSPFee CDATA #REQUIRED 
pGPFee CDATA #REQUIRED 
pSURFee CDATA #REQUIRED 
pANESFee CDATA #REQUIRED 
pGrossAmount CDATA #REQUIRED 
pTaxAmount CDATA #REQUIRED 
pNetAmount CDATA #REQUIRED > 
 
<!ELEMENT SUMMARY (PAYEE+)> 
<!ATTLIST SUMMARY 
pTotalAmount CDATA #REQUIRED 
pNumberOfClaims CDATA #REQUIRED > 
<!ELEMENT PAYEE EMPTY> 
<!ATTLIST PAYEE 
pPayeeType CDATA #REQUIRED 
pPayeeCode CDATA #REQUIRED 
pPayeeName CDATA #REQUIRED 
pRMBD CDATA #REQUIRED 
pDRUGS CDATA #REQUIRED 
pXRAY CDATA #REQUIRED 
pOPRM CDATA #REQUIRED 
pSPFee CDATA #REQUIRED 
pGPFee CDATA #REQUIRED 
pSURFee CDATA #REQUIRED 
pANESFee CDATA #REQUIRED 
pGrossAmount CDATA #REQUIRED 
pTaxAmount CDATA #REQUIRED 
pNetAmount CDATA #REQUIRED 
pCheckNo CDATA #REQUIRED 
pCheckDate CDATA #REQUIRED 
pIsAutoCredit CDATA #REQUIRED > 
 
 


---

Page 40 of 74 
 
Module 3: GET VOUCHER DETAILS Web Service Method 
 
To facilitate reconciliation between paid claims. The following method will return the payment 
details. The input parameter here is the voucher number. Take note that there could be more than one 
claim in a voucher.  
 
GetVoucherDetails(pUserName,  pUserPassword,  pHospitalCode,  pVoucherNo) 
 
 
After payment is made an electronic copy of the voucher will be sent to the hospital. This can be 
used by the hospital to reconcile with their records. The following is a sample: 
 
<VOUCHER  
 
pVoucherNo="201-062001-06I03"  
 
pVoucherDate="06-14-2006"> 
 
<CLAIM  
 
 
pClaimSeriesLhio="060516030019903"  
 
 
pPin="192003610605"  
 
 
pPatientLastName="ALOXXX"  
 
 
pPatientFirstName="BERNAXXX"  
 
 
pPatientMiddleName="B"  
 
 
pPatientSuffix=""  
 
 
pAdmissionDate="04-18-2006"  
 
 
pDischargeDate="04-20-2006"  
 
 
pClaimDateReceived="05-12-2006"  
 
 
pClaimDateRefile=""  
 
 
pIsAdjustment="F"> 
 
 
<CHARGE  
 
 
 
pPayeeType="C"  
 
 
 
pPayeeCode="2XX25"  
 
 
 
pPayeeName="DR. DJXXXXX XXX X. SXXX"  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="0.00"  
 
 
 
pXRAY="0.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="4000.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="4000.00"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="4000.00"/> 
 
 
<CHARGE  
 
 
 
pPayeeType="C"  
 
 
 
pPayeeCode="3XX25"  
 
 
 
pPayeeName="DR. IXX OLXXXX A. CANXXXX"  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="0.00"  
 
 
 
pXRAY="0.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="1200.00"  
 
 
 
pGrossAmount="1200.00"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="1200.00"/> 
 
 
<CHARGE  
 
 
 
pPayeeType="H"  
 
 
 
pPayeeCode="30XX04"  
 
 
 
pPayeeName="XXXX CITY XXXXXX HOSPITAL"  
 
 
 
pRMBD="800.00"  
 
 
 
pDRUGS="507.50"  
 
 
 
pXRAY="994.40"  
 
 
 
pOPRM="3490.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="5791.90"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="5791.90"/> 
 
 
<CHARGE  
 
 
 
pPayeeType="M"  
 
 
 
pPayeeCode="P192003617072"  
 
 
 
pPayeeName="ALOXXX , BERNAXXX X"  
 
 
 
pRMBD="0.00"  


---

Page 41 of 74 
 
 
 
 
pDRUGS="2544.00"  
 
 
 
pXRAY="141.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="2685.00"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="2685.00"/> 
 
</CLAIM> 
 
<CLAIM  
 
 
pClaimSeriesLhio="060516030031234"  
 
 
pPin="192005981034"  
 
 
pPatientLastName="ANDXXX"  
 
 
pPatientFirstName="CONCHXXX"  
 
 
pPatientMiddleName="XXXX"  
 
 
pPatientSuffix=""  
 
 
pAdmissionDate="04-21-2006"  
 
 
pDischargeDate="04-27-2006"  
 
 
pClaimDateReceived="05-12-2006"  
 
 
pClaimDateRefile=""  
 
 
pIsAdjustment="F"> 
 
 
<CHARGE  
 
 
 
pPayeeType="C"  
 
 
 
pPayeeCode="27XX2"  
 
 
 
pPayeeName="DR. VIRXXX XX. X. DXXXO"  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="0.00"  
 
 
 
pXRAY="0.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="600.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="600.00"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="600.00"/> 
 
 
<CHARGE  
 
 
 
pPayeeType="H"  
 
 
 
pPayeeCode="3XXX04"  
 
 
 
pPayeeName="XXXX CITY XXXXX HOSPITAL"  
 
 
 
pRMBD="2400.00"  
 
 
 
pDRUGS="240.00"  
 
 
 
pXRAY="671.25"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="3311.25"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="3311.25"/> 
 
 
<CHARGE  
 
 
 
pPayeeType="M"  
 
 
 
pPayeeCode="P19200XX31034"  
 
 
 
pPayeeName="ANDXXX , CONCHXXX X"  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="1157.50"  
 
 
 
pXRAY="863.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="2020.50"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="2020.50"/> 
 
</CLAIM> 
 
<SUMMARY  
 
 
pTotalAmount="19608.65"  
 
 
pNumberOfClaims="2"> 
 
 
<PAYEE  
 
 
 
pPayeeType="C"  
 
 
 
pPayeeCode="30XX04"  
 
 
 
pPayeeName="HC- XXXX CITY XXXXX HOSPITAL "  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="0.00"  
 
 
 
pXRAY="0.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  


---

Page 42 of 74 
 
 
 
 
pGPFee="600.00"  
 
 
 
pSURFee="4000.00"  
 
 
 
pANESFee="1200.00"  
 
 
 
pGrossAmount="5800.00"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="5800.00"  
 
 
 
pCheckNo="0000XXX429"  
 
 
 
pCheckDate="06-19-2006"/> 
 
 
<PAYEE  
 
 
 
pPayeeType="H"  
 
 
 
pPayeeCode="30XX04"  
 
 
 
pPayeeName="XXXX CITY XXXXX HOSPITAL"  
 
 
 
pRMBD="3200.00"  
 
 
 
pDRUGS="747.50"  
 
 
 
pXRAY="1665.65"  
 
 
 
pOPRM="3490.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="9103.15"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="9103.15"  
 
 
 
pCheckNo="0000XXX430"  
 
 
 
pCheckDate="06-19-2006"/> 
 
 
<PAYEE  
 
 
 
pPayeeType="M"  
 
 
 
pPayeeCode="P1920XX987072"  
 
 
 
pPayeeName="ALOXXX , BERNXXXX X"  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="2544.00"  
 
 
 
pXRAY="141.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="2685.00"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="2685.00"  
 
 
 
pCheckNo="0000XXX431"  
 
 
 
pCheckDate="06-19-2006"/> 
 
 
<PAYEE  
 
 
 
pPayeeType="M"  
 
 
 
pPayeeCode="P1920XX731034"  
 
 
 
pPayeeName="ANXXXX , CONXXXXX X"  
 
 
 
pRMBD="0.00"  
 
 
 
pDRUGS="1157.50"  
 
 
 
pXRAY="863.00"  
 
 
 
pOPRM="0.00"  
 
 
 
pSPFee="0.00"  
 
 
 
pGPFee="0.00"  
 
 
 
pSURFee="0.00"  
 
 
 
pANESFee="0.00"  
 
 
 
pGrossAmount="2020.50"  
 
 
 
pTaxAmount="0.00"  
 
 
 
pNetAmount="2020.50"  
 
 
 
pCheckNo="0000XXX432"  
 
 
 
pCheckDate="06-19-2006"/> 
 
</SUMMARY> 
</VOUCHER> 
Click me for an xml sample with values 
 
This data can then be saved and match against hospital records facilitating reconciliation. 
 
 
 
 


---

Page 43 of 74 
 
4. CONFIDENTIALITY 
 
Given the nature PhilHealth mandate, it is vital that we maintain the confidentiality of patient 
information. PhilHealth is committed in ensuring utmost confidentiality of health records and related 
information of all patient because the right to privacy is personal and fundamental; likewise it is the 
responsibility of PhilHealth to safeguard all confidential information. 
 
Confidential Information  
 
Confidential information includes, but is not limited to, protected health  information, personal financial 
information, patients records, or information gained from  committee meetings, hospital or facility visits 
during accreditation and investigation, inquiries from members, patients or other PhilHealth employees. 
Example include: data contained on claim forms, past and current medical and psychiatric record member  
employment data, patient insurance and billing of records, computerized patient data, visual observation 
of patients/members or any verbal information provided by or about a patient. These information may be 
contained via any communication medium, including verbal, written or electronic. 1 
 
Protection Policies and Procedures 
 
All information that can be used to identify a Patient or a commercial entity in a commercially sensitive 
context is considered Confidential Health Information (CHI). 
 
It is required that all partners develop, institute, educate staff and periodically update standard operating 
policies and procedures that protect CHI. The policies and procedures  must be available for inspection 
and their use must be demonstrate upon request. PhilHealth will make available default policies and 
procedures. 
 
Necessary and authorized access. Each party is required to ensure that only minimum necessary 
personnel have access to CHI. Additionally, each party must have appropriate means to secure CHI and 
its use within its operations including when exchanging CHI with other partners. Each party must provide 
a means to authenticate authorized users. 
 
Unauthorized access. Every party should keep CHI from unauthorized access. PhilHealth must be 
notified, however, as soon as unauthorized access is detected. This notice must include what was 
disclosed, how it was obtained (means and methods), who gained unauthorized access if known, if the 
data has been subsequently unlawfully disclosed and the risk mitigation plan the party is now pursuing to 
prevent any further unauthorized access. Confidentiality breaches can occur from external and internal 
sources. Each party must have a published sanction policy and ensure that is effectively communicated to 
staff periodically. For external breaches appropriate law enforcement officials will be involved in the 
investigation and prosecution as necessary. 
 
Storage of CHI. Each party is required to develop, maintain and implement policies and procedures for 
protecting CHI stored electronically or via paper. This is especially true for off-site storage in the case of 
paper records and back-ups, archives and live storage of electronic records. The storage policies and 
procedures apply irrespective of the purpose of storage, for instance whether the CHI is stored on a CD 
for archiving or transmission purposes. 
 
                                              
1 PhilHealth Office Order 0050, s.,2011 


---

Page 44 of 74 
 
Transmission of CHI. Each party must protect CHI during the full life cycle  of transformations, whether 
electronic or not. This includes preparation of data transmission, transmitting data, and receiving 
transmitted data. For the electronic transmission of CHI 
 
 If the public internet is used for electronic data exchange, policies and procedures should cover 
the secure transmission of data, which includes encryption of data. 
 If private secure point-to-point connections are used for electronic data exchange, policies and 
procedures should cover their provisioning and maintenance. Data encryption is recommended 
even when using secure private point-to-point connections2 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                              
2 www.shafafiya.org/HAAD, s2008 


---

Page 45 of 74 
 
 
 
 
 
 
 
5. ANNEXES 
 
 
 
 
 
 
 
 
 


---

Page 46 of 74 
 
 
ANNEX A:  
 
SAMPLE Z-CLAIM XML 
 
- <eCLAIMS pUserName="" pUserPassword="" pHospitalCode="123456" pHospitalEmail=""> 
- <eTRANSMITTAL pHospitalTransmittalNo="0671" pTotalClaims="1"> 
- <CLAIM pClaimNumber="01-31-12-671" pTrackingNumber="" pPIN="19-000092375-7" pMembershipType="G" 
pMemberBirthDate="09-19-1973" pMemberLastName="DE VERA" pMemberFirstName="NELSON" 
pMemberMiddleName="SALAZAR" pMemberSuffix="" pMailingAddress="PHILIPPINES" pZipCode="1234" 
pEmailAddress="delacruzjuan@yahoo.com.ph" pMobileNo="" pLandlineNo="" pPEN="11-047400000-2" 
pEmployerName="PHILHEALTH" pPatientIs="M" pPatientBirthDate="09-19-1973" pPatientGender="F" 
pPatientLastName="DE VERA" pPatientFirstName="NELSON" pPatientMiddleName="SALAZAR" pPatientSuffix="" 
pAdmissionDate="08-25-2009" pAdmissionTime="01:00:00PM" pDischargeDate="08-27-2009" 
pDischargeTime="03:00:00PM" pClaimedDays="3" pPatientExpired="F" pDateOfDeath="" 
pTotalAmountActual="9000.00" pTotalAmountClaimed="7000.00" pAdmissionDiagnosis="ADMISSION DIAGNOSIS" 
pFinalDiagnosis="FINAL DIAGNOSIS" pIsOPD="F" pIsEMD="F" pPhilhealthClaimType="Z-BENEFIT"> 
- <ICDCODES pICDCode="O13.012" pIllnessCaseType="A"> 
  <ADDITIONAL pICDCode="A90.0" />  
  <ADDITIONAL pICDCode="B90.0" />  
  </ICDCODES> 
- <ZBENEFIT pZBenefitCode="Z0011" pAmtActual="100000.00" pAmtClaimed="100000.00" pAmtPaidByMember="0.00"> 
- <OBSERVATION> 
  <CODE pCode="33248-6" pCodeSystemName="LOINC" pDisplayName="Diabetes status Patient" />  
  <VALUE pValue="Y" pUnit="" />  
  </OBSERVATION> 
- <OBSERVATION> 
  <CODE pCode="33248-7" pCodeSystemName="LOINC" pDisplayName="Diabetes status Patient" />  
  <VALUE pValue="1.5" pUnit="mm[Hg]" />  
  </OBSERVATION> 
  </ZBENEFIT> 
- <PARTICULARS> 
  <DRGMED pDrugCode="X0001234" pPNDFCode="" pGenericName="PARACETAMOL" pBrandName="GAYAGESIC" 
pPreparation="TABLET 250MG" pQuantity="3" pUnitPrice="5.50" pAmtActual="17.50" pAmtClaimed="17.50" 
pIsCompensable="T" />  
  <DRGMED pDrugCode="X0001235" pPNDFCode="" pGenericName="PARACETAMOL" pBrandName="GAYAGESIC" 
pPreparation="TABLET 250MG" pQuantity="3" pUnitPrice="5.50" pAmtActual="17.50" pAmtClaimed="17.50" 
pIsCompensable="T" />  
  <XLSO pDiagnosticType="IMAGING" pDiagnosticName="XRAY" pQuantity="2" pUnitPrice="200.00" pAmtActual="400.00" 
pAmtClaimed="200.00" pIsCompensable="T" />  
  <XLSO pDiagnosticType="IMAGING" pDiagnosticName="ULTRASOUND" pQuantity="2" pUnitPrice="200.00" 
pAmtActual="400.00" pAmtClaimed="200.00" pIsCompensable="T" />  
  </PARTICULARS> 
- <PROFESSIONALFEES> 
- <DAILYVISITS> 
- <PHYSICIAN pDoctorAccreCode="1234-3265954-1" pIsSpecialist="F" pDoctorTIN="123-456-789" pDoctorLastName="TEST" 
pDoctorFirstName="TEST" pDoctorMiddleName="" pDoctorSuffix="" pAmtActual="3000.00" pAmtClaimed="1000.00" 
pAmtPaidByMember="2000.00" pDoctorClaimantType="D" pVisitDays="3"> 
  <VISIT pVisitDate="08-25-2009" />  
  <VISIT pVisitDate="08-26-2009" />  
  <VISIT pVisitDate="08-27-2009" />  
  </PHYSICIAN> 
- <PHYSICIAN pDoctorAccreCode="1234-3265954-1" pIsSpecialist="F" pDoctorTIN="123-456-789" 
pDoctorLastName="VISITING DOCTORS LASTNAME" pDoctorFirstName="VISITING DOCTORS FIRSTNAME" 
pDoctorMiddleName="VISITING DOCTORS MIDDLENAME" pDoctorSuffix="" pAmtActual="3000.00" 
pAmtClaimed="1000.00" pAmtPaidByMember="2000.00" pDoctorClaimantType="D" pVisitDays="1"> 
  <VISIT pVisitDate="08-25-2009" />  
  </PHYSICIAN> 
  </DAILYVISITS> 
- <SURGERIES> 
- <SURGICALPROCEDURE pRVSCode="90935" pRVU="10" pOperationDate="08-25-2009"> 
  <SURGEON pDoctorAccreCode="1234-3265954-1" pDoctorTIN="123-456-789" pDoctorLastName="SURGEON 
LASTNAME" pDoctorFirstName="SURGEON FIRSTNAME" pDoctorMiddleName="SURGEON MIDDLENAME" 


---

Page 47 of 74 
 
pDoctorSuffix="JR" pAmtActual="1000.00" pAmtClaimed="1000.00" pAmtPaidByMember="0.00" 
pDoctorClaimantType="D" />  
  <ANESTHESIOLOGIST pDoctorAccreCode="1234-3265954-1" pDoctorTIN="123-456-789" pDoctorLastName="ANES 
LASTNAME" pDoctorFirstName="ANES FIRSTNAME" pDoctorMiddleName="ANES MIDDLENAME" 
pDoctorSuffix="SR" pAmtActual="1000.00" pAmtClaimed="1000.00" pAmtPaidByMember="0.00" 
pDoctorClaimantType="D" />  
  </SURGICALPROCEDURE> 
  </SURGERIES> 
  </PROFESSIONALFEES> 
- <DOCUMENTS> 
  <DOCUMENT pDocumentType="CF3" 
pDocumentURL="https://hospitalwebserver/eclaims/claimnumber/yyyymmdd000001.pdf" />  
  <DOCUMENT pDocumentType="OPR" 
pDocumentURL="https://hospitalwebserver/eclaims/claimnumber/yyyymmdd000002.pdf" />  
  <DOCUMENT pDocumentType="SOA" 
pDocumentURL="https://hospitalwebserver/eclaims/claimnumber/yyyymmdd000003.pdf" />  
  </DOCUMENTS> 
  </CLAIM> 
  </eTRANSMITTAL> 
  </eCLAIMS> 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 48 of 74 
 
ANNEX B:  
 
SAMPLE eClaimsVoucherDef-FormattedWithValue.xml 
 
 
- <VOUCHER pVoucherNo="201-062001-06I03" pVoucherDate="06-14-2006"> 
- <CLAIM pClaimSeriesLhio="060516030019903" pPin="192003610605" pPatientLastName="ALOXXX" 
pPatientFirstName="BERNAXXX" pPatientMiddleName="B" pPatientSuffix="" pAdmissionDate="04-18-2006" 
pDischargeDate="04-20-2006" pClaimDateReceived="05-12-2006" pClaimDateRefile="" 
pIsAdjustment="F"> 
  <CHARGE pPayeeType="C" pPayeeCode="29325" pPayeeName="DR. DJXXXXX XXX X. SXXX" pRMBD="0.00" 
pDRUGS="0.00" pXRAY="0.00" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" pSURFee="4000.00" 
pANESFee="0.00" pGrossAmount="4000.00" pTaxAmount="0.00" pNetAmount="4000.00" />  
  <CHARGE pPayeeType="C" pPayeeCode="30325" pPayeeName="DR. IXX OLXXXX A. CANXXXX" 
pRMBD="0.00" pDRUGS="0.00" pXRAY="0.00" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="1200.00" pGrossAmount="1200.00" pTaxAmount="0.00" 
pNetAmount="1200.00" />  
  <CHARGE pPayeeType="H" pPayeeCode="300804" pPayeeName="QUEZON CITY XXXXXX HOSPITAL" 
pRMBD="800.00" pDRUGS="507.50" pXRAY="994.40" pOPRM="3490.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="0.00" pGrossAmount="5791.90" pTaxAmount="0.00" pNetAmount="5791.90" 
/>  
  <CHARGE pPayeeType="M" pPayeeCode="P192003617072" pPayeeName="ALOXXX , BERNAXXX X" 
pRMBD="0.00" pDRUGS="2544.00" pXRAY="141.00" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="0.00" pGrossAmount="2685.00" pTaxAmount="0.00" pNetAmount="2685.00" 
/>  
  </CLAIM> 
- <CLAIM pClaimSeriesLhio="060516030031234" pPin="192005981034" pPatientLastName="ANDXXX" 
pPatientFirstName="CONCHXXX" pPatientMiddleName="XXXX" pPatientSuffix="" pAdmissionDate="04-21-
2006" pDischargeDate="04-27-2006" pClaimDateReceived="05-12-2006" pClaimDateRefile="" 
pIsAdjustment="F"> 
  <CHARGE pPayeeType="C" pPayeeCode="27392" pPayeeName="DR. VIRXXX XX. X. DXXXO" pRMBD="0.00" 
pDRUGS="0.00" pXRAY="0.00" pOPRM="0.00" pSPFee="0.00" pGPFee="600.00" pSURFee="0.00" 
pANESFee="0.00" pGrossAmount="600.00" pTaxAmount="0.00" pNetAmount="600.00" />  
  <CHARGE pPayeeType="H" pPayeeCode="300804" pPayeeName="QUEZON CITY XXXXX HOSPITAL" 
pRMBD="2400.00" pDRUGS="240.00" pXRAY="671.25" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="0.00" pGrossAmount="3311.25" pTaxAmount="0.00" pNetAmount="3311.25" 
/>  
  <CHARGE pPayeeType="M" pPayeeCode="P192005731034" pPayeeName="ANDXXX , CONCHXXX X" 
pRMBD="0.00" pDRUGS="1157.50" pXRAY="863.00" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="0.00" pGrossAmount="2020.50" pTaxAmount="0.00" pNetAmount="2020.50" 
/>  
  </CLAIM> 
- <SUMMARY pTotalAmount="19608.65" pNumberOfClaims="2"> 
  <PAYEE pPayeeType="C" pPayeeCode="XXX" pPayeeName="XXX" pRMBD="0.00" pDRUGS="0.00" 
pXRAY="0.00" pOPRM="0.00" pSPFee="0.00" pGPFee="600.00" pSURFee="4000.00" 
pANESFee="1200.00" pGrossAmount="5800.00" pTaxAmount="0.00" pNetAmount="5800.00" 
pCheckNo="0000XXX429" pCheckDate="06-19-2006" />  
  <PAYEE pPayeeType="H" pPayeeCode="300804" pPayeeName="QUEZON CITY XXXXX HOSPITAL" 
pRMBD="3200.00" pDRUGS="747.50" pXRAY="1665.65" pOPRM="3490.00" pSPFee="0.00" 
pGPFee="0.00" pSURFee="0.00" pANESFee="0.00" pGrossAmount="9103.15" pTaxAmount="0.00" 
pNetAmount="9103.15" pCheckNo="0000XXX430" pCheckDate="06-19-2006" />  
  <PAYEE pPayeeType="M" pPayeeCode="P192003987072" pPayeeName="ALOXXX , BERNXXXX X" 
pRMBD="0.00" pDRUGS="2544.00" pXRAY="141.00" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="0.00" pGrossAmount="2685.00" pTaxAmount="0.00" pNetAmount="2685.00" 
pCheckNo="0000XXX431" pCheckDate="06-19-2006" />  
  <PAYEE pPayeeType="M" pPayeeCode="P192005731034" pPayeeName="ANXXXX , CONXXXXX X" 
pRMBD="0.00" pDRUGS="1157.50" pXRAY="863.00" pOPRM="0.00" pSPFee="0.00" pGPFee="0.00" 
pSURFee="0.00" pANESFee="0.00" pGrossAmount="2020.50" pTaxAmount="0.00" pNetAmount="2020.50" 
pCheckNo="0000XXX432" pCheckDate="06-19-2006" />  
  </SUMMARY> 
  </VOUCHER> 
 
 


---

Page 49 of 74 
 
ANNEX C 
CONSUMING PHILHEALTH WEB SERVICE 
VIEWING THE API SPECIFICATION OF THE WEB SERVICE 
A web service was setup as a SOAP web service.  The API Specification of the web service can be 
viewed in a browser using the URL of the WSDL (Web Service Description Language) of the web 
service.  The screenshot below shows how the WSDL appears in Internet Explorer.  This is also a way to 
checking whether the web service is available or not. 
 
 
 
The documentation of the web service can also be viewed by replacing “/SOAP” with “/doc”. 
 
 
 
 
 
 


---

Page 50 of 74 
 
CONSUMING THE WEB SERVICE 
 
Web services are designed for the interoperability between systems, which, could be running in different 
platforms and could have been developed using different programming languages and tools.  A web 
service can be consumed using different programming languages.  And even with the same language, a 
web service can be consumed in a variety of ways.  This section just illustrates how the web service can 
be consumed in some of the programming languages.  The web service exposes a function named 
GetServerDateTime and this function will be used in the following sample codes.  This function just 
returns as string the current date and time of the server where web service is hosted. 
Consuming the Web Service in PHP using the SoapClient Extension 
 This section shows how the web service can be consumed in PHP using the SoapClient extension of 
PHP.  The SoapClient extension can be enabled by including the line “extension=php_soap.dll” in the 
configuration file (PHP.ini) of PHP.  The image below shows the codes PHP page that will call 
GetServerDateTime function after clicking the Submit button.   As shown, one line is needed to 
instantiate the SoapClient with the WSDL URL as the first parameter.  Then another line to call the 
GetServerDateTime function.  The next images shows the output pages.  
 
<?php 
 
error_reporting(E_ALL); 
 
$serverDateTime =""; 
 
if(isset($_POST['Submit'])){ 
 
 
try{ 
 
 
 
$client = new SoapClient('http://172.21.0.131:8099/SOAP');  
 
 
 
$serverDateTime = $client->GetServerDateTime(); 
 
 
}catch(SoapFault $fault){ 
 
 
 
die($fault->faultstring);    
 
 
} 
 
 
 
} 
?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
<html> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
</head> 
<body> 
 
<h1>Test e-Claims Web Services using PHP</h1> 
 
<h2>Test GetSeverDateTime function</h2> 
 
<form name="form" method="post"> 
 
 
<input type="submit" value="Submit" name="Submit"/><br/> 
 
</form> 
 
Server Date/Time: <b><?php echo $serverDateTime; ?></b> <br/> 
</body> 
</html> 
 
 
 
 
 


---

Page 51 of 74 
 
 
 
 
Consuming the Web Service in Java using Eclipse 
This section shows how the web service can be consumed in Java using Eclipse IDE.  
Creating a Sample Eclipse Project that Consumes the Web Service  
1. Create a Dynamic Web Project.  One of the ways to do this is by clicking the File > New >  Other 
menu.   
2. In the New dialog box that appears, select the Dynamic Web Project item under the  Web folder.  
 
3. In the New dialog box that appears, select the Dynamic Web Project item under the  Web folder. 
Click the Next button. 
4. In the project name, you can enter “eclaimsjava2”. 


---

Page 52 of 74 
 
 
5. Just click the Next buttons until Next button became disabled, the click Finish button.  The New 
dialog box will be closed. 
6. Select the eclaimsjava2 item in the Project Explorer.  Right click on it and the New dialog box 
will appear.  Click the Web Service Client item under the Web Services folder.  Click the Next 
button.  The Web Service Client dialog box will appear. 
 
7. In the Web Service Client dialog box, enter the URL of the WSDL of the web service.   Do what 
the wizard asks you to do.  After clicking the Finish button, elipse will generate the classes for the 
web service.    


---

Page 53 of 74 
 
 
 
8. Right click again on the eclaimsjava2 on the Project Explorer.  Click New menu and select JSP 
menu.  In the Editor, replace the codes of the JSP with the codes below.  Compile the codes.   
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" 
 
pageEncoding="ISO-8859-1"%> 
<%@ page import="ph.gov.PhilHealth.*"%> 
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd"> 
<html> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> 
<title>Test e-Claims Web Services using JAVA</title> 
</head> 
<body> 
 
<h1>Test e-Claims Web Services using JAVA</h1> 
<h2>Test GetServerDateTime function</h2> 
<form method="post"><input type="submit" name="submit" /></form> 
 
<% 
 
String serverDateTime = ""; 
 
if (request.getParameter("submit") != null ){ 
         try{ 
                  PhilHealthService_ServiceLocator ws = new PhilHealthService_ServiceLocator(); 
                  PhilHealthService_PortType app =   ws.getPhilHealthServicePort(); 
                  serverDateTime = app.getServerDateTime(); 
         }catch(Exception e){ 
            e.printStackTrace(); 
         } 
       } 
%> 
Server Date/Time: 
<%= serverDateTime %> 
 
</body> 
</html> 
 
9. Run the project.   
 


---

Page 54 of 74 
 
 
10. Run the project.  Click the Submit Query button to display the date and time of the server where 
the webser 
 
 
 
 
Using PhilHealth e-Claims Web Services in Visual Basic. 
 
This tutorial on Building a Service implementer for PhilHealth Web Service assumes that the developer 
already has a cached copy of the WSDL (XML) file and saved as  
“c:\wsdlFiles\PhilHealthHospWebServices” and the necessary changes has been applied to the WSDL 
file. 
The IP address of the connecting party should also be registered with PhilHealth. 
 
This tutorial starts from building a new Project/Solution with a form, a button on the form, and an event 
handler for the button click. 
 
 
 
 
 
 
 
 
 
 


---

Page 55 of 74 
 
To add the Service Reference for the Web Service using the WSDL file, 
Click Project-Add Service Reference 
A window will appear. 
Type in the full path of the WSDL file and click Go. 
The services will be shown on the left side 
and all available functions and operations will be shown on the right. 
Change the Namespace to PhilHealthServices. 
 
Press OK to add the service reference to your project. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
To verify if the Services has been added  
to your project, View the Solution Explorer  
and check if PhilHealthServices is included  
in the Services References folder. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 56 of 74 
 
 
To use the services in your code, 
declare a variable  “aService “ 
as “PhilHealthServices.PhilHealthServiceClient”. 
Declare a variable for the response. 
Initialize the connection for the services  
.3by assigning aService with a new instance of PhilHealthServiceClient. 
To test the Connection with PhilHealth Server, use the GetServerDateTime() function. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
The isClaimEligible function  
has numerous parameters,  
most of which require values 
other than an empty string. 
Supply the values to the parameters 
as necessary. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 57 of 74 
 
ANNEX D 
 
How To Install the Certificates in the Browser 
 
I. 
For Firefox users 
a. Open Firefox, then click on the options menu. Something like the window below will 
appear. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b. Click on View Certificates. A window like the one below will appear. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c. Install the PhilHealth server certificate, by clicking on servers tab, then the import button. 
Browse for the publicrootca.cer then click ok. The certificate will be displayed in the list 
of trusted server certificates. 
 
 
 
 


---

Page 58 of 74 
 
 
 
d. Install the Hospital client certificate by click on the Your Certificates tab, then click on 
Import button, and browse for the hospitalcertificate.pfx file (filename may vary). You 
may be required to enter the certificate password that was emailed to you. Please take note 
the password are CASE sensitive. 
 
 
 
 
 
 
 
 
 
 
 
e. You will receive a confirmation alert. 
 
 
 
 
 
 
 
f. Verify that the certificates are shown in the list, just like the sample below. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 59 of 74 
 
 
I. 
For Internet Explorer 
a. Open a Windows Explorer, and navigate to the location of the certificates. 
b.Right click on the publicrootca.cer and choose Install Certificate 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c. Click Next, Choose the Place all certificates in the following store. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d.Click on Browse. And click on the Trusted Root Certification Authorities, then click on OK 
button. 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 60 of 74 
 
 
e. A window like the one below will appear.  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f. Click on next and a window like the one below will appear. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g.Click on Finish. A message will display confirming the import was success full. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 61 of 74 
 
ANNEX E 
 
Revocation of the “Certificate” (.pfx): 
 
Certificate revocation may be necessary when, prior to the expiration of a certificate, there has been a compromise 
in security or the certificate is no longer valid for legal or business reasons.  
 
Certificate revocation begins with the subscriber questioning the validity of a particular certificate. Any number of 
reasons may exist which would invalidate a certificate for its intended purpose.  
 
The PhilHealth issued certificates may be revoked under the following circumstances:  
• The certificate corresponding to the root certificate has been  
- Lost  
- Disclosed without authorization  
- Stolen  
- Compromised in any way 
• The subscriber does not meet the obligations of its Non-Disclosure Agreement with PhilHealth, which processed 
the certificate application.  
• There is an improper or faulty issuance of a certificate due to:  
- A prerequisite to the issuance of the certificate not being satisfied;  
- A fact in the certificate is known, or reasonably believed, to be false.  
• Any other circumstance that may reasonably be expected to affect the reliability, security, integrity or 
trustworthiness of the certificate or the cryptographic key pair associated with the certificate.  
• The subscriber requests the revocation for any reason whatsoever of its certificate.  
 
 
Procedure for revocation request:  
Revocation shall be requested PROMPTLY after detection of a compromise or any other event giving cause for 
revocation.  
A revocation request may be generated in the following ways, in order of preference:  
 
 Electronically by a digitally signed message  
 
 By personal representation to PhilHealth  
 
 By a signed fax message  
 
 Electronically by a non-signed message  
 
 By telephone call to PhilHealth  
 
Those wishing to revoke a certificate may contact:  
PhilHealth IT Management Department Tel: +63 (02) 6376293 Trunkline: +63 (02) 4417444 local: 
7604,7606, or 7607  
Email: network@PhilHealth.gov.ph, and/or helpdesk@PhilHealth.gov.ph  
Please provide the following details:  
 
 
 Provider Name  
 
 Accreditation Number  
 
 Authorized Contact Person  
 
 Email Address  
 
 Contact Number  
 
 Reasons/circumstances surrounding its revocation.  
 
PhilHealth may seek independent confirmation, for example, by making a phone call to the subscriber‟s employer 
or other sources, prior to initiating the revocation of a certificate.  
 
 
 
 


---

Page 62 of 74 
 
ANNEX F 
eClaims Account Profile  
 
For digital certificate generation to connect to eClaims Web Services using Proxy Server for the development 
of  eClaims Modules 
 
I have read and agreed to the Terms of the Digital Certificate-Non Disclosure Agreement attached 
herewith as “Annex F-1”. 
 
Requested by: 
 
__________________________________________ 
Signature over Printed Name of Authorized Personnel 
 
 
Approved by: 
 
__________________________________________ 
                (Owner/President/Administrator) 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Details 
Data  
Provider Name 
 
Address 
 
Provider Public IP 
Address 
 
Authorized Contact 
Person 
 
Official Email Address 
 
Official Contact 
Number 
 


---

Page 63 of 74 
 
 
 
(Annex F-1) 
 
DIGITAL CERTIFICATE-NON DISCLOSURE AGREEMENT 
 
 
_______________________________Provider Name_______________________________________is 
given the facility to connect to the PhilHealth network and access applicable services offered by it, 
subject to the provisions of a digital certificate to be issued by PhilHealth. The said digital 
certificate will and shall contain the following policies: 
 
1. <Provider Name> acknowledges that it is aware of its legal obligation regarding PhilHealth 
policies and standards to not provide PhilHealth’s data and programs especially if those 
consider confidential information or information that is important for the continued 
operation of the business. 
 
2. <Provider Name> shall not give or provide access to such information to unauthorized 
persons or entities. 
 
3. <Provider Name> shall  store the digital certificate only in designated computers within its 
premises and accessed only by its authorized personnel. 
 
4. <Provider Name> will use the digital certificate exclusively for business purposes and 
prevent any unauthorized access to it with all resources and capabilities. 
 
5. <Provider Name> shall keep in confidentiality the digital certificate or any other form of 
security token/device that were issued to them in accessing PhilHealth Services. 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 64 of 74 
 
ANNEX G 
 
PHILHEALTH CIRCULAR  
No. 038 s. 2012 
 
TO: 
ALL HEALTH INFORMATION TECHNOLOGY PROVIDERS SPECIALIZING IN 
ONLINE INFORMATION SYSTEMS, PHILHEALTH REGIONAL OFFICES AND 
LOCAL HEALTH INSURANCE OFFICES, INSTITUTIONAL HEALTH CARE 
PROVIDERS AND OTHER STAKEHOLDERS 
 
SUBJECT: 
Accreditation of Health Information Technology Providers  
 
I. 
RATIONALE 
 
Republic Act 8792 (e-Commerce Act of 2000) mandates all government agencies to transact government business and 
perform government functions using electronic data messages or electronic documents.  It provides for the legal 
recognition of electronic documents, data messages, electronic signatures, and electronic contracts, among others.  It 
also sets the framework and environment for the PhilHealth eClaims Project (PhilHealth Circular No. 14, s. 2011). 
 
As a strategic instrument to improve efficiency of health insurance transactions under the government’s thrust to 
achieve Universal Health Care for all Filipinos, PhilHealth is initiating a paperless online claims transaction system 
called eClaims system.  Vital to this innovation is the partnership engagement of health information technology 
providers (HITP) to ensure that Institutional Health Care Providers (IHCPs) are able to connect to and utilize this 
electronic system. 
 
II. 
COVERAGE  
 
This program policy shall be open to participation by duly-registered companies and corporations interested in being 
accredited by PhilHealth as a Health Information Technology Provider (HITP).  To be a HITP, they have to meet the 
following criteria: 
a. at least 60 % Filipino-owned information technology service company operating and maintaining a data center 
physically located in the Philippines; 
b. experienced in providing health information systems for health facilities for at least 3 years; 
c. able to comply with PhilHealth standards for electronic transactions; 
d. an organization NOT owned by or registered under a particular health maintenance organization, or a single 
institutional health care provider (IHCP); and, 
e. in good payment standing with PhilHealth on premium contributions of its employees. 
 
III. 
GENERAL RULES 
 
1. HITPs shall provide, as minimum utility services to IHCPs, the following: 
a. an application front-end for the utility applied (i.e., eClaims/Z-Claims/PCB eReports); 
b. an after sales service (helpdesk) and/or consulting services; 
c. capability building for IHCP personnel; 
d. assistance to  IHCPs in acquiring digital certificates through the designated certificate authority for 
authentication; 
e. secure data storage back-end; and, 
f. provision of a leased line to PhilHealth for purposes of transmitting electronic messages 
2. A HITP applicant may opt to be accredited for the following claims transaction utility services: 
a. eClaims utility and/or Z-Claims – an online claims transaction service, consisting of member verification for 
eligibility, claims submissions, and claims tracking, that will be used for patients confined in hospitals and other 
accredited health facilities that admit patients; 
b. PCB eReports utility – an online data aggregation service that accepts electronic reports from facilities such as 
health centers/rural health units (HC/RHU) and outpatient departments (OPD) of municipality/provincial 
health offices and government hospitals; and, 
 
 
 


---

Page 65 of 74 
 
c. other future electronic utility services as determined by the Corporation. 
3. HITPs may market and sell their services to IHCPs only after the issuance of the Certificate of Accreditation. 
4. HITPs shall not collect fees from their client IHCPs over and above PhilHealth-prescribed rates for the basic 
services provided above. 
5. Accredited HITPs shall update their systems, consistent with PhilHealth issuances. 
6. The Department of Health – Information Management Service is considered prequalified (part I) and shall not be 
charged the processing fee, but shall be subject to submission of the Business Agreement and the Conformance 
and Compliance Testing (Part II).  
7. All communications shall be via electronic mail or through online portals as prescribed by PhilHealth.  
 
IV. 
ACCREDITATION PROCESS  
              
a. The processing of initial applications shall consist of two (2) parts, namely: (Annex A) 
b. Part I  – Pre Qualification – consists of document review and evaluation 
c. Part II – Conformance and Compliance Testing – consists of systems design, execution and demonstration 
based on the specifications and standards provided by PhilHealth 
2. Part I – Pre Qualification 
a. An applicant shall send a letter of intent (LOI) electronically to hitpac@philhealth.gov.ph addressed to: 
the President and CEO, PhilHealth. 
b.  Two (2) sets of hard copies of the following documentary requirements submitted to the (no applications shall 
be accepted by mail):  HITPAC Secretariat, eClaims Unit, Room 1802, 18th Floor, Citystate Centre Bldg. 709 
Shaw Blvd., Brgy. Oranbo, Pasig City.   
i. Duly accomplished HITP Data Record (Annex B) 
ii. Proof of payment of processing fee 
iii. A duly notarized company portfolio, which must include, among others, the following information: 
01. nature of the business; 
02. ownership and location; 
03. organizational structure and human resource complement;  
04. names and credentials of key people in the organization (management and project personnel); 
including Board of Directors, if applicable; and 
05. Tax Identification Number (T.I.N.) 
iv. Notarized Certification of ongoing and completed IT systems project contracts with government and 
private IHCPs (including contracts awarded in its favor even if not yet started), signed by the company 
owner or his duly authorized representative. The certification shall specify the following: 
01. status of the contract (whether ongoing, completed or awarded but not yet started); 
02. name of contract; 
03. date of contract; 
04. scope of services provided; 
05. amount of contract and value of outstanding contracts; 
06. expected date of delivery; and 
07. end-user acceptance, if completed. 
v. Registration certificate (whichever is applicable)  
01. Department of Trade and Industry (DTI)  
02. Securities and Exchange Commission (SEC)  
03. Cooperative Development Authority (CDA); 
vi. Business Permit/License from the Mayor’s Office, issued by the city or municipality where the principal 
place of business of the HITP applicant is located.  In case the permit is for renewal and under process, 
permit of the previous year and the Official Receipt of the application for renewal shall be submitted; 
vii. Audited financial statements, stamped “received” by the Bureau of Internal Revenue (BIR), for the 
preceding calendar year, or as of a date not exceeding one (1) year prior to application; 
viii. Proof of paid-up capital (with not less than PhP500,000 capitalization). 
c. A duly signed Business Agreement (Annex C) in triplicate (3) copies shall also be submitted together with the 
documentary requirements. 
 
 
 
 
 
 


---

Page 66 of 74 
 
d. The Secretariat shall then issue an “order for payment” to the applicant to pay the processing fee. 
e. A non-refundable processing fee of Ten Thousand Pesos (PhP10,000) shall be charged for each type of 
utility service  applied for.  The fee shall be paid, directly at the Cashier’s Office of PhilHealth Head Office, 
located at the 16th Floor, Citystate Centre Bldg. 709 Shaw Blvd., Brgy. Oranbo, Pasig City.  For dated checks: 
checks should be made payable to “Philippine Health Insurance Corporation”. 
f. A soft copy of all the documents must also be emailed to the hitpac@philhealth.gov.ph.  
g. Applicants that pass Pre Qualification Determination shall be duly notified through e-mail that they are eligible 
to advance to the Conformance and Compliance Testing (Part II).  
h. Applicants with deficiencies shall be notified through e-mail and shall be given thirty (30) days within which to 
comply from receipt of the deficiency notice. Applications that still remain deficient/non-compliant shall be 
denied. 
3. Part II – Conformance and Compliance Testing 
a. Pre-qualified applicants shall be convened for an orientation and provided with the PhilHealth Implementing 
Guide of the claims transaction service it is applying for. 
b. The applicants shall be given a maximum of sixty (60) days from date of orientation to develop and test their 
prototype against a standard environment. 
c. The Corporation shall conduct supervised testing for applicants who are ready for demonstration. HITP 
applicants who pass the conformance and compliance testing shall be recommended for approval by the 
HITPAC to the PCEO. The applications of those who do not pass the demonstration within the prescribed 
period shall be deemed denied. 
4. The Certificate of Accreditation (CA) duly signed by the HITPAC Chair and the PhilHealth PCEO  shall be issued 
to applicants who pass the foregoing. 
5. The CA shall be valid for one year as will be indicated therein. 
6. The list of accredited HITPs shall be posted in the PhilHealth website, for reference by IHCPs.  PhilHealth may 
also publish the names of accredited HITPs in a newspaper of general circulation. 
7. Prior to actual engagement with IHCPs, accredited HITPs shall undergo an orientation on the policies and 
procedures of PhilHealth membership, contribution, and claims processing. 
 
V. 
DENIED APPLICATIONS 
 
1. Denied applicants shall be duly notified. 
2. Denied applications shall not be subject to motions for reconsideration. 
3. Denied applicants may apply again, undergoing the entire process, when the application period is reopened. 
 
VI. 
MONITORING AND EVALUATION OF ACCREDITED HITPS 
 
1. HITP must participate in an online forum prescribed by PhilHealth for interaction among HITPs, IHCPs and 
PhilHealth.  
2. Performance of all accredited HITPs shall be monitored during the accreditation period. HITPs with violations 
documented during monitoring shall be notified and given fifteen days to correct. Thereafter, persistent violation 
shall be referred to the HITPAC for action. 
3. Complaints from IHCPs subscribing to HITPs shall be subjected to evaluation and validation, the results of which 
shall be elevated to the HITPAC.  
4. Accredited HITPs shall recognize the authority of PhilHealth to conduct visits, regular audit, and/or administrative 
assessment(s) at any time, extend due courtesy/cooperation thereto. 
 
VII. 
TRANSITION CLAUSE 
 
1. A call for applications of HITPs shall be announced through publication in a newspaper of general circulation and 
in the PhilHealth website. 
2. PhilHealth may expand or limit the number of HITPs based on monitoring and review, and according to needs. 
3. All other matters not provided for in this circular shall be covered by succeeding issuances.  
 
 
 
 
 
 
 


---

Page 67 of 74 
 
 
 
I. 
EFFECTIVITY 
 
This Circular shall take effect fifteen (15) days after publication in any newspaper of general circulation and shall be 
deposited thereafter with the National Administrative Register at the University of the Philippines Law Center. 
 
For the information and guidance of all concerned 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 68 of 74 
 
ANNEX H 
 
CONFORMANCE AND COMPLIANCE TESTING VALIDATION TOOL 
 
COMPONENT 1:  IT Infrastructure and Technical Capabilities 
 
Part II of the accreditation process consists of 2 components.  Below is Test I (On-site Validation).  This evaluation 
mechanism requires ocular inspection of the I.T. facility.  Check YES if the item is present and NO if absent. Notable 
observations should be listed under REMARKS. The team may interview key persons to validate their observations. 
 
I. 
ON-SITE VALIDATION  
 
A. Data Center Attributes (Require applicant to show proof) 
 
YES 
NO 
Remarks 
Is the data center ISO 27001 Certified 
 
 
 
 
If  ISO 27001 Certified,proceed to item G onwards. 
 
B. Building Location 
 
YES 
NO 
Remarks 
Is the primary data center located in that 
building? 
 
 
 
Is the building location in a flood prone 
area? 
 
 
 
 
C. Secured/Authorized Access  
 
YES 
NO 
Remarks 
Does it have a 24/7 Security guard on duty? 
 
 
 
Does it have proper identification for 
authorized employees? 
 
 
 
Does it have a biometric user access? 
 
 
 
Does it have a CCTV Inside/outside the 
data center with capability to record at least 
2 months? 
 
 
 
Does it have an automatic fire suppression 
system that is compliant to the international 
data center standard? 
 
 
 
 
D. Air Conditioned (Require applicant to show proof) 
 
YES 
NO 
Remarks 
Is the data center room equipped with 
redundant precision air conditioning system? 
 
 
 
Does the air-conditioning system permit 
laminar air flow? 
 
 
 
 
E. Power Supply (Require applicant to show proof) 
 
YES 
NO 
Remarks 
Does it have a back-up generator capable to 
support the data center power requirement? 
 
 
 
Does it have an uninterruptible power 
supply capable to support the transition of 
power supply to/from main and generator? 
 
 
 
 
F. Network Security System (Require applicant to demonstrate) 
 
YES 
NO 
Remarks 
Does it have an appliance based firewall 
system? 
 
 
 


---

Page 69 of 74 
 
Does it have an intrusion detection and 
prevention system? 
 
 
 
Does it have an anti-virus and anti-malware 
software? 
 
 
 
Does it have a patch management system? 
 
 
 
 
G. Server and Storage Facilities (Require applicant to demonstrate) 
 
YES 
NO 
Remarks 
Is there a dedicated database and application 
servers, 
storage 
system 
and 
network 
facilities? 
 
 
 
Are all the software installed in the server 
licensed? 
 
 
 
Is there a dedicated storage with enough free 
space for the IHCP data not less than 5 
terabytes 
 
 
 
Are the storage disks having at least 10,000 
RPM to ensure performance? 
 
 
 
Does it have a backup system?  
 
 
 
 
H. Off-site Server and Storage Facilities 
 
YES 
NO 
Remarks 
Does it have an off-site backup facility? If 
yes, indicate location 
 
 
 
 
I. Connections (Require applicant to demonstrate) 
 
YES 
NO 
Remarks 
Does it have a contract of leased line with at 
least 1 MBPS bandwidth? 
 
 
 
PING www.philhealth.gov.ph Does the 
bandwidth have a latency of not more than 
50ms? 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 70 of 74 
 
ANNEX I 
CONFORMANCE AND COMPLIANCE TESTING VALIDATION TOOL 
 
COMPONENT 2:  White Box Testing  
Part II of the accreditation process consists of 2 components.  Below is Test II (White Box Testing).  This 
test shall check for conformance and compliance with the PhilHealth eClaims Implementation Guide.  Check 
YES if the test was successfully demonstrated and NO if not. Notable observations should be listed under 
REMARKS.  
 
II. 
WHITE BOX TESTING – systems in conformity and compliance with PhilHealth standards and 
specifications. 
 
Digital Certificate Conformance (Require applicant to demonstrate) 
 
YES NO 
Remarks 
Correctly display server date and time 
following instructions on “Part II 
Preparations” of the implementation guide. 
 
 
 
 
Log-in authentication (Require applicant to demonstrate) 
 
YES 
NO 
Remarks 
Demonstrate successful and unsuccessful  log-in 
process 
 
 
 
 
o 
Module 1 – Claims Eligibility Web Service 
 
Note:  Provide applicant with a test data and instruct them to encode the data. 
TEST CASE: 
A. Completeness of Data Display 
YES NO 
Remarks 
1. “YES” on Initial Call 
a. Number of remaining days allowable: As 
of “date”: “number” days remaining 
room and board allowance  
b. Member PIN 
c. Member Complete Name 
d. With 3 over 6 (3/6): Yes  
e. With 9 over 12 (9/12): Yes  
f. Patient Complete Name 
g. Confinement Period 
h. Hospital Name 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. “YES” on Final Call 
a. Tracking Number 
b. Number of remaining days allowable:  
As of “date”: “number” days remaining 
room and board allowance 
c. Member PIN 
d. Member Complete Name 
e. With 3/6:Yes 
f. With 9/12:Yes  
g. Patient Complete Name 
h. Confinement Period 
i. 
Hospital Name 
 
 
 
3. Check for doctor accreditation status 
Response Display:”a)Doctor does not exist ; 
b) Doctor is accredited based on admission 
and discharge date; and c) Doctor is not 
 
 
 


---

Page 71 of 74 
 
 
 
o Module 2 – Electronic Claims Submission 
Note:  Provide claim form test data 
TEST CASE: 
A. For Successful Submission 
YES 
NO 
Remarks 
Can send an encrypted and well formed and 
valid XML file 
 
 
 
Can  display the receipt ticket number 
 
 
 
Attachments are transmitted through encrypted 
channels using PhilHealth provided digital 
 
 
 
accredited based on admission and discharge 
date. 
B. Display of Deficiency Remarks 
YES 
NO 
Remarks 
1. Test for PIN 
Response Display: a) No records found; 
b)“Display the 12 digit PIN 
 
 
 
2. Wrong first name of the member 
Response Display: “Submit member birth 
certificate” 
 
 
 
3.  Wrong date of birth of member 
Response Display: “Submit member birth 
certificate” 
 
 
 
4. Omitted suffix of member 
Response Display: “Submit member birth 
certificate” 
 
 
 
5. Wrong first name of patient 
Response Display: “Submit patient birth 
certificate” 
 
 
 
6.  Wrong date of birth of patient 
Response Display: “Submit patient birth 
certificate” 
 
 
 
7. Omitted suffix of patient 
Response Display: “Submit patient birth 
certificate” 
 
 
 
8. Undeclared spouse 
Response Display: “Submit patient birth 
certificate”;“Submit marriage contract” 
 
 
 
9. Undeclared parent 
Response Display: “Submit member’s birth 
certificate”; “Submit patient’s birth certificate”. 
 
 
 
10.  Exhausted 45 days 
Response Display: “exhausted 45 days allowable 
limit” 
 
 
 
11.  Dependent child above 20 years old 
Response Display: “Submit patient’s birth 
certificate”; “Submit updated medical certificate 
of patient” 
 
 
 
12. Wrong PEN 
Response Display: “Employer  does not exist” 
 
 
 
13. Test for contribution 
Response Display: 
“Applicable PhilHealth Official Receipts (IPP)” 
“Latest MDR with applicable payment details 
(OWP)” 
“Sample YES response for Indigent member” 
“Submit properly filled up and signed claim form 
1 (employed)” 
 
 
 


---

Page 72 of 74 
 
certificate. 
Display PDF attachments after decryption by 
PhilHealth 
 
 
 
Can map PhilHealth issued claims series number 
to hospital record/database 
 
 
 
 
B. For Unsuccessful Submission 
YES 
NO 
Remarks 
Can display error message for unsuccessful 
transmission 
 
 
 
Can display error message for incomplete fields 
 
 
 
Can display error message for PDF attachments 
 
 
 
 
o Module 3 – Claims Status Verification 
 
Note:  Retrieve the mapped claim series number, get the claim status 
A. Display Claim Status 
YES NO 
Remarks 
In process 
 
 
 
Returned 
 
 
 
Denied 
 
 
 
Vouchering 
 
 
 
With voucher 
 
 
 
With check 
 
 
 
Not authorized 
 
 
 
 
B. Display “In Process” Claim Status 
Details 
YES NO 
Remarks 
Process Stage 
 
 
 
Process Date 
 
 
 
 
C. Display “Returned” Claim Status Details YES NO 
Remarks 
Deficiency 
 
 
 
Requirement/s 
 
 
 
 
D. Display “Denied” Claim Status Details 
YES NO 
Remarks 
Denial Reason/s 
 
 
 
 
E. Display “With Voucher” Claim Details 
YES NO 
Remarks 
Voucher Number 
 
 
 
Voucher Date 
 
 
 
 
F. Display “With Check” Claim Status 
Details 
YES NO 
Remarks 
Check Number 
 
 
 
Check Date 
 
 
 
Check Amount 
 
 
 
Claim Amount 
 
 
 
Claim Payee Name 
 
 
 
Total amount paid 
 
 
 
 
 
 
 
 
 


---

Page 73 of 74 
 
 
ANNEX J 
 
COMPONENT 3:  Policy Documents and Technical Support 
 
A. 
Technical and Policy Documents (Require the applicant to show proof) 
 
 
YES 
NO 
Remarks 
Does the applicant have a Non-Disclosure 
Agreement template between them and their 
client? 
 
 
 
Does the applicant have a Non-Disclosure 
Agreement template between them and their 
visitors 
 
 
 
Does the applicant have a policy on privacy of 
Confidential 
Heath 
Information 
/Medical 
Records? 
 
 
 
Does the applicant have a policy on data 
ownership? 
 
 
 
Does the applicant have a policy on data 
sovereignty? 
 
 
 
Does the applicant have a prototype contract 
between them and their client compliant with 
PhilHealth - provided template? 
 
 
 
Does the applicant have a policy on data 
liberation? 
 
 
 
Does the applicant have a user management 
policy? 
 
 
 
 
B. Human Resources 
 
YES 
NO 
Remarks 
Is the staffing pattern in accordance with 
provisions in the company portfolio? 
 
 
 
 
C. 
After Sales Service (Helpdesk)  
 
YES 
NO 
Remarks 
Does it have a dedicated telephone line for 
technical concerns of clients? 
 
 
 
Does it have a dedicated telephone line 
operational from 8am – 5pm? 
 
 
 
Does it have a dedicated email address for 
technical concerns of clients? 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


---

Page 74 of 74 
 
ANNEX K 
  
Document Type Code and Description 
Document Code 
Description 
CAB 
Clinical Abstract 
CAE 
Certification of Approval/Agreement from the Employer 
CF1 
Claim Form 1 
CF2 
Claim Form 2 
CF3 
Claim Form 3 
COE 
Certificate of Eligibility 
CSF 
Claim Signature Form 
CTR 
Confirmatory Test Results by SACCL or RITM 
DTR 
Diagnostic Test Result 
MBC 
Member's Birth Certificate 
MDR 
Proof of MDR with Payment Details 
MEF 
Member Empowerment Form 
MMC 
Member's Marriage Contract 
MSR 
Malarial Smear Results 
MWV 
Waiver for Consent for Release of Confidential Patient Health Information 
NTP 
NTP Registry Card 
OPR 
Operative Record 
ORS 
Official Receipts 
PAC 
Pre-Authorization Clearance 
PBC 
Patient's Birth Certificate 
PIC 
Valid Philhealth Indigent ID 
POR 
PhilHealth Official Receipts 
SOA 
Statement of Account 
STR 
HIV Screening Test Result 
TCC 
TB-Diagnostic Committee Certification (-) Sputum 
TYP 
Three Years Payment of (2400 x 3 years of proof of payment) 
  
  
Recommended steps for PDF attachments of files: 
1.       Create web server with https. 
2.       Create a folder where the pdfs will be publish. 
3.       In the system, provide facility for opening and uploading the pdfs in the web server, taking note   
          of the urls. 
4.       When creating the xml, include the urls of the uploaded documents. 
  
To test if the pdfs are accessible via browser, paste the url on the address bar of a browser. the pdf 
document can either be downloaded or loaded on the browser to be successful. 
 
 
