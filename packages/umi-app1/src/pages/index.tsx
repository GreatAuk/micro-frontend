import { useEffect } from 'react'
import api from '@micro-frontend/api'
import { Button } from 'antd'
import CButton from '@micro-frontend/api/src/services/swagger/Button'

import styles from './index.less';

type P = React.ComponentProps<typeof CButton>

export default function IndexPage() {
  useEffect(() => {
    api.pet.addPet()
    // updatePet()
    // api.pet.addPet()
  }, [])
  const goPage = () => {
    window.history.pushState(null, '', '/dashboard')
  }
  return (
    <div>
      <CButton />
      <Button onClick={goPage}>go Dashboard</Button>
      <h1 className={styles.title}>Umi App1 Micro12234444</h1>
    </div>
  );
}
