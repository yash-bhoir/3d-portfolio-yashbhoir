import React, { useState } from 'react';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Button } from '@components/ui/Button';
import { socials } from '@constants/socials';
import type { ContactFormData } from '@services/emailService';

/**
 * TODO: Add design — two-column layout (form left, social links right).
 * TODO: Wire onSubmit to emailService.submitContactForm.
 * TODO: Add loading state and success / error feedback.
 */
const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: call submitContactForm(form) and handle response
  };

  return (
    <section
      id="contact"
      data-section="contact"
      data-animate="true"
      className="contact"
    >
      <SectionTitle heading="Contact" subtitle="Let's work together" />

      <div className="contact__body">
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <input className="contact__input" name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input className="contact__input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input className="contact__input" name="subject" type="text" placeholder="Subject" value={form.subject} onChange={handleChange} required />
          <textarea className="contact__textarea" name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} required />
          <Button variant="primary" className="contact__submit">
            Send Message
          </Button>
        </form>

        <div className="contact__socials">
          {socials.map((social) => (
            <a key={social.label} href={social.href} className="contact__social-link" target="_blank" rel="noopener noreferrer">
              {/* TODO: Render icon via social.icon */}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
