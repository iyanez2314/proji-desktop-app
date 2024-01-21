import React from "react";

export default function ProjectStat({ progress }: { progress: number }) {
  const radius = 35; // Radius of the circle
  const stroke = 5; // Stroke width of the circle
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex justify-center items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="gray"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute inset-0 flex justify-center items-center">
        <span className="text-sm font-light">{progress}%</span>
      </div>
    </div>
  );
}
