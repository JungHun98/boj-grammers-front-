import ResizableWindow from '@/components/common/ResizingBox';

interface VirticalResizingBoxProps {
  initialTopRatio?: number;
  children: React.ReactNode;
}

function VirticalResizingBox({
  initialTopRatio = 0.5,
  children,
}: VirticalResizingBoxProps) {
  return (
    <ResizableWindow
      direction="vertical"
      firstElementInitialRatio={initialTopRatio}
    >
      {children}
    </ResizableWindow>
  );
}

export default VirticalResizingBox;
