"use client";

import { useRef } from "react";
import type { WorkCategory } from "@/lib/categories";

interface CategoryVideoCardProps {
  category: WorkCategory;
}

export default function CategoryVideoCard({ category }: CategoryVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  function playVideo() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    void video.play().catch(() => {});
  }

  function pauseVideo() {
    videoRef.current?.pause();
  }

  function handleMouseLeave() {
    if (window.matchMedia("(hover: hover)").matches) {
      pauseVideo();
    }
  }

  return (
    <article
      className="category-card category-card--video reveal"
      onMouseEnter={playVideo}
      onMouseLeave={handleMouseLeave}
      onTouchStart={playVideo}
    >
      <video
        ref={videoRef}
        className="category-card-video"
        src={category.video}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="category-card-content">
        <span className="category-count">{category.count}</span>
        <h3>{category.title}</h3>
        <p>{category.text}</p>
        <span className="category-card-hint">Hover to play video</span>
      </div>
    </article>
  );
}
