# **Apache Maven**

Apache Maven is a comprehension and project management software tool. Based on a project object model (POM) framework, Maven is able to handle the create, report and documentation of a project from an information center. We can create and manage any Java-based project through maven.

![Maven and its Features](https://www.sevenmentor.com/wp-content/uploads/2019/12/Maven-Architecture-Training-in-Pune.jpg)

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

![Maven POM](https://cdn.educba.com/academy/wp-content/uploads/2020/04/Maven-POM-File-1.2.jpg)

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

For the **lifecycle used for Back End** build and test codes, **Clean** and **Build lifecycle** are adopted.

<br>

### **Maven Typical Build Lifecycle**
A Typical Build Lifecycle is a well-defined sequence of phases which define the order in which the goals are to be executed. A typical Maven Build Lifecycle is as table below:

![Maven Build Lifecycle](https://www.studytonight.com/maven/images/site-lifecycle.jpg)

|Phase|Handles|Description|
|--|--|--|
|**Prepare-resources**|Resource copying|Resource copying can be customized in this phase|
|**Validate**|Validating the information	|Validates if the project is correct and if all necessary information is available.|
|**Compile**|Compilation|Validates if the project is correct and if all necessary information is available.|
|**Test**|Testing|Tests the compiled source code suitable for testing framework.|
|**Package**|Packaging|This phase creates the JAR/WAR package as mentioned in the packaging in POM.xml.|
|**Install**|Installation|This phase installs the package in local/remote maven repository.|
|**Deploy**|Deploying|Copies the final package to the remote repository.|

<br>

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

### **Maven Site Lifecycle**
Maven Site plugin was purposely designed for documentation, for example create reports, deploy site, and etc. It having 4 phases as below:
- Pre-site
- Site
- Post-Site
- Site-Deploy

### **Maven Plugin**
Maven is a plugin execution framework at where all the tasks are done through plugins. Maven plugins are use for:
- create jar file
- create war file
- compile code files
- unit testing of code
- create project documentation
- create project reports

![](https://raw.githubusercontent.com/codspire/artifact-lookup-maven-plugin/master/src/main/resources/artifact-lookup-maven-plugin-info.png)

**Plugin Types**

|Sr. No.|Type & Description|
|--|--|
|1|**Build plugins** - They execute during the build process and should be configured in the <build/> element of pom.xml.|
|2|**Reporting plugins** - They execute during the site generation process and they should be configured in the <reporting/> element of the pom.xml.|

<br>

### **Common Plugins for Documentation**

|Plugins|Description|
|--|--|
|Site|Main plugin for all site document creation|
|Project Info Report|Collate and produce the common site reporting docs for the artifact|
|Checkstyle|Provide static analysis for source files.|
|FindBugs|Provide static analysis for source files.|
|Cobertura|Provide code coverage during test phase.|
|PMD|Provide static analysis and code duplication.|
|JavaDoc|Bundles JavaDoc into reporting structure|
|JXR|Build crosslink information for classes. <br> <br>  _Configuration can be used by all the plugins listed in this table_|


### **Documentation for Back End Codes**
Documentation for codes also can be understood as provide a summary about Back End code's function. It's crucial to carry out the documentation so the developers can save time from reading all the lines of the script just for understand the script function. With the help of Maven, we will be able to deliver out the summary for all the Back End scripts and help people to understand the scripts function within second.

**Relate apprach with Maven Lifecycles used by Back End**
<br>
As we know Maven provide an automation process for project with its lifecycles. By refer to our goal which is to achieve automation for documentation, clearly we can say that Site lifecycle will be most suitable to be adopted with some plugins for documentation (vary according to needs).


## **References**
1. Baeldung. (2019, April 07). Maven Goals and Phases. Retrieved September 02, 2020, from https://www.baeldung.com/maven-goals-phases
<br>
<br>
2. Justin Albano (2019, December 02). Building Java Applications With Maven - DZone Java. Retrieved September 02, 2020, from https://dzone.com/articles/building-java-applications-with-maven
<br>
<br>
3. Maven - Build Life Cycle. (n.d.). Retrieved September 02, 2020, from https://www.tutorialspoint.com/maven/maven_build_life_cycle.htm
<br>
<br>
7. Maven - Plugins. (n.d.). Retrieved September 04, 2020, from https://www.tutorialspoint.com/maven/maven_plugins.htm
<br>
<br>
4. Maven Tutorial. (n.d.). Retrieved September 03, 2020, from https://www.tutorialspoint.com/maven/index.htm
<br>
<br>
6. Mike Ensor (2012, March 23). Basic Site Documentation: Maven 3 - DZone Java. Retrieved September 04, 2020, from https://dzone.com/articles/basic-site-documentation-maven
<br>
<br>
5. Porter, B. (n.d.). Introduction to the Build Lifecycle. Retrieved September 02, 2020, from https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html
<br>
<br>