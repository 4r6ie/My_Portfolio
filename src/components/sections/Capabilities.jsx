import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SectionHead } from '@/components/ui';
import { devEnvironments, designSkills, docSkills } from '@/data';

export default function Capabilities() {
  const sections = [
    { title: 'Development Environment', items: devEnvironments, icon: 'terminal', id: 'dev-env' },
    { title: 'UI/UX & Design', items: designSkills, icon: 'palette', id: 'design' },
    { title: 'Technical Documentation', items: docSkills, icon: 'file', id: 'documentation' },
  ];

  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="section capabilities">
          <div className="container">
            <Reveal>
              <SectionHead
                eyebrow={section.title.toUpperCase()}
                title={<>Familiarity with <em>modern tooling.</em></>}
              />
            </Reveal>

            <StaggerContainer className="capabilities-grid" stagger={0.05}>
              {section.items.map((item, i) => (
                <StaggerItem key={item}>
                  <div className="capability-card">
                    <span className="capability-number">{String(i + 1).padStart(2, '0')}</span>
                    <span className="capability-name">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}
    </>
  );
}