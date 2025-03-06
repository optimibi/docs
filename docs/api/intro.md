---
title: Start page
createTime: 2025/02/10 17:14:56
permalink: /api/index/
author: Optimibi
tags:
  - API
  - Optimibi
description: 
---

**Optimibi API Overview**  
Optimibi offers a comprehensive set of APIs to access and manage its various features. This includes **permission management**, **user role management**, **files and folders**, **connections**, **modeling**, **system configurations**, **user personalization**, and **parameter management**.

---

## 1. Functional Categories

### **Files & Folders**
Manages file and folder operations, such as **upload**, **download**, **delete**, and **rename**.

### **Reports & Models**
Handles reports and data models, supporting **queries**, **executions**, and **export** of analytical results.

### **Users & Permissions**
Manages user accounts, **role assignments**, and permission controls, ensuring **secure access** to data.

### **Data Sources & Metadata**
Connects to external data sources, retrieves metadata, and manages data assets.

### **Scheduling & Alerts**
Creates and manages **scheduled tasks**, notifications, and alerts, enabling automated BI operations.

---

## 2. Request Format

- All APIs follow a **RESTful** style.
- **HTTP Methods**:
    - **GET**: Retrieve data
    - **POST**: Create resources or perform actions
    - **PUT**: Update existing resources
    - **DELETE**: Remove resources
- **Data Format**: Requests and responses typically use **JSON**.
- Refer to each endpoint’s documentation for **detailed parameters** and **request examples**.

---

## 3. Response Handling

Optimibi APIs use **standard HTTP status codes** to indicate request outcomes:

- **200 OK**: Successful request
- **400 Bad Request**: Invalid request parameters
- **401 Unauthorized**: Not logged in or insufficient permissions
- **403 Forbidden**: Access denied
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server encountered an error

---

## 4. Using the API

1. **Browser Access**: For simple **GET** requests, you can directly access endpoints via a web browser.
2. **Debugging Tools**: Tools like **Postman** or **curl** can be used for testing and interaction.
3. **API Integration**: For programmatic use, incorporate Optimibi’s API into your application using the supported SDKs, enabling automated data processing and analysis.

---

## 5. Authentication Methods

Optimibi supports multiple **authentication** mechanisms to suit different deployment and security needs:

### **1. Browser Cookie**
- After logging in via the browser, include the session cookie in your request headers to authenticate without re-entering credentials.
- **Example (Request Headers)**:
  ```
  Cookie: session-flushed=true; 
          JSESSIONID=72B613231EB93BA9EB9DF9417E1B0F67; 
          session-expiry=1741238288603; 
          server-time=1741231088603
  ```
- **Login Methods**:
    1. Username/Password
    2. OAuth2
    3. LDAP
    4. SAML
    5. CAS

### **2. Basic Auth**
- **Example (Request Headers)**:
  ```
  Authorization: Basic YWRtaW46cGFzc3dvcmQ=
  ```  
- Here, `YWRtaW46cGFzc3dvcmQ=` is the Base64-encoded form of `admin:password`.
- Replace with the correct **Base64-encoded** credentials to access the API with the respective user’s permissions.

### **3. JWT Token**
- Configure a valid **JWT Token** and include it in the request, often in the URL or header as required.
- Example usage:
  ```
  https://your-optimibi-url/api/endpoint?token=<YOUR_VALID_JWT_TOKEN>
  ```

---

**Important:**
- Always ensure you have the correct **authentication method** in place for secure and authorized API access.
- Use **HTTPS** to protect sensitive information during transmission.

---

End of **Optimibi API Overview**.  




