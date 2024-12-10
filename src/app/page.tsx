"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDF5E6] bg-[length:6px_6px] bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]">
      <main className="flex flex-col items-center justify-center p-8">
        <div className="max-w-2xl mx-auto text-center mt-12">
          <h1 className="text-3xl font-semibold font-serif">aromatic</h1>
          <p className="text-xs font-medium font-sans text-gray-600">a haphazard alchemy</p>
          
          <div className="mt-12 flex flex-col items-center">
           <div className="flex items-center gap-8 mb-8 w-full">
              <div className="text-sm text-left text-gray-600 grow">
                <p className="mb-2 font-bold font-sans">v0.1 // 30 ml</p>
                <p className="text-xs font-sans">EARTH  MUSK  PATCHOULI  <br />BIRCHWOOD  VIOLET  <br />SANDALWOOD  OAKMOSS</p>
              </div>
              <Image
                src="/musk.png"
                alt="musk"
                width={100}
                height={100}
              />
            </div>

            <div 
              className="relative mb-8"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePosition({
                  x: e.clientX - rect.left - 250,
                  y: e.clientY - rect.top - 150,
                });
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              <Image 
                src="/vancouver-21.png"
                alt="Vancouver(21) perfume bottle"
                width={200}
                height={300}
              />
              {isHovering && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: '500px',
                    height: '300px',
                    zIndex: 10
                  }}
                >
                  <Image
                    src="/hiking-21.jpg"
                    alt="hover image"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </div>
              )}
            </div>

            <h2 className="text-md font-sans font-bold mb-4 self-start">Vancouver(21)</h2>
            <p className="text-gray-700 font-sans max-w-lg leading-relaxed text-left">
              A breath of damp earth and rain-kissed leaves, evoking the
              serene stillness of a lush forest after spring rain. It captures the
              delicate interplay of birchwood and violet, enriched by the
              grounding warmth of sandalwood and patchouli. It&apos;s a soft drift
              through green canopies, where fresh blossoms awaken and soft
              musk lingers in the air—a tranquil escape to nature&apos;s embrace.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
