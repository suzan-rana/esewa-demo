import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const p = Poppins({ subsets: ['latin'], weight: '400'})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={p.className}>{children}</body>
    </html>
  )
}
