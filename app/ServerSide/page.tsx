import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"],
    weight:["400", "700"]
 });
interface Data {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: Data[] = await response.json();
  console.log("Data>>>>", parsedResponse);

  return (
    <div className="min-h-screen bg-gray-200 p-4 ">
        <h1 className="text-center text-4xl font-bold mt-5">Server side data fetching</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:mt-20">
        {parsedResponse.map((list) => (
          <div
            key={list.id}
            className={`bg-gray-300  rounded-lg shadow-lg p-4 relative transform hover:scale-105 transition duration-500 ${roboto.className}`}
          >
            <ul>
              <li className="rounded py-2 px-3 mb-2">{list.name}</li>
              <li className=" rounded py-2 px-3 mb-2">{list.type}</li>
              <li className=" rounded py-2 px-3 mb-6">{`${list.available}`}</li>
            </ul>
            <span
              className={`absolute bottom-4 right-4 text-sm font-bold  ${
                list.available ? "text-green-700" : "text-red-400"
              }`}
            >
              Read more...
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
