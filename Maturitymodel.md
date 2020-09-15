## **DevOps Maturity model**

![DOMM](https://www.veritis.com/wp-content/uploads/2019/10/devops-maturity-model-involves-five-transformation-stages.jpg)


# **DevSecOps**

![Devsecops](https://pbs.twimg.com/media/C77wryoVQAA0RZ8?format=jpg&name=large)

- DevSecOps is a cultural change in the software industry aimed at ensuring safety in the rapid-release cycles typical of modern application development and deployment which is DevOps.

- DevSecOps starts the security aspect of application and infrastructure from the beginning of the project.

- Automating security gates to maintain the DevOps workflow.

**DevSecOps Approaches:**

1. Code analysis
  - deliver code in small chunks so vulnerabilities can be identified quickly.

3. Change management
  - increase speed and efficiency by allowing anyone to submit changes, then determine whether the change is good or bad.
8. Compliance monitoring
  - be ready for an audit at any time (which means being in a constant state of compliance, including gathering evidence of GDPR compliance, PCI compliance, etc.).
1. Threat investigation
  - identify potential emerging threats with each code update and be able to respond quickly.
1. Vulnerability assessment
  - identify new vulnerabilities with code analysis, then analyze how quickly they are being responded to and patched.
1. Security training
  - train software and IT engineers with guidelines for set routines.

**Type of software security testing**

1. Static Application Security Testing (SATS)
3. Origin Analysis / Software Composition Analysis (SCA)
8. Dynamic Application Security Testing (DAST)
1. Interactive Application Security Testing (IAST)
1. Test Coverage Analyzes
1. Correlation Tools
1. Database Security Scanning


  # **DevSecOps Maturity Model**

## **OWASP DevSecOps Maturity Model**

-  It is a guidelines to enable the organizations which progress in DevOps journey, to have a faster release cycles and digital innovation demands a strong pitch. Organizations will have to implement DevSecOps in all the application development stages.


![DSOMM](https://owasp.org/www-project-devsecops-maturity-model/assets/images/impl.png)

**There are four levels of DevSecOps Maturity Model to assess from different dimensions:**
- Level 1: Basic Understanding of security practices
- Level 2: Adoption of basic security practices
- Level 3: High Adoption of basic security practices
- Level 4: Advanced deployment of security practices at scale

**Dimensions**  
[ref]: https://dsomm.timo-pagel.de/ "OWASP DevSecOps Maturity Model"]
- Build
- Deployment
- Patch management
- Education and Guidance
- Culture and Org.
-  Process
- Monitoring
- Logging
- Infrastructure Hardening
- Dynamic depth for applications
-  Static depth for applications
- Test-intensity
- Consolidation
- Application tests
- Dynamic depth for infrastructure
-  Stored Secrets

## **Security DevOps Maturity Model (SDOMM)** [id]: https://christian-schneider.net/slides/OWASP-AppSecEU-2015_SecDevOps.pdf "SDOMM"

- This model define steps in reaching more automation to check security aspects.
- To define a roadmap of how projects to achieve certain level of automation to check security aspects during the CI (Continuous Integration) build chain.

**Axes of the Security DevOps maturity model**

- Dynamic Depth:
  - How deep are dynamic scans executed within a Security DevOps CI chain?

- Static Depth:
  - How deep is static code analysis performed within a Security DevOps CI chain?

- Intensity:
  - How intense are the majority of the executed attacks within a Security DevOps CI chain?

- Consolidation:
  - How complete is the process of handling findings within a Security DevOps CI chain?


|Axes| Level 1| Level 2| Level 3| Level 4|
|--------------|---------------|-------------|-----------|------------|
|Dynamic Depth|Scanning of public attack surface| Scanning of authenticated parts through UI layer |Separate scanning of different application layers / backends| argeted scanning of individual forms / wizards (UI) and service layers|
|Static Depth|  |   |   |     |
|Intensity|     |     |       |       |
|
