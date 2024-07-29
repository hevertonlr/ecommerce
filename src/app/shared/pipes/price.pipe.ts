import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
  standalone: true,
})
export class PricePipe implements PipeTransform {
  transform = (price: number): string =>
    `R$ ${price?.toFixed(2).replaceAll('.', ',')}`;
}
