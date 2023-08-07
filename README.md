# Cointab:
Create a simple 2-Page website using Node.js and SQL database, Page 1 will have three
buttons namely Fetch Users, Delete Users, and User Details, on clicking the Fetch Users button the
the application should fetch data from the (https://randomuser.me/) API and store it in a table of any
name in the database, the data fetch should be in bulk for e.g., if the API returns a single record
then the application should be in such a way that it will fetch around 50 or 100 records on a single
click.

## Deployed App
https://cointab-assignments.netlify.app/


## Getting Started
To run the project on your local machine, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/himanshu60/cointab.git
  
2. Install Dependencies:

   ```bash
   npm i 
  
3. Run the backend server:

   ```bash
   node app.js

4. Start frontend:

   ```bash
   npm run start

## API Endpoints
The project provides the following API endpoints:

1. GET /all-users: Retrieves all user data.
2. GET /fetch-get-users: Retrieves user data based on the page number.
3. GET /get/filter: Retrieves user data with specific filters applied.
4. GET /users-pagination: Retrieves user data with pagination.
5. DELETE /table-delete: Deletes the user table from the database.

## Video Walkthrough of the project



## Features
This project has three main features:

1. Debouncing: It reduces the number of API calls when users input data.
2. Pagination: It helps users navigate through their data page by page.
3. Multiple Filters: Users can apply different criteria to filter their data.

# Home
![coin-home](https://github.com/himanshu60/cointab/assets/65457075/2df3cadc-02ce-4976-ac9d-2020007b61b8)

# User-Fetch Page

![coin-fetch](https://github.com/himanshu60/cointab/assets/65457075/2e1e4d31-6fa7-44e5-b265-5c81035f3b9e)

# User-Filter Page
![coin-filter](https://github.com/himanshu60/cointab/assets/65457075/279a0643-3adc-4ec6-96d5-74195a7e0623)
