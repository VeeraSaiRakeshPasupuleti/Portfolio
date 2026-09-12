import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],

  template: `
    <section id="contact" class="section">
      <div class="container">

        <p class="eyebrow shiny">Let's talk</p>
        <h2>Contact</h2>

        <div class="contact-grid">

          <!-- Contact Information -->
          <div class="copy">

            <p class="contact-intro">
              Have a question or a project in mind?
              Feel free to reach out.
            </p>

            <div class="contact-info">

              <div class="contact-item">
                <span class="label">Location</span>
                <strong>India</strong>
              </div>

              <div class="contact-item">
                <span class="label">Email</span>
                <a href="mailto:p.veera.sai.rakesh@gmail.com">
                  p.veera.sai.rakesh@gmail.com
                </a>
              </div>

              <div class="contact-item">
                <span class="label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/veera-sai-rakesh-pasupuleti-17782a249/"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>

              <div class="contact-item">
                <span class="label">GitHub</span>
                <a
                  href="https://github.com/veerasairakeshpasupuleti"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </div>

            </div>

          </div>

          <!-- Contact Form -->
          <div class="contact-form">

            @if (!submitted) {

              <form
                (ngSubmit)="submit()"
                #form="ngForm">

                <input
                  name="name"
                  [(ngModel)]="model.name"
                  placeholder="Name"
                  required
                  autocomplete="name">

                <input
                  name="email"
                  [(ngModel)]="model.email"
                  type="email"
                  placeholder="Email"
                  required
                  autocomplete="email">

                <textarea
                  name="message"
                  [(ngModel)]="model.message"
                  rows="6"
                  placeholder="Message"
                  required>
                </textarea>

                <button
                  type="submit"
                  [disabled]="form.invalid">
                  Send Message
                </button>

              </form>

            }

            @if (submitted) {

              <div class="success">
                <span class="success-icon">✓</span>
                <span>Thank you for your message!</span>
              </div>

            }

          </div>

        </div>

      </div>
    </section>
  `,

  styles: [`

    /* =========================
       Contact Layout
       ========================= */

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: start;
    }


    /* =========================
       Contact Information
       ========================= */

    .copy {
      color: var(--white-icon);
      line-height: 1.6;
    }

    .contact-intro {
      margin: 0 0 32px;
      max-width: 520px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }

    .contact-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .contact-item .label {
      color: var(--white-icon);
      font-size: 14px;
    }

    .contact-item strong,
    .contact-item a {
      color: var(--white);
      font-size: 16px;
      font-weight: 500;
    }

    .contact-item a {
      text-decoration: none;
      transition: color .3s ease;
    }

    .contact-item a:hover {
      color: var(--sec);
    }


    /* =========================
       Contact Form
       ========================= */

    .contact-form {
      width: 100%;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    input,
    textarea {
      width: 100%;
      box-sizing: border-box;

      font: inherit;
      color: var(--white);

      background: var(--component-bg);

      border: 1px solid var(--white-icon-tr);
      border-radius: 9px;

      padding: 14px 16px;

      outline: none;

      transition:
        border-color .3s ease,
        box-shadow .3s ease,
        background .3s ease;
    }

    input::placeholder,
    textarea::placeholder {
      color: var(--white-icon);
      opacity: .7;
    }

    input:focus,
    textarea:focus {
      border-color: var(--sec);
      box-shadow: 0 0 0 2px #a476ff33;
    }

    textarea {
      resize: vertical;
      min-height: 140px;
    }

    button {
      width: 100%;

      font: inherit;
      color: var(--white);

      background: var(--white-icon-tr);

      border: 1px solid var(--white-icon-tr);
      border-radius: 9px;

      padding: 13px 16px;

      cursor: pointer;

      opacity: .8;

      transition:
        opacity .3s ease,
        background .3s ease,
        transform .3s ease;
    }

    button:not(:disabled):hover {
      opacity: 1;
      background: var(--sec);
      transform: translateY(-1px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: .35;
    }


    /* =========================
       Success Message
       ========================= */

    .success {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      min-height: 200px;

      color: var(--white);

      font-size: 18px;

      border: 1px solid var(--white-icon-tr);
      border-radius: 12px;

      background: var(--component-bg);
    }

    .success-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 28px;
      height: 28px;

      border-radius: 50%;

      background: var(--sec);
      color: var(--white);

      font-size: 16px;
    }


    /* =========================
       Responsive
       ========================= */

    @media (max-width: 767px) {

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-info {
        gap: 18px;
      }

    }

  `]
})
export class ContactComponent {

  model = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  submit() {
  if (
    !this.model.name ||
    !this.model.email ||
    !this.model.message
  ) {
    return;
  }

  const subject = encodeURIComponent(
    `Portfolio Contact from ${this.model.name}`
  );

  const body = encodeURIComponent(
    `Hello Rakesh,

Name: ${this.model.name}
Email: ${this.model.email}

Message:
${this.model.message}

Regards,
${this.model.name}`
  );

  window.location.href =
    `mailto:p.veera.sai.rakesh@gmail.com?subject=${subject}&body=${body}`;
}

}