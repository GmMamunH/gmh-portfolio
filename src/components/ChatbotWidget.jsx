// components/ChatbotWidget.js
"use client";
import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://chatinit.sgp1.cdn.digitaloceanspaces.com/cdn/widget.min.js";
    script.defer = true;
    script.onload = function () {
      if (typeof window !== "undefined" && window.createChatWidget) {
        window.createChatWidget({
          chatbotId: "682245599e96b2026c340748",
          userId: "6810d7d8c4e197b605d8fcfb",
          appearance: {
            name: "Assistant",
            primaryColor: "#7c8289",
            welcomeMsg: "Welcome!",
          },
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return null; // No visual output needed
}
