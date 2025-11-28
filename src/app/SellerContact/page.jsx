"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactSeller() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Chat State
  const [chatMessages, setChatMessages] = useState([
    { sender: "seller", text: "Hi! How can I help you today?" },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;

    setChatMessages((prev) => [...prev, { sender: "user", text: chatInput }]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        {
          sender: "seller",
          text: "Thanks! I will update you with more details soon.",
        },
      ]);
    }, 1300);
  };

  const handleChatKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-white underline  p-2 rounded shadow bg-indigo-600 font-semibold"
        >
          ← Back
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mt-4 text-gray-900">Contact Seller</h1>
          <p className="text-gray-700 mt-2 max-w-xl mx-auto">
            Send a message or chat instantly with the seller.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-200">
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-3xl font-semibold text-green-700 mb-4">
                  Message Sent ✔
                </h3>
                <p className="text-gray-800 text-lg">
                  Thanks! The seller will contact you soon.
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-block text-indigo-700 underline font-semibold hover:text-indigo-900"
                >
                  Continue Browsing
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-black font-semibold mb-1">
                    Your Name <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-black rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-black font-semibold mb-1">
                    Email <span className="text-black">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-black rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-black font-semibold mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full border border-black rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-black font-semibold mb-1">
                    Message <span className="text-black">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hello, I'm interested in your listing..."
                    className="w-full border border-black rounded-md px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-indigo-700 text-white w-full py-3 rounded-md font-bold hover:bg-indigo-800 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Live Chat Box */}
          <div className="bg-white rounded-2xl shadow-lg border border-indigo-200 flex flex-col h-[520px] md:h-auto sticky top-20">
            {/* Header */}
            <div className="bg-indigo-900 px-6 py-4 rounded-t-2xl flex items-center gap-3 text-white select-none">
              <div className="w-12 h-12 bg-indigo-300 text-indigo-900 rounded-full flex items-center justify-center font-bold text-xl">
                S
              </div>
              <div>
                <h4 className="font-bold text-lg">Chat with Seller</h4>
                <p className="text-indigo-300 text-sm">Online</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-6 overflow-y-auto bg-indigo-50 space-y-4 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[75%] px-5 py-3 rounded-xl text-sm break-words ${
                    msg.sender === "user"
                      ? "bg-indigo-700 text-white ml-auto rounded-br-none"
                      : "bg-white text-indigo-900 shadow rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-indigo-200 bg-white flex gap-3 rounded-b-2xl">
              <textarea
                rows={1}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={handleChatKey}
                placeholder="Type a message..."
                className="flex-grow border border-indigo-300 rounded-md px-4 py-3 resize-none text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              />
              <button
                onClick={sendMessage}
                className="bg-indigo-700 text-white px-5 rounded-md font-semibold hover:bg-indigo-800 transition"
                aria-label="Send chat message"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
