# Role-Based Access Control (RBAC) System

This documentation explains the **Role-Based Access Control (RBAC)** system implemented to ensure secure and efficient access management in the application.

---

## 🛠️ Key Components of RBAC

### 1. **roles.js**
   - This file defines the various roles available in the system.
   - **Example:**
     ```javascript
     const roles = ['admin', 'editor', 'viewer'];
     module.exports = roles;
     ```

---

### 2. **permissions.js**
   - It lists the actions that can be performed in the system.
   - **Example:**
     ```javascript
     const permissions = ['read', 'write', 'delete'];
     module.exports = permissions;
     ```

---

### 3. **rolePermissions.js**
   - Maps roles to their respective permissions.
   - **Example:**
     ```javascript
     const rolePermissions = {
         admin: ['read', 'write', 'delete'],
         editor: ['read', 'write'],
         viewer: ['read']
     };
     module.exports = rolePermissions;
     ```

---

### 4. **accessControlMiddleware.js**
   - Implements the middleware to enforce access control based on roles and permissions.
   - **Usage:**
     - Attach this middleware to any route to check for access permissions.
   - **Example:**
     ```javascript
     function checkAccess(role, permission) {
         // Logic to check if the role has the permission
     }
     module.exports = checkAccess;
     ```

---

### 5. **dataFilter.js**
   - Filters data according to the role of the user.
   - **Purpose:**
     - Ensures users access only the data they are authorized to view.
   - **Example:**
     ```javascript
     function filterDataByRole(role, data) {
         // Logic for data filtering
     }
     module.exports = filterDataByRole;
     ```

---

### 6. **roleAssignment.js**
   - Manages role assignment to users.
   - **Example:**
     ```javascript
     const userRoles = {};
     
     function assignRole(userId, role) {
         userRoles[userId] = role;
     }
     
     module.exports = { assignRole, userRoles };
     ```

---

### 7. **defaultRoles.js**
   - Provides default roles for new users.
   - **Purpose:**
     - Assigns a default role (e.g., 'viewer') upon user registration.
   - **Example:**
     ```javascript
     const defaultRole = 'viewer';
     module.exports = defaultRole;
     ```

---

### 8. **rbac.test.js**
   - Contains test cases for the RBAC system.
   - **Purpose:**
     - Validates that the role-permission mappings and middleware work as expected.
   - **Example:**
     ```javascript
     test('Admin should have delete access', () => {
         const result = checkAccess('admin', 'delete');
         expect(result).toBe(true);
     });
     ```

---

## 🛡️ How It Works

1. **Define Roles and Permissions:**
   - All roles and permissions are clearly defined in `roles.js` and `permissions.js`.

2. **Assign Permissions to Roles:**
   - Use `rolePermissions.js` to map each role to its allowed permissions.

3. **Check Access:**
   - The `accessControlMiddleware.js` checks if a user's role permits a specific action.

4. **Filter Data:**
   - The `dataFilter.js` restricts users to view only authorized data based on their role.

5. **Role Assignment:**
   - `roleAssignment.js` dynamically assigns roles to users based on their status or actions.

6. **Default Role:**
   - New users are automatically assigned the role defined in `defaultRoles.js`.
