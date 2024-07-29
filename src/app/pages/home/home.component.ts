import { Component } from '@angular/core';
import { BannersComponent } from '../../shared/components/banners/banners.component';
import { BestSellersComponent } from '../../shared/components/best-sellers/best-sellers.component';
import { DailyDealsComponent } from "../../shared/components/daily-deals/daily-deals.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannersComponent, BestSellersComponent, DailyDealsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
