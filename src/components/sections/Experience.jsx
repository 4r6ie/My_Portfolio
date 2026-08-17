import { Reveal } from '@/components/animations';
import { SectionHead, Icon } from '@/components/ui';
import { profile } from '@/data';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="EXPERIENCE"
            title={<>Professional <em>background.</em></>}
          />
        </Reveal>

        <div className="experience-layout">
          <Reveal className="experience-card">
            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-icon">
                  <Icon name="briefcase" size={20} />
                </div>
                <div className="experience-meta">
                  <span className="experience-badge">Work Experience</span>
                </div>
              </div>
              <h3 className="experience-role">{profile.workExperience.role}</h3>
              <p className="experience-company">{profile.workExperience.company}</p>
              <p className="experience-desc">{profile.workExperience.description}</p>
            </div>
          </Reveal>

          <Reveal className="experience-card">
            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-icon experience-icon--edu">
                  <Icon name="book" size={20} />
                </div>
                <div className="experience-meta">
                  <span className="experience-badge experience-badge--edu">Education</span>
                </div>
              </div>
              <h3 className="experience-role">{profile.education.degree}</h3>
              <p className="experience-company">{profile.education.school}</p>
              <p className="experience-desc">Graduated with a focus on practical technology solutions and digital workflows.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}