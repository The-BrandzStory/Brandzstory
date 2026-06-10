import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProcessStep } from '../../models/landing-page.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './process-section.html',
  styleUrl: './process-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessSection {

  @Input({ required: true }) steps: ProcessStep[] = [];
}
