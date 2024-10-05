import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: any[] = []; // Define an array to hold order data

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrderHistory();
  }

  getOrderHistory() {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orderHistory = data || []; // Ensure orderHistory is assigned correctly
      console.log(this.orderHistory); // Log the retrieved order history
    });
  }
  calculateTotal(items: any[]): number {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
  
}
