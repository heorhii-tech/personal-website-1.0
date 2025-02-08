// components/Layout.js
import Header from "./Header";
import Footer from "./Footer";
import Logo from "../logo/Logo";
import { HEADER_CONFIG } from "../common/common";

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="w-full">
      <section className="section-header">
        <Header logo={<Logo />} config={HEADER_CONFIG} />
      </section>
      
        <main >
          {children}
        </main>
      
      <section className="section-footer">
        <Footer />
      </section>
    </div>
  );
}