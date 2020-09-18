
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CountryDetails } from './cinterface';
@Injectable({
  providedIn: 'root'
})
export class DatafetchService {

  constructor(private http:HttpClient) {}

   getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
   }
   getCountrydetail(name: string): Observable<CountryDetails[]> {
    return  this.http.get<CountryDetails[]>('https://restcountries.eu/rest/v2/name/'+name)

  }
}

