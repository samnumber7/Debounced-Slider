import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.html',
  styleUrl: 'slider-configurable-example.css',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
})
export class SliderConfigurableExample {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

//   import { fromEvent, scan, debounce, interval, timer } from 'rxjs';

// const clicks = fromEvent(document, 'click');
// const result = clicks.pipe(
//   scan((i) => ++i, 0),
//   debounce((i) => timer(800))
// );
// result.subscribe((x) => console.log(x));
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */