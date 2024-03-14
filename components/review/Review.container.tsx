'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import instance from '@/utils/intercepter';

import ReviewPresenter from './Review.presenter';

export default function ReviewContainer() {
  const [reviewData, setReviewData] = useState([]);
  const [selected, setSelected] = useState(0);
  const [category1, setCategory1] = useState(0);
  const [category2, setCategory2] = useState(0);
  const param = useParams();
  const id = Number(param.id);

  const getTableData = async () => {
    const response = await instance.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/member/contract/selectOne/${id}`,
    );
    return response;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTableData();
      setReviewData(JSON.parse(res.data.body.data.json));
    };
    fetchData();
  }, [id]);

  return (
    <ReviewPresenter
      reviewData={reviewData}
      selected={selected}
      setSelected={setSelected}
      category1={category1}
      setCategory1={setCategory1}
      category2={category2}
      setCategory2={setCategory2}
    />
  );
}
