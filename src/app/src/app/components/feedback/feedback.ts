import { Component, Input } from '@angular/core';
import { feedback } from '../../models/landing-page.model';

@Component({
  selector: 'app-feedback',
  imports: [],
  standalone:true,
  templateUrl: './feedback.html',
  styleUrl: './feedback.css',
})
export class Feedback {
    @Input({ required: true }) feedback: feedback[] = [];
  
}
