import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { interval,map, take, filter, tap, scan, Observable, debounceTime, sample, sampleTime } from 'rxjs';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.html',
  styleUrl: 'slider-configurable-example.css',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSliderModule
  ],
})
export class SliderConfigurableExample {
  sliderConfigInput = new FormControl(1);
  min = new FormControl(1);
  max = new FormControl(100);
  step = new FormControl(1);
  disabled = new FormControl(false);
  showTicks = new FormControl(false);
  thumbLabel= new FormControl(false);
  sliderControl = new FormControl(1);
  randomValues$ = new Observable<string>(); 
  sliderValues$ = new Observable<number|null>();

  
  //valueChanges on slider to get an Observable for those values, debounce this value
  //// we want to conver the slider value (1-100) to 1000 to 100 (slow sampling to fast sampling)
  // invert slider value: https://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio
  //  return 1000 - (x - 1) * 9 

  constructor() {
    this.sliderConfigInput.valueChanges.subscribe(value => {
      this.sliderControl.setValue(value);
    });
    
    this.sliderControl.valueChanges.subscribe(value => {
      this.sliderConfigInput.setValue(value);
    });

    this.sliderValues$ = this.sliderControl.valueChanges.pipe(
      debounceTime(300),
      map((x) => x ? 1000 - (x-1)*9 : null)
    )
    
    this.randomValues$ = interval(100).pipe(
      map(() => Math.round(Math.random()*10_000)),
      //tap(x => console.log(x)),
      scan((all, x) => `${x} ${all}`, ''),
      take(500),
      //sampleTime(this.sliderValues$.subscribe())
    );
  }

  // is it possible to use the sample or sampleTime RxJS operators in an Observable 
  // pipeline and make the sampling interval vary while the pipeline is handling events? 
  // Or is the sampling interval static once the source observable beings emitting?
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */