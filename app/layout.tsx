import Footer from './Footer'
import './globals.css'
import Nav from './Nav'
import Sidebar from './Sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kyle Leung'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
      <link rel="icon" href="/shinji.png" sizes="any" />
        <Nav></Nav>
        <Sidebar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
