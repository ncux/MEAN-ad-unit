import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { AdunitService } from '../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  unit_name;
  unit_price;

  constructor(private location: Location, private ad_unit_service: AdunitService) { }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.ad_unit_service.createAdUnit(form.value).subscribe(data => console.log(data));
    this.resetForm();
  }

  resetForm() {
    this.unit_name = '';
    this.unit_price = '';
    }

  ngOnInit() {
  }

}
