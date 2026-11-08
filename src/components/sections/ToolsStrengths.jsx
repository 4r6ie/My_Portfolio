import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations';
import { SectionHead, Icon } from '@/components/ui';
import { toolsList, strengths, whyHireMe } from '@/data';

export function Tools() {
  return (
    <section id="tools" className="section tools">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="TOOLS"
            title={<>Tools I <em>use daily.</em></>}
          />
        </Reveal>

        <StaggerContainer className="tools-grid" stagger={0.04}>
          {toolsList.map((tool, i) => (
            <StaggerItem key={tool}>
              <div className="tool-card">
                <span className="tool-name">{tool}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function Strengths() {
  return (
    <section id="strengths" className="section strengths">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="STRENGTHS"
            title={<>Core <em>strengths.</em></>}
          />
        </Reveal>

        <StaggerContainer className="strengths-grid" stagger={0.08}>
          {strengths.map((strength, i) => (
            <StaggerItem key={strength}>
              <div className="strength-card">
                <span className="strength-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="strength-name">{strength}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section why-hire">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="WHY HIRE ME"
            title={<>Why work <em>with me?</em></>}
          />
        </Reveal>

        <StaggerContainer className="why-grid" stagger={0.1}>
          {whyHireMe.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="why-card">
                <span className="why-number">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}