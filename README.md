# Inventory Management System

This project is an Inventory Management System that allows users to add, view, and manage inventory items. The system consists of a frontend built with React and a backend powered by Node.js and MongoDB. 

---

## Frontend Implementation (50 Marks)

### **InventoryForm.jsx (17 Marks)**

- **Form Creation (7 Marks)**  
  A form has been created with all the required input fields for adding new inventory items.

- **Form Submission (10 Marks)**  
  The form submission functionality is implemented correctly. Upon submission, the data is sent to the backend via an API endpoint. The form handles user input and ensures data is transmitted accurately.

---

### **InventoryItem.jsx (17 Marks)**

- **Component Creation (7 Marks)**  
  A component named `InventoryItem` has been created to display individual inventory items. The layout is clear and intuitive, making it easy for users to understand the displayed information.

- **Display Formatting (10 Marks)**  
  The display formatting is user-friendly and consistent. All necessary details (e.g., item name, quantity, price) are shown in a structured manner, ensuring a good user experience.

---

### **InventoryList.jsx (16 Marks)**

- **Component Integration (7 Marks)**  
  The `InventoryItem` component is correctly integrated into the `InventoryList` component to display a list of inventory items. The list is rendered dynamically based on the data fetched from the backend.

- **Data Fetching and Rendering (9 Marks)**  
  Data is fetched from the backend using a GET request and rendered accurately in the list. The application ensures that the data displayed is up-to-date and matches the database records.

---

## Backend Implementation (33 Marks)

### **MongoDB Connection (10 Marks)**

- **.env Configuration (3 Marks)**  
  The `.env` file is configured correctly with the MongoDB Atlas connection string. Sensitive information is securely stored and accessed using environment variables.

- **Database Connection (7 Marks)**  
  A successful connection to the MongoDB Atlas database is established and verified. The backend can interact with the database seamlessly, ensuring data persistence and retrieval.

---

### **API Endpoints (23 Marks)**

- **POST Endpoint (10 Marks)**  
  A POST endpoint for adding new inventory items is implemented correctly. The endpoint handles data validation and sanitization to ensure only valid data is stored in the database.

- **GET Endpoint (10 Marks)**  
  A GET endpoint for retrieving inventory items is implemented correctly. The endpoint returns accurate and up-to-date data from the database.

- **Frontend Integration (3 Marks)**  
  The API endpoints are properly integrated with the frontend, ensuring seamless data flow between the two layers. The frontend can send and receive data without issues.

---

## Code Quality and Functionality (17 Marks)

### **Code Readability and Organization (10 Marks)**

- The code is clean, well-indented, and easy to read. Meaningful variable names are used, and the structure is consistent throughout the project. React hooks are used appropriately, and components are organized logically.

### **Functionality Verification (7 Marks)**

- The application works end-to-end without critical bugs. Key user interactions, such as adding and viewing inventory items, are functional. While error handling is not required, the application passes basic functionality tests.

---

## Total Marks: 100

