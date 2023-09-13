# API Documentation

This document provides documentation for the API endpoints along with expected request and response examples.

## Table of Contents

- [Endpoints](#person-endpoints)

  - [Get All Persons](#get-all-persons)
  - [Get Person by Name](#get-person-by-name)
  - [Create Person](#create-person)
  - [Update Person by ID](#update-person)
  - [Delete Person](#delete-person)

- [Installation](#installation-on-local-server)
- [Testing the API](#testing)

---

## Person Endpoints

### GET All Persons

Retrieve a list of all persons.

- **URL**: `/api`
- **Method**: `GET`
- **Request**: None
- **Response**:

  ```json
  [
    {
      "_id": "6500d7fb999078f65257a798",
      "name": "Joseph Ani",
      "__v": 0
    },
    {
      "_id": "6500d818999078f65257a79a",
      "name": "Micheal Jordan",
      "__v": 0
    },
    {
      "_id": "6501935b709d9993f1b40056",
      "name": "Kendrick Perkins",
      "__v": 0
    },
    {
      "_id": "6501937a709d9993f1b40058",
      "name": "Davina Micheals",
      "__v": 0
    },
    {
      "_id": "6501938b709d9993f1b4005a",
      "name": "John Doe",
      "__v": 0
    },
    {
      "_id": "65019396709d9993f1b4005c",
      "name": "Olarenwaju Badmus",
      "__v": 0
    },
    {
      "_id": "650193a4709d9993f1b4005e",
      "name": "Ebuka Godrick",
      "__v": 0
    }
  ]
  ```

### Create Person

Create a new person record.

- **URL**: `/api`
- **Method**: `POST`
- **Request**:

  ```json
  {
    "name": "Jemima A. Johnson"
  }
  ```

- **Response** (Success - HTTP Status Code 201)

### Get Person By Name

Retrieve details of a specific person by their name.

- **URL**: `/api/:name`
- **Method**: `GET`
- **Request**: None
- **Response**:

  ```json
  {
    "_id": "65019396709d9993f1b4005c",
    "name": "Olarenwaju Badmus",
    "__v": 0
  }
  ```

### Update Person

Update the details of a specific person.

- **URL**: `/api/:user_id` Where `:user_id` should be replaced with the **`CURRENT`** id of the already existing person.
- **Method**: `PUT`
- **Request**:

  ```json
  {
    "name": "New/Updated Name"
  }
  ```

### Delete Person

Delete a person record.

This section explains how to delete a person record using a `DELETE` request to the `/api/:name` endpoint. A successful deletion will result in an HTTP status code of 201 (No Content), and there will be no response body.

- **URL**: `/api/:name`
- **Method**: `DELETE`
- **Request**: None
- **Response** (Success - HTTP Status Code 201)

## Installation On Local Server

1. Clone this repository:

   ```bash
   git clone https://github.com/Nonso024/hng-crud-api.git
   ```

2. Change to the project directory:

   ```bash
   cd hng-crud-api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev or nodemon app.js
   ```

## Testing

Run the command:

```bash
npm run test
```
