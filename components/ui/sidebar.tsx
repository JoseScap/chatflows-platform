import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="h-screen p-4 shadow-lg">
      <ul className="menu">
        <li>
          <h1 className="font-bold text-lg">
            Chatflows
          </h1>
        </li>
        <div className="divider">Menu</div>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/flows">Flows</Link>
        </li>
      </ul>
    </div>
  );
}
