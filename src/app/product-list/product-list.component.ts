import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
 // @Input() currentCategory: any;
  currentCategory: any;
  productList = [];
  filterProductList = [];
 // @Input() query: any;
 query: any = '';
  SearchInput = [];
  name = {
    'value': ''
  };
  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentCategory) {
      this.currentCategory = changes.currentCategory.currentValue;
      this.filterProducts();
    }
    if (changes.query) {
     // this.query = changes.query.currentValue;
    }
  }
  // currentCategory = 'Phones';
  constructor(private dataService: DataService,
    private commonService: CommonService) {}
  ngOnInit() {
    this.getCategory();
    this.getQuery();
    this.getData();
  }
  getData() {
    this.dataService.getProducts().subscribe(response => {
        this.productList = response;
        this.filterProducts();
    });
  }
  getCategory() {
    this.commonService.categoryValue.subscribe(value => {
      this.currentCategory = value;
      this.filterProducts();
    });
  }
  getQuery() {
    this.commonService.queryValue.subscribe(
      value => {this.query = value; }
    );
  }
  searchInput(data) {
    this.SearchInput = data;
  }
  filterProducts() {
    this.filterProductList = this.productList.filter(item => {
      return item.category === this.currentCategory;
    });
  }
}
