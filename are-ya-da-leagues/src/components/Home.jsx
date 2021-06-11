import React from "react";
import { useState } from "react";
export default function Home() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4 md: mb-10 md:mb-0 text-1xl flex">
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
          className="text-white"
          href="https://www.dummies.com/sports/soccer/soccer-for-dummies-cheat-sheet/#:~:text=Soccer%20is%20a%20game%20played,on%20others%2C%20it's%20called%20soccer."
          target="_blank"
          rel="noreferrer"
        >
          Here
        </a>
      </p>
    </div>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <div>
      <div className="flex justify-between py-20 px-10 bg-red-500 text-pink-200 text-2xl ">
        <div>
          <h1>Welcome to Are Ya Da Football</h1>
          <p>No.....not American Football, the real Football</p>
          <div>
            <button
              className="text-black hover:bg-white border-none"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              <h2>{linkName}</h2>
            </button>
            {readMore && extraContent}
          </div>
        </div>
        <div>
          <img
            className="w-full rounded shadow-2xl"
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
