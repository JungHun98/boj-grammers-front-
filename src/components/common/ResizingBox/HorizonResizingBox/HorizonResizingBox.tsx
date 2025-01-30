import ResizableWindow from '@/components/common/ResizingBox';

interface HorizonResizingBoxProps {
  initialLeftRatio?: number;
  children: React.ReactNode;
}

function HorizonResizingBox({
  initialLeftRatio = 0.5,
  children,
}: HorizonResizingBoxProps) {
  return (
    <ResizableWindow
      direction="horizontal"
      firstElementInitialRatio={initialLeftRatio}
    >
      {children}
    </ResizableWindow>
  );
}

export default HorizonResizingBox;
