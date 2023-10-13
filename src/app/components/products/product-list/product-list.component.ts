import { Component , OnInit, inject} from '@angular/core';
import { Product } from 'src/app/domain/entity/product.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  private productServie = inject(ProductService)

  products:Product[]

  ngOnInit(): void {
    this.productServie.getProductList()
    .subscribe( res => this.products = res )
  }

}
