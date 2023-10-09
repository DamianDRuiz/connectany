export function GlobalStyles({ styles }: GlobalStylesProps) {
  return <style>{styles}</style>
}
interface GlobalStylesProps {
  styles: string
}
