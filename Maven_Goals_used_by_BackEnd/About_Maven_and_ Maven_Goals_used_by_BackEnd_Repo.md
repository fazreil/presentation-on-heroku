# **Apache Maven**
Apache Maven is a comprehension and project management software tool. Based on a project object model (POM) framework, Maven is able to handle the create, report and documentation of a project from an information center. We can create and manage any Java-based project through maven.

Maven provide build lifecycle framework with automation on project's build infrastructure within second as it uses a standard directory layout and a default build lifecycle.

In the case of the setting for several development teams, Maven will set up the way to function in a very short time as per the requirements. Since most project configurations are simple and reusable, Maven makes life easy for developers when building installations for automation reports, reviews, builds, and tests.

**Scope provide by Maven to manage by developers**
+ Build
+ Documentation
+ Reporting
+ Dependencies
+ SCMs
+ Releases
+ Distribution
+ Mailing List

In short, Maven simplifies and standardizes the project build process. It handles compilation, distribution, documentation, team collaboration and other tasks seamlessly. Besides that, Maven also increases reusability and take care most of the build related tasks.

## **Project Object Model**
Project Object Model (POM) is a fundamental work unit of Maven, it is an XML file that resides in the base directory  of a project (pom.xml). POM contains the information of a project and various configurations details used by Maven to build the project.

Aside of that, POM also consist goals and plugins for a project. Maven looks into the POM of respective directory when executing a task or goal. By reading POM, Maven able to get the configuration information before execution take place. Configurations that specified in POM are as below:
- Project Dependencies
- Plugins
- Goals
- Build Profiles
- Project Versions
- Developers
- Mailing Lists


## **Maven Goals used by Back End Repositories**
Maven following 3 standard lifecycle, which are:
- Clean
- build
- Site

The lifecycle used for Back End build and test codes, the Clean and Build lifecycle are adopted.


### **Maven Typical Build Lifecycle**
A Typical Build Lifecycle is a well-defined sequence of phases which define the order in which the goals are to be executed. A typical Maven Build Lifecycle is as table below:

|Phase|Handles|Description|
|--|--|--|
|**Prepare-resources**|Resource copying|Resource copying can be customized in this phase|
|**Validate**|Validating the information	|Validates if the project is correct and if all necessary information is available.|
|**Compile**|Compilation|Validates if the project is correct and if all necessary information is available.|
|**Test**|Testing|Tests the compiled source code suitable for testing framework.|
|**Package**|Packaging|This phase creates the JAR/WAR package as mentioned in the packaging in POM.xml.|
|**Install**|Installation|This phase installs the package in local/remote maven repository.|
|**Deploy**|Deploying|Copies the final package to the remote repository.|


### **Maven Build (Default) Lifecycle**
Default lifecycle is the primary lifecycle of Maven and is used to build application. Its phases are as below:

|Sr.No.|Lifecycle Phase & Description|
|--|--|
|1|**Validate** - Validates whether project is correct and all necessary information is available to complete the build process.|
|2|**Initialize** - Initializes build state, for example set properties.|
|3|**Generate-Sources** - Generate any source code to be included in compilation phase.|
|4|**Process-Sources** - Process the source code, for example, filter any value.|
|5|**Generate-Resources** - Generate resources to be included in the package.|
|6|**Process-Resources** - Copy and process the resources into the destination directory, ready for packaging phase.|
|7|**Compile** - Compile the source code of the project.|
|8|**Process-Classes** - Post-process the generated files from compilation, for example to do bytecode enhancement/optimization on Java classes.|
|9|**Generate-Test-Sources** - Generate any test source code to be included in compilation phase.|
|10|**Process-Test-Sources** - Process the test source code, for example, filter any values.|
|11|**Test-Compile** - Compile the test source code into the test destination directory.|
|12|**Process-Test-Classes** - Process the generated files from test code file compilation.|
|13|**Test** - Run tests using a suitable unit testing framework (Junit is one).|
|14|**Prepare-Package** - Perform any operations necessary to prepare a package before the actual packaging.|
|15|**Package** - Take the compiled code and package it in its distributable format, such as a JAR, WAR, or EAR file.|
|16|**Pre-Integration-Test** - Perform actions required before integration tests are executed. For example, setting up the required environment.|
|17|**Integration-Test** - Process and deploy the package if necessary into an environment where integration tests can be run.|
|18|**Post-Integration-Test** - Perform actions required after integration tests have been executed. For example, cleaning up the environment.|
|19|**Verify** - Run any check-ups to verify the package is valid and meets quality criteria.|
|20|**Install** - Install the package into the local repository, which can be used as a dependency in other projects locally.|
|21|**Deploy** - Copies the final package to the remote repository for sharing with other developers and projects.|


### **Maven Clean Lifecycle**
Maven Cleaan Lifecycle consists of:
+ Pre-Clean
+ Clean
+ Post-Clean

Maven clean goal is bounded by the clean phase in the lifecycle. It deletes the output of a build by deleting a built directory.


### **Documentation for Codes**
In this approach we will do documentation for every scripts. This approach is important as a good documentation will being able to provide a clear summary on the function of each scripts.

**Relate apprach with Maven Lifecycles used by Back End**
As we know Maven provide an automation process for documentation, and both the Build and Clean Lifecycles helpful in its well-defined sequence of phases that allow goals can be achieved easily as well as clean up the dependencies that hooked up memory. Thus, I would like to adopt the same lifecycle for documentation purpose.
