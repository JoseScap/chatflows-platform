'use client'

import React, { PropsWithChildren, useState } from "react";
import { Menu } from "lucide-react";

export default function PageLayout({ children }: PropsWithChildren) {
  const [opened, setOpened] = useState(true)

  return (
    <div className="min-h-screen bg-base-100 flex">
      <div>
        <div className={`${opened ? "opened-sidebar" : "closed-sidebar"} transition-all overflow-hidden min-h-screen border-e border-base-300`}>
          <a className="flex min-h-16 items-center justify-center font-bold text-xl text-primary" href="#">Chatflows</a>
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
              <button className="btn btn-square" onClick={() => setOpened(prev => !prev)}>
                <Menu />
              </button>
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
