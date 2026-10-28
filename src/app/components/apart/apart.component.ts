import { Component } from '@angular/core';

@Component({
  selector: 'app-apart',
  templateUrl: './apart.component.html',
  styleUrls: ['./apart.component.css']
})
export class ApartComponent {
  softs = [
    {
      icon: 'brain',
      color: 'var(--color-blue-400)',
      bg: 'var(--color-primary-muted)',
      title: 'Problem Solver',
      description: 'I enjoy breaking complex problems into simple, scalable, and maintainable solutions.'
    },
    {
      icon: 'users',
      color: 'var(--color-purple-400)',
      bg: 'var(--color-secondary-muted)',
      title: 'Team Player',
      description: 'I collaborate effectively, communicate clearly, and enjoy working in agile teams.'
    },
    {
      icon: 'bolt',
      color: 'var(--color-cyan-400)',
      bg: 'var(--color-accent-muted)',
      title: 'Fast Learner',
      description: 'I quickly adapt to new technologies and continuously improve my skills.'
    },
    {
      icon: 'code',
      color: 'var(--color-amber-400)',
      bg: 'var(--color-highlight-muted)',
      title: 'Clean Code',
      description: 'I write reusable, readable, and maintainable code following best practices.'
    }
  ];
}