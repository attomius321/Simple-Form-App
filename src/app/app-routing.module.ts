import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {TemplateComponent} from './template/template.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'reactive', component: FormComponent},
  {path: 'template', component: TemplateComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
