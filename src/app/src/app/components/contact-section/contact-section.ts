import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactData } from '../../models/landing-page.model';

@Component({
  selector: 'app-contact-section',
  imports: [],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ContactSection {

  @Input({ required: true }) data!: ContactData;

}
