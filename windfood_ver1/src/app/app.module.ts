import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error-handler.interceptor';
import { LoggingInterceptorProvider } from './interceptors/logging-handler.interceptor';
import { LoadingInterceptorProvider } from './interceptors/loading.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { materialComponent } from 'src/utils/helpers/installation';
import { FormGroupDirective } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AddProductDialogComponent } from './components/products/add-product-dialog/add-product-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProductDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    materialComponent,
  ],
  providers: [
    FormGroupDirective,
    // AuthInterceptorProvider,
    // ErrorInterceptorProvider,
    // // LoggingInterceptorProvider,
    // LoadingInterceptorProvider,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
