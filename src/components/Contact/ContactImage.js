"use client";
import React from "react";

export default function ContactImage() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <img
        src="/envelope.png"
        alt="Envelope illustration"
        className="w-64 max-w-xs h-auto object-contain animate-bounce-slow"
      />
    </div>
  );
}
