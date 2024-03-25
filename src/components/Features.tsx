interface FeaturesProps {
  id: string;
}

export default function Features({ id }: FeaturesProps) {
  return (
    <div className="w-full h-svh flex items-center justify-center text-white" id={id}>
      Features
    </div>
  )
}
