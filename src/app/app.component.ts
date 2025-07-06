import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ProjectsCardComponent } from './components/projects-card/projects-card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SkillsCardComponent, ProjectsCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-portfolio';
}
