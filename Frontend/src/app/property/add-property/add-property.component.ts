import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { NgForm} from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm:NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  propertyView: IProperty = {
    Id: null,
    SellRent : null,
    Name: '',
    Type : null,
    Price: null,
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack()
  {
    this.router.navigate(['/']);
  }
  onSubmit(Form : NgForm)
  {
    console.log(Form);
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
