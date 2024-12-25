"use client";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"],
    weight:["400", "700"]
 });
import React, { useEffect, useState } from "react";

interface Rating {
  rate: number;
  count: number;
}

interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const ClientSide = () => {
  const [Data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Data[] = await response.json();
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className={`${roboto.className}`}>
            <h1 className="text-center text-4xl font-bold mb-5">Client side data fetching</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Data.map((list) => (
            <div
              key={list.id}
              className="bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300"
            > 
              <div className="flex justify-center h-40 w-full">
                 
                <Image
                  src={list.image}
                  alt={list.title}
                  width={150}
                  height={150}
                  className="h-full w-auto object-contain"
                />
              </div>
              <ul className="text-start space-y-2">
                <li className="text-lg font-bold text-black">{list.title}</li>
                <li className="text-lg font-semibold text-gray-500">
                  category: {list.category}
                </li>
                <div className="flex justify-between">
                  <li className="text-lg font-bold text-green-500">
                    ${list.price}
                  </li>
                  <li className="text-bold text-lg text-gray-500 flex text-right">
                    {list.rating.count}{" "}
                    <span className="font-thin text-lg">
                      {" "}
                      ({list.rating.rate}){" "}
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default ClientSide;
