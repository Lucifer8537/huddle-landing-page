import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  header_btn = 'Try It Free';
  header_title = 'Build The Community Your Fans Will Love';
  header_context =
    'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.';
  header_bottom_btn = 'Get Started For Free';
}
