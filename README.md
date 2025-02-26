# Shopy E-Commerce App

## 📌 Project Overview
This is a fully functional e-commerce web application built using React and React Router.
It allows users to browse products, view details, add/remove items from the cart, and proceed to checkout.
The app uses a JSON file stored in the public folder as a mock database.

## 🚀 Features
- Display products dynamically from a JSON file
- View product details with images, prices, and categories
- Add/remove products from the shopping cart
- Increase/decrease product quantities
- Checkout page with multiple payment options
- Responsive design for seamless experience across devices

## 🛠️ Technologies Used
- **React.js**
- **Tailwind CSS**
- **React Router**
- **React Icons**
- **Vite**: for development and build optimization

## 📁 Project Structure
```
|-- public
|   |-- logo.svg
|   |-- products.json
|   |-- images/products
|-- src
|   |-- main.jsx
|   |-- App.jsx
|   |-- index.css
|   |-- cartcontext
|   |   |-- CartContext.jsx
|   |   |-- CartProvider.jsx
|   |-- components
|   |   |-- topnav
|   |   |   |-- TopNav.jsx
|   |   |-- bottomnav
|   |   |   |-- BottomNav.jsx
|   |   |-- Navbar.jsx
|   |   |-- ProductCard.jsx
|   |   |-- ScrollToTop.jsx
|   |-- pages
|   |   |-- home
|   |   |   |-- Home.jsx
|   |   |   |-- Banner.jsx
|   |   |   |-- Categories.jsx
|   |   |   |-- Products.jsx
|   |   |   |-- Collections.jsx
|   |   |   |-- BestSellers.jsx
|   |   |   |-- NewsLetters.jsx
|   |   |   |-- Footer.jsx
|   |   |-- productdetails
|   |   |   |-- ProductDetails.jsx
|   |   |-- shoppingcart
|   |   |   |-- ShoppingCart.jsx
|   |   |-- checkout
|   |   |   |-- CheckOut.jsx
|   |   |-- login
|   |   |   |-- Login.jsx
|   |   |-- signup
|   |   |   |-- Signup.jsx
|-- index.html
|-- README.md
```

## 🛒 How to Run the Project
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Abdelaziz-Mohammed/Coral-E-Commerce.git
cd Coral-E-Commerce
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Run the Development Server
```sh
npm run dev
```
### 4️⃣ Open Your Browser and Navigate to `http://localhost:3000/Coral-E-Commerce/`

## 🌍 Deployment
The project is deployed using GitHub Pages. You can access it [here](https://abdelaziz-mohammed.github.io/Coral-E-Commerce/).

## 👨‍💻 Author
**Eng. Abdelaziz Mohamed**

- [LinkedIn](https://www.linkedin.com/in/abdelaziz)
- [GitHub](https://github.com/Abdelaziz-Mohammed)
