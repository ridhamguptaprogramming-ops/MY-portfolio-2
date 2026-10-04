import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xrbwdkqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "New Contact Message from Portfolio",
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully! ✅");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-16 pb-32 md:pt-24 md:pb-48"
    >
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-md rounded-lg bg-gray-50 px-8 py-6 shadow-lg">
          
          <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
            Contact Me
          </h2>

          <p className="mb-6 text-center text-sm text-gray-600">
            Send me a message at{" "}
            <a
              href="mailto:ridhamgupta020@gmail.com"
              className="font-medium text-blue-600 hover:underline"
            >
              ridhamgupta020@gmail.com
            </a>
          </p>

          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="mb-4">
              <label
                className="mb-1 block text-gray-800"
                htmlFor="name"
              >
                Your Name
              </label>

              <input
                className="w-full rounded-lg bg-gray-200 px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className="mb-1 block text-gray-800"
                htmlFor="email"
              >
                Your Email
              </label>

              <input
                className="w-full rounded-lg bg-gray-200 px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                className="mb-1 block text-gray-800"
                htmlFor="message"
              >
                Your Message
              </label>

              <textarea
                className="w-full rounded-lg bg-gray-200 px-4 py-2 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                rows="4"
                placeholder="Enter your message"
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full rounded-lg bg-yellow-300 px-4 py-2 text-gray-800 transition duration-300 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              disabled={status === "Sending..."}
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status && (
              <p className="mt-4 text-center text-sm font-medium text-gray-700">
                {status}
              </p>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}