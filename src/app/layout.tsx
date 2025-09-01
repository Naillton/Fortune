import { icons } from "lucide-react";
import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Fortune Cookie!",
  description: "Apliccation to generate lucky numbers press cookie",
  icons: {
    icon: '/cookie.png',
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
