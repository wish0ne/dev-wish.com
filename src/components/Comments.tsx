import React, { createRef, useEffect } from "react";

export default function Comments() {
  const containerRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const utterances = document.createElement("script");
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "wish0ne/wish0ne.github.io",
      "issue-term": "pathname",
      label: "💬",
      theme: "github-light",
      crossOrigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    containerRef.current?.appendChild(utterances);
  }, []);
  return <div id="comment" ref={containerRef} />;
}
