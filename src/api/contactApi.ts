const API_BASE_URL = 'https://jolly-shadow-d2bf.elfadili-zoubair.workers.dev/api';

export interface ContactSubmissionRequest {
  fullName: string;
  email: string;
  phoneNumber?: string;
  cardTypeOfInterest?: string;
  subject: string;
  message: string;
}

export interface ContactSubmissionResponse {
  message: string;
  id: number;
}

class ContactAPI {
  async submitContactForm(submission: ContactSubmissionRequest): Promise<ContactSubmissionResponse> {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Failed to submit contact form');
    }

    return response.json();
  }
}

export const contactAPI = new ContactAPI();
