import "./globals.css";
import {Headers} from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className='antialiased bg-zinc-800'
      >
        <Headers></Headers>
        <main className="container">
            {children}
        </main>
      </body>
    </html>
  );
}
