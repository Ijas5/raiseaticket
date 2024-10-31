import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  resources = [
    {
      img:  'assets/images/image_2024_09_30T10_29_37_167Z.png',
      title: 'Articles',
      description: 'Create new articles to add to the knowledge base. Agents can create, edit, and view the articles. When you create an article, make sure to assign the relevant category.',
    },
    {
      img: 'assets/images/image_2024_09_30T10_29_37_172Z.png',
      title: 'Frequently Asked Questions',
      description: 'Add frequently asked questions that you want to display on the front page of your portal. When you create a FAQ, make sure to assign the relevant category.',
    },
  ];
}

