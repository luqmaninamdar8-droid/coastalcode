"use client";

import CodingScreenBackground from "@/components/animations/coding-screen/CodingScreenBackground";
import NetworkBackground from "@/components/animations/network-background/NetworkBackground";

export default function TechBackground() {
  return (
    <>
      <NetworkBackground />
      <CodingScreenBackground />
    </>
  );
}
