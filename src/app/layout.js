import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "LoFiRadio",
  description: "Discover the best lofi beats for studying, working, and relaxing. Explore top YouTube channels, Spotify playlists, and artists in our comprehensive guide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
