import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor() { }

  getTariffData(){
    return [
      {company: 'vodafone', speed: 35, price: 9.99},
      {company: 'airtel', speed: 21, price: 32.99},
      {company: 'videocone', speed: 12, price: 34.99},
      {company: 'idea', speed: 32, price: 30.99},
      {company: 'relience', speed: 56, price: 32.99},
      {company: 'hutch', speed: 100, price: 12.99},
      {company: 'tata docomo', speed: 22, price: 38.99},
      {company: 'aircel', speed: 48, price: 98.99},
      {company: 'spice', speed: 12, price: 12.99},
      {company: 'comfort allnet', speed: 150, price: 76.99},
      {company: 'infinity net', speed: 69, price: 87.99},
      {company: 'bsnl', speed: 78, price: 55.99},
      {company: 'connect', speed: 94, price: 52.99},
      {company: 'netplus', speed: 102, price: 98.99},
    ];
  }
}
