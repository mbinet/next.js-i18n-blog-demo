import Container from "./container";
import { useRouter } from "next/router";
import i18n from "../lib/i18n";

export default function Footer() {
  const { locale } = useRouter();
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            {i18n.footer.static[locale]}
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <a
              href="https://www.datocms.com/docs/next-js"
              className="px-12 py-3 mx-3 mb-6 font-bold text-white transition-colors duration-200 bg-black border border-black hover:bg-white hover:text-black lg:px-8 lg:mb-0"
            >
              {i18n.footer.read[locale]}
            </a>
            <a
              href="https://github.com/datocms/nextjs-demo"
              className="mx-3 font-bold hover:underline"
            >
              {i18n.footer.github[locale]}
            </a>
          </div>
          </div>
          <div className="mb-6 text-gray-400">
            Designed with <span className="opacity-70">💜</span> remotely
          </div>
      </Container>
    </footer>
  );
}
