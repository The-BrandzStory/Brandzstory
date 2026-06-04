import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-showcase-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './showcase-section.html',
  styleUrl: './showcase-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseSection implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) posters: string[] = [];

  @ViewChild('posterGrid') posterGrid!: ElementRef<HTMLDivElement>;

  loopedPosters: string[] = [];

  private scrollInterval: ReturnType<typeof setInterval> | null = null;
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  goToPosters(): void {
    this.router.navigate(['/posters']);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.prepareLoopedPosters();

    setTimeout(() => {
      this.startAutoScroll();
    }, 200);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareLoopedPosters();

    if (!this.isBrowser) return;

    if (changes['posters'] && !changes['posters'].firstChange) {
      setTimeout(() => {
        this.restartAutoScroll();
      }, 200);
    }
  }

  private prepareLoopedPosters(): void {
    this.loopedPosters = [...this.posters, ...this.posters];
  }

  private startAutoScroll(): void {
    if (!this.posterGrid) return;

    const grid = this.posterGrid.nativeElement;

    this.stopAutoScroll();

    // if content is not overflowing, no scroll needed
    if (grid.scrollHeight <= grid.clientHeight) return;

    this.scrollInterval = setInterval(() => {
      grid.scrollTop += 1;

      const halfScrollHeight = grid.scrollHeight / 2;

      if (grid.scrollTop >= halfScrollHeight) {
        grid.scrollTop = 0;
      }
    }, 20); // lower value = faster scroll
  }

  private restartAutoScroll(): void {
    if (!this.posterGrid) return;

    const grid = this.posterGrid.nativeElement;
    grid.scrollTop = 0;
    this.startAutoScroll();
  }

  private stopAutoScroll(): void {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  trackByImage(index: number, item: string): string {
    return item + index;
  }
}