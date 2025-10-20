# 🛡️ Admin Dashboard Guide - Hashtag34 Stories

## 📋 Overview

The Admin Dashboard is a comprehensive management system for Hashtag34 Stories, allowing administrators to manage products, inventory, orders, and view analytics. This guide covers everything you need to know about accessing and using the admin features.

---

## 🔐 **How to Login**

### **Step 1: Access Admin Login**
- Navigate to: `http://localhost:3000/admin/login`
- Or click "Admin Dashboard" link in the footer (if available)

### **Step 2: Demo Credentials**
For demonstration purposes, use these credentials:
- **Email:** `admin@hashtag34stories.com`
- **Password:** `admin123`

### **Step 3: Login Process**
1. Enter the email address
2. Enter the password
3. Click "Sign In"
4. You'll be redirected to the admin dashboard

---

## 🏠 **Dashboard Overview**

### **Key Statistics Cards**
The dashboard displays real-time statistics:
- **Total Products:** Number of products in inventory
- **Total Orders:** Number of orders placed
- **Total Revenue:** Total sales revenue
- **Low Stock Items:** Products running low on inventory

### **Low Stock Alerts**
- Red alert appears when products are below threshold
- Shows number of items needing restock
- Click to view detailed inventory management

---

## 📦 **Product Management**

### **Adding New Products**

#### **Step 1: Access Product Management**
- Click on "Products" tab in the main navigation
- Click "Add Product" button

#### **Step 2: Fill Product Details**
**Required Fields:**
- **Product Name:** Enter descriptive name (e.g., "Classic T-Shirt")
- **Category:** Select from dropdown (Apparel, Gifts, Corporate)
- **Base Price:** Enter price in USD (e.g., 25.99)
- **Stock Quantity:** Enter initial inventory count

**Optional Fields:**
- **Description:** Detailed product description
- **Low Stock Threshold:** Alert when stock falls below this number
- **Customizable:** Check if product supports custom designs
- **Active:** Check to make product visible to customers

#### **Step 3: Save Product**
- Click "Add Product" button
- Product appears in the products list
- Success notification confirms addition

### **Editing Existing Products**

#### **Step 1: Find Product**
- Use search bar to find specific products
- Filter by category using dropdown
- Browse through product list

#### **Step 2: Edit Product**
- Click "Edit" button (pencil icon) next to product
- Form pre-fills with current product data
- Modify any fields as needed
- Click "Update Product" to save changes

#### **Step 3: Delete Product**
- Click "Delete" button (trash icon) next to product
- Confirm deletion in popup dialog
- Product removed from inventory

---

## 📊 **Inventory Management**

### **Stock Monitoring**

#### **View Current Stock**
- Navigate to "Inventory" tab
- See all products with current stock levels
- View low stock threshold for each item

#### **Update Stock Levels**
- **Method 1:** Click in stock number field, enter new value, press Enter
- **Method 2:** Click "+50" button to add 50 units quickly
- Changes save automatically
- Success notification confirms update

#### **Low Stock Management**
- Products below threshold show "Low Stock" badge
- Dashboard shows count of low stock items
- Prioritize restocking these items

### **Inventory Best Practices**

#### **Setting Thresholds**
- **High-volume items:** Set threshold at 20-30% of typical stock
- **Seasonal items:** Set higher thresholds before peak seasons
- **Custom items:** Set lower thresholds (5-10 units)

#### **Regular Monitoring**
- Check inventory tab daily
- Review low stock alerts weekly
- Plan restocking based on sales velocity

---

## 📋 **Order Management**

### **Viewing Orders**
- Navigate to "Orders" tab
- See all orders with key information:
  - Order number
  - Customer email
  - Order status
  - Total amount
  - Item count
  - Order date

### **Order Statuses**
- **Pending:** New orders awaiting processing
- **Processing:** Orders being prepared
- **Shipped:** Orders sent to customers
- **Delivered:** Orders completed
- **Cancelled:** Orders cancelled

### **Order Processing Workflow**
1. **New Order:** Appears in "Pending" status
2. **Review Order:** Check customer details and items
3. **Update Status:** Change to "Processing"
4. **Prepare Items:** Gather and package products
5. **Ship Order:** Update to "Shipped" with tracking
6. **Complete:** Mark as "Delivered" when confirmed

---

## 📈 **Analytics Dashboard**

### **Current Features**
- Basic statistics overview
- Revenue tracking
- Order count monitoring
- Product performance metrics

### **Coming Soon**
- Sales trend charts
- Customer analytics
- Product performance reports
- Revenue forecasting
- Export capabilities

---

## 🔧 **Advanced Features**

### **Search and Filtering**
- **Search Products:** Use search bar to find products by name or description
- **Filter by Category:** Use dropdown to show specific product categories
- **Real-time Results:** Search updates as you type

### **Bulk Operations**
- **Bulk Stock Update:** Select multiple products for stock updates
- **Export Data:** Download product/order data (coming soon)
- **Import Products:** Upload product data via CSV (coming soon)

### **User Management**
- **Admin Access:** Only users with `is_admin: true` can access dashboard
- **Session Management:** Admin sessions persist across browser tabs
- **Security:** Admin credentials stored securely

---

## 🚨 **Troubleshooting**

### **Common Issues**

#### **Cannot Access Admin Dashboard**
- **Problem:** "Access denied" message
- **Solution:** Ensure you're logged in with admin credentials
- **Check:** Verify `is_admin: true` in user profile

#### **Products Not Saving**
- **Problem:** Form submission fails
- **Solution:** Check all required fields are filled
- **Check:** Ensure price is a valid number

#### **Stock Updates Not Reflecting**
- **Problem:** Stock changes don't appear
- **Solution:** Refresh the page or click "Refresh" button
- **Check:** Verify you entered a valid number

### **Getting Help**
- **Technical Issues:** Contact development team
- **Feature Requests:** Submit through admin feedback
- **Training:** Refer to this guide or request additional training

---

## 🔒 **Security Best Practices**

### **Login Security**
- Use strong, unique passwords
- Don't share admin credentials
- Log out when finished
- Use secure networks only

### **Data Protection**
- Regular data backups
- Monitor for unauthorized access
- Keep software updated
- Follow company security policies

---

## 📞 **Support**

### **Contact Information**
- **Email:** admin@hashtag34stories.com
- **Phone:** +1 (555) 123-4567
- **Hours:** 9 AM - 6 PM EST, Monday - Friday

### **Emergency Access**
- Contact system administrator for urgent issues
- Backup admin accounts available
- Emergency procedures documented

---

## 🎯 **Quick Reference**

### **Essential URLs**
- **Admin Login:** `/admin/login`
- **Admin Dashboard:** `/admin`
- **Product Management:** `/admin` → Products tab
- **Inventory Management:** `/admin` → Inventory tab

### **Key Shortcuts**
- **Refresh Data:** Click "Refresh" button
- **Add Product:** Click "Add Product" button
- **Edit Product:** Click pencil icon
- **Delete Product:** Click trash icon
- **Update Stock:** Click in stock field, enter new value

### **Demo Data**
The system includes sample products and orders for testing:
- **Sample Products:** T-Shirt, Hoodie, Custom Mug
- **Sample Orders:** Various statuses and amounts
- **Sample Stats:** Realistic dashboard metrics

---

*This guide covers the current admin dashboard functionality. New features and updates will be documented as they become available.*

