import { Component, OnInit } from '@angular/core';
import { ɵshimHostAttribute } from '@angular/platform-browser';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent{

  Property: any = {
    "Id" : 1,
    "Name" : "Cordes House",
    "Type" : "House",
    "Price" : 12000
  }
}
