interface GridBackgroundProps {
  children: any;
  id?: string;
}

export default function GridBackground({ children, id }: GridBackgroundProps) {
  return (
    <div className="w-[90%] h-auto flex flex-col items-center justify-start gap-y-10 py-16 relative bg-grid dark:bg-grid" id={id}>
      {/* Radial gradient */}
      <div className="absolute pointer-events-none  inset-0 flex flex-col items-center justify-center bg-custom-background dark:bg-dark-gradient [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />
      {children}
    </div>
  );
}
