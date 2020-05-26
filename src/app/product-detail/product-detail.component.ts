import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }
  clickProduct: any = [];
  currentProduct: any = '';
  defaultColor = 0;
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    const index = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProducts().subscribe( response => {
        this.clickProduct = response.filter( item => {
          return item.index === index;
        });
        console.log(this.clickProduct);
        this.currentProduct = this.clickProduct[0];
        console.log(this.currentProduct);
        this.defaultColor = 0;
      });
  }

  setColorIndex(i) {
    this.defaultColor = i;
  }
}
