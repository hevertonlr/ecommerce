import { Component } from '@angular/core';
import { BannersComponent } from '../../shared/components/banners/banners.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
