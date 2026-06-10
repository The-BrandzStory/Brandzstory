import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-values-section',
  imports: [CommonModule],
  templateUrl: './values-section.html',
  styleUrl: './values-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuesSection {

  @Input({ required: true }) values: string[] = [];
  
}
