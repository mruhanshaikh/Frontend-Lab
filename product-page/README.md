# 🛍️ React E-Commerce Product Viewer
## Live: https://shoppmee.netlify.app/

A simple and scalable **React.js e-commerce product module** built to deeply understand and implement the **Context API**, routing, and dynamic UI rendering.

---

## 🚀 Features

* 📦 Fetch products from API using **Axios**
* 🌐 Global state management with **Context API**
* 🧭 Dynamic routing with product IDs
* 🔍 Product detail page with validation
* 🔔 User feedback using **React Toastify**
* ⚡ Single source of truth for API data
* 🎯 Clean and reusable component structure

---

## 🧠 Tech Stack

* React.js
* React Router DOM
* Context API
* Axios
* React Toastify
* Tailwind CSS

---
## ⚙️ How It Works

* Products are fetched from an API using **Axios** and stored in a global state via Context.
* The entire app is wrapped with the **Context Provider** for shared access.
* The home page displays all products.
* Clicking a product navigates to a **dynamic route (`/products/:id`)**.
* Product detail page uses URL params and validates data before rendering.
* Toast notifications are triggered for user actions via **React Toast

 📌 Key Learnings

* Efficient state management using **Context API**
* Handling dynamic routes and URL params
* Avoiding redundant API calls with centralized data
* Managing UI feedback with toast notifications
* Structuring scalable React applications

