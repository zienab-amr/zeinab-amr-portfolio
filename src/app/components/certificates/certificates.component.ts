import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  // TODO: add the image path (inside assets/) for items with image: '' and a credential URL when available.
  certificates = [
    { title: 'Best Software Engineering Project Award', issuer: 'CLS Company - Digital Egypt Pioneers Initiative (DEPI)', year: '2025', image: 'assets/best.jpg', credential: '' },
    { title: 'Full Stack .NET Track', issuer: 'Digital Egypt Pioneers Initiative (DEPI)', year: '2025', image: 'assets/depi.jpg', credential: '' },
    { title: 'Digitera Program - Technical Track', issuer: 'iCareer with Plan International Egypt', year: '2026', image: 'assets/digitera.jpg', credential: '' },
    { title: 'MEAN-Stack Web Development (120 hrs, 97.5%)', issuer: 'National Telecommunication Institute (NTI)', year: '2026', image: 'assets/nti-mean.jpg', credential: '' },
    { title: 'Cross-Platform Mobile App Development using Flutter (102 hrs)', issuer: 'Information Technology Institute (ITI)', year: '2026', image: 'assets/iti-flutter.jpg', credential: '' },
    { title: '.NET Development Certificate', issuer: 'Information Technology Institute (ITI)', year: '2026', image: '', credential: '' }
  ];
}
