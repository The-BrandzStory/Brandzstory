import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './story-section.html',
  styleUrl: './story-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorySection {


  @Input() leftPills: { label: string; icon: string }[] = [];
  @Input() rightPills: { label: string; icon: string }[] = [];


}
