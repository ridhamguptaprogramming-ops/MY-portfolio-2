import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            About Me 😊
                        </Highlighter>
                    </h2>
        </div>  
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans text-base sm:text-lg md:text-xl"
        >
         I am a B.Tech Computer Science Engineering student with a strong interest in software development and backend engineering. I have hands-on experience working with technologies such as JavaScript, TypeScript, Node.js, Express.js, React.js, Next.js, Python, MongoDB, PostgreSQL, Supabase, and Firebase. I enjoy building full-stack applications, developing REST APIs, working with databases, and solving programming problems. I am continuously improving my data structures, algorithms, system design, and software development skills while working on real-world projects. My goal is to become a skilled software/backend engineer and contribute to building scalable and impactful technology solutions.
        </ScrollReveal>
      </div>
    </section>
  );
}