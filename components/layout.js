import Footer from '../components/footer'
import Script from 'next/script'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen font-sans">
        { preview && 'hey preview'}
        <main>{children}</main>
      </div>
      <Script
        id="crisp-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="a05e6b3e-0fa2-4a76-838a-527f235bfe95";
            (function(){
              const d = document;
              const s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();`,
        }}
      />
      <Footer />
    </>
  )
}
