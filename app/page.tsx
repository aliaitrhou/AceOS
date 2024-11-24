"use client";

import React, { useState } from "react";
import Chat from "./components/chat";

export default function Home() {
  const [renderChat, setRenderChat] = useState(true);
  return (
    <main className="h-[100dvh] text-white px-8 ">
      <section
        className={`h-[100dvh] flex ${renderChat ? "mb-8 p-20" : "justify-center items-center"}`}
      >
        <Chat setRenderChat={setRenderChat} />
      </section>
    </main>
  );
}
