import { Component } from '@angular/core';

import { products } from '../products';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  number:number = 5;

  products:Product[] = products

  share() {
    window.alert('The product has been shared!');
  }
  
  notify() {
    window.alert('お知らせを受け取ります');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/