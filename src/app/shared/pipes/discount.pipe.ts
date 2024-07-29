import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform = (price: number, discount: number): string =>
    `R$ ${(price * (1 - discount))?.toFixed(2).replaceAll('.', ',')}`;
}
