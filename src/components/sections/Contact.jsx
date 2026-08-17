import { useState } from 'react';
import { Reveal } from '@/components/animations';
import { SectionHead, Input, Textarea, Button, Icon } from '@/components/ui';
import { profile } from '@/data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
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
                    in
                  </a>
                  <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    f
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
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
                icon={<Icon name={status === 'sent' ? 'check' : 'mail'} size={16} />}
                className="w-full"
              >
                {status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}