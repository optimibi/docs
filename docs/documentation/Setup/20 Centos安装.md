---
title: Optimibi Installation (CentOS)
permalink: /documentation/Setup/OptimiBI-Installation-CentOS/
---

# Optimibi Installation (CentOS)

**Step 1. Switch to the root user**

```
sudo su root
```

<div align="left"><img src="./images/image-20220829172346058.png"  /></div>

**Step 2. Create the 'optimibi' user group**

```
groupadd optimibi
```

<div align="left"><img src="./images/image-20220829172418679.png"  /></div>

**Step 3. Create the 'optimibi' user, add it to the 'OptimiBI' user group, and set the user password to 'optimibi' as well.**

```
adduser optimibi -g optimibi
passwd optimibi
```

<div align="left"><img src="./images/image-20220829172434849.png"  /></div>

**Step 4. Navigate to the directory containing the installation package and extract the package to the /opt directory.**

```
unzip -o optimibi-server_202203240605.zip -d /opt/
```

<div align="left"><img src="./images/image-20220829172446528.png"  /></div>

**Step 5. After extracting, go to the /opt/ directory and modify permissions.**

```
cd /opt/
chmod -R 700 optimibi-server
chown -R optimibi optimibi-server
chgrp -R optimibi optimibi-server
```

<div align="left"><img src="./images/image-20220829172501348.png"  /></div>

**Installation completed.**



## Start OptimiBI

**Please operate as the 'optimibi' user**

```
su OptimiBI
cd /opt/optimibi-server/
```

**Start the service**

```
./start-optimibi.sh
```

<div align="left"><img src="./images/image-20220829172513074.png"  /></div>

**Stop Service**

```
./stop-optimibi.sh
```

<div align="left"><img src="./images/image-20220829172525119.png"  /></div>

**Check Service Start/Stop Status**

```
ps -ef|grep tomcat
```

<div align="left"><img src="./images/image-20220829172541387.png"  /></div>

If the command produces the above output, it indicates that the service is in a running state.



## Login

URL:  `http://localhost:28080/`

username  /  password

- `admin` / `password`
- `demo` / `demo`

## Update the System

Place the update package `optimibi-upload.jar` in the `optimibi-server\update` folder and restart the system.