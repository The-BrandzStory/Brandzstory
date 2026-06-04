import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AboutData } from '../../models/landing-page.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
  standalone:true,
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AboutSection {
  
@Input({ required: true }) people!: AboutData[];  
}
