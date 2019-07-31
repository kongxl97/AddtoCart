import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/products/product.component';

import { ProductService } from './services/product.service';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    routing
  ],

  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
