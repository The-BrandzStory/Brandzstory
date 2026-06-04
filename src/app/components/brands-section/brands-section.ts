import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-brands-section',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './brands-section.html',
  styleUrl: './brands-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsSection {

  @Input({ required: true }) 
  logos: string[] = [];
  
}
