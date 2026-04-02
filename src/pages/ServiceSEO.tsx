import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const audits = [
  { icon: 'Zap', title: 'Скорость загрузки', desc: 'Core Web Vitals, LCP, FID, CLS. Оптимизируем до идеальных показателей Google PageSpeed.' },
  { icon: 'Code', title: 'Технический код', desc: 'Robots.txt, sitemap.xml, канонические URL, hreflang, структурированные данные Schema.org.' },
  { icon: 'Link', title: 'Внутренняя перелинковка', desc: 'Архитектура ссылок, передача веса, сквозные блоки, хлебные крошки.' },
  { icon: 'Search', title: 'Индексация', desc: 'Закрытые от индексации страницы, дубли контента, пагинация, фильтры каталога.' },
  { icon: 'Smartphone', title: 'Мобильная версия', desc: 'Mobile-first индексация. Адаптивность, скорость на мобильных, usability.' },
  { icon: 'Shield', title: 'Безопасность', desc: 'HTTPS, смешанный контент, редиректы, защита от взлома — всё влияет на SEO.' },
];

const packages = [
  { name: 'Экспресс-аудит', price: '15 000 ₽', desc: 'Быстрая проверка 50+ параметров с приоритетным списком правок', items: ['Отчёт за 3 дня', 'Топ-20 ошибок', 'Рекомендации'] },
  { name: 'Полный аудит', price: '30 000 ₽', desc: 'Глубокий анализ 200+ параметров и дорожная карта на 6 месяцев', items: ['Отчёт за 7 дней', 'Полный чеклист', 'Техзадание', 'Сопровождение'] },
  { name: 'Внедрение', price: 'от 30 000 ₽/мес.', desc: 'Постоянная техническая поддержка и реализация всех правок нашими специалистами', items: ['Регулярный мониторинг', 'Все правки под ключ', 'Приоритетная поддержка'] },
];

export default function ServiceSEO() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{ paddingTop: 'calc(64px + 4rem)', background: 'var(--brand-gray-dark)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ background: 'radial-gradient(ellipse at 70% 50%, var(--brand-blue) 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto">
          <span className="block font-montserrat font-600 text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>Услуга</span>
          <h1 className="font-montserrat font-900 text-5xl md:text-6xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Техническое<br />
            <span style={{ color: '#7dd3fc' }}>SEO-оптимизация</span>
          </h1>
          <p className="font-ibm text-lg max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Код, скорость загрузки и структура — фундамент любого продвижения. Без технической базы SEO не работает.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/kontakty" className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)' }}>Заказать аудит</Link>
            <span className="btn-outline flex items-center gap-2" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)' }}>
              <Icon name="FileText" size={14} /> от 30 000 руб.
            </span>
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Что проверяем</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">200+ параметров технического аудита</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audits.map(a => (
              <div key={a.title} className="card-service">
                <div className="flex items-center justify-center w-11 h-11 rounded-sm mb-5" style={{ background: 'var(--brand-gray-light)' }}>
                  <Icon name={a.icon as 'Zap'} size={20} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--brand-gray-dark)' }}>{a.title}</h3>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Пакеты</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Выберите формат</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <div
                key={p.name}
                className="p-8 rounded-sm border"
                style={{
                  background: i === 1 ? 'var(--brand-gray-dark)' : 'white',
                  borderColor: i === 1 ? 'transparent' : 'var(--brand-gray-light)',
                }}
              >
                <h3 className="font-montserrat font-700 text-lg mb-2" style={{ color: i === 1 ? 'white' : 'var(--brand-gray-dark)' }}>{p.name}</h3>
                <p className="font-ibm text-xs mb-4" style={{ color: i === 1 ? 'rgba(255,255,255,0.5)' : 'var(--brand-gray-mid)' }}>{p.desc}</p>
                <div className="font-montserrat font-900 text-2xl mb-6" style={{ color: i === 1 ? 'white' : 'var(--brand-blue)' }}>{p.price}</div>
                <ul className="space-y-2 mb-6">
                  {p.items.map(it => (
                    <li key={it} className="flex items-center gap-2 font-ibm text-sm" style={{ color: i === 1 ? 'rgba(255,255,255,0.7)' : 'var(--brand-gray)' }}>
                      <Icon name="Check" size={13} style={{ color: i === 1 ? '#7dd3fc' : 'var(--brand-blue)', flexShrink: 0 }} />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakty"
                  className="block text-center py-3 rounded-sm font-montserrat font-700 text-sm uppercase tracking-widest"
                  style={{ background: i === 1 ? 'var(--brand-blue)' : 'var(--brand-gray-light)', color: i === 1 ? 'white' : 'var(--brand-gray-dark)', letterSpacing: '0.1em' }}
                >
                  Заказать
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Нужен технический аудит?" subtitle="Оставьте URL сайта — проверим бесплатно основные ошибки и пришлём краткий отчёт." />
      <Footer />
    </div>
  );
}
