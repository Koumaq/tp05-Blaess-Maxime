import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { ApiHttpInterceptor } from './http-interceptor';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  declarations: [AppComponent,
    HeaderComponent,
    CatalogComponent,
    CartComponent,
    FooterComponent,
    LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
