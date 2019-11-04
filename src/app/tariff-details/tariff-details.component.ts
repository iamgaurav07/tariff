import { Component, OnInit } from '@angular/core';
import { TariffService } from '../services/tariff.service';

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
})
export class TariffDetailsComponent implements OnInit {

  public tariffList = [];

  constructor(private ts: TariffService) { }

  ngOnInit() {

    this.tariffList = this.ts.getTariffData();
  }

  sortByCompany() {
    let self = this;
    let tariffList = (this.tariffList.map(listItem => listItem.company).sort()).map(function (item) {
      return self.tariffList[self.tariffList.map(a => a.company).indexOf(item)]
    }
    );
    this.tariffList = tariffList
  }

  sortBySpeed() {
    let self = this;
    let tariffList = (this.tariffList.map(listItem => listItem.speed).sort((a, b) => a - b)).map(function (item) {
      return self.tariffList[self.tariffList.map(a => a.speed).indexOf(item)]
    }
    );
    this.tariffList = tariffList

  }

  sortByPrice() {
    let self = this;
    let tariffList = (this.tariffList.map(listItem => listItem.price).sort((a, b) => a - b)).map(function (item) {
      return self.tariffList[self.tariffList.map(a => a.price).indexOf(item)]
    }
    );
    this.tariffList = tariffList
  }

}
