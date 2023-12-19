import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  contact: { icon: string; info: string }[] = [
    {
      icon: '../../assets/icon-location.svg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      icon: '../../assets/icon-phone.svg',
      info: '+1-543-123-4567',
    },
    {
      icon: '../../assets/icon-email.svg',
      info: 'example@huddle.com',
    },
  ];
  option: string[] = [
    'About Us',
    'What We Do',
    'FAQ',
    'Career',
    'Blog',
    'Contact Us',
  ];
}
