import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  server_url = 'http://localhost/adunits';

  constructor(private http: HttpClient) { }

  createAdUnit(ad_unit) {
    return this.http.post(`${this.server_url}`, ad_unit);
  }
}
