import './globals.css'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Henry Osterweis',
    description: 'Welcome to my personal site',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={GeistMono.className}>
                {children}
            </body>
        </html>
    )
}
