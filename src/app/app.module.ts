import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressComponent } from './form/address/address.component';
import {AppRoutingModule} from './app-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import {NavigationServiceProvider} from './services/navigation.service';
import { TemplateComponent } from './template/template.component';
import { ForbiddenNameDirective } from './template/validators/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AddressComponent,
    FirstPageComponent,
    TemplateComponent,
    ForbiddenNameDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NavigationServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
