import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories = ['Backend', 'Database', 'Frontend', 'Mobile Development', 'DevOps & Tools'];
  
  activeCategory = 'Backend';

  allSkills = [
    { name: 'Angular 16', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'RxJS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    
    { name: '.NET', category: 'Backend' },
    { name: 'ASP.NET Core Web API', category: 'Backend' },
    { name: 'ASP.NET Core MVC', category: 'Backend' },
    { name: 'C#', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Entity Framework Core', category: 'Backend' },
    { name: 'LINQ', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'JWT Authentication', category: 'Backend' },
    { name: 'RBAC & Middleware Authorization', category: 'Backend' },
    { name: 'Microservices', category: 'Backend' },
    { name: 'Repository Pattern', category: 'Backend' },
    { name: 'Java (JAX-RS, JPA/Hibernate)', category: 'Backend' },

    { name: 'MongoDB', category: 'Database' },
    { name: 'SQL Server', category: 'Database' },
    { name: 'MySQL', category: 'Database' },

    { name: 'Git', category: 'DevOps & Tools' },
    { name: 'GitHub', category: 'DevOps & Tools' },
    { name: 'Postman', category: 'DevOps & Tools' },
    { name: 'Swagger', category: 'DevOps & Tools' },
    { name: 'Jira', category: 'DevOps & Tools' },
    { name: 'Agile', category: 'DevOps & Tools' },
    { name: 'Visual Studio', category: 'DevOps & Tools' },
    { name: 'Visual Studio Code', category: 'DevOps & Tools' },

    { name: 'Flutter', category: 'Mobile Development' },
    { name: 'Dart', category: 'Mobile Development' },
    { name: 'BLoC / Cubit', category: 'Mobile Development' },
    { name: 'Dio', category: 'Mobile Development' },
    { name: 'Firebase', category: 'Mobile Development' },
  ];

  get filteredSkills() {
    return this.allSkills.filter(skill => skill.category === this.activeCategory);
  }
}