import axios from 'axios';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Submits the contact form to the email delivery endpoint.
 * TODO: configure endpoint URL via environment variable.
 * TODO: add request/response types and error handling.
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  // TODO: replace placeholder URL with real endpoint
  await axios.post('/api/contact', data);
}
