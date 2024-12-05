"use client"

import Image from 'next/image';
import React from 'react';

function Page() {

  const imageNames = Array.from({ length: 20 }, (_, index) => `img${index + 1}.jpg`);

  return (
    <div className="p-4 ">
      {imageNames.map((imageName, index) => (
        <div key={index}>
          <Image 
            src={`/images/${imageName}`} 
            alt={`Image ${index + 1}`} 
            width={300}
            height={200} 
            loading='lazy'
          />
        </div>
      ))}
    </div>
  );
}

export default Page;
