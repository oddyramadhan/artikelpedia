import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/layout";
import Card from "../components/card";

export default function Search() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          "https://638701fbd9b24b1be3e34715.mockapi.io/articles"
        );
        setData(results.data);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //fungsi untuk menampilkan data sesuai dengan inputan
  const searchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const results = await axios(
        "https://638701fbd9b24b1be3e34715.mockapi.io/articles?search=" + name
      );
      setData(results.data);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
    setLoading(false);
  };

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <Layout pageTitle="Search Your Articles">
      <div class="mt- mb-6 flex justify-end">
        <div class="relative max-w-lg">
          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
            type="text"
            placeholder="search by name"
            onChange={(e) => setName(e.target.value)}
          />

          <button
            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            type="button"
            onClick={searchData}
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 mb-4">
          {data.map((plant) => (
            <Card data={plant} key={plant.id} />
          ))}
        </div>
      )}
    </Layout>
  );
}
