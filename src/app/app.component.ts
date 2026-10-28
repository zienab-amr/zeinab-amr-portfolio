import { Component, AfterViewInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'portfolio';
  progress = 0;
  showTop = false;
  marquee = ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'REST APIs', 'JWT', 'RBAC',
             'Microservices', 'Flutter', 'Angular', 'Node.js', 'MongoDB'];
  private observers: IntersectionObserver[] = [];

  @HostListener('window:scroll')
  onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    this.progress = max > 0 ? (h.scrollTop / max) * 100 : 0;
    document.body.classList.toggle('scrolled', h.scrollTop > 40);
    this.showTop = h.scrollTop > 600;
  }

  @HostListener('document:mousemove', ['$event'])
  onMove(e: MouseEvent) {
    const g = document.querySelector<HTMLElement>('.cursor-glow');
    if (g) { g.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`; g.style.opacity = '1'; }
  }

  top() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

  ngAfterViewInit() {
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }

    // Count-up for the numbers in the About stats
    const counter = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) { return; }
        const el = en.target as HTMLElement;
        counter.unobserve(el);
        const m = (el.textContent || '').match(/^(\d+)(.*)$/);
        if (!m) { return; }
        const end = +m[1], suffix = m[2], t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / 1200, 1);
          el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
          if (p < 1) { requestAnimationFrame(step); }
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.stat-value').forEach(el => counter.observe(el));
    this.observers.push(counter);

    // Reveal cards, headers and timeline items as they scroll into view (staggered per row)
    const targets = document.querySelectorAll<HTMLElement>(
      '.section-header, .about-content, .timeline-item, .contact-form-wrapper, ' +
      '.projects-section .glass-card, .certificates-section .glass-card, .skills-section .glass-card, ' +
      '.apart-section .glass-card, .about-section .stat-card, .education-section .glass-card, .contact-info-list .glass-card'
    );
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) { return; }
        const el = en.target as HTMLElement;
        el.classList.add('in-view');
        el.addEventListener('transitionend', () => {
          el.classList.remove('reveal', 'in-view');
          el.style.removeProperty('--d');
        }, { once: true });
        reveal.unobserve(el);
      });
    }, { threshold: 0.12 });
    targets.forEach(el => {
      const idx = Array.from(el.parentElement?.children ?? []).indexOf(el);
      el.style.setProperty('--d', Math.min(idx, 5) * 90 + 'ms');
      el.classList.add('reveal');
      reveal.observe(el);
    });

    // Highlight the nav link of the section currently on screen
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) { return; }
        document.querySelectorAll('.nav-link').forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + (en.target as HTMLElement).id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach(s => spy.observe(s));
    this.observers.push(reveal, spy);
  }

  ngOnDestroy() { this.observers.forEach(o => o.disconnect()); }
}
