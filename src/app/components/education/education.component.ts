import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  trainings = [
    { icon: 'award', name: 'Digital Egypt Pioneers Initiative', company: 'Full Stack .NET Track', date: 'Jun 2025 — Dec 2025', badge: 'Best Project Award', highlight: true },
    { icon: 'laptop-code', name: 'MEAN Stack Development', company: 'National Telecommunication Institute', date: 'Jul 2026', badge: 'Final Score 97.5%', highlight: true },
    { icon: 'laptop-code', name: 'Flutter Cross Platform', company: 'Information Technology Institute', date: 'Jul 2026 — Aug 2026', badge: 'Completed', highlight: false },
    { icon: 'laptop-code', name: '.NET Development', company: 'Information Technology Institute', date: 'Aug 2026 — Sep 2026', badge: 'Completed', highlight: false },
    { icon: 'tasks', name: 'Digitera Technical Track', company: 'iCareer', date: 'Jun 2026 — Jul 2026', badge: 'Agile & Jira', highlight: false }
  ];
}
