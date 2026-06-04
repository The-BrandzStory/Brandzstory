import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FooterData } from '../../models/landing-page.model';

@Component({
  selector: 'app-footer-section',
  imports: [],
  templateUrl: './footer-section.html',
  styleUrl: './footer-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSection {
  @Input({ required: true }) data!: FooterData
}
