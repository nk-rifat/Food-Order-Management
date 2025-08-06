# Food Order Management

This is a responsive food ordering management system built with React (Vite) and Tailwind CSS v4. The goal of this project is to convert a static layout into interactive, component-based React architecture with order creation, dynamic billing, and status-based filtering.


# Features

```md 

✅ React + Vite setup  
✅ Tailwind CSS v4 styling  
✅ Food item listing with icons, names, and prices  
✅ Plus/Minus buttons to calculate dynamic bill total  
✅ Order creation form with customer name and item list  
✅ Real-time order summary with counts  
✅ Status-based order updates (Pending → Delivered)  
✅ Filter orders by status: All, Pending, Delivered  
✅ Delete orders and update summary instantly  
✅ Reusable components architecture 
``` 


# Technologies Used

- React
- Vite
- Tailwind CSS v4

# Live Link (https://food-order-management11.netlify.app/)


# Folder Structure 

```md

src/
│
├── assets/ 
│
├── components/
│   ├── CreateOrder/
|   |   |── CreateOrder.jsx
|   |   └── Products.jsx
|   |
│   ├── Navbar/
|   |   └── Navbar.jsx
|   |
│   └── OrderInfoSection/
|       |── OrderInfoSection.jsx
|       |── OrderReport.jsx
|       └── OrderSummary.jsx
| 
|── Data
|   └── data.js
|
|── Icons 
|   |── FilterIcon.jsx
|   |── MinusIcon.jsx
|   |── PlusIcon.jsx 
│
├── App.jsx
├── main.jsx
└── index.css


