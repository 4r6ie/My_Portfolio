import { Reveal } from '@/components/animations';
import { Button, Icon } from '@/components/ui';
import { profile } from '@/data';

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <Reveal>
          <div className="resume-card">
            <div className="resume-content">
              <h2 className="resume-title">Download My Resume</h2>
              <p className="resume-desc">
                Get a complete overview of my skills, experience, and qualifications.
                Available as a PDF for easy viewing and printing.
              </p>
            </div>
            <Button
              variant="primary"
              href={profile.resume}
              download
              icon={<Icon name="download" size={16} />}
            >
              Download Resume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}