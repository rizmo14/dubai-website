import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7f4793 0%, #f5687c 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo circle */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
            border: "3px solid rgba(255,255,255,0.4)",
          }}
        >
          <span style={{ fontSize: 64, color: "white", fontWeight: "bold" }}>
            S
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          SBC Cleaning Services
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Professional Cleaning Company in Dubai, UAE
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          {["Licensed & Insured", "5-Star Rated", "Same-Day Service"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: 12,
                  padding: "10px 24px",
                  color: "white",
                  fontSize: 18,
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>

        {/* Phone */}
        <div
          style={{
            marginTop: 30,
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          +971 52 133 7528 · sbccleaningservices.ae
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
