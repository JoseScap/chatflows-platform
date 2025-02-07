import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string
}

export default function PageWrapper({ children, title }: Props) {
  return (
    <div className="px-6 py-8">
      <h2 className="font-bold text-lg mb-8">{title}</h2>
      {children}
    </div>
  );
}
