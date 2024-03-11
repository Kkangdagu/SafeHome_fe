'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Resizer from 'react-image-file-resizer';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { close, open } from '@/store/modules/modalSlice';
import { requestWithBase64 } from '@/utils/base64';
import CompleteUpload from '@/utils/complete-upload';
import SaveOne from '@/utils/contract-save';
import initiateUpload from '@/utils/initiate-upload';
import presignedUrl from '@/utils/presigned-url';
import presignedUrlPart from '@/utils/presigned-url-part';

import OCRUI from './OCR.presenter';

export default function OCRContainer() {
  const [img, setImg] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [analyzeResult, setAnalyzeResult] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [fileExtension, setFileExtension] = useState<string | null>(null);
  const isModal = useSelector((state: RootState) => state.modal.isOpen);
  const [binary, setBinary] = useState<File>();
  const [key, setKey] = useState('');
  const [uploadId, setUploadId] = useState('');
  const [presigned, setPresigned] = useState<string[]>([]);
  const partNum = ['6', '5', '4'];
  const [etag, setEtag] = useState<string[]>([]);
  const [userId, setUserId] = useState('');
  const [completeData, setCompleteData] = useState('');
  const dispatch = useDispatch();

  const resizerFile = (file: File): Promise<string> =>
    new Promise((res) => {
      Resizer.imageFileResizer(
        file,
        1500,
        1500,
        'JPEG',
        80,
        0,
        (uri) => {
          if (typeof uri === 'string') {
            res(uri);
          } else {
            throw new Error('이미지 형식이 올바르지 않습니다.');
          }
        },
        'base64',
      );
    });

  const onImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBinary(file);
      setFileName(file.name);
      const imgUrl = URL.createObjectURL(file);
      setImg(imgUrl);

      const ex = file.name.split('.')[1];
      setFileExtension(ex);

      const base64 = await resizerFile(file);
      const base64Str = base64.split(',')[1];
      setBase64Image(base64Str);
    }
  };

  const onImageAnalyzing = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (base64Image && fileExtension) {
      try {
        setIsProcessing(true);
        dispatch(open());

        const data = await requestWithBase64(base64Image, fileExtension);
        setAnalyzeResult(data);

        const initUpload = await initiateUpload(fileName, fileExtension);
        setKey(initUpload.key);
        setUploadId(initUpload.uploadId);

        if (initUpload.key && initUpload.uploadId) {
          const presignUrl1 = await presignedUrl(
            initUpload.key,
            initUpload.uploadId,
            partNum[0],
          );
          setPresigned([presignUrl1]);

          if (presignUrl1 && binary) {
            const presignedPart = await presignedUrlPart(presignUrl1, binary);
            setEtag([presignedPart]);

            const parts = [
              {
                partNumber: Number(partNum[0]),
                etag: presignedPart,
              },
            ];

            const complete = await CompleteUpload(
              initUpload.key,
              initUpload.uploadId,
              parts,
            );
            setCompleteData(complete);
          }
        }
      } catch (error) {
        return error;
      } finally {
        setIsProcessing(false);
        setImg(null);
        dispatch(close());
      }
    }
    return null;
  };
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  // const onImageAnalyzing = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (base64Image && fileExtension) {
  //     try {
  //       setIsProcessing(true);
  //       dispatch(open());

  //       const data = await requestWithBase64(base64Image, fileExtension);
  //       setAnalyzeResult(data);

  //       const initUpload = await initiateUpload(fileName);
  //       setKey(initUpload.key);
  //       setUploadId(initUpload.uploadId);

  //       if (initUpload.key && initUpload.uploadId) {
  //         const presignUrl1 = await presignedUrl(
  //           initUpload.key,
  //           initUpload.uploadId,
  //           partNum[0],
  //         );
  //         const presignUrl2 = await presignedUrl(
  //           initUpload.key,
  //           initUpload.uploadId,
  //           partNum[1],
  //         );
  //         setPresigned([presignUrl1, presignUrl2]);

  //         const blobToFile = (blob: Blob, name: string): File => {
  //           return new File([blob], name, {
  //             type: blob.type,
  //             lastModified: Date.now(),
  //           });
  //         };

  //         if (binary) {
  //           const blobSize = Math.ceil(binary.size / 2); // Adjust this value based on your needs
  //           const part1 = binary.slice(0, blobSize);
  //           const part2 = binary.slice(blobSize);
  //           const filePart1 = blobToFile(part1, 'part1');
  //           const filePart2 = blobToFile(part2, 'part2');

  //           if (presignUrl1 && presignUrl2) {
  //             const partUploadPromises = [
  //               presignedUrlPart(presignUrl1, filePart1),
  //               presignedUrlPart(presignUrl2, filePart2),
  //             ];

  //             Promise.all(partUploadPromises).then(async (etags) => {
  //               setEtag(etags);

  //               const parts = [
  //                 {
  //                   partNumber: Number(partNum[0]),
  //                   etag: etags[0],
  //                 },
  //                 {
  //                   partNumber: Number(partNum[1]),
  //                   etag: etags[1],
  //                 },
  //               ];

  //               const complete = await CompleteUpload(
  //                 initUpload.key,
  //                 initUpload.uploadId,
  //                 parts,
  //               );
  //               console.log('저장완료', complete);
  //             });
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsProcessing(false);
  //       setImg(null);
  //       dispatch(close());
  //     }
  //   }
  // };

  const onRestImg = () => {
    setImg(null);
  };

  useEffect(() => {
    const SaveDoc = async () => {
      if (completeData && userId) {
        const jsonString = JSON.stringify(analyzeResult);
        await SaveOne(userId, completeData, jsonString);
      }
    };
    SaveDoc();
  }, [completeData, userId]);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (id) {
      setUserId(id);
    }
  }, [userId]);
  return (
    <OCRUI
      img={img}
      setImg={setImg}
      isProcessing={isProcessing}
      onImageUpload={onImageUpload}
      onImageAnalyzing={onImageAnalyzing}
      onRestImg={onRestImg}
      analyzeResult={analyzeResult}
      setAnalyzeResult={setAnalyzeResult}
      isModal={isModal}
    />
  );
}
