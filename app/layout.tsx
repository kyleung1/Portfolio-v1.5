import './globals.css'
import Nav from './Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <Nav></Nav>
        {children}
      </body>
    </html>
  )
}
