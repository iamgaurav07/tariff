import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }

  getTariffData(){
    return [
      {company: 'vodafone', speed: 35, downspeed: 12, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 9.99},
      {company: 'airtel', speed: 21 ,downspeed: 17, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 32.99},
      {company: 'videocone', speed: 12, downspeed: 32, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 34.99},
      {company: 'idea', speed: 32, downspeed: 22, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 30.99},
      {company: 'relience', speed: 56, downspeed: 52,  tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'],price: 32.99},
      {company: 'hutch', speed: 100, downspeed: 12,  tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'],price: 12.99},
      {company: 'tata docomo', speed: 22, downspeed: 82, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 38.99},
      {company: 'aircel', speed: 48, downspeed: 32, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 98.99},
      {company: 'spice', speed: 12, downspeed: 53, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 12.99},
      {company: 'comfort allnet', speed: 150, downspeed: 2, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 76.99},
      {company: 'infinity net', speed: 69, downspeed: 11, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 87.99},
      {company: 'bsnl', speed: 78, downspeed: 76, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 55.99},
      {company: 'connect', speed: 94, downspeed: 14, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 52.99},
      {company: 'netplus', speed: 102, downspeed: 76, tariff: [ 'a tariff: 1','b tariff: 2','c tariff: 3'], price: 98.99},
    ];
  }
}
