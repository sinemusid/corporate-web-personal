'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MilestonesTimelineData } from '../types';

interface MilestonesTimelineProps {
  data: MilestonesTimelineData;
}

export const MilestonesTimeline: React.FC<MilestonesTimelineProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(data.milestones.length - 1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  // ✅ FIX: Simpan referensi handler agar bisa di-remove saat unmount (mencegah memory leak)
  const dragMoveHandlerRef = useRef<((e: MouseEvent) => void) | null>(null);
  const dragUpHandlerRef = useRef<(() => void) | null>(null);

  const total = data.milestones.length;

  // ✅ FIX: Cleanup drag listeners saat komponen unmount — mencegah memory leak
  useEffect(() => {
    return () => {
      if (dragMoveHandlerRef.current) {
        window.removeEventListener('mousemove', dragMoveHandlerRef.current);
      }
      if (dragUpHandlerRef.current) {
        window.removeEventListener('mouseup', dragUpHandlerRef.current);
      }
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress(scrollLeft / maxScroll);
      }
    }
  }, []);

  const scrollToNode = useCallback((index: number) => {
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
  }, []);

  const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (trackRef.current && scrollRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progress = Math.max(0, Math.min(1, clickX / rect.width));
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: progress * maxScroll,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;

    // ✅ FIX: Buat handler baru dan simpan ke ref agar bisa di-remove dengan referensi yang sama
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (isDraggingRef.current && trackRef.current && scrollRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const currentX = moveEvent.clientX - rect.left;
        const progress = Math.max(0, Math.min(1, currentX / rect.width));
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        scrollRef.current.scrollLeft = progress * maxScroll;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      // Bersihkan ref setelah drag selesai
      dragMoveHandlerRef.current = null;
      dragUpHandlerRef.current = null;
    };

    // Simpan referensi handler ke ref sebelum mendaftarkan
    dragMoveHandlerRef.current = handleMouseMove;
    dragUpHandlerRef.current = handleMouseUp;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, []);

  const thumbWidthPercent = 35;
  const thumbLeftPercent = scrollProgress * (100 - thumbWidthPercent);

  return (
    <div className="space-y-8 max-w-6xl mx-auto select-none px-4 sm:px-6 py-6">
      {/* Section Header */}
      <div className="text-center space-y-3 flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 uppercase tracking-tight text-center">
          {data.heading}
        </h2>
        <p className="text-sm sm:text-base font-body text-slate-600 font-normal max-w-2xl text-center leading-relaxed">
          {data.subheading}
        </p>
      </div>

      {/* Horizontal Scroll Track Container */}
      <div className="relative pt-4 pb-2">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
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
                  className="milestone-node-item flex flex-col items-center text-center cursor-pointer group space-y-4 w-[240px] sm:w-[260px] flex-shrink-0 relative z-10 px-3"
                >
                  {/* Year Pill Badge */}
                  <div
                    className={`px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest transition-all duration-300 ${
                      isActive
                        ? 'border border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105'
                        : isPassed
                        ? 'border border-blue-200 bg-blue-50 text-blue-700 font-semibold'
                        : 'border border-slate-200 bg-slate-100 text-slate-600 group-hover:border-blue-300 group-hover:text-blue-600'
                    }`}
                  >
                    {item.year}
                  </div>

                  {/* Node Dot Circle & Connecting Line Container */}
                  <div className="relative flex items-center justify-center h-8 w-full">
                    {/* Background Base Line */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 z-0 pointer-events-none"
                      style={{
                        left: idx === 0 ? '50%' : '-1rem',
                        right: idx === total - 1 ? '50%' : '-1rem',
                      }}
                    />

                    {/* Active Filled Progress Line */}
                    {isPassed && (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-blue-600 z-0 pointer-events-none transition-all duration-500 ease-in-out"
                        style={{
                          left: idx === 0 ? '50%' : '-1rem',
                          right: idx === activeIndex ? '50%' : '-1rem',
                        }}
                      />
                    )}

                    {/* Active Pulsing Glow Ring */}
                    {isActive && (
                      <div className="absolute w-8 h-8 rounded-full bg-blue-500/20 ring-2 ring-blue-400/40 animate-pulse pointer-events-none z-10" />
                    )}

                    {/* Center Node Dot Circle */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 relative z-20 ${
                        isActive
                          ? 'border-blue-600 bg-blue-600 shadow-md shadow-blue-600/50 scale-110'
                          : isPassed
                          ? 'border-blue-600 bg-white'
                          : 'border-slate-300 bg-white group-hover:border-blue-400'
                      }`}
                    />
                  </div>

                  {/* Detail Card Directly Under Node */}
                  <div
                    className={`w-full min-h-[120px] p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-center text-center ${
                      isActive
                        ? 'border-blue-500 bg-white shadow-lg shadow-blue-950/5 scale-[1.02]'
                        : isPassed
                        ? 'border-slate-200 bg-white shadow-xs hover:border-blue-300'
                        : 'border-slate-200/70 bg-slate-50/80 hover:bg-white'
                    }`}
                  >
                    <h3
                      className={`text-sm sm:text-base font-heading font-bold leading-snug transition-colors line-clamp-3 ${
                        isActive ? 'text-blue-600 font-extrabold' : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Blue Scroll Bar Track */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-4 px-4 select-none">
          <div
            ref={trackRef}
            onClick={handleTrackClick}
            className="w-full h-2.5 bg-slate-200/90 hover:bg-slate-300/80 rounded-full relative cursor-pointer transition-colors"
          >
            <div
              onMouseDown={handleMouseDown}
              className="absolute top-0 bottom-0 bg-blue-600 hover:bg-blue-700 rounded-full cursor-grab active:cursor-grabbing transition-all duration-75 shadow-sm"
              style={{
                width: `${thumbWidthPercent}%`,
                left: `${thumbLeftPercent}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
