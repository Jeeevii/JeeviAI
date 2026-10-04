import { ImageResponse } from "next/og"
import { profile } from "@/lib/portfolio"

export const alt = "Jeevithan Mahenthran - Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#101010", color: "#ffffff", padding: "80px", borderLeft: "14px solid #fb923c" }}>
      <div style={{ display: "flex", color: "#fb923c", fontSize: 26, marginBottom: 32 }}>JEEVI.AI</div>
      <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>{profile.name}</div>
      <div style={{ display: "flex", fontSize: 34, marginTop: 18 }}>Full Stack Software Engineer</div>
      <div style={{ display: "flex", color: "#d1d5db", fontSize: 26, marginTop: 40 }}>{profile.role} at {profile.company}</div>
      <div style={{ display: "flex", color: "#c4b5fd", fontSize: 24, marginTop: 18 }}>Backend systems · Full-stack products · Multiplayer games</div>
    </div>, size,
  )
}
