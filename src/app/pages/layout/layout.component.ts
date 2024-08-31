import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Product } from './product.model';  // Import the interface

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule // Include CommonModule here
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // Corrected to styleUrls
})
export class LayoutComponent {
  products: Product[] = [];  // Updated to use Product array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.productList();
  }

  addProduct(data: Product) {
    return this.http.post('https://dummyjson.com/products', data);
  }

  productList() {
    this.http.get<{ products: Product[] }>('https://dummyjson.com/products').subscribe(
      (response) => {
        this.products = response.products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
