"use client";
import React from "react";

export default function ContactForm() {
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-neutral-100 dark:bg-neutral-900 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-dark dark:text-white">
        Contact Us
      </h2>
      <form
        action="https://formspree.io/f/mzzekldq"
        method="POST"
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block mb-1 font-medium text-dark dark:text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 font-medium text-dark dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-dark dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-dark dark:text-white">
            Reason for Contacting
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Let us know how we can help..."
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
