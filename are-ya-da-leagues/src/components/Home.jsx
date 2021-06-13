import React from "react";
import { useState } from "react";
export default function Home() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <p>
      Soccer is a game played by two teams with 11 players each on a field with
      a goal for each team. It’s the most popular team sport on the planet, a
      fast-paced game with few breaks and one simple aim — to score a goal. On
      some continents, the game’s called football; on others, it’s called
      soccer. Other names for the sport include footy, fitba, fútbol, calcio,
      futebol, voetbol, le foot, foci, sakka, and bong da. Everywhere, however,
      soccer, as it’s known in the USA, is called the beautiful game. Link to
      the full article can be found:
      <a
        href="https://www.dummies.com/sports/soccer/soccer-for-dummies-cheat-sheet/#:~:text=Soccer%20is%20a%20game%20played,on%20others%2C%20it's%20called%20soccer."
        target="_blank"
        rel="noreferrer"
      >
        Here
      </a>
    </p>
  );
  const linkName = readMore ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
      />
    </svg>
  );
  return (
    <div className="md:flex justify-between py-20 px10 bg-red-200 mb-auto h-screen">
      <div className=" md:w-1/2 mb-10 md:mb-0">
        <h1 className="md:text-4xl lg:text-6xl sm:text-sm text-3xl text-white mb-6">
          Welcome to Are Ya Da Football
        </h1>
        <p className=" text-2xl mb-6 text-gray-50">
          It's the Home of Football more about leagues teams and how football is
          played{" "}
        </p>
        <button
          className="px-3 py-3 text-lg bg-yellow-400 text-yellow-800 hover:bg-yellow-300 rounded"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <p>read{linkName}</p>
        </button>
        <article className="py-5 md:text-2xl px-1 object-contain text-white ">
          {readMore && extraContent}
        </article>
      </div>

      <div className=" md:w-1/2 mb-10 md:mb-0">
        <img
          className="w-full rounded shadow-2xl "
          src="https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg"
          alt=""
        />
        <a
          className="inline-block px-6 py-3 text-lg bg-blue-400 text-blue-800 hover:to-blue-300 rounded "
          href="https://www.uefa.com/uefachampionsleague/"
          target="_blank"
          rel="noreferrer"
        >
          UEFA
        </a>
      </div>
    </div>
  );
}
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
// I basically used most of the code on this website for the read more function.
