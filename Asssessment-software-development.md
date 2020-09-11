# **7 Criteria to assess security aspect of software development tools**

1. **Vulnerabilities**


:question:Does the tools being detected in Vulnerabilities?

:radio_button: A vulnerability is any mistakes or weakness in the system security procedures, design, implementation or any internal control that may result in the violation of the system's security policy.

#### **Possible Vulnerabilities**

:point_right:**SQL Injection**

- With this vulnerability, one is able to inject malicious code into the SQL statement(s).Hackers can provide database applications with some malicious data, and the application utilizes that data to construct a SQL statement by using string concatenation. The SQL semantics will then gain by the attackers.

:point_right: **OS Command Injection**

- language independent
- It happens when the software integrates user-manageable data
into a command handled under the shell interpreter command.
-If the data is unchecked, a attackers can use shell metacharacters to change the executing command.

:point_right: **Buffer Overflow**

- This vulnerability occurs when a program tries to add more data in the buffer which the storage capacity is limited. Writing outside of a block of owed memory can crash the program, corrupt data, and even cause the execution of malicious code.
2. **Data Leak Threat**

:question: Does the data leak by anyone in the organization?

:radio_button: Data leakage is the unauthorized transmission of data from within an organization to an external destination or recipient.
Data leakage threats may occur through web and email as well as mobile data storage devices such as USB keys and laptops.
### **Possible Threat**

:point_right:  **Accidental Breach**

- "Unauthorized" data leakage does not mean intended or malicious. However,  unintentional data leakage can still result in the same penalties and reputational damage as they do not mitigate legal responsibilities.

**E.g:** An employee unintentionally send an email which contain confidential data to a wrong recipient.


:point_right: **Electronic Communications with Malicious Intent**

- As the organization provide internet for employees to access.
All the file transfer or accessing external sources will take place on the internet.
This may causes unknown file which contain malicious code from the internet damage or attack the computer or network

**E.g:** Malware, Phishing attacks
3. **Audit logging**

:question: Does all the events and changes recorded ?

:radio_button: **An effective audit log management supports compliance, accountability, and security**.
Audit log capture events by recording who performed an activity, what activity was performed, and how the system responded including all IT activity as well as suspicious activity.
**However, if a log audit is misconfigured, corrupted, or compromised in some way, it becomes useless.**
- It is a valuable resource for admin and auditors to examine suspicious activity on the network or diagnose and troubleshoot the issues.
- It may used to be a audit log review template which contain tested structure and format.

### **An Audit Log should:**
- conduct a risk assessment for each system or application
- Making sure you sync the timestamp is another key element of log audit management.

### **An Audit Log provide:**
- records of all IT activity, including suspicious activity, evidence
- proving compliance with common regulations like HIPAA and PCI DSS.
- historical visibility into activity, so changes won’t go overlooked.

    :arrow_right: boost performance, increase accountability, keep system stable
- robust risk management strategy

    :arrow_right: show to investor you pose a reliable and low-risk investment opportunity

### **Audit Log Format**

|Item| Example |
|-------------------------|----------------|
|Group |the team, organization, department, or account from which the activity originated|
|Actor |the uuid, username, or API token name of the account responsible for the action|
|Event name | the standard name for the specific event|
|Description | human-readable, may include links to other application pages|
|When | the server NTP synced timestamp|
|Where| the country of origin, device identification number, or IP address|
|Action | how the object has been altered|
|Action Type|create, read, update, or delete |

4. **Identity and Access Management**

:question: Does the system provide right access, for the right people, at the right time?

:radio_button: It is a process of identifying, authenticating and authorizing individuals to have access to systems or networks by providing user rights and restrictions with selected identities.
dentity management is focused on authentication, while access management is aimed at authorization.
By implementing this, it is much easier to manage provisioning while ensuring compliance

### **Identity Management Capabilities**

- Access (authorization or restriction of access to certain information to certain persons across locations and systems)
- Single sign-on (SSO, describes the ability to login to the system once and only once, gaining access to all systems without the need for logging in again via help from a server)
- Multi-factor authentication (using multiple, independent components to gain access)
- Password Management
- Access spanning system like cloud access
- User repository Management (used to track users with access)
-Security Analytics for auditing and compliance

5. **Security integration with SDLC**

:question: Does the security aspect included during implemetation of SDLC?

:radio_button: Integrating security into the development of an application or software is able to decrease its risk of susceptibility to attacks and exploits. It is because
the security aspect will be measured in all the SDLC stages, from Planning, System Analysis & Requirements, Deevelopment, Implementation and Maintenance.

