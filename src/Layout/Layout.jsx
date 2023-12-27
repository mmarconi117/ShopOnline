import * as React from "react";
import {Sidebar, Header} from "../components";
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="bg-zinc-100">
      <div className="gap-0 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar />
        <div className="flex flex-col items-stretch w-[81%] ml-0 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}