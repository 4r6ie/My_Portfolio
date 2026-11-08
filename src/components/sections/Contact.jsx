import { useState } from 'react';
import { Reveal } from '@/components/animations';
import { SectionHead, Input, Textarea, Button, Icon } from '@/components/ui';
import { profile } from '@/data';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'ba1c459c-a7c6-4c17-b32f-46c8081de1a8';
const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          replyto: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'The message could not be sent.');
      }

      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong while sending your message.');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="CONTACT"
            title={<>Let&apos;s <em>work together.</em></>}
            description="Have a project in mind or want to discuss opportunities? Feel free to reach out."
          />
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-info">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${profile.email}`} className="contact-value">{profile.email}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="phone" size={20} />
                </div>
                <div>
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${profile.phone}`} className="contact-value">{profile.phone}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Icon name="globe" size={20} />
                </div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{profile.location}</span>
                </div>
              </div>

              <div className="contact-social">
                <span className="contact-label">Follow me</span>
                <div className="contact-social-links">
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Icon name="github" size={18} />
                  </a>
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Icon name="linkedin" size={18} />
                  </a>
                  <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <Icon name="facebook" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <div className="contact-form-row">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={status === 'sending'}
                icon={<Icon name={status === 'success' ? 'check' : 'mail'} size={16} />}
                className="w-full"
              >
                {status === 'sending' && 'Sending...'}
                {status === 'success' && 'Message Sent!'}
                {status === 'error' && 'Try Again'}
                {status === 'idle' && 'Send Message'}
              </Button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="contact-status contact-status--success">
                    Message sent. Thanks for reaching out — I usually reply within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="contact-status contact-status--error" role="alert">
                    {errorMessage} You can also email me directly at{' '}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