### **End-To-End Information Security Services**
:point_right: **Security Training & Awareness**

Training and Awareness need to be take place for learn about security assurance and methodologies. This would help the team to define and evaluate security risk and definitions.

:point_right: **Building Security Requirements**

   - Gathering Security Requirements
   - Ensuring Security Baseline
   - Building Security Checklist
   - Defining Security Gates
   - Setting Risk Definition
   - Referring Security Maturity Models
   - Implying Compliances & Regulations

:point_right: **Secure by design**

The product should be designed based on the security prospect to combat any possible security threat. Implementing threat modeling will helping in analyze attack surfaces and the possible threat that may exist in the product design.

:point_right: **Secure Implementation & Coding**

Security control will take place. Implementation of code review process and analyzing standard checkpoints in this stage.
Evaluating the code against the CWE Top25 Programming Error can influence to a great extent during implementing safeguards & countermeasures.

:point_right: **Security Testing**

Developed product is evaluated to handle possible security attacks. Different security testing tools are required to verity the product's security.

### **Recommended approaches:**

- Risk Based Approach
- GREY Box Approach
- Testing Across SDLC
- Integrated Vulnerability Analysis


:point_right: **Security Review**

After precautions and testing, building a final security review plan will reduce the later risk.

**Review tasks:**

- Compliance check
- Configuration check
- Threat modeling
- Audit Policies



:point_right: **Security escalation & Maintenance**

Implementing maintenance plan to provide customers after service help. Integrating security in every stages to reduce security control implementation cost.

|Phase | Task|
|--------------|------------------|
|Security Patch Management| Handling Security Patch assessments, Testing & Regression |
|Security Escalation | In-house Security Escalation Reproduction, Risk Evaluation and Testing of concerned fix|
|3rd Party Library Updates | Tracking, Risk Assessment and Testing of 3rd party Library Security Updates|


6. **Storage method** (cloud-service provider/database)

:question: Does the data being stored in a secure service/ application?

Data storage is very important due to all the gathered data from multiple source will be stored in secure and accessible.
Data is vital in many industries which used to engage with customer, develop new products or services. Hence, a method or a platform is required to manage and access conveniently.
The services that used to stored the data should protect it from cyber attack and put redundancies in place to ensure the data is save even though system downtime.

### **Storage security**

:point_right: **Advanced Firewalls**

- Simple firewall examine the source and destination data.
- Advanced firewall verify packet content integrity.

:point_right: **Intrusion Detection**

- Security systems which rely on identifying when someone tries to break into the system.
- Multiple levels of detection to stop intruders who break past the network’s initial defenses.

:point_right: **Event Logging**

- A record of network actions.
- For analysts to predict and prevent security breaches.

:point_right: **Encryption**

- keeps data safe from unauthorized users.
- Access is denied without finding a secret key by an unauthorized users

:point_right: **Physical Security**

- Password login, fingerprint locks


7. **Attack Pattern**

It is used for testing purposes and important for ensuring that potential vulnerabilities are prevented. The attack patterns themselves can be used to highlight areas which need to be considered for security hardening in a software application.

### **Typical information should be captured:**
- Pattern name and classification
- Attack prerequisites
-Description
-Targeted vulnerabilities or weaknesses
-Method of attack
-Attacker goal
-Attacker skill level required
-Resources required
-Blocking solutions
-Context description
-References

8. **Automate routine tasks**

:question: Does the tools able to perform/ assign task automatically?

Automation will free up your mental energy and resources to work on important things.
You should imagine impactful ways you should enhance your product , service or customer experience, instead of worrying about how to respond to a query. For instant, auto generate reply messages or assign task automatically.

9. **Application of system and network security**
10. **Validation** (reject blacklist)


+ real time program performance & status
+ configuration options to match your work flow
+auto save

## **Method to asess software development tool security**
1. **NIST security model**

It is a set of standards to be followed for private organizations to be better equipped to recognize, track and respond to cyber-attacks. The core structure describes the actions you need to take to achieve various outcomes on cybersecurity

