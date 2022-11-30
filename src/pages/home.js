import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/card';
import Layout from '../components/layout';
import AddArticle from './add-article';

export default function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          'https://638701fbd9b24b1be3e34715.mockapi.io/articles'
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

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <Layout pageTitle="Home">
      {showModal && <AddArticle setShowModal={setShowModal} />}
      <div className="flex justify-end py-4">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Add New Article
        </button>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 mb-4">
          {data.map((articles) => (
            <Card data={articles} key={articles.id} />
          ))}
        </div>
      )}
    </Layout>
  );
}
