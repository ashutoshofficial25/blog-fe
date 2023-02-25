import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { getAllBlogs } from "../../services/blogServices";
import createIcon from "../../static/create.png";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchAllBlogs = async () => {
    try {
      const { data } = await getAllBlogs();

      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <>
      <div class="flex flex-wrap justify-center mt-10 -mx-4">
        <div class="w-full px-4">
          <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <span class="font-semibold text-lg text-primary mb-2 block">
              Ashutosh Blogs
            </span>
            <h2
              class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              Our Most Recent Blogs
            </h2>
            <p class="text-base text-body-color">
              Here you can read blogs, we are providing tech blogs.You can write
              your own blogs by creating an account with us.
            </p>
          </div>
        </div>
      </div>
      <section className="dark:bg-white text-primary ">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-200"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-200"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Hello this is random text written just for test
              </h3>
              <span className="text-xs dark:text-gray-400">March 8, 2023</span>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit er
                sectionset et just sed diam non prolorem ipsum dolor sit amet,
                consectetur adipiscing elit er sectionset et just sed diam non
                pro
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-200"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-200"
                src="https://source.unsplash.com/random/480x360?1"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Hello this is a random text
                </h3>
                <span className="text-xs dark:text-gray-400">
                  March 8, 2023
                </span>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit er
                  sectionset et just sed diam non prolorem ipsum dolor sit amet,
                  consectetur adipiscing elit er sectionset et just sed diam non
                  pro
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-200"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?2"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 31, 2023
                </span>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit er
                  sectionset et just sed diam non prolorem ipsum dolor sit amet,
                  consectetur adipiscing elit er sectionset et just sed diam non
                  pro
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-200"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?3"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 26, 2023
                </span>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit er
                  sectionset et just sed diam non prolorem ipsum dolor sit amet,
                  consectetur adipiscing elit er sectionset et just sed diam non
                  pro
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-200 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?4"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 26, 2021
                </span>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit er
                  sectionset et just sed diam non prolorem ipsum dolor sit amet,
                  consectetur adipiscing elit er sectionset et just sed diam non
                  pro
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-200 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?5"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 25, 2021
                </span>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit er
                  sectionset et just sed diam non prolorem ipsum dolor sit amet,
                  consectetur adipiscing elit er sectionset et just sed diam non
                  pro
                </p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-200 hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?6"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  In usu laoreet repudiare legendos
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 26, 2021
                </span>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit er
                  sectionset et just sed diam non prolorem ipsum dolor sit amet,
                  consectetur adipiscing elit er sectionset et just sed diam non
                  pro
                </p>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm font-semibold rounded-md hover:bg-indigo-700 dark:bg-indigo-600 dark:text-white"
            >
              Load more blogs...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
