"use client";
import Github from "./components/Github";

export default function Home() {
  return (
    <>
      <div className="h-95">
        <div className="text-center  ">
          <h1 className="text-4xl font-bold my-10 capitalize">
            malahim Github Finder
          </h1>
        </div>
        <Github />
      </div>
    </>
  );
}
