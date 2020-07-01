import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app-config/app-config.module';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(@Inject(APP_CONFIG) private config: AppConfig,
              private httpClient: HttpClient
  ) { }
  search(value) {
    const params = new HttpParams().set('q', value)
    return this.httpClient.get<any[]>(this.config.apiEndpoint + 'items', {params})
  }
  getProductDetail(value) {
    return this.httpClient.get(this.config.apiEndpoint + 'items/' + value)
  }
}
