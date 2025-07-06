import { Component } from '@angular/core';
import { ICONS } from '../../icon-paths';

@Component({
  selector: 'app-skills-card',
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss'
})
export class SkillsCardComponent {
  angular = ICONS.angular;
  bootstrap = ICONS.bootstrap;
  css = ICONS.css;
  git = ICONS.git;
  html = ICONS.html;
  javascript = ICONS.javascript;
  mongo = ICONS.mongo;
  node = ICONS.node;
  react = ICONS.react;
  tailwind = ICONS.tailwind;
  typescript = ICONS.typescript;
  vite = ICONS.vite;
  mysql = ICONS.mysql;
}
