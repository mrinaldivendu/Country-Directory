import { Component, OnInit } from '@angular/core';
import { DatafetchService } from '../datafetch.service';
import { CountryDetails } from '../cinterface';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit

{
  element: CountryDetails;

  constructor(private countryService: DatafetchService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountrydetail(name)
    .subscribe(element => this.element = element[0]);
  }

}
