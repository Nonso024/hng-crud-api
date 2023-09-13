# PERSON API

A REST API that performs CRUD operations (Create(POST), Read(GET), Update(PUT), Delete(DELETE)) on a "person" resource. The API dynamically handles parameters, such as adding or retrieving or updating a person by ID or name. Data and information about different persons is stored in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installations](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Examples](#examples)
- [Source Code](#source-code)

## Features

- Create a new person record with details such as name, age, and other important information.
- Retrieve a list of all persons
- Retrieves details of a specific person.
- Update the details of an existing person.
- Delete a person record from the database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- [Node.js](https://nodejs.org/) installed on your machine.
- A database system must be set up and running. For this API we are implementing MongoDB

### Installations

1. Cloning the repository:

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

4. Kicstart the server:

   ```bash
   npm run dev OR nodemon app.js
   ```

## Usage

### Endpoints

- **GET /api:** Retrieve a list of all persons.
- **GET /api/:name:** Retrieve details of a specific person by their name.
- **POST /api:** Create a new person record.
- **PUT /api/:user_id:** Update the details of a specific person.
- **DELETE /api/:name:** Delete a person record.

### Examples

### Retrieving a List of All Persons

To retrieve a list of all persons, make a GET request to the following endpoint:

```bash
GET /api
```

### Retrieving Details of a Specific Person

To retrieve details of a specific person by their name, make a GET request to the following endpoint, replacing `:name` with the person's name:

```bash
GET /api/:name
```

### Creating a Person

To create a new person record, make a POST request to the following endpoint:

```bash
POST /api
```

Set the `Content-Type` header to `application/json`, and include the person's information (name only) in the request body in JSON format, like this:

```json
{ "name": "David Franklin" }
```

### Updating a Person's Data

To update an existing person data record, make a PUT request to the following endpoint, replacing `:user_id` with the person's **`CURRENT`** user id.

```bash
PUT /api/:user_id
```

Include the new person information (name only) in the request body in JSON format, like the one below and also set the `Content-Type` header to `application/json`.

```json
{ "name": "Jennifer Andrews" }
```

### Deleting a Person

To delete a person, make a DELETE request to the following endpoint, replacing `:name` with the person's name:

```bash
DELETE /api/:name
```

## Source Code

[Github Repo](https://github.com/Nonso024/hng-crud-api)

## UML Diagram

![UML Diagram designed by Ani Joseph](/assets/UML-person-api.png)
