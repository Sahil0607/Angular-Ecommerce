import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories = [];
  typedQuery = '';
  // @Output() categorySelected = new EventEmitter<any>();
 // @Output() queryChanged = new EventEmitter<any>();
  constructor(private dataService: DataService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.dataService.getCategory().subscribe(
      response => this.categories = response
    );
  }

  onModelChange() {
    // this.queryChanged.emit(this.typedQuery);
    this.commonService.setQuery(this.typedQuery);
  }

  selectCategory(category) {
    // this.categorySelected.emit(category.name);
    this.commonService.setCategory(category.name);
  }
}
