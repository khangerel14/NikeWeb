"use client";

import { Cart, Converse, Favourite, Jordan, Nike } from "@/images";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const openOrNot = () => {
    setOpen(!open);
    console.log(open);
  };
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex items-center h-9 bg-gray-100">
        <div className="flex justify-between items-center w-[1344px] mx-auto">
          <div className="flex items-center gap-6">
            <button onClick={() => router.push("/jordan")}>
              <Jordan />
            </button>
            <button onClick={() => router.push("/converse")}>
              <Converse />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button
              className="hover:text-gray-600 border-r pr-2 border-black"
              onClick={() => router.push("/retail")}
            >
              Find a Store
            </button>
            <button
              className="hover:text-gray-600 border-r pr-2 border-black"
              onClick={() => router.push("/help")}
            >
              Help
            </button>
            <button
              className="hover:text-gray-600 border-r pr-2 border-black"
              onClick={() => router.push("/membership")}
            >
              Join Us
            </button>
            <button
              className="hover:text-gray-600"
              onClick={() => router.push("/signin")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center w-[1344px] mx-auto h-14">
          <div>
            <button onClick={() => router.push("/")}>
              <Nike />
            </button>
          </div>
          <div className="flex gap-6 text-md font-semibold items-center pl-44">
            <button onClick={() => router.push("/new")}>New</button>
            <button onClick={() => router.push("/men")}>Men</button>
            <button onClick={() => router.push("/women")}>Women</button>
            <button onClick={() => router.push("/kids")}>Kids</button>
            <button onClick={() => router.push("/jordan")}>Jordan</button>
            <button onClick={() => router.push("/sales")}>Sale</button>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              // value={}
              className="p-1 px-2 w-40 rounded-full bg-gray-100 outline-none"
              placeholder="Search..."
            />
            <button onClick={() => router.push("/favourites")}>
              <Favourite />
            </button>
            <button onClick={() => router.push("/cart")}>
              <Cart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
