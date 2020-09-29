

# **Assessment**
In this document will perform hardening in Dev environment by checking each component that have identified.
There are a limitation for the user to assess the infrastructure as the user only able to read the file.
Below is the section that need to perform assessment:

- **SECTION 2.0 PATCHES, PACKAGES AND INITIAL LOCKDOWN**
- **SECTION 3.0 MINIMIZE XINETD NETWORK SERVICES**
- **SECTION 4.0 MINIMIZE BOOT SERVICES**
- **SECTION 6.0 LOG**
- **SECTION 7.0 FILE/DIRECTORY PERMISSIONS/ACCESS**
- **SECTION 8.0 SYSTEM ACCESS, AUTHENTICATION& AUTHORIZATION**
- **SECTION 9.0 USER ACCOUNTS AND ENVIRONMENTS**
- **SECTION 10.0 WARNING BANNERS**
- **SECTION 11.0 TRIPWIRE INSTALLATION**

From the result of the hardening, there are all the services that identified in the script is available.

**In section 2.0**
- all the items are function well.
- Validate your system before making changes is skipping because there is no implementation involve yet.
-Install and run Bastille is false because Bastile is not install in the VM.

**In section 3.0**
- Configure TCP Wrappers and Firewall to limit access is false because firewall is off
-all the services that need to enable are skipping due to not implemented yet.

**In section 4.0**
-all the services that need to disable and enable is skipping due to not implemented yet.

**In section 5.0**
- all the items are skipping due to not implemented yet.

**In section 6.0**
- all the items are skipping due to not implemented yet.

**In section 7.0**
- Items which require authorization is failed due to missing of password.

**In section 8.0**
- Require authentication for Single-User mode is failed
- Restrict root logins to system console is failed_when

**In section 9.0**
- all the items are not implemented yet.

**In section 10.0**
- all the items are working fine. However, the content of the banner not identified yet.

**In section 11.0**
- Tripwire is not install in the VM. Therefore, no relevant information being updated.
