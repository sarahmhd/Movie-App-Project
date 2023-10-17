import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SearchFormComponent
  ]
})
export class SharedModule { }
