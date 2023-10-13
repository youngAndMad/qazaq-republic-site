import {Component, OnInit, inject} from '@angular/core';
import {Product} from 'src/app/domain/entity/product.interface';
import {ProductService} from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private productService = inject(ProductService)

  products: Product[]
  currentProduct: Product | null = null
  private openModalBtn: HTMLElement;
  private closeModalBtn: HTMLElement;
  private modal: HTMLElement;


  ngOnInit(): void {
    this.productService.getProductList()
      .subscribe(res => this.products = res)

    this.openModalBtn = document.getElementById("openModalBtn")!;
    this.modal = document.getElementById("myModal")!;
    this.closeModalBtn = document.getElementById("closeModal")!;

    window.addEventListener("click", (event) => {
      if (this.modal && event.target === this.modal) {
        this.modal.style.display = "none";
      }
    });

  }

  openModal(product: Product, e:any) {
    e.preventDefault();
    this.currentProduct = product;
    document.getElementById('myModal')!.style.display = 'block'
  }

  closeModal(){
    this.modal.style.display = "none";
  }

}
