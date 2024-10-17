import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  productList: Product[] = []
  currentPage = 0;
  pageSize = 12;

  constructor(
    private productSer: ProductService
  ) { }

  ngOnInit(): void {
    this.productSer.GetAllList(this.currentPage, this.pageSize).subscribe((response: any) =>{
      this.productList = response.content
    })
  }

}
