import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { LoaderComponent } from './loader/loader.component';
import { WatchListComponent } from './watch-list/watch-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchFormComponent,
    LoaderComponent,
    WatchListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SearchFormComponent
  ]
})
export class SharedModule { }
