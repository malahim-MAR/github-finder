"use client";
import Github from "./components/Github";

export default function Home() {
  return (
    <>
      <div className="h-95">
        <main className="flex-1">
          {" "}
          {/* This is the key part */}
          <Github />
        </main>
      </div>
    </>
  );
}
