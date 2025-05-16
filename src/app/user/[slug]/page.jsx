"use client";

import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState("");
  const [githubDetail, setGithubDetail] = useState(null);
  const userData = useSelector((state) => state.username.GithubUser);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  useEffect(() => {
    if (!user) return;

    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setGithubDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href={"/"}>
          <button className="mb-8 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            ← Search Another User
          </button>
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">GitHub User Details</h1>
          <p className="text-gray-400">Current Redux User: {user}</p>
        </div>

        {githubDetail && (
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-6">
              <img
                src={githubDetail.avatar_url}
                alt={githubDetail.login}
                className="w-32 h-32 rounded-full border-4 border-gray-700"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{githubDetail.name}</h2>
                <p className="text-gray-300 mb-4">{githubDetail.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-400">Username</p>
                    <p className="font-mono">{githubDetail.login}</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-400">Followers</p>
                    <p>{githubDetail.followers}</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-400">Following</p>
                    <p>{githubDetail.following}</p>
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <p className="text-gray-400">Public Repos</p>
                    <p>{githubDetail.public_repos}</p>
                  </div>
                </div>

                {githubDetail.blog && (
                  <a
                    href={githubDetail.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;