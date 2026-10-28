import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sections = [
  { title: 'Hero', link: '#hero' },
  { title: 'About', link: '#about' },
  { title: 'Skills', link: '#skills' },
  { title: 'Experience', link: '#experience' },
  { title: 'Projects', link: '#projects' },
  { title: 'Certificates', link: '#certificates' },
  { title: 'Contact', link: '#contact' }
];

}
