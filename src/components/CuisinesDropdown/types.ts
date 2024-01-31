export interface Option {
  value: string
  label: string
  namespace?: string
}

export interface CuisinesDropdownProps {
  value: string
  label?: string
  namespace?: string
  options: Option[]
}