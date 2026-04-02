import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

export default function Page404() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-1 flex items-center justify-center px-6"
        style={{ paddingTop: 64 }}
      >
        <div className="text-center max-w-lg">
          <div
            className="flex items-center justify-center w-20 h-20 rounded-sm mx-auto mb-8"
            style={{ background: "var(--brand-gray-light)" }}
          >
            <Icon name="SearchX" size={36} style={{ color: "var(--brand-blue)" }} />
          </div>
          <h1
            className="font-montserrat font-900 text-8xl mb-2"
            style={{ color: "var(--brand-blue)", lineHeight: 1 }}
          >
            404
          </h1>
          <h2
            className="font-montserrat font-700 text-2xl mb-4"
            style={{ color: "var(--brand-gray-dark)" }}
          >
            Страница не найдена
          </h2>
          <p
            className="font-ibm text-base leading-relaxed mb-8"
            style={{ color: "var(--brand-gray)" }}
          >
            Возможно, страница была перемещена или удалена.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary inline-flex items-center gap-2">
              <Icon name="Home" size={16} />
              На главную
            </Link>
            <Link to="/kontakty" className="btn-outline">
              Контакты
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
