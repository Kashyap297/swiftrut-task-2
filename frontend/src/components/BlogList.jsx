// BlogList.js

import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const BlogList = () => {
  const { posts, loading } = useContext(BlogContext);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div className="container mx-auto mt-24 py-10 px-6">
        <div className="relative p-4">
          <div className="max-w-3xl mx-auto">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
                >
                  <div>
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm"
                    >
                      Election
                    </a>
                    <h1 className="text-gray-900 font-bold text-4xl">
                      {post.title}
                    </h1>
                    <div className="py-5 text-sm font-regular text-gray-900 flex">
                      <span className="mr-3 flex flex-row items-center">
                        <span className="ml-1">6 mins ago</span>
                      </span>

                      <a
                        href="#"
                        className="flex flex-row items-center hover:text-indigo-600  mr-3"
                      >
                        <svg
                          className="text-indigo-600"
                          fill="currentColor"
                          height="16px"
                          aria-hidden="true"
                          role="img"
                          focusable="false"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          ></path>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>
                        <span className="ml-1">AliSher Azimi</span>
                      </a>

                      <a
                        href="#"
                        className="flex flex-row items-center hover:text-indigo-600"
                      >
                        <svg
                          className="text-indigo-600"
                          fill="currentColor"
                          height="16px"
                          aria-hidden="true"
                          role="img"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 18"
                        >
                          <path d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"></path>
                        </svg>
                        <span className="ml-1">activewear</span>
                      </a>
                    </div>
                    <p className="text-base leading-8 my-5">
                      {post.content
                        ? post.content.substring(0, 300)
                        : "No content available"}
                      ...
                    </p>
                    <Link
                      to={`/posts/${post._id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                  <hr className="my-6 border-gray-300" />
                </div>
              ))
            ) : (
              <div className="text-4xl font-bold text-center text-gray-800 mb-8">
                No posts available.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
