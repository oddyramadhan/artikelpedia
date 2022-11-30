import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-provider';
import Layout from '../components/layout';

export default function About() {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <div
        className={
          theme.theme === 'light'
            ? 'flex items-center flex-col mb-20 p-10 font-semibold text-lg'
            : 'flex items-center flex-col mb-20 p-10 text-white font-semibold text-lg'
        }
      >
        <p>
          This website is made for learning purpose. I made this website using
          ReactJS, TailwindCSS, and React Router.
        </p>
        <p>Software Engineering Practice Final Project by group 16.</p>
        <p>Made by :</p>
        <ul className="flex flex-col items-center pt-10">
          <li>
            <a href="https://instagram.com/ahmad_rafly_">Ahmad Rafly Pradana</a>
          </li>
          <li>
            <a href="https://instagram.com/imdaffa21">Ilham Muhammad Daffa</a>
          </li>
          <li>
            <a href="https://instagram.com/oddyramadhanp">
              Oddy Ramadhan Putra Winata
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
