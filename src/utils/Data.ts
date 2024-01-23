interface ModalDataProps {
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
        type: 'radio',
      },
      {
        label: 'Rating',
        type: 'radio',
      },
      {
        label: 'Disatnce to centre',
        type: 'radio',
      },
    ],
  },
  {
    label: 'Discounts',
    inputs: [
      {
        label: '5% off',
        type: 'radio',
      },
      {
        label: '10% off',
        type: 'radio',
      },
      {
        label: '25% off',
        type: 'radio',
      },
      { label: '> 25% off', type: 'radio' },
    ],
  },
  {
    label: 'Cusines',
    inputs: [
      { label: 'Italian', type: 'radio' },
      { label: 'Indian', type: 'radio' },
    ],
  },
  {
    label: 'Tags',
    inputs: [
      { label: 'Vegetarian', type: 'radio' },
      { label: 'Vegan', type: 'checkbox' },
    ],
  },
]
