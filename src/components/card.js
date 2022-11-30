import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  function dateFormat(date) {
    return new Date(date).toLocaleDateString("id-ID");
  }

  return (
    <Link
      to={`/detail/${data.id}`}
      className="relative block overflow-hidden rounded-lg border
      border-gray-100 p-8 bg-white"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {data.name}
          </p>
        </div>

        <div className="ml-3 hidden flex-shrink-0 sm:block">
          <img
            alt={data.name}
            src={data.image}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>
      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{data.articles}</p>
      </div>
      <dl className="mt-6 flex">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">
            {dateFormat(data.createdAt)}
          </dd>
        </div>
      </dl>
    </Link>
  );
}
