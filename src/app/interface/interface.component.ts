import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { YelpserviceService } from '../yelp.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  city = new FormControl('')
  state = new FormControl('')
  priceInfo = new FormControl('')

  constructor(private yelpService : YelpserviceService, private fb : FormBuilder) { };

  Food: FormGroup;
  FoodData : any;

  ngOnInit() {
    this.Food = this.fb.group({
      city : new FormControl(),
      state : new FormControl(),
      priceInfo : new FormControl(),

    })
  }
  onSubmit(){
    this.yelpService.getFoods(this.Food.value.city, this.Food.value.state, this.Food.value.priceInfo).subscribe(data => {
      this.FoodData = data.businesses;
      const FoodResult = this.FoodData[Math.floor(Math.random() * this.FoodData.length)]

      if (FoodResult.is_closed === false){
        this.FoodData = FoodResult;
      }else (FoodResult)
    })
  }
}
