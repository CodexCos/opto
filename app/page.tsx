"use client"

import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-screen">
        <div className="w-full h-full">
          <Image
            src="/images/img1.jpg"
            alt="Image 1"
            width={500}
            height={300}
            quality={50}
            priority={true}
            className="object-cover w-full h-full"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/img2.jpg"
            alt="Image 2"
            width={500}
            height={300}
            quality={50}
            priority={true}
            className="object-cover w-full h-full"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/img3.jpg"
            alt="Image 3"
            width={500}
            height={300}
            quality={50}
            priority={true}
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/img4.jpg"
            alt="Image 4"
            width={500}
            height={300}
            quality={50}
            priority={true}
            className="object-cover w-full h-full"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/img5.jpg"
            alt="Image 5"
            width={500}
            height={300}
            quality={50}
            priority={true}
            className="object-cover w-full h-full"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        <div className="w-full h-auto">
          <Image
            src="/images/img6.jpg"
            alt="Image 6"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src="/images/img7.jpg"
            alt="Image 7"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src="/images/img8.jpg"
            alt="Image 8"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src="/images/img9.jpg"
            alt="Image 9"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src="/images/img10.jpg"
            alt="Image 10"
            width={500}
            height={300}
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder='blur'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
