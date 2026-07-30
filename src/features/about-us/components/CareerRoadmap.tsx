'use client';

import React, { useState, useRef } from 'react';
import { CareerRoadmapData } from '../types';

interface CareerRoadmapProps {
  data: CareerRoadmapData;
}

export const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(data.steps.length - 1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const total = data.steps.length;

  const progressPercentage = total > 1 ? (activeIndex / (total - 1)) * 100 : 100;

  const scrollToNode = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.querySelectorAll('.roadmap-node-item');
      if (children[index]) {
        children[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto select-none px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center space-y-3 flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight text-center">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-body text-gray-300 font-light max-w-2xl text-center leading-relaxed">
          {data.subheading}
        </p>
      </div>

      {/* Horizontal Track Container */}
      <div className="relative pt-4 pb-4">
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar scroll-smooth py-6 px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Main Track Wrapper */}
          <div className="inline-flex min-w-full items-start justify-start sm:justify-center relative px-0">
            {total > 1 && (
              <div
                className="absolute top-[58px] h-[2px] pointer-events-none z-0"
                style={{
                  left: '130px',
                  right: '130px',
                }}
              >
                <div className="absolute inset-0 bg-white/20" />
                <div
                  className="absolute top-0 bottom-0 left-0 bg-white transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            )}

            {/* Render Node Items */}
            {data.steps.map((item, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx <= activeIndex;

              return (
                <div
                  key={idx}
                  onClick={() => scrollToNode(idx)}
                  className="milestone-node-item flex flex-col items-center text-center cursor-pointer group space-y-4 w-[240px] sm:w-[260px] flex-shrink-0 relative z-10 px-4"
                >
                  {/* Step Pill Badge */}
                  <div
                    className={`px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'border border-white bg-white text-black shadow-[0_0_16px_rgba(255,255,255,0.6)] scale-105'
                        : isPassed
                        ? 'border border-white/60 bg-black text-white'
                        : 'border border-white/20 bg-black/90 text-gray-400 group-hover:border-white/40 group-hover:text-gray-200'
                    }`}
                  >
                    STEP {item.step}
                  </div>

                  {/* Node Dot Circle Container */}
                  <div className="relative flex items-center justify-center h-8 w-full">
                    {isActive && (
                      <div className="absolute w-8 h-8 rounded-full bg-white/20 animate-ping pointer-events-none z-10" />
                    )}
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 relative z-20 ${isActive
                          ? 'border-white bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)] scale-125'
                          : isPassed
                            ? 'border-white bg-black'
                            : 'border-white/30 bg-black group-hover:border-white/60'
                        }`}
                    />
                  </div>

                  <div
                    className={`w-full h-140px p-5 mt-2 rounded-2xl border transition-all duration-300 flex flex-col justify-between text-center group-hover:border-white/40 ${
                      isActive
                        ? 'border-white/70 bg-white/[0.07] shadow-2xl shadow-white/10 backdrop-blur-md scale-[1.02]'
                        : isPassed
                        ? 'border-white/20 bg-white/[0.03] hover:bg-white/[0.05]'
                        : 'border-white/10 bg-transparent hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="space-y-2 my-auto">
                      <h3
                        className={`text-sm sm:text-base font-heading font-extrabold leading-snug transition-colors line-clamp-2 ${
                          isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
