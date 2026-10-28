import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // TODO: replace each github value with the exact repo link, and fill `live` when a demo exists.
  projects = [
    {
      name: 'ShadowPay - Smart Payment & Fraud Detection',
      github: 'https://github.com/zienab-amr/ShadowPay',
      live: '',
      image: 'assets/ShadowPay.png',
      description: 'Payment platform with real-time fraud validation. I built the ASP.NET Core backend (JWT, refresh tokens, OTP) and integrated Java banking microservices, a FastAPI ML model, and a Flutter app.',
      technologies: ['ASP.NET Core', 'Java', 'FastAPI', 'Flutter', 'SQL Server', 'JWT']
    },
    {
      name: 'OPTIMA ERP (Best Project Award)',
      github: 'https://github.com/zienab-amr/ERP_System',
      live: '',
      image: 'assets/ERP.png',
      description: 'ERP system with a fully dynamic, database-driven RBAC and custom middleware enforcing action-level authorization. Awarded Best Software Engineering Project at CLS Company (DEPI).',
      technologies: ['ASP.NET MVC', 'SQL Server', 'Bootstrap', 'AJAX']
    },
    {
      name: 'AssetLink - Equipment Rental Platform',
      github: 'https://github.com/zienab-amr/asset-link',
      live: '',
      image: 'assets/assets.png',
      description: 'B2B platform for secure equipment rentals with digital contracts, escrow, and real-time negotiation. My team took 1st place in the NTI program.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB']
    },
    {
      name: 'Full Stack Banking System',
      github: 'https://github.com/zienab-amr/BankSystem',
      live: '',
      image: 'assets/BankSystem.png',
      description: 'Layered Java REST backend (Resource, Service, Repository) with JPA/Hibernate, JPQL pagination, CVV hashing, and card masking, connected to a Flutter app.',
      technologies: ['Java JAX-RS', 'JPA/Hibernate', 'Flutter', 'SQL']
    },
    {
      name: 'SyncSkill - Skill Exchange',
      github: 'https://github.com/zienab-amr',
      live: '',
      image: '',
      description: 'Peer-to-peer skill exchange app with a full request lifecycle (send, accept, reject, cancel, track) and real-time UI sync.',
      technologies: ['Flutter', 'Firebase', 'Firestore', 'BLoC/Cubit']
    },
    {
      name: 'Portfolio Website',
      github: 'https://github.com/zienab-amr',
      live: '',
      image: 'assets/portfolio.png',
      description: 'Responsive portfolio built with Angular using reusable components.',
      technologies: ['Angular', 'TypeScript', 'CSS']
    }
  ];
}
