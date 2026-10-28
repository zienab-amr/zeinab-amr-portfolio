import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Get a free key at https://web3forms.com (enter your email, the key arrives by mail) and paste it here.
  private readonly ACCESS_KEY = '2f957722-4907-4b52-8cb5-10c614c88cd6';
  private readonly EMAIL = 'zienabamr2372005@gmail.com';

  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  contactDetails = [
    { icon: 'envelope', label: 'Email', value: 'zienabamr2372005@gmail.com', link: 'mailto:zienabamr2372005@gmail.com' },
    { icon: 'phone', label: 'Phone', value: '+20 1277504791', link: 'tel:+201277504791' },
    { icon: 'map-marker-alt', label: 'Location', value: 'Cairo, Egypt', link: '#' },
    { icon: 'link', label: 'LinkedIn / GitHub', value: 'zeinabamr  |  zienab-amr', link: 'https://www.linkedin.com/in/zeinabamr/' }
  ];

  async send(e: Event, form: HTMLFormElement, name: string, email: string, subject: string, message: string, bot: boolean) {
    e.preventDefault();
    if (this.status === 'sending') { return; }
    const subj = subject || 'Portfolio inquiry';

    // Fallback until the access key is set: open the visitor's mail app
    if (this.ACCESS_KEY.startsWith('YOUR_')) {
      window.location.href = `mailto:${this.EMAIL}?subject=${encodeURIComponent(subj)}&body=` +
        encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      return;
    }

    this.status = 'sending';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.ACCESS_KEY, name, email, subject: subj, message,
          from_name: 'Portfolio Website', botcheck: bot
        })
      });
      const data = await res.json();
      this.status = data.success ? 'sent' : 'error';
      if (data.success) { form.reset(); }
    } catch {
      this.status = 'error';
    }
    setTimeout(() => (this.status = 'idle'), 7000);
  }
}
