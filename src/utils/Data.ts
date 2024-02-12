export interface ModalDataProps {
  label: string
  inputs: {
    label: string
    type: string
  }[]
}
export const modalData: ModalDataProps[] = [
  {
    label: 'Sort by:',
    inputs: [
      {
        label: 'Price',
        type: 'checkbox',
      },
      {
        label: 'Rating',
        type: 'checkbox',
      },
      {
        label: 'Distance to centre',
        type: 'checkbox',
      },
    ],
  },
  {
    label: 'Discounts',
    inputs: [
      {
        label: '5% off',
        type: 'checkbox',
      },
      {
        label: '10% off',
        type: 'checkbox',
      },
      {
        label: '25% off',
        type: 'checkbox',
      },
      { label: '> 25% off', type: 'checkbox' },
    ],
  },
  {
    label: 'Cusines',
    inputs: [
      { label: 'Italian', type: 'checkbox' },
      { label: 'Indian', type: 'checkbox' },
    ],
  },
  {
    label: 'Tags',
    inputs: [
      { label: 'Vegetarian', type: 'checkbox' },
      { label: 'Vegan', type: 'checkbox' },
    ],
  },
]
