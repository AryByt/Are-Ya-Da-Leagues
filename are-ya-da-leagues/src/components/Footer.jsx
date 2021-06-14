import React from "react";

export default function Footer() {
  return (
    <div className=" bg-black text-white p-1 mt-auto flex justify-between items-center font-mono">
      <div>
        <img
          className="h-16 rounded-full "
          src="https://pbs.twimg.com/profile_images/913790926950096896/xt2OyAdt.jpg"
          alt=""
        />
        <a href="https://airtable.com/" target="_blank" rel="noreferrer">
          Airtable
        </a>
      </div>
      <h1> ©Arya Bayati</h1>
      <div>
        <img
          className="h-16 rounded-full"
          src=" https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt=""
        />
        <a href="https://github.com/AryByt" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}
