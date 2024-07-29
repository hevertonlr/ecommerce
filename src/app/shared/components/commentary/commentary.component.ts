import { Component, Input } from '@angular/core';
import { CommentaryModel } from '../../models/commentary.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commentary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commentary.component.html',
  styleUrl: './commentary.component.scss',
})
export class CommentaryComponent {
  @Input({ required: true }) commentary!: CommentaryModel;
  @Input() first: boolean = false;
  stars: number[] = [1, 2, 3, 4, 5];
}
