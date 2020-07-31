import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { InventoryComponent } from './components/product/product-form2/inventory/inventory.component';
import { VariationsComponent } from './components/product/product-form2/variations/variations/variations.component';
import { PricingComponent } from './components/product/product-form2/pricing/pricing.component';
import { ItemInfoComponent } from './components/product/product-form2/item-info/item-info/item-info.component';
import { ProdFormComponent } from './components/product/product-form2/prod-form/prod-form.component';
import { ProdFormService } from './services/prod-form-service/prod-form.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    ProdFormComponent,
    InventoryComponent,
    VariationsComponent,
    PricingComponent,
    ItemInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ProdFormService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
