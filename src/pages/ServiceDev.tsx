import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const siteTypes = [
  { icon: 'ShoppingCart', title: 'Интернет-магазин', desc: 'Каталог, фильтры, корзина, CRM-интеграция. Архитектура под SEO с первого дня.' },
  { icon: 'Briefcase', title: 'Корпоративный сайт', desc: 'Представительский сайт компании. Контентная база, структура под продвижение.' },
  { icon: 'Target', title: 'Лендинг / Landing', desc: 'Конверсионная посадочная страница с A/B-тестированием и формами захвата.' },
  { icon: 'Globe', title: 'Многостраничный сайт', desc: 'Порталы, агрегаторы, сайты услуг. Масштабируемая архитектура.' },
  { icon: 'Building', title: 'Сайт для B2B', desc: 'Каталог продукции, личный кабинет, прайс-листы. Всё для корпоративных продаж.' },
  { icon: 'Star', title: 'SEO-ready с нуля', desc: 'Новый сайт изначально заточен под ТОП: скорость, структура, микроразметка.' },
];

const features = [
  'Скорость 90+ в Google PageSpeed',
  'Мобильная адаптация',
  'Микроразметка Schema.org',
  'Семантическая структура URL',
  'Sitemap и robots.txt',
  'Интеграция с Яндекс.Метрикой и GA4',
  'Закрытие технических SEO-ошибок',
  'CMS для удобного управления',
];

const stack = [
  { name: 'React / Next.js', type: 'Фронтенд' },
  { name: 'Node.js / Python', type: 'Бэкенд' },
  { name: 'PostgreSQL / MySQL', type: 'База данных' },
  { name: 'WordPress / Custom CMS', type: 'CMS' },
  { name: 'Bitrix / 1C-интеграция', type: 'Корп. системы' },
  { name: 'REST API / WebSocket', type: 'Интеграции' },
];

export default function ServiceDev() {
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
            Разработка<br />
            <span style={{ color: '#7dd3fc' }}>сайтов</span>
          </h1>
          <p className="font-ibm text-lg max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Создаём конверсионные сайты, которые уже с первого дня готовы к продвижению в поисковых системах.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/kontakty" className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)' }}>
              Обсудить проект
            </Link>
            <Link to="/keisy" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
              Смотреть кейсы
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="DollarSign" size={16} style={{ color: '#7dd3fc' }} />
            <span className="font-montserrat font-700 text-white">от 80 000 руб.</span>
            <span className="font-ibm text-sm ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>— стоимость зависит от функционала</span>
          </div>
        </div>
      </section>

      {/* Site types */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Что мы делаем</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Типы сайтов</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteTypes.map(s => (
              <div key={s.title} className="card-service">
                <div className="flex items-center justify-center w-11 h-11 rounded-sm mb-5" style={{ background: 'var(--brand-gray-light)' }}>
                  <Icon name={s.icon as 'ShoppingCart'} size={20} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--brand-gray-dark)' }}>{s.title}</h3>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-ready features */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-blue)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="block font-montserrat font-600 text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>
              Наше преимущество
            </span>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-4">
              Каждый сайт — SEO-ready
            </h2>
            <p className="font-ibm text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
              В отличие от обычных студий, мы изначально строим сайт под продвижение.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map(f => (
              <div key={f} className="flex items-center gap-3 p-4 rounded-sm" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Icon name="Check" size={14} style={{ color: '#7dd3fc', flexShrink: 0 }} />
                <span className="font-ibm text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Технологии</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Стек разработки</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stack.map(s => (
              <div key={s.name} className="p-5 rounded-sm border text-center" style={{ borderColor: 'var(--brand-gray-light)', background: 'white' }}>
                <div className="font-ibm text-xs mb-2 uppercase tracking-widest" style={{ color: 'var(--brand-gray-mid)', letterSpacing: '0.15em' }}>{s.type}</div>
                <div className="font-montserrat font-700 text-sm" style={{ color: 'var(--brand-gray-dark)' }}>{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Хотите сайт под ключ?" subtitle="Расскажите о своём проекте — подберём оптимальное решение и составим смету." />
      <Footer />
    </div>
  );
}
