'use client'

import React, { PropsWithChildren, useState } from "react";
import { Home, Menu } from "lucide-react";
import Link from "next/link";

export default function PageLayout({ children }: PropsWithChildren) {
  const [opened, setOpened] = useState(false)

  return (
    <div className="min-h-screen bg-base-100 flex">
      <div className="block lg:hidden w-0 relative z-50">
        <div className={`opened-sidebar absolute ${opened ? "left-0" : "left-[-256px]"} top-0 transition-all overflow-hidden min-h-screen border-e border-base-300 bg-base-100`}>
          <a className="flex min-h-16 items-center justify-center font-bold text-xl text-primary" href="#">Chatflows</a>
          <div className="px-2">
            <h3 className="mx-3 my-2">Apps</h3>
            <Link href="#" className="px-3 block flex"><span><Home /></span> <span>Dashboard</span></Link>
          </div>
        </div>
      </div>
      <div className="block lg:hidden relative z-40">
        {opened && (
          <div className="transition-all absolute w-screen h-screen bg-[#000000] bg-opacity-30" onClick={() => setOpened(prev => !prev)}>
          </div>
        )}
      </div>
      <div className="hidden lg:block">
        <div className={`${opened ? "opened-sidebar" : "closed-sidebar"} transition-all overflow-hidden min-h-screen border-e border-base-300`}>
          <a className="flex min-h-16 items-center justify-center font-bold text-xl text-primary" href="#">Chatflows</a>
          <div className="px-2">
            <h3 className="mx-3 my-2">Apps</h3>
            <Link href="#" className="px-3 block flex"><span><Home /></span> <span>Dashboard</span></Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div>
          <div className='min-h-16 border-b-2 border-base-200 flex-grow flex justify-between items-center px-2'>
            <div className='h-full'>
              <button className="btn btn-square" onClick={() => setOpened(prev => !prev)}>
                <Menu />
              </button>
            </div>
            <div className='h-full'>
            </div>
          </div>
        </div>
        <div>
          <div className="px-4 py-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
