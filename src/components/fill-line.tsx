interface FillLineProps {
  className: string;
}

export default function FillLine({ className }: FillLineProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
    >
    </div >
  )
}
