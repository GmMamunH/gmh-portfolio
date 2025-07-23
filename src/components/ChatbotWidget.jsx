"use client"; 
import React, { useEffect } from "react";
  
function Chatbot() {
    useEffect(() => {
    // Load the external chatbot-widget script
    const script = document.createElement("script");
    script.src = "https://chatinit.sgp1.cdn.digitaloceanspaces.com/cdn/widget.min.js"
    script.defer = true;
    script.onload = function () {
      // Initialize the chatbot widget after the script is loaded
        createChatWidget({
          chatbotId: "68809dfa7def7f86b109047c",
          userId: "6810d7d8c4e197b605d8fcfb",
        });
      };
      document.head.appendChild(script);
        // Cleanup the script when the component unmounts
        return () => {
            document.head.removeChild(script);
            document.querySelectorAll('.chat-toggle-btn')?.forEach((el) => el?.remove());
            document.querySelectorAll('#chatinit-widget-root')?.forEach((el) => el?.remove());
        }
   }, []);

    return null;
}

export default Chatbot;