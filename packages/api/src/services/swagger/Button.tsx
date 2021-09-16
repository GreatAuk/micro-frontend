import type { FC } from 'react'

type Props = {
  id: number;
}

const CButton: FC<Props> = ({ id }) => {
  return (
    <button>Hello world</button>
  )
}

export default CButton
