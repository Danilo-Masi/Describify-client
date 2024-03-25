interface FaqsProps {
  id: string;
}

export default function Faqs({ id }: FaqsProps) {
  return (
    <div className="w-full h-svh flex items-center justify-center text-white" id={id}>
      Faq's
    </div>
  )
}
