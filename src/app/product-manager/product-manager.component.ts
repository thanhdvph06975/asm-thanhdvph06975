import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { product } from "../product";
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
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
