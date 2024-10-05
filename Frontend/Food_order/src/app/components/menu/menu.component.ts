import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = []; // Declare the menuItems property
  orders: any[] = []; // Initialize the orders array
  tableNumber?: number; // Made optional
  contactNumber?: string; // Made optional

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getMenuItems();  
  }

  getMenuItems(): void {
    this.menuService.getMenu().subscribe((data: any) => {
      this.menuItems = data || [];
      console.log(this.menuItems); // Check the image URLs here
    });
  }

  addToOrder(item: any): void {
    if (item.available_quantity > 0) {
      const existingOrder = this.orders.find(order => order.id === item.id);
      if (existingOrder) {
        existingOrder.quantity += 1; // Increase quantity if already added
      } else {
        this.orders.push({ ...item, quantity: 1 }); // Add new item with quantity 1
      }
      item.available_quantity -= 1; // Reduce the available quantity after adding to order
    } else {
      alert(`Sorry, ${item.name} is out of stock.`);
    }
  }

  placeOrder(): void {
    if (!this.tableNumber) {
      alert('Please enter a table number.');
      return;
    }

    const order = {
      name: this.contactNumber || 'Guest',
      items: this.orders,
      // totalPrice: this.calculateTotal(), // This is not required as per your Order model
    };

    this.menuService.placeOrder(order).subscribe((response: any) => {
      console.log('Order placed successfully:', response);
      this.resetOrderForm(); // Reset the order form after placing the order
    },(error) => {
      console.error('Error placing order:', error);
      alert('There was an error placing the order. Please try again.');
    }
  );
  }

  calculateTotal(): number {
    return this.orders.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  resetOrderForm(): void {
    this.orders = []; // Reset orders
    this.tableNumber = undefined; // Clear table number
    this.contactNumber = undefined; // Clear contact number
    this.getMenuItems(); // Refresh the menu to update available quantities
  }
}
