import { Reveal } from '@/components/animations';
import { SectionHead, Card, Icon } from '@/components/ui';
import { profile } from '@/data';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '7+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Certificates', value: '4+' },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="ABOUT ME"
            title={<>Building <em>practical solutions</em> with code.</>}
            description={profile.summary}
          />
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-card">
            <Card variant="elevated">
              <img src={profile.avatar} alt={profile.name} className="about-avatar" />
              <h3 className="about-name">{profile.name}</h3>
              <p className="about-location">
                <Icon name="globe" size={14} />
                {profile.location}
              </p>
            </Card>
          </Reveal>

          <div className="about-info">
            <Reveal>
              <div className="about-detail">
                <h4>Email</h4>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-detail">
                <h4>Phone</h4>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-detail">
                <h4>Education</h4>
                <p>{profile.education.degree}</p>
                <span>{profile.education.school}</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="about-detail">
                <h4>Work Experience</h4>
                <p>{profile.workExperience.role}</p>
                <span>{profile.workExperience.company}</span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}