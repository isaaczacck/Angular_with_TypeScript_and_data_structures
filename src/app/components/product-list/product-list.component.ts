import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  product: string [] = ["Smartwatches", "Headphones","Laptops"];
  newProduct: string = '';

  addProduct(){
    if (this.newProduct.trim()){
      this.product.push(this.newProduct);
      this.newProduct = '';   //clear input after adding 
    }
  }
  deleteProduct(product:string){
    this.product = this.product.filter(p => p != product); // delete carmodel
  }
}
