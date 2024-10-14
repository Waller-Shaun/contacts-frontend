# Contacts Management Frontend

This repository contains the frontend code for the Contacts Management Application, developed using WeChat Mini Program. The application provides basic functionality for managing contacts, including adding, modifying, and deleting contacts. It interacts with a backend server to store and retrieve contact data.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Code Style](#code-style)
7. [Screenshots](#screenshots)
8. [API Integration](#api-integration)
9. [Related Repositories](#related-repositories)
10. [PSP Table](#psp-table)
11. [License](#license)

## Introduction

This project is the frontend portion of a contact management system built using WeChat Mini Program. It allows users to manage a list of contacts, which includes functionality for adding new contacts, modifying existing contacts, and deleting contacts. The frontend communicates with a backend server through RESTful APIs to persist the contact information.

## Features

- **Add Contacts**: Users can add new contacts by entering their name and phone number.
- **Modify Contacts**: Existing contacts can be modified.
- **Delete Contacts**: Contacts can be deleted from the list.
- **Real-Time Updates**: The app interacts with a backend API to retrieve and update the contacts list.

## Installation

To run this project locally, follow these steps:

1. Clone the repository

   ```bash
   git clone https://github.com/Waller-Shaun/contacts-frontend.git
   ```

2. Open the project in the WeChat Developer Tool.

3. Set up the necessary backend URL in the `app.js` file, pointing to your backend server:

   ```
   const baseUrl = 'http://your-backend-url.com';
   ```

4. Run the project in the WeChat Mini Program development environment.

## Usage

Once installed and running in the WeChat Developer Tool, you can:

- **View Contacts**: The app will fetch the contact list from the backend on load.
- **Add Contact**: Click the "Add Contact" button to input a new contact.
- **Modify Contact**: Click the "Modify" button next to a contact to edit their information.
- **Delete Contact**: Click the "Delete" button next to a contact to remove it from the list.

## Project Structure

Here is the structure of the frontend project:

```
|- src
    |- pages/
        |- contactList/
            |- contactList.js  # Logic for displaying the contact list
            |- contactList.wxml  # UI layout for the contact list
            |- contactList.wxss  # Styles for the contact list
        |- logs/
    |- utils/
        |- util.js  # Utility functions
    |- app.js  # Main application logic
    |- app.json  # Global configuration
    |- app.wxss  # Global styles
|- README.md  # Project description
|- codestyle.md  # Code style guide
```

## Code Style

The project follows a standard JavaScript code style. The following conventions are followed:

- **Indentation**: 2 spaces
- **Variables**: Use `const` and `let` instead of `var`
- **Naming**: CamelCase for variable and function names
- **Semicolons**: End every statement with a semicolon For more details, refer to the Code Style Guide.

## Screenshots

Here are some screenshots of the app in action:

1. **Contact List**

   <img src="C:\Users\30229\AppData\Roaming\Typora\typora-user-images\image-20241014152712056.png" alt="image-20241014152712056" style="zoom:50%;" />

   

2. **Add Contact**

   <img src="C:\Users\30229\AppData\Roaming\Typora\typora-user-images\image-20241014152842324.png" alt="image-20241014152842324" style="zoom:50%;" />

   

3. **Modify Contact**

   <img src="C:\Users\30229\AppData\Roaming\Typora\typora-user-images\image-20241014152859772.png" alt="image-20241014152859772" style="zoom:50%;" />

   

## API Integration

The frontend communicates with the backend via RESTful APIs. The following API endpoints are used:

- **GET /contacts**: Fetches the list of contacts.

- **POST /contacts**: Adds a new contact.

- **PUT /contacts/**

  : Modifies an existing contact.

- **DELETE /contacts/**

  : Deletes a contact.

Make sure to replace the base URL in the code with your backend API URL.

## Related Repositories

- [Contacts Management Backend](https://github.com/Waller-Shaun/contacts-backend.git)

## PSP Table

Here is the PSP table tracking estimated and actual time spent on the project:

| PSP Stage                    | Estimated Time (hours) | Actual Time (hours) |
| ---------------------------- | ---------------------- | ------------------- |
| Planning                     | 2                      | 2.5                 |
| Design                       | 3                      | 2.5                 |
| Coding - Frontend Logic      | 5                      | 4.5                 |
| Coding - UI Layout           | 4                      | 3.5                 |
| Testing & Debugging          | 3                      | 4                   |
| Documentation (README, Blog) | 2                      | 1.5                 |
| **Total**                    | **19**                 | **18.5**            |

## License

This project is licensed under the MIT License. See the LICENSE file for details.