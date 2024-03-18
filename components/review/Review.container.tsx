'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

import { onGetReview } from '@/service/review/useReviewService';

import ReviewPresenter from './Review.presenter';

export default function ReviewContainer() {
  const [selected, setSelected] = useState(0);
  const [category1, setCategory1] = useState(0);
  const [category2, setCategory2] = useState(0);
  const param = useParams();
  const id = Number(param.id);

  const { data, isError } = onGetReview(id);

  if (isError) {
    // eslint-disable-next-line no-alert
    alert(data?.data.head.resultMsg);
  }

  return (
    <ReviewPresenter
      reviewData={JSON.parse(data?.data.body.data.json)}
      selected={selected}
      setSelected={setSelected}
      category1={category1}
      setCategory1={setCategory1}
      category2={category2}
      setCategory2={setCategory2}
    />
  );
}
