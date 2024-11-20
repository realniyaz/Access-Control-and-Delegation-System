# 🛠️ Access Control System: Login and Registration Routes

## **🔑 Registration Route**

### **Endpoint**: `/api/register`  
**Method**: `POST`

### **Purpose**  
This endpoint allows a new user to register in the system by providing necessary details.

### **Input**
The request payload should be in JSON format:
```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "StrongPassword123!",
  "role": "admin"
}
```
- username: (string) The desired username of the user.
- email: (string) A valid email address for the user.
- password: (string) A strong password for account security.
- role: (string) Optional field, specifying the user's role (e.g., admin, user). Defaults to user.

### **Output**

#### Success Response:
```json
{
  "status": "success",
  "message": "User registered successfully.",
  "userId": "12345"
}
```
#### Failure Response:
```json
{
  "status": "failure",
  "message": "Email already exists."
}
```

## 🔐 **Login Route**
Endpoint: /api/login
Method: POST

## Purpose
This endpoint allows an existing user to log in and receive a JWT token for session management.

## 📌 **Common Features**
1. Input Validation: Ensures required fields are provided in the correct format.
2. Error Handling: Provides descriptive error messages for better debugging.
3. Security:
        - Passwords are hashed before storage (e.g., using bcrypt).
        - JWT tokens are signed for authentication.
4.Role-Based Access: Optional role parameter for advanced access control.
