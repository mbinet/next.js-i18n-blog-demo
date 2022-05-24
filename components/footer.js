import Container from "./container";
import { useRouter } from "next/router";
import i18n from "../lib/i18n";

export default function Footer() {
  const { locale } = useRouter();
  return (
    <footer className="pb-6 border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
        </div>
        <div className="mb-6 text-gray-400">
          Designed with <span className="opacity-70">💜</span> remotely
        </div>
      </Container>
    </footer>
  );
}
