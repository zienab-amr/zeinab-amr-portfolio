import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = [
    '.NET Backend Developer',
    'Full Stack Developer',
    'Flutter Developer',
    'MEAN Stack Developer'
  ];

  currentRole = this.roles[0];
  currentIndex = 0;
  intervalId: any;
  
  isFading = false; 

  techStack = [
    'ASP.NET Core', 
    'C#', 
    'SQL Server', 
    'Flutter', 
    'Angular'
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      
      this.isFading = true; 

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.roles.length;
        this.currentRole = this.roles[this.currentIndex];
        this.isFading = false; 
      }, 400); 

    }, 2500);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}