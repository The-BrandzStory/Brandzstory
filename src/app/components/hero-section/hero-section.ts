import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroData } from '../../models/landing-page.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection {

  @Input({ required: true })
  data!: HeroData;
}