![NIST security model](https://corcystems.com/wp-content/uploads/2020/03/NIST-mmg.png)


**Framework**

- Identify

The Identify feature helps build an organizational understanding for the management of cybersecurity risk to systems, individuals, assets, data and capabilities.

**E.g.** Identifying asset vulnerabilities, threats to internal and external organizational resources, and risk response activities as a basis for the organizations Risk Assessment.

- Protect

It is to ensure to ensure delivery of critical infrastructure services and supports the ability to limit or contain the impact of a potential cybersecurity event.

**E.g.** Protections for Identity Management and Access Control within the organization including physical and remote access.

- Detect

It defines the appropriate activities to identify the occurrence of a cybersecurity event and discover any suspicious event from time to time.

**E.g.** Maintaining Detection Processes to provide awareness of anomalous events.

- Respond

It includes appropriate activities to take action regarding a detected cybersecurity incident and supports the ability to mitigate the possible impact of a cybersecurity incident.

**E.g.** Analysis is conducted to ensure effective response and support recovery activities including forensic analysis, and determining the impact of incidents.

- Recover

Dentifies relevant measures for managing recovery plans and restoring any capabilities or services
that may have been affected as a result of a cyber security incident. It supports effective recovery from regular operations to reduce the effects of an incident with cybersecurity.

**E.g.** Ensuring the organization implements Recovery Planning processes and procedures to restore systems and/or assets affected by cybersecurity incidents.

2. **NICE cybersecurity framework (NICE Framework)**

It is a resource from which organisations or sectors can create additional publications or resources that fulfil their needs to identify or provide guidance on various aspects of workforce development, planning, learning, and coaching.

![NICE framework](https://schoolofcybersecurity.com/wp-content/uploads/2018/04/Framework_courses-4.png)

**Framework**

- Analyze
 - Exploitation Analysis
 - Threat Analysis
 - All-Source Analysis (multiple sources, agencies)


- Collect and Operate
  - Collection Operations
  - Cyber Operational Planning
  - Cyber Operations


- Investigate
  - Cyber Investigation
  - Digital Forensics


- Operate and Maintaining
  - Data Administration
  - Network Services
  - Systems Administration
  - Systems Analysis


- Oversee and Govern
  - Cybersecurity Management
  - Strategic Planning and Policy
  - Cybersecurity Management
  - Program/Project Management and Acquisition


- Protect and Defend
  - Cyber Defense Analysis
  - Cyber Defense Infrastructure Support
  - Incident Response
  - Vulnerability Assessment and Management


-  Securely Provision
  - Risk Management
  - Systems Requirements Planning
  - Technology R&D
  - Test and Evaluation

-SATS tool
3. **SAST vs DAST**

**SATS**

- It using white-hat testing methods, which they need access to source code to operate. SAST tools help software developers and security professionals analyze an application’s underlying source code for flaws and vulnerabilities.

- White-hat, or white-box, testing requires users to possess information related to code and security architecture to examine non-compiled code.

- This tool is notorious for flagging safe code  (false positives) because they don't execute the code.

- However, it still extremely acclaimed in detecting problems early on in the life
cycle of software development, such as numerical errors, race hazards.

**DAST**

- Using black-box testing which perform testing from outside a functioning application, rather than on its source code.

- This method gives security professionals and developers a third-party perspective of threats, viewing an app much like a hacker outside the organization would.

| SAST | DAST|
|-------------------|------------------|
|White box security testing <br>- Tester has access the underlying framework <br>- Application tested from inside out <br>- testing represent developer approach| Black box security testing<br> - Tester has no knowledge of the framework or technologies -tested from outside in -testing represent hacker approach|
| Requires source code <br> -analyze source code or binary without executing the applications| Requires a running application<br> -  analyze by executing the applications |
|Find vulnerabilities earlier in SDLC |Find vulnerabilities toward the end of SDLC|
|Less expensive to solve the vulnerabilities<br> - problem can be solve before code enter to QA cycle| More expensive to solve the vulnerabilities <br> -problem may be fixed as emergency release|
|can't discover run-time and environment-related issues <br> scans static code| Can discover run-time and environment-related issues<br> -using dynamic analysis|
|Support all kinds of software | Typically scan only application like web services and web application|



# **Why NIST framework**

By implementing all the steps in NIST framework

- organizations are able to understand their cybebrsecurity risks (threats, vulnerabilities and impacts)
- reduce the risks with customized measures
- The Framework helps them respond to and recover from cybersecurity incidents, prompting them to analyze root causes and consider how they can make improvements
- all the events or defined risks and solutions are stated clearly by the team
- In identify stage, before select a tool , team will know all the threats or vulnerability from internal to external that may harm to the project. So, emergency release will be decrease.
- All the risk can be limit by authorized different type of access to different type of users. By enabling all users have their own and unique account.
- Leader or Administrator always keep an eye on the progress will increase the level of security instead of depending on the system to detect which some errors might not be detected.
- In respond stage, a respond is important to involve for solving the problem as fast as possible. This is to avoid any other attacker interrupt the system or data during the downtime.
- Always backup all the data by following the guideline that have identified to ensure the confidentiality of data.
