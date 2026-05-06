import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
          background: "#0f172a",
          color: "#ffffff",
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: "0.12em",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
        }}
      >
        GA
      </div>
    ),
    size
  );
}

