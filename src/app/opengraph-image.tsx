import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "CosmoRemote";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #090e18 0%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(52,152,219,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(155,89,182,0.2) 0%, transparent 40%)",
          }}
        />
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            color: "white",
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            letterSpacing: "-0.02em",
          }}
        >
          CosmoRemote
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "-0.01em",
            maxWidth: "800px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Your coding agents, finally off the desk.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
