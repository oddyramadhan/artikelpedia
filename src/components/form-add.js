import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert';

export default function FormAdd() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    title: '',
    articles: '',
  });

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('https://638701fbd9b24b1be3e34715.mockapi.io/articles', data)
      .then((res) => {
        axios
          .post(
            'https://638701fbd9b24b1be3e34715.mockapi.io/articles/' +
              res.data.id +
              '/likes',
            { articleId: res.data.id }
          )
          .then((res) => {
            Alert('Success', 'Article has been added', 'success');
            setData({
              name: '',
              title: '',
              articles: '',
            });
            setTimeout(() => {
              navigate('/');
            }, 1500);
          })
          .catch((err) => Alert('Error', 'Something went wrong', 'error'));
      })
      .catch((err) => Alert('Error', 'Something went wrong', 'error'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex justify-between">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={changeData}
          value={data.name}
          placeholder="Example: John Doe"
          className="border border-black w-9/12 p-2 rounded-sm"
        />
      </div>
      <div className="mb-4 flex justify-between">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={changeData}
          value={data.title}
          placeholder="Example: How to build a website"
          className="border border-black w-9/12 p-2 rounded-sm"
        />
      </div>
      <div className="mb-4 flex justify-between">
        <label htmlFor="article">Article</label>
        <textarea
          id="articles"
          name="articles"
          onChange={changeData}
          value={data.articles}
          className="border border-black w-9/12 p-2 rounded-sm"
          placeholder="Example: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
          rows={5}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="Submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
