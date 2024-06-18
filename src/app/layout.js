import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "LoFiRadio",
  description: "Discover the best lofi beats to relax and study to with our comprehensive guide. Lofi music has become the go-to choice for those seeking a calm and focused atmosphere, perfect for studying, working, or simply unwinding. In this guide, we'll introduce you to the top YouTube channels, Spotify playlists, and artists that deliver the most soothing and effective lofi beats. Whether you're looking for 24/7 live streams or curated playlists, we've got you covered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
