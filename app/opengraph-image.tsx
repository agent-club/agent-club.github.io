import { ImageResponse } from "next/og";

export const alt = "Agent Club — Small tools. Big possibilities.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#0b0e0c",
        color: "#eff2e9",
        padding: "65px 78px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 32,
        }}
      >
        <span>
          agentclub<span style={{ color: "#bcf77b" }}>.</span>
        </span>
        <span style={{ fontSize: 15, color: "#9ea98f", letterSpacing: 2 }}>
          INDEPENDENT BUILDER COLLECTIVE
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 85,
          fontSize: 83,
          letterSpacing: -4,
          lineHeight: 1.15,
        }}
      >
        <span>Small tools.</span>
        <span style={{ color: "#bcf77b" }}>Big possibilities.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #38432e",
          paddingTop: 25,
          marginTop: 58,
          color: "#b4c39f",
          fontSize: 17,
          justifyContent: "space-between",
        }}
      >
        <span>SMALL AGENTS. SHARP TOOLS. REAL-WORLD WORKFLOWS.</span>
        <span style={{ color: "#bcf77b" }}>001—∞</span>
      </div>
    </div>,
    size,
  );
}
