import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DetailCard({ data }) {
  const [like, setLike] = useState();

  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      try {
        const results = await axios(
          `https://638701fbd9b24b1be3e34715.mockapi.io/articles/${data.id}/likes`
        );
        setLike(results.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [data.id]);

  const handleLike = async () => {
    try {
      const results = await axios.put(
        `https://638701fbd9b24b1be3e34715.mockapi.io/articles/${data.id}/likes/${like.id}`,
        {
          like: like.like + 1,
        }
      );
      setLike(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
      <div className="flex items-start">
        <div>
          <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <img
              src={data.image}
              alt={data.name}
              className="h-18 w-18 rounded-full object-cover shadow-sm"
            />
          </div>
          <p className="pt-2 text-xs font-medium">{data.name}</p>
        </div>
        <div className="sm:ml-8">
          <h3 className="mt-2 text-lg font-medium sm:text-xl">{data.title}</h3>

          <p className="mt-1 text-sm text-gray-700">{data.articles}</p>
          <p className="mt-1 text-sm text-gray-700">{data.articles}</p>
          <p className="mt-1 text-sm text-gray-700">{data.articles}</p>
          <p className="mt-1 text-sm text-gray-700">{data.articles}</p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center text-gray-500">
              <div className="cursor-pointer" onClick={handleLike}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <p className="ml-2 text-sm font-medium">{like?.like} Likes</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
