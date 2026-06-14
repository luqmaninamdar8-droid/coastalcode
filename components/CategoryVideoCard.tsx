"use client";

import { useRef, useState } from "react";
import type { WorkCategory } from "@/lib/categories";

interface CategoryVideoCardProps {
  category: WorkCategory;
}

export default function CategoryVideoCard({ category }: CategoryVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function playVideo() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    void video.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }

  function pauseVideo() {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }

  function handleMouseLeave() {
    if (window.matchMedia("(hover: hover)").matches) {
      pauseVideo();
    }
  }

  return (
    <article
      className={`category-card category-card--video reveal${playing ? " is-playing" : ""}`}
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
        preload="metadata"
        aria-hidden="true"
      />
      <div className="category-card-content">
        <span className="category-count">{category.count}</span>
        <h3>{category.title}</h3>
        <p>{category.text}</p>
        {!playing && <span className="category-card-hint">Hover to play video</span>}
      </div>
    </article>
  );
}
