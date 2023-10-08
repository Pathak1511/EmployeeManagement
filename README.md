##### API Documentation Employee Management API

##### Introduction

Welcome to the API documentation for the Employee Management API. This API allows you to perform various operations related to employee management, including creating, updating, listing, and deleting employee records.

##### Base URL

The base URL for this API is `http://localhost:5500` (assuming this is the URL where your API is hosted). All API endpoints are relative to this base URL.

##### Authentication

This API does not require authentication for the provided operations. However, in a real-world scenario, you should consider implementing authentication and authorization mechanisms to secure your API.

##### Error Handling

The API returns standard HTTP status codes for responses. In case of an error, a JSON response with an error message is provided.

Example Error Response:

```json
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": "Resource not found",
  "message": "The requested resource does not exist."
}
```

##### Step 1 : [Create Database Sql Command](https://github.com/Pathak1511/EmployeeManagement/blob/main/testData/employee.md)

##### Endpoints

##### Create Employee

- **URL**: `POST /createEmployee`
- **Description**: Create a new employee record.
- **Request Body**: JSON object containing employee data (e.g., first name, last name, email, hire date, department,contact info, contact type).
- **Response**: JSON response with the created employee data.

##### Body

```json
{
  "first_name": "Hritik",
  "last_name": "Pathak",
  "email": "hritik@example.com",
  "hire_date": "2020-05-14T18:30:00.000Z",
  "department": "Employee",
  "contact_type": "Phone",
  "contact_info": "123-456-7899"
}
```

##### Example Request

```json
curl --location 'http://localhost:5500/createEmployee' \
--data-raw '{
    "first_name": "Hritik",
    "last_name": "Pathak",
    "email": "hritik@example.com",
    "hire_date": "2020-05-14T18:30:00.000Z",
    "department": "Employee",
    "contact_type": "Phone",
    "contact_info": "123-456-7899"
}'
```

##### Example Response

```json
{
  "status": "success",
  "message": "insertion successfull"
}
```

##### List Employees (with Pagination)

- **URL**: `GET /listEmployee`
- **Description**: List employees with pagination support.
- **Query Parameters**: `page` (page number) and `limit` (number of records per page).
- **Response**: JSON response with a list of employee records.

##### Body

```json
{
  "page": 1,
  "limit": 5
}
```

##### Example Request

```json
curl --location --request GET 'http://localhost:5500/listEmployees' \
--data '{
  "page" : 1,
  "limit" : 5
}'
```

##### Example Response

```json
{
  "status": "success",
  "data": [
    {
      "employee_id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "johndoe@example.com",
      "hire_date": "2020-05-14T18:30:00.000Z",
      "department": "HR"
    },
    {
      "employee_id": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "janesmith@example.com",
      "hire_date": "2019-10-09T18:30:00.000Z",
      "department": "Sales"
    },
    {
      "employee_id": 3,
      "first_name": "Michael",
      "last_name": "Johnson",
      "email": "michael@example.com",
      "hire_date": "2021-02-27T18:30:00.000Z",
      "department": "Engineering"
    },
    {
      "employee_id": 4,
      "first_name": "Emily",
      "last_name": "Brown",
      "email": "emily@example.com",
      "hire_date": "2022-01-11T18:30:00.000Z",
      "department": "Marketing"
    },
    {
      "employee_id": 5,
      "first_name": "David",
      "last_name": "Lee",
      "email": "david@example.com",
      "hire_date": "2020-08-19T18:30:00.000Z",
      "department": "Finance"
    }
  ]
}
```

##### Get Employee by ID

- **URL**: `GET /employees`
- **Description**: Get employee details by their unique ID.
- **Response**: JSON response with the employee's data.

##### Body

```json
{
  "employee_id": 22
}
```

##### Example Request

```json
curl --location --request GET 'http://localhost:5500/getEmployee' \
--data '{
    "employee_id":1
}'
```

##### Example Response

```json
{
  "status": "success",
  "data": {
    "employee_id": 1,
    "first_name": "Hritik",
    "last_name": "Pathak",
    "email": "hritik@example.com",
    "hire_date": "2020-05-13T18:30:00.000Z",
    "department": "Employee",
    "contact_id": 1,
    "contact_type": "Phone",
    "contact_info": "123-456-7899"
  }
}
```

##### Update Employee by ID

- **URL**: `PUT /updateEmployee`
- **Description**: Update an existing employee record by their unique ID.
- **Request Body**: SON object containing the fields to be updated (e.g., first name, last name, email, hire date, department,contact_id,contact_type,contact_info).
- **Response**: JSON response confirming the update.

##### Body

```json
{
  "employee_id": 1,
  "first_name": "Hritik",
  "last_name": "Pathak",
  "email": "hritik@example.com",
  "hire_date": "2020-05-14T18:30:00.000Z",
  "department": "Employee",
  "contact_id": 1,
  "contact_type": "Phone",
  "contact_info": "123-456-7899"
}
```

##### Example Request

```json
curl --location 'http://localhost:5500/updateEmployees' \
--data-raw '{
    "employee_id": 1,
    "first_name": "Hritik",
    "last_name": "Pathak",
    "email": "hritik@example.com",
    "hire_date": "2020-05-14T18:30:00.000Z",
    "department": "Employee",
    "contact_id": 1,
    "contact_type": "Phone",
    "contact_info": "123-456-7899"
}'
```

##### Example Response

```json
{
  "status": "success",
  "message": "Employee updated successfully"
}
```

##### Delete Employee by ID

- **URL**: `DELETE /deleteEmployee`
- **Description**: Delete an employee record by their unique ID.
- **Response**: HTTP status code 204 (No Content) on success.

##### Body

```json
{
  "employee_id": 23
}
```

##### Example Request

```json
curl --location --request DELETE 'http://localhost:5500/deleteEmployee' \
--data '{
    "employee_id": 23
}'
```

##### Example Response

```
No response body
This request doesn't return any response body
```
