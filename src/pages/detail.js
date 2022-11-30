import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout";
import DetailCard from "../components/detail-card";

export default function Detail() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // mengambil data dari API sesuai dengan id yang ada di route
    const fetchData = async () => {
      try {
        const results = await axios(
          "https://638701fbd9b24b1be3e34715.mockapi.io/articles/" + id
        );
        setData(results.data);
      } catch (err) {}
    };
    fetchData();
  }, [id]);

  return (
    <Layout>
      <div className="min-h-full">
        <DetailCard data={data} />
      </div>
    </Layout>
  );
}
