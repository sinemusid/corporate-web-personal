'use client';

import React, { useState, useRef } from 'react';
import { MilestonesTimelineData } from '../types';

interface MilestonesTimelineProps {
  data: MilestonesTimelineData;
}

export const MilestonesTimeline: React.FC<MilestonesTimelineProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(data.milestones.length - 1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const total = data.milestones.length;

  const scrollToNode = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.querySelectorAll('.milestone-node-item');
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

      {/* Horizontal Scroll Track Container */}
      <div className="relative pt-4 pb-4">
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar scroll-smooth py-6 px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="inline-flex min-w-full items-start justify-start sm:justify-center relative px-0">
            {data.milestones.map((item, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx <= activeIndex;

              return (
                <div
                  key={item.id || idx}
                  onClick={() => scrollToNode(idx)}
                  className="milestone-node-item flex flex-col items-center text-center cursor-pointer group space-y-4 w-[240px] sm:w-[260px] flex-shrink-0 relative z-10 px-4"
                >
                  {/* Year Pill Badge */}
                  <div
                    className={`px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'border border-white bg-white text-black shadow-[0_0_16px_rgba(255,255,255,0.6)] scale-105'
                        : isPassed
                        ? 'border border-white/60 bg-black text-white'
                        : 'border border-white/20 bg-black/90 text-gray-400 group-hover:border-white/40 group-hover:text-gray-200'
                    }`}
                  >
                    {item.year}
                  </div>

                  {/* Node Dot Circle & Connecting Line Container */}
                  <div className="relative flex items-center justify-center h-8 w-full">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-white/20 z-0 pointer-events-none"
                      style={{
                        left: idx === 0 ? '50%' : '-1rem',
                        right: idx === total - 1 ? '50%' : '-1rem',
                      }}
                    />

                    {/* Smooth Active Progress Line Fill */}
                    {isPassed && (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-white z-0 pointer-events-none transition-all duration-500 ease-in-out"
                        style={{
                          left: idx === 0 ? '50%' : '-1rem',
                          right: idx === activeIndex ? '50%' : '-1rem',
                        }}
                      />
                    )}

                    {/* Outer Pulsing Glow Circle for Active Node */}
                    {isActive && (
                      <div className="absolute w-8 h-8 rounded-full bg-white/30 animate-ping pointer-events-none z-10" />
                    )}

                    {/* Center Node Dot Circle */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 relative z-20 ${
                        isActive
                          ? 'border-white bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)] scale-125'
                          : isPassed
                          ? 'border-white bg-black'
                          : 'border-white/30 bg-black group-hover:border-white/60'
                      }`}
                    />
                  </div>

                  {/* Detail Card Directly Under Node */}
                  <div
                    className={`w-full p-5 mt-2 rounded-2xl border transition-all duration-300 flex flex-col justify-start text-center ${
                      isActive
                        ? 'border-white/60 bg-white/[0.06] shadow-xl shadow-white/5 backdrop-blur-md scale-[1.02]'
                        : 'border-white/15 bg-transparent hover:border-white/35 hover:bg-white/[0.02]'
                    }`}
                  >
                    <h3
                      className={`text-sm sm:text-base font-heading font-extrabold leading-snug transition-colors ${
                        isActive ? 'text-white' : 'text-gray-200'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs font-body text-gray-400 font-light leading-relaxed mt-2">
                      {item.description}
                    </p>
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
