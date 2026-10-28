import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences = [
    {
      title: '.NET Developer Trainee',
      company: 'Information Technology Institute (ITI)',
      period: 'Aug 2026 - Sep 2026',
      description: 'Completed the .NET Development program, building web applications and REST APIs with C# and ASP.NET Core and working with SQL Server.',
      technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core']
    },
    {
      title: 'Flutter Developer Trainee',
      company: 'Information Technology Institute (ITI)',
      period: 'Jul 2026 - Aug 2026',
      description: 'Trained in cross-platform mobile development. Built SyncSkill, a peer-to-peer skill exchange app with a full request lifecycle and real-time UI updates.',
      technologies: ['Flutter', 'Dart', 'BLoC/Cubit', 'Firebase']
    },
    {
      title: 'MEAN Stack Developer Trainee',
      company: 'National Telecommunication Institute (NTI)',
      period: 'Jul 2026',
      description: 'Completed the MEAN Stack program with a final score of 97.5%. Led my team to 1st place by building AssetLink, a B2B equipment rental platform.',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Technical Track Trainee',
      company: 'iCareer (Digitera Program)',
      period: 'Jun 2026 - Jul 2026',
      description: 'Completed the Digitera Technical Track with Plan International Egypt (Ready for Tomorrow), covering Agile methodologies, project management, and Jira.',
      technologies: ['Agile', 'Jira', 'Project Management']
    },
    {
      title: 'Full Stack .NET Trainee',
      company: 'Digital Egypt Pioneers Initiative (DEPI)',
      period: 'Jun 2025 - Dec 2025',
      description: 'Completed the Full Stack .NET track with ASP.NET Core, EF Core, and SQL Server. Built OPTIMA ERP, which won the Best Software Engineering Project award at CLS Company.',
      technologies: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'RBAC']
    }
  ];
}
