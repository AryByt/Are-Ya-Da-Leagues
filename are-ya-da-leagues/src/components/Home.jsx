import React from "react";
import { useState } from "react";
export default function Home() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="">
      <p>
        Soccer is a game played by two teams with 11 players each on a field
        with a goal for each team. It’s the most popular team sport on the
        planet, a fast-paced game with few breaks and one simple aim — to score
        a goal. On some continents, the game’s called football; on others, it’s
        called soccer. Other names for the sport include footy, fitba, fútbol,
        calcio, futebol, voetbol, le foot, foci, sakka, and bong da. Everywhere,
        however, soccer, as it’s known in the USA, is called the beautiful game.
        Link to the full article can be found:
        <a
          className=""
          href="https://www.dummies.com/sports/soccer/soccer-for-dummies-cheat-sheet/#:~:text=Soccer%20is%20a%20game%20played,on%20others%2C%20it's%20called%20soccer."
          target="_blank"
          rel="noreferrer"
        >
          Here
        </a>
      </p>
    </div>
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
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="">
        <div>
          <h1 className="lg:text-5xl md:text-3xl sm:text-5xl text-1xl font-black mb-14">
            Welcome to Are Ya Da Football
          </h1>
          <div>
            <button
              className="py-2 px-10 bg-red-500 rounded-full text-xl hover:bg-red-300 flex "
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <p>Link to full article{linkName}</p>
            </button>

            <article>{readMore && extraContent}</article>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react
// I basically used most of the code on this website for the read more function.
