import { Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading!: boolean
  constructor(private loaderService: LoaderService) { }
  ngOnInit() {
    this.loaderService.getLoaderVal().subscribe(data => { this.isLoading = data; console.log(data) })
  }
}


