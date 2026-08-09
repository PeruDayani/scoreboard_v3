import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export default function FantasyLayout({
  children,
}: LayoutProps<"/fantasy">) {
  return (
    <div className={`fantasy-theme min-h-full ${archivoBlack.variable}`}>
      {children}
    </div>
  );
}
