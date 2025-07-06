import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  imports: [CommonModule],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.scss',
})
export class ProjectsCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() tech: string[] = [];
  @Input() linkUrl1?: string;
  @Input() linkUrl2?: string;
  @Input() height?: string;
}
