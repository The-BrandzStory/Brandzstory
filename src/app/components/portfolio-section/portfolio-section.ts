import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './portfolio-section.html',
  styleUrl: './portfolio-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioSection {

  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  playingIndex: number | null = null;

  videos = [
    {
      src: 'assets/videos/god-mode.mp4',
      poster: 'assets/images/karuppu.png',
      quote: 'God mode beginns. 🔥.'
    },
    {
      // src: 'assets/videos/video2.mp4',
      // poster: 'assets/logos/poster2.png',
      // quote: 'Where every flavor feels like home  welcome to Hillside Restaurant. 🍽️'
      src: 'assets/videos/video1.mp4',
      poster: 'assets/logos/poster1.png',
      quote: 'Not just a shop opening… it’s a LEO level entry. 🔥.'
    },
    {
      src: 'assets/videos/video3.mp4',
      poster: 'assets/logos/poster3.png',
      quote: 'Lights off. Eyes on. Your brand takes the big screen. 🎬'
    },
    {
      src: 'assets/videos/video4.mp4',
      poster: 'assets/logos/poster4.png',
      quote: 'Celebrating Bakrid with flavors, family & unforgettable moments. ✨'
    },
    {
      src: 'assets/videos/video5.mp4',
      poster: 'assets/logos/poster5.png',
      quote: 'Capturing smiles, surprises & memories that last forever. 🎉'
    },
    {
      src: 'assets/videos/kiruba-car.mp4',
      poster: 'assets/images/car.png',
      quote: 'Every key opens a new story'
    }
  ];

  playVideo(index: number): void {
    const players = this.videoPlayers.toArray();

    players.forEach((player, i) => {
      if (i !== index) {
        player.nativeElement.pause();
        player.nativeElement.currentTime = 0;
      }
    });

    const selectedVideo = players[index]?.nativeElement;
    if (selectedVideo) {
      selectedVideo.play();
      this.playingIndex = index;
    }
  }

}




