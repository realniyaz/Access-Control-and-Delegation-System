# Access Control System: Input and Output Cycle

## 🟢 **Input**
The following input is provided to the system to grant or deny access:

```json
{
  "userId": "12345",
  "resourceId": "R5678",
  "action": "read",
  "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
- userId: The unique identifier of the user requesting access.
- resourceId: The ID of the resource the user wants to access.
- action: The type of action the user intends to perform (e.g., "read", "write", "delete").
- authToken: A valid JWT token authenticating the user's session

## 🟠 **Processing**
- Token Validation: The system validates the provided authToken to verify the session.
- Access Check: The system matches the userId and resourceId with the permissions stored in the access control database.
- Action Authorization: The system evaluates whether the action requested is allowed for the given user on the specified resource.

## 🔵 **Output**
### Access Granted
```json
{
  "status": "success",
  "message": "Access granted to the resource.",
  "resourceId": "R5678",
  "action": "read"
}
```

### Access Denied
```json
{
  "status": "failure",
  "message": "Access denied. Insufficient permissions.",
  "resourceId": "R5678",
  "action": "write"
}
```

## ⚙️ **Cycle Flow**
- User sends a request with the input JSON.
- System processes the input, validates the token, and checks access rights.
- System returns an appropriate response JSON based on the result of the checks.
