"use client";
import { useState } from "react";
import "./App.css";
import Tiptap from "./tiptap/TipTap";

function App() {
  const [post, setPost] = useState();
  const onChange = (content) => {
    console.log(content);
    setPost(content);
  };
  return (
    <div className="min-h-screen bg-background text-foreground ">
      <Tiptap content={post} onChange={onChange} />
    </div>
  );
}

export default App;
