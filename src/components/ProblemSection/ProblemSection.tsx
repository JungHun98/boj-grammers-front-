import { ProblemH6 } from './ProblemSection.style';

interface ProblemSectionProps {
  title: string;
  html: string;
}

function ProblemSection({ title, html }: ProblemSectionProps) {
  return (
    <div>
      <ProblemH6>{title}</ProblemH6>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ lineHeight: '1.7rem' }}
      ></div>
    </div>
  );
}

export default ProblemSection;
