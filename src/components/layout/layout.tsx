import React from 'react';
import { useRouter } from 'next/router';
import cc from 'classcat';

export const Layout = ({ children }) => {
  const router = useRouter();
  const dark = router.query.dark;
  return (
    <>
      <div className={cc([{
        'bg-[#2F3437] bg-opacity-0' :dark !== undefined,
        'bg-white bg-opacity-0':dark === undefined
      },'w-screen h-screen flex justify-center items-center content-center'])}>
        {children}
      </div>
    </>
  );
};