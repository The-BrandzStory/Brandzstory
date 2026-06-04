
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroSection } from '../../components/hero-section/hero-section';
import { ShowcaseSection } from '../../components/showcase-section/showcase-section';
import { BrandsSection } from '../../components/brands-section/brands-section';
import { StorySection } from '../../components/story-section/story-section';
import { ProcessSection } from '../../components/process-section/process-section';
import { PortfolioSection } from '../../components/portfolio-section/portfolio-section';
import { AboutSection } from '../../components/about-section/about-section';
import { ValuesSection } from '../../components/values-section/values-section';
import { ContactSection } from '../../components/contact-section/contact-section';
import { FooterSection } from '../../components/footer-section/footer-section';

import {
  ABOUT_DATA,
  BRAND_LOGOS,
  CONTACT_DATA,
  FOOTER_DATA,
  HERO_DATA,
  PORTFOLIO_ITEMS,
  POSTER_IMAGES,
  PROCESS_STEPS,
  STORY_PILLS_LEFT,
  STORY_PILLS_RIGHT,
  VALUES_LIST,
  FEEDBACK_DATA
} from '../../data/landing-page.data';
import { Feedback } from "../feedback/feedback";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSection,
    ShowcaseSection,
    BrandsSection,
    StorySection,
    ProcessSection,
    PortfolioSection,
    AboutSection,
    ValuesSection,
    ContactSection,
    FooterSection,
    Feedback
],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  hero = HERO_DATA;
  posters = POSTER_IMAGES;
  logos = BRAND_LOGOS;

  leftPills = STORY_PILLS_LEFT;
  rightPills = STORY_PILLS_RIGHT;
  processSteps = PROCESS_STEPS;
  portfolioItems = PORTFOLIO_ITEMS;
  about = ABOUT_DATA;
  values = VALUES_LIST;
  contact = CONTACT_DATA;
  footer = FOOTER_DATA;
  feedback = FEEDBACK_DATA
}