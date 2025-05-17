"use client";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { UserValue } from "@/app/redux/reducer/usernameSlice";

const Github = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const githubUser = useSelector((state) => state.username.GithubUser);

  const getValue = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      if (username !== githubUser) {
        dispatch(UserValue(username));
      }
      router.push(`/user/${username}`);
    }
  };

  return (
    <div className="flex-1"> {/* Changed from min-h-screen */}
      <div className="w-full max-w-2xl mx-auto p-4">
        <form onSubmit={getValue} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-center text-white mb-8">
              GitHub Profile Finder
            </h1>
            
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter GitHub username"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all outline-none"
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-colors duration-200 md:w-auto w-full"
              >
                <svg
                  aria-label="GitHub logo"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
                Search Profile
              </button>
            </div>
            
            {githubUser && (
              <p className="text-gray-400 text-center text-sm mt-2">
                Current search: <span className="text-blue-400">{githubUser}</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Github;