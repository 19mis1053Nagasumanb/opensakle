import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
