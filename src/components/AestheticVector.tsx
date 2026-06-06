import React from "react";

interface AestheticVectorProps {
  type: "dashboard" | "mesh" | "data-flow" | "architecture" | "organic";
  color: string;
}

export const AestheticVector: React.FC<AestheticVectorProps> = ({ type, color }) => {
  const primaryColor = color || "#D4AF37";

  switch (type) {
    case "dashboard":
      return (
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          id={`svg-dashboard-${color.replace("#", "")}`}
        >
          <defs>
            <linearGradient id={`grad-dash-${color.replace("#", "")}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.15" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Main card background */}
          <rect x="10" y="10" width="180" height="100" rx="4" fill={`url(#grad-dash-${color.replace("#", "")})`} stroke={primaryColor} strokeWidth="1" strokeDasharray="1 1" />
          
          {/* Header row */}
          <line x1="10" y1="28" x2="190" y2="28" stroke={primaryColor} strokeWidth="0.75" />
          <circle cx="20" cy="19" r="3" fill={primaryColor} />
          <line x1="30" y1="19" x2="60" y2="19" stroke={primaryColor} strokeWidth="1" />
          <rect x="160" y="16" width="20" height="6" rx="1.5" fill="none" stroke={primaryColor} strokeWidth="0.75" />

          {/* Left panel */}
          <line x1="50" y1="28" x2="50" y2="110" stroke={primaryColor} strokeWidth="0.5" strokeDasharray="3 3"/>
          <line x1="15" y1="40" x2="45" y2="40" stroke={primaryColor} strokeWidth="0.5" />
          <line x1="15" y1="52" x2="40" y2="52" stroke={primaryColor} strokeWidth="0.5" />
          <line x1="15" y1="64" x2="43" y2="64" stroke={primaryColor} strokeWidth="0.5" />

          {/* Grid Cards in main body */}
          <rect x="60" y="38" width="55" height="30" rx="2" fill="none" stroke={primaryColor} strokeWidth="0.75" />
          <line x1="68" y1="48" x2="100" y2="48" stroke={primaryColor} strokeWidth="1" />
          <line x1="68" y1="56" x2="90" y2="56" stroke={primaryColor} strokeWidth="0.5" />

          <rect x="125" y="38" width="55" height="30" rx="2" fill="none" stroke={primaryColor} strokeWidth="0.75" />
          <circle cx="140" cy="53" r="8" fill="none" stroke={primaryColor} strokeWidth="1" />
          <line x1="155" y1="48" x2="175" y2="48" stroke={primaryColor} strokeWidth="0.5" />
          <line x1="155" y1="56" x2="170" y2="56" stroke={primaryColor} strokeWidth="0.5" />

          {/* Bottom Graph Area */}
          <path
            d="M 60 100 Q 80 80, 100 90 T 140 75 T 180 85"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1.5"
          />
          <circle cx="100" cy="90" r="2" fill={primaryColor} />
          <circle cx="140" cy="75" r="2" fill={primaryColor} />
          <circle cx="180" cy="85" r="2" fill={primaryColor} />
        </svg>
      );

    case "data-flow":
      return (
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          id={`svg-dataflow-${color.replace("#", "")}`}
        >
          {/* Grid lines in background */}
          <line x1="10" y1="10" x2="10" y2="110" stroke={primaryColor} strokeWidth="0.2" strokeDasharray="2 2" />
          <line x1="190" y1="10" x2="190" y2="110" stroke={primaryColor} strokeWidth="0.2" strokeDasharray="2 2" />
          <line x1="10" y1="60" x2="190" y2="60" stroke={primaryColor} strokeWidth="0.2" strokeDasharray="2 2" />

          {/* Node columns */}
          {/* Left Nodes */}
          <circle cx="30" cy="30" r="4" fill="none" stroke={primaryColor} strokeWidth="1" />
          <circle cx="30" cy="60" r="5" fill="none" stroke={primaryColor} strokeWidth="1.5" />
          <circle cx="30" cy="90" r="4" fill="none" stroke={primaryColor} strokeWidth="1" />

          {/* Middle Node */}
          <circle cx="100" cy="45" r="6" fill="none" stroke={primaryColor} strokeWidth="1.5" />
          <circle cx="100" cy="75" r="6" fill="none" stroke={primaryColor} strokeWidth="1.5" />

          {/* Right Nodes */}
          <circle cx="170" cy="35" r="4" fill="none" stroke={primaryColor} strokeWidth="1" />
          <circle cx="170" cy="60" r="5" fill={primaryColor} />
          <circle cx="170" cy="85" r="4" fill="none" stroke={primaryColor} strokeWidth="1" />

          {/* Flow connections */}
          <path d="M 34 30 C 50 30, 80 45, 94 45" fill="none" stroke={primaryColor} strokeWidth="0.75" />
          <path d="M 35 60 C 60 60, 70 75, 94 75" fill="none" stroke={primaryColor} strokeWidth="0.75" />
          <path d="M 34 90 C 50 90, 80 75, 94 75" fill="none" stroke={primaryColor} strokeWidth="0.75" />

          <path d="M 106 45 C 130 45, 140 35, 166 35" fill="none" stroke={primaryColor} strokeWidth="0.75" strokeDasharray="2 2" />
          <path d="M 106 45 C 130 45, 140 60, 165 60" fill="none" stroke={primaryColor} strokeWidth="1.5" />
          <path d="M 106 75 C 130 75, 140 60, 165 60" fill="none" stroke={primaryColor} strokeWidth="0.75" />
          <path d="M 106 75 C 130 75, 140 85, 166 85" fill="none" stroke={primaryColor} strokeWidth="0.75" />

          {/* Data signals */}
          <circle cx="65" cy="38" r="1.5" fill={primaryColor} className="animate-ping" style={{ animationDuration: "3s" }} />
          <circle cx="135" cy="52" r="1.5" fill={primaryColor} className="animate-ping" style={{ animationDuration: "2s" }} />
        </svg>
      );

    case "mesh":
      return (
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          id={`svg-mesh-${color.replace("#", "")}`}
        >
          {/* Concentric design mapping */}
          <circle cx="100" cy="60" r="50" fill="none" stroke={primaryColor} strokeWidth="0.25" strokeDasharray="2 4" />
          <circle cx="100" cy="60" r="35" fill="none" stroke={primaryColor} strokeWidth="0.5" />
          <circle cx="100" cy="60" r="20" fill="none" stroke={primaryColor} strokeWidth="0.75" strokeDasharray="4 2" />
          <circle cx="100" cy="60" r="6" fill="none" stroke={primaryColor} strokeWidth="1.5" />

          {/* Crosshairs */}
          <line x1="30" y1="60" x2="170" y2="60" stroke={primaryColor} strokeWidth="0.4" />
          <line x1="100" y1="10" x2="100" y2="110" stroke={primaryColor} strokeWidth="0.4" />

          {/* Radiating angles */}
          <line x1="50" y1="10" x2="150" y2="110" stroke={primaryColor} strokeWidth="0.2" strokeDasharray="1 3" />
          <line x1="50" y1="110" x2="150" y2="10" stroke={primaryColor} strokeWidth="0.2" strokeDasharray="1 3" />

          {/* Intersecting data dots */}
          <circle cx="100" cy="25" r="2.5" fill={primaryColor} />
          <circle cx="65" cy="60" r="2" fill={primaryColor} />
          <circle cx="135" cy="60" r="2" fill={primaryColor} />
          <circle cx="100" cy="95" r="2.5" fill={primaryColor} />
          <circle cx="125" cy="35" r="1.5" fill={primaryColor} />
          <circle cx="75" cy="85" r="1.5" fill={primaryColor} />
        </svg>
      );

    case "architecture":
      return (
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          id={`svg-arch-${color.replace("#", "")}`}
        >
          {/* Blueprint style details */}
          <rect x="20" y="20" width="160" height="80" fill="none" stroke={primaryColor} strokeWidth="0.5" strokeDasharray="4 4" />
          
          {/* Diagonal guides */}
          <line x1="20" y1="20" x2="180" y2="100" stroke={primaryColor} strokeWidth="0.25" opacity="0.5" />
          <line x1="20" y1="100" x2="180" y2="20" stroke={primaryColor} strokeWidth="0.25" opacity="0.5" />

          {/* Technical dimensions indicator */}
          <line x1="20" y1="12" x2="180" y2="12" stroke={primaryColor} strokeWidth="0.75" />
          <line x1="20" y1="8" x2="20" y2="16" stroke={primaryColor} strokeWidth="0.75" />
          <line x1="180" y1="8" x2="180" y2="16" stroke={primaryColor} strokeWidth="0.75" />
          
          <rect x="85" y="6" width="30" height="12" fill="#0C0D0E" rx="1" stroke={primaryColor} strokeWidth="0.5" />
          <text x="100" y="15" fill={primaryColor} fontSize="7" fontFamily="monospace" textAnchor="middle">100px</text>

          {/* Left alignment label */}
          <line x1="12" y1="20" x2="12" y2="100" stroke={primaryColor} strokeWidth="0.75" />
          <line x1="8" y1="20" x2="16" y2="20" stroke={primaryColor} strokeWidth="0.75" />
          <line x1="8" y1="100" x2="16" y2="100" stroke={primaryColor} strokeWidth="0.75" />

          {/* Focus boxes */}
          <rect x="40" y="40" width="40" height="40" fill="none" stroke={primaryColor} strokeWidth="1" />
          <rect x="120" y="40" width="40" height="40" fill="none" stroke={primaryColor} strokeWidth="1" />
          <circle cx="60" cy="60" r="10" fill="none" stroke={primaryColor} strokeWidth="0.5" />
          <circle cx="140" cy="60" r="10" fill="none" stroke={primaryColor} strokeWidth="0.5" />
        </svg>
      );

    case "organic":
    default:
      return (
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          id={`svg-organic-${color.replace("#", "")}`}
        >
          <defs>
            <radialGradient id={`rad-org-${color.replace("#", "")}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.25" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="60" r="45" fill={`url(#rad-org-${color.replace("#", "")})`} />
          {/* Elegant spline wave shapes */}
          <path
            d="M 30 70 Q 60 40, 100 65 T 170 50 Z"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1.5"
          />
          <path
            d="M 40 50 Q 80 80, 120 45 T 160 70"
            fill="none"
            stroke={primaryColor}
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
          <path
            d="M 50 85 Q 90 20, 130 80 T 150 40"
            fill="none"
            stroke={primaryColor}
            strokeWidth="0.5"
          />
          <circle cx="112" cy="51" r="3" fill={primaryColor} />
          <circle cx="62" cy="61" r="2" fill={primaryColor} />
        </svg>
      );
  }
};
