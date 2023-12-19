import { Component } from '@angular/core';
interface mainObjContainer {
  title: string;
  context: string;
  imgSrc: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  mainData: mainObjContainer[] = [
    {
      title: 'Grow Together',
      context:
        'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on woth a feedback form.',
      imgSrc: '../../assets/illustration-grow-together.svg',
    },
    {
      title: 'Flowing Conversations',
      context:
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      imgSrc: '../../assets/illustration-flowing-conversation.svg',
    },
    {
      title: 'Your Users',
      context:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      imgSrc: '../../assets/illustration-your-users.svg',
    },
  ];
}
