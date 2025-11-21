import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-3dc3255e.vercel.app"),
  title: {
    default: "Cremaci?n para Mascotas en Puebla | Despedida Digna",
    template: "%s | Crematorio de Mascotas Puebla"
  },
  description:
    "Cremaci?n de mascotas con homenaje incluido. Velaci?n, aromaterapia, video conmemorativo, certificado y obituario sin costo adicional. Servicio inmediato en Puebla Sur, San Andr?s Cholula, Lomas de Angel?polis y San Jos? Chapulco.",
  keywords: [
    "crematorio de mascotas Puebla",
    "funeraria para mascotas Puebla",
    "cremaci?n perros gatos Puebla",
    "Puebla Sur",
    "San Andr?s Cholula",
    "Lomas de Angel?polis",
    "San Jos? Chapulco"
  ],
  openGraph: {
    title: "Cremaci?n para Mascotas en Puebla | Despedida Digna",
    description:
      "Cremaci?n con homenaje incluido: velaci?n, aromaterapia, huella y trufa en cera, video, certificado y obituario. Atenci?n inmediata en Puebla.",
    url: "https://agentic-3dc3255e.vercel.app/",
    siteName: "Crematorio de Mascotas Puebla",
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cremaci?n para Mascotas en Puebla | Despedida Digna",
    description:
      "Cremaci?n con homenaje incluido. Atenci?n inmediata 24/7 en Puebla y Cholula.",
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
