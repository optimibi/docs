---
title: Increasing Memory Limit for Optimibi Server
permalink: /documentation/Tools/Increasing-Memory-Limit/
tags:
---


# Increasing Memory Limit for Optimibi Server

Optimibi Server runs on Java Virtual Machine (JVM) which uses Java heap as a memory storage pool. Heap space is allocated when a process starts. Although JVM is good at dynamic memory management, using too much memory may cause JVM to perform poorly or even crash. On Optimibi Server, using too little memory may result in performance degradation. If you use Optimibi Server to process large datasets or high concurrency, you can improve its performance by setting the maximum memory usage of JVM.

This article explains how to increase the memory limit of JVM by editing the startup script file of Optimibi Server. Following the steps in this article, you can change the memory settings of Optimibi Server to meet your specific needs.

Important Note: Changing the memory usage of JVM may affect the stability of Optimibi Server. If you are not sure what you are doing, do not change this setting.

**Prerequisites**

- Optimibi Server is installed.
- You have administrator privileges.

**Increasing Memory Limit for Optimibi Server**

Follow these steps to increase the memory limit of Optimibi Server.

1. Log in to the server where Optimibi Server is installed with administrator privileges.

2. Navigate to the installation directory of Optimibi Server.

3. Open the startup.sh or startup.bat file in Optimibi/bin, which is the startup script file of Optimibi Server.

4. Find the following lines:

   `set Optimibi_JAVA_HOME=/usr/local/java set CATALINA_OPTS=-Xms512m -Xmx1024m`

   If you are using Windows, change the path to the installation path of Java. If you are using Linux, change the path to the installation path of Java.

5. Change the values of Xms and Xmx to increase the memory limit of Optimibi Server.

   -Xms sets the initial heap size of Java Virtual Machine. The minimum value is 64 MB. You can set it to 20% of the available memory of Optimibi Server.

   -Xmx sets the maximum heap size of Java Virtual Machine. The maximum value is 2048 MB. You can set it to 80% of the available memory.

   For example:

   `set CATALINA_OPTS=-Xms1024m -Xmx2048m`

   The above example sets Xms to 1024 MB and Xmx to 2048 MB.

6. Save and close the startup script file.

7. Restart Optimibi Server.

You have successfully increased the memory limit of Optimibi Server.

## Summary

This article explains how to increase the memory limit of JVM by editing the startup script file of Optimibi Server. By adjusting the memory limit of JVM, you can improve the performance of Optimibi Server. However, please note that changing the memory usage of JVM may affect the stability of Optimibi Server. So, be careful while making changes.