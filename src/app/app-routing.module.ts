import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';


const routes: Routes = [
  {path: '', component: TariffDetailsComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
