import { Component, OnInit } from '@angular/core';
import {CountryDetails} from '../cinterface';
import {DatafetchService} from '../datafetch.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  Data : CountryDetails[]=[];
  displayedColumns : string[]=[
    'name','capital','population','area'
  ];

  dataSource = new MatTableDataSource<CountryDetails>(this.Data);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor(private countryService :DatafetchService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
  getAllData(){
    this.countryService.getCountries().subscribe(data=>this.dataSource.data=data as CountryDetails[]);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
