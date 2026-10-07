import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Renzo Curty",
    description: siteDescription,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#131a0e",
    theme_color: "#1e2617",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
