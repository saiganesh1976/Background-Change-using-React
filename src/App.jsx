import React, { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");
  const [fontColor, setFontColor] = useState("white");

  const change = (background, font) => {
    setBgColor(background);
    setFontColor(font);
  };

  return (
    <div
      className="w-full h-screen text-center"
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      <h1 className="text-3xl font-bold p-20">Hello There!!</h1>
      <div className="text-justify mx-20">
        <h2 className="text-center text-xl mb-7"><b>Topic:</b> Background and Foreground Change using React </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil
        libero aliquid fuga consequatur quae iste repellat dolorem minus fugiat
        officiis nam, repudiandae beatae eveniet. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Fugit aliquid quam excepturi delectus at
        doloremque cupiditate, sed aliquam! Cupiditate eius quidem sunt
        recusandae culpa facere veritatis, ex repellat delectus dolores amet
        impedit labore nesciunt et. Eligendi mollitia natus reiciendis
        voluptates, explicabo molestiae tempora similique cum rem dolores, ad
        delectus enim!
      </div>
      <div className="fixed flex flex-wrap justify-center inset-x-2 px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-5 bg-white p-4 border-4 rounded-2xl">
          <button
            className="text-white px-5 py-2 rounded-xl bg-black"
            onClick={() => change("black", "white")}
          >
            Black
          </button>
          <button
            className="text-black px-5 py-2 rounded-xl bg-slate-100"
            onClick={() => change("white", "black")}
          >
            White
          </button>
          <button
            className="text-white px-5 py-2 rounded-xl bg-green-700"
            onClick={() => change("green", "white")}
          >
            Green
          </button>
          <button
            className="text-white px-5 py-2 rounded-xl bg-blue-700"
            onClick={() => change("blue", "white")}
          >
            Blue
          </button>
          <button
            className="text-white px-5 py-2 rounded-xl bg-pink-600"
            onClick={() => change("pink", "black")}
          >
            Pink
          </button>
          <button
            className="text-white px-5 py-2 rounded-xl bg-orange-400"
            onClick={() => change("orange", "white")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
