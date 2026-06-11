import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-section.html',
  styleUrl: './story-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorySection {

  @Input() leftPills: { label: string; icon: string }[] = [];
  @Input() rightPills: { label: string; icon: string }[] = [];

  @ViewChild('myVideo') videoRef!: ElementRef<HTMLVideoElement>;

  playFullscreen(): void {
    const video = this.videoRef.nativeElement;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }

    video.play();
  }
}