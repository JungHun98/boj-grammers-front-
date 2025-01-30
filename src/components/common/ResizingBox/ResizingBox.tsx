import React, { useRef } from 'react';

import {
  firstElementHorizontal,
  firstElementVertical,
  handlerHorizontal,
  handlerVertical,
  HandlerWrapper,
  HorizonGutter,
  horizontalContainer,
  secondElementHorizontal,
  secondElementVertical,
  verticalContainer,
  VerticalGutter,
} from './ResizingBox.styles';

interface ResizingBoxProps {
  direction: 'vertical' | 'horizontal';
  firstElementInitialRatio: number;
  children: React.ReactNode;
}

function ResizingBox({
  direction,
  firstElementInitialRatio,
  children,
}: ResizingBoxProps) {
  const rootDivRef = useRef<HTMLDivElement>(null);
  const [firstReactElement, secondReactElement] =
    React.Children.toArray(children);

  const handleResize = () => {
    const rootDivHtmlElement = rootDivRef.current;
    if (!rootDivHtmlElement) return;

    const firstHtmlElement = rootDivHtmlElement.children.item(0) as HTMLElement;
    const secondHtmlElement = rootDivHtmlElement.children.item(
      2,
    ) as HTMLElement;

    document.body.style.cursor =
      direction === 'vertical' ? 'ns-resize' : 'ew-resize';

    const handleMouseMove = (e: MouseEvent) => {
      if (direction === 'vertical') {
        const totalHeight = rootDivHtmlElement.clientHeight;

        firstHtmlElement.style.height =
          e.clientY - rootDivHtmlElement.getBoundingClientRect().top + 'px';
        secondHtmlElement.style.height = `calc(${totalHeight}px - ${firstHtmlElement.style.height})`;
      } else {
        const totalWidth = rootDivHtmlElement.clientWidth;

        firstHtmlElement.style.width =
          e.clientX - rootDivHtmlElement.getBoundingClientRect().left + 'px';
        secondHtmlElement.style.width = `calc(${totalWidth}px - ${firstHtmlElement.style.width})`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    });
  };

  return (
    <div
      className={
        direction === 'horizontal' ? horizontalContainer : verticalContainer
      }
      ref={rootDivRef}
    >
      <FirstElement
        direction={direction}
        length={firstElementInitialRatio * 100 + '%'}
      >
        {firstReactElement}
      </FirstElement>
      <Handler direction={direction} onResize={handleResize} />
      <SecondElement
        direction={direction}
        length={(1 - firstElementInitialRatio) * 100 + '%'}
      >
        {secondReactElement}
      </SecondElement>
    </div>
  );
}

interface FirstElementProps {
  direction: 'horizontal' | 'vertical';
  length: string;
  children: React.ReactNode;
}

const FirstElement: React.FC<FirstElementProps> = ({
  direction,
  length,
  children,
}) => {
  const dimension = direction === 'vertical' ? 'height' : 'width';

  return (
    <div
      className={
        direction === 'horizontal'
          ? firstElementHorizontal
          : firstElementVertical
      }
      style={{
        [dimension]: length,
      }}
    >
      {children}
    </div>
  );
};

interface SecondElementProps {
  direction: 'horizontal' | 'vertical';
  length: string;
  children: React.ReactNode;
}

const SecondElement: React.FC<SecondElementProps> = ({
  direction,
  length,
  children,
}) => {
  const dimension = direction === 'vertical' ? 'height' : 'width';

  return (
    <div
      className={
        direction === 'horizontal'
          ? secondElementHorizontal
          : secondElementVertical
      }
      style={{
        [dimension]: length,
      }}
    >
      {children}
    </div>
  );
};

interface HandlerProps {
  direction: 'horizontal' | 'vertical';
  onResize: () => void;
}

const Handler: React.FC<HandlerProps> = ({ direction, onResize }) => {
  return (
    <HandlerWrapper
      className={
        direction === 'horizontal' ? handlerHorizontal : handlerVertical
      }
      onMouseDown={onResize}
    >
      {direction === 'horizontal' ? <HorizonGutter /> : <VerticalGutter />}
    </HandlerWrapper>
  );
};

export default ResizingBox;
