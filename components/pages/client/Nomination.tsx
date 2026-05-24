import AllocatedShare from '@/components/organisms/dashboard/client/nominations/AllocatedShare'
import NomineeForm from '@/components/organisms/dashboard/client/nominations/NominaeeForm'
import Warning from '@/components/organisms/dashboard/client/nominations/Warning'
import React from 'react'

const Nomination = () => {
  return (
    <div>
        <Warning />
        <AllocatedShare />
        <NomineeForm />
    </div>
  )
}

export default Nomination