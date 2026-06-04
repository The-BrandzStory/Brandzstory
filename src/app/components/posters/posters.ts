import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-posters',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './posters.html',
  styleUrl: './posters.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Posters {
  posters: string[] = [
    'assets/images/Poster1.png',
    'assets/images/Poster3.png',
    'assets/images/Poster4.png',
    'assets/images/Poster5.png',
    'assets/images/Poster6.png',
    'assets/images/Poster7.png',
    'assets/images/Poster8.png',
    'assets/images/Poster9.png',
    'assets/images/Poster10.png',
    'assets/images/Poster11.png',
    'assets/images/Poster12.png',
    'assets/images/Poster14.png',
    'assets/images/Poster15.png',
    'assets/images/Poster16.png',
    'assets/images/Poster17.png',
    'assets/images/Poster18.png',
    'assets/images/Poster19.png',
    'assets/images/Poster23.png',
    'assets/images/Poster24.png',
    'assets/images/Poster26.png',
  ];
}
