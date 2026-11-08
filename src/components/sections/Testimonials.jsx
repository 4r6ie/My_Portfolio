import { Reveal } from '@/components/animations';
import { SectionHead, Card, Avatar, Badge, Rating } from '@/components/ui';
import { testimonials } from '@/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="CLIENT \nFEEDBACK"
            title={<>What <em>clients</em> say.</>}
          />
        </Reveal>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <Avatar src={testimonial.avatar} alt={testimonial.clientName} />
                </div>
                <div className="testimonial-client-info">
                  <h4 className="testimonial-client-name">{testimonial.clientName}</h4>
                  <p className="testimonial-client-role">{testimonial.clientRole}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
                <div className="testimal-rating">
                  <Rating count={testimonial.rating} size="sm" />
                </div>
              </div>

              <p className="testimonial-text">
                {testimonial.text}
              </p>

              <div className="testimonial-meta">
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}