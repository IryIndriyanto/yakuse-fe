import EditBisnisForm from '@/components/EditBisnisForm';
import React from 'react'

const EditBisnis = ({ params }: { params: { businessId: string } }) => {
  const { businessId } = params;

  return (
    <div>
      <EditBisnisForm businessId={businessId} />
    </div>
  );
}

export default EditBisnis;