import { Component } from '@angular/core';
import { ICONS } from '../../icon-paths';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  wavingHand = ICONS.wavingHand;
  github = ICONS.github;
  linkedin = ICONS.linkedin;
}
