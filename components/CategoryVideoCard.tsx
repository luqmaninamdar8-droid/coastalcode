"use client";

import { useEffect, useRef } from "react";
import type { WorkCategory } from "@/lib/categories";

interface CategoryVideoCardProps {
  category: WorkCategory;
}

export default function CategoryVideoCard({ category }: CategoryVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="category-card category-card--video reveal">
      <video
        ref={videoRef}
        className="category-card-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={category.video} type="video/mp4" />
      </video>
      <div className="category-card-content">
        <span className="category-count">{category.count}</span>
        <h3>{category.title}</h3>
        <p>{category.text}</p>
      </div>
    </article>
  );
}
