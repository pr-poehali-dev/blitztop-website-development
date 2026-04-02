import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const formats = [
  { icon: 'FileText', title: 'SEO-статьи', desc: 'Экспертные материалы с семантическим ядром, структурой под Featured Snippets и E-E-A-T показателями.' },
  { icon: 'ShoppingCart', title: 'Контент для каталога', desc: 'Описания категорий и карточек товаров: продающие, уникальные, оптимизированные под запросы.' },
  { icon: 'Layout', title: 'Посадочные страницы', desc: 'Конверсионные тексты для услуг и продуктов. Структура по AIDA с учётом поведенческих факторов.' },
  { icon: 'MessageSquare', title: 'Кейсы и отзывы', desc: 'Профессиональное оформление кейсов, работа с отзывами для повышения E-A-T в глазах Google.' },
  { icon: 'Mail', title: 'Email-рассылки', desc: 'Серии писем для прогрева аудитории, удержания и возврата клиентов.' },
  { icon: 'Rss', title: 'Блог-стратегия', desc: 'Контент-план, регулярные публикации, внутренняя перелинковка и продвижение статей.' },
];

const process = [
  { step: '1', title: 'Анализ ниши', desc: 'Изучаем конкурентов, топовый контент, интент запросов и требования аудитории.' },
  { step: '2', title: 'Контент-план', desc: 'Формируем список тем с частотностью, приоритетами и прогнозом трафика.' },
  { step: '3', title: 'Написание', desc: 'Авторы с экспертизой в вашей нише. Проверка на уникальность и ИИ-детекцию.' },
  { step: '4', title: 'SEO-разметка', desc: 'Заголовки, мета-теги, разметка Schema, внутренние ссылки — всё под ключ.' },
  { step: '5', title: 'Публикация', desc: 'Размещаем на сайте или передаём в CMS. Настраиваем карту сайта.' },
  { step: '6', title: 'Аналитика', desc: 'Отслеживаем позиции статей, трафик, поведение. Корректируем стратегию.' },
];

export default function ServiceContent() {
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
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="block font-montserrat font-600 text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>Услуга</span>
            <h1 className="font-montserrat font-900 text-5xl md:text-6xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Контент-<br />
              <span style={{ color: '#7dd3fc' }}>маркетинг</span>
            </h1>
            <p className="font-ibm text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Экспертный контент, который читают люди и любят поисковики. От стратегии до публикации — под ключ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakty" className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)' }}>Разработать стратегию</Link>
            </div>
          </div>
          <div className="p-8 rounded-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="font-ibm text-xs mb-4 uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em' }}>Почему контент — это SEO</div>
            {[
              'Google ценит E-E-A-T: экспертность, авторитетность, доверие',
              'Яндекс продвигает сайты с регулярным качественным обновлением',
              'Статьи работают годами — SEO-актив без доп. затрат',
              'Контент — источник органических ссылок и цитирований',
            ].map(t => (
              <div key={t} className="flex items-start gap-3 mb-4">
                <Icon name="CheckCircle" size={14} style={{ color: '#7dd3fc', marginTop: 2, flexShrink: 0 }} />
                <span className="font-ibm text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{t}</span>
              </div>
            ))}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <span className="font-montserrat font-700 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>Стоимость от</span>
              <div className="font-montserrat font-900 text-3xl text-white mt-1">25 000 ₽/мес.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Форматы</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Что мы создаём</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map(f => (
              <div key={f.title} className="card-service">
                <div className="flex items-center justify-center w-11 h-11 rounded-sm mb-5" style={{ background: 'var(--brand-gray-light)' }}>
                  <Icon name={f.icon as 'FileText'} size={20} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--brand-gray-dark)' }}>{f.title}</h3>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Процесс</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">6 шагов от идеи до результата</h2>
          </div>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div
                key={p.step}
                className="flex items-start gap-6 p-6 rounded-sm border"
                style={{ background: 'white', borderColor: 'var(--brand-gray-light)' }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-sm flex-shrink-0 font-montserrat font-900 text-sm"
                  style={{ background: i % 2 === 0 ? 'var(--brand-blue)' : 'var(--brand-gray-light)', color: i % 2 === 0 ? 'white' : 'var(--brand-gray-dark)' }}
                >
                  {p.step}
                </div>
                <div>
                  <h3 className="font-montserrat font-700 text-base mb-1" style={{ color: 'var(--brand-gray-dark)' }}>{p.title}</h3>
                  <p className="font-ibm text-sm" style={{ color: 'var(--brand-gray)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Нужна контент-стратегия?" subtitle="Расскажите о вашей нише — разработаем план контента, который даст органический трафик." />
      <Footer />
    </div>
  );
}
