import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  { path: '', component: MenuComponent }, // Default route
  { path: 'order-history', component: OrderHistoryComponent } // Add the route for order history

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
