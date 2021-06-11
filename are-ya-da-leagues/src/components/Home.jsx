import React from "react";

export default function Home() {
  return (
    <div className="flex justify-between py-20 px-10 bg-red-500 text-pink-200 ">
      <div>
        <h1>Welcome to Are Ya Da Football</h1>
        <p>No.....not American Footbal, the real Football</p>
      </div>
      <div>
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
          alt="logo"
        />
      </div>
    </div>
  );
}
