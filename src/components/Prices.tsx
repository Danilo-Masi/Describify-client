interface PricesProps {
  id: string;
}

export default function Prices({ id }: PricesProps) {
  return (
    <div className="w-full h-svh flex items-center justify-center text-white" id={id}>
      Prices
    </div>
  )
}
