# Invoicify - Invoice Generator App

![Invoicify Logo](https://your-logo-url.com/logo.png)  
*A sleek and professional invoice generator built with Node.js, Express, and MongoDB.*

---

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [API Endpoints](#api-endpoints)  
- [Database Schema](#database-schema)  
- [Authentication & Security](#authentication--security)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## About

Invoicify is a professional and customizable invoice generator app that allows users to create, manage, and track invoices seamlessly. Designed with flexibility and security in mind, it supports multi-user management, client details, invoice line items, and payment tracking.

---

## Features

- **User Authentication** with JWT tokens  
- Create and manage **Invoices** with detailed client and payment info  
- Store and reference **user-created invoices**  
- Fully **RESTful API**  
- Supports invoice statuses: draft, sent, paid, overdue, cancelled  
- Secure password storage with bcrypt/argon2  
- Role-based user permissions (Admin, User, etc.)  
- IP whitelist support (if using MongoDB Atlas)  
- Robust error handling and validation

---

## Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose ORM  
- **Authentication:** JWT, bcrypt/argon2  
- **Environment:** dotenv for config management  
- **Version Control:** Git

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)  
- npm or yarn  
- MongoDB instance (local or Atlas)  
- Postman or similar tool for API testing  

### Installation

1. Clone the repo:  
   ```bash
   git clone https://github.com/vinaycs24-tech/invoicify.git
   cd invoicify
