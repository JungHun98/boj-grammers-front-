import styled from '@emotion/styled';

interface ExampleProps {
  content: string;
}

const ExamplePre = styled('pre')`
  background-color: #2d2d2d;
  padding: 12px;
  border-radius: 4px;
`;

function Example({ content }: ExampleProps) {
  return (
    <div>
      <ExamplePre>{content}</ExamplePre>
    </div>
  );
}

export default Example;
