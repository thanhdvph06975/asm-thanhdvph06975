import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { product } from "../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  products: product[];
  getProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
