import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#f6f5f2",
        color: "#16233b",
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
          agentclub<span style={{ color: "#245bea" }}>.</span>
        </span>
        <span style={{ fontSize: 15, color: "#53627a", letterSpacing: 2 }}>
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
        <span style={{ color: "#245bea" }}>Big possibilities.</span>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #d8dde6",
          paddingTop: 25,
          marginTop: 58,
          color: "#53627a",
          fontSize: 17,
          justifyContent: "space-between",
        }}
      >
        <span>SMALL AGENTS. SHARP TOOLS. REAL-WORLD WORKFLOWS.</span>
        <span style={{ color: "#245bea" }}>001—∞</span>
      </div>
    </div>,
    size,
  );
}
