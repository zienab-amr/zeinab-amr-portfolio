import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  stats = [
  { value: '5+', title: 'Projects Built' },
  { value: '3+', title: 'Years in CS' },
  { value: '6', title: 'Certificates' },
  { value: '5+', title: 'Technologies' }
];
}
