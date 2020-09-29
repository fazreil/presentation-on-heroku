Based on the OWASP DevSecOps Maturity Model, the lacking of implement particular component in each phases and recommendations are stated below:


## **1. Education and Guidance**
**Lack of:**
- Applying security SME
- Mutual testing
- Chances to practice and learning session

**Recommendation:**
- Aligning security SME with project team to achieve higher security standard
- Mutual testing of all the projects in the organization
- Create scenario to allow trainee learn and practice how to react with the incident


## **2. Culture and Organization**
**Lack of:**
- Threat modeling

**Recommendation:**
- Review user stories to create threat modeling
- produce security driven data flow diagrams
- Advanced abuse stories should included in modeling

## **3. Process**
*Achieved the highest level (Level 3) of OWASP DevSecOps Maturity Level*

**Recommendation:**
- defines which container images should be signed
- only containers with all the required signatures can be run in the cluster

Tools : Kritis and Binary Authorization - employing container vulnerability scanning using a capable container registry, and enforcing deployment-time security checks

## **4. Build**
**Lack of:**
- Signing of artifacts
- Signing of code
- Building and testing of artifacts in virtual environment

**Recommendation:**
- Generates a one-way hash of the software and uses the private key to encrypt this hash
- Bundling the hash and certificate with the executable
- Decrypt the hash using the public key in the certificate
- Create a new hash of the downloaded application

## **5. Deployment**
**Lack of:**
- Handover of confidential parameters
- Inventory of running artifacts
- Deployment without downtime is performed
- Same artifacts for environments
- Usage of feature toggles
- Blue/ Green Deployment

**Recommendation:**
-  Building an artifact once and deploying it to different environments means that only tested artifacts are allowed to reach the production environment
- Enhance test coverage by using environment independent configuration parameter, only the tested component can go to production

## **6. Patch Management**
**Lack of:**
- Usage of a short maximum lifetime for images


**Recommendation:**
- The periodically builded images are deployed not more than 30 days and the nightly builded images are deployed not more than 1 day  

## **7. Logging**
**Lack of:**
-  Correlation of security events
- Visualization of  logging

**Recommendation:**
- Visualize logfile in real time (e.g. Kibana, SolarWind)
- correlation and visualization of failed attempts combined with successful attempts

## **8. Infrastructure Hardening**
**Lack of:**
- Two factor authentication
- Role based authentication and authorization
- Usage of a chaos monkey


**Recommendation:**
- Apply two factor authentication for all privileged accounts on systems and applications
- A randomized periodically shutdown of systems to ensure the system is capable to handle failure conditions

## **9. Monitoring**
**Lack of:**
- Coverage and control metrics
- Apply metrics during testing
- Visualization of metrics

**Recommendation:**
- specific security control for a specific target group
- show actual security guideline

## **10. Dynamic depth for applications**
**Lack of:**
- Coverage analysis
- Coverage of service to service communication

**Recommendation:**
- Check that there are no missing paths in the application with coverage-tools (e.g. Cobertura)
- Using query, command and event to initial communication

## **11. Static depth for applications**
 *Achieved highest level (level 4) in DevSecOps Maturity Level*


## **12. Consolidation**
 *Achieved highest level (level 4) in DevSecOps Maturity Level*

## **13. Application tests**
**Lack of:**
- Implementation security in testing (unit test/ integration test)
- Smoke Testing (Build Verification Testing/Confidence Testing)

**Recommendation:**
- Implement Smoke testing by Automation
- This can verify whether the major functionalities still operates properly. If the test fails, then they can correct the build and redeploy the build immediately.




## **14. Dynamic depth for Infrastructure**
**Lack of:**
- Test of the configuration of cloud environments
- Weak password test
- Load test

**Recommendation:**
- perform SaaS or Cloud-oriented Testing
- Conduct automatic brute force attacks (like standard account "admin"/"root")
- Perform load test by
    1. Create a dedicated Test Environment for load testing
    2. Determine the following load Test Scenarios
    3. Determine load testing transactions for an application
        - Prepare Data for each transaction
        - Number of Users accessing the system need to be predicted
        - Determine connection speeds. Some users may be connected via leased lines while others may use dial-up
        - Determine different browsers and operating systems used by the users
        - A configuration of all the servers like web, application and DB Servers
    4. Test Scenario execution and monitoring. Collecting various metrics
    5. Analyze the results. Make recommendations
    6. Fine-tune the System
    7. Re-test

## **15. Static depth for Infrastructure**
**Lack of:**
- Test of infrastructure components for known vulnerabilities
- Check for malware (container images)
- Test cluster deployment resources

**Recommendation:**
- Use Anchore to analyze the container image and vulnerabilities
- Use Kubesec to perform deployment check
  - check whether proper security policies take place
