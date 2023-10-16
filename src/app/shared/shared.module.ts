import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchFormComponent } from './search-form/search-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
