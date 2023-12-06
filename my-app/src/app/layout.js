import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import PageFooter from './components/Footer_'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MBS',
  description: 'Team Martini:- Ipsita Nayak, K.Vishnu Prasad, Aditya Roshan Dash',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <PageFooter />
      </body>
    </html>
  )
}
