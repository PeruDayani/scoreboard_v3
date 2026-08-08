import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export default function ScoreboardLayout({
  children,
}: LayoutProps<"/scoreboard">) {
  return (
    <div className={`scoreboard-theme min-h-full ${archivoBlack.variable}`}>
      {children}
    </div>
  );
}
