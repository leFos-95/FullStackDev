import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  opened = false;
  
  productCategories: ProductCategory[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }


  listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }

  

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
