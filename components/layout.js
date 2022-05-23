import Footer from '../components/footer'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen font-sans">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
