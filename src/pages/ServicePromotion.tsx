import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const steps = [
  { n: '01', title: 'Аудит и анализ', desc: 'Полный технический аудит, анализ конкурентов, сбор семантики и изучение поведенческих факторов текущих лидеров ниши.' },
  { n: '02', title: 'Стратегия', desc: 'Разрабатываем индивидуальный план продвижения с KPI, сроками и прогнозом результатов. Фиксируем в договоре.' },
  { n: '03', title: 'Оптимизация', desc: 'Техническая оптимизация, работа со сниппетами, улучшение UX, создание контента и проработка коммерческих факторов.' },
  { n: '04', title: 'Работа с ПФ', desc: 'Управление поведенческими факторами: удержание пользователей, снижение отказов, улучшение глубины просмотра.' },
  { n: '05', title: 'Отчётность', desc: 'Еженедельные отчёты с позициями, трафиком и конверсией. Прозрачная аналитика — вы видите каждый шаг.' },
  { n: '06', title: 'Масштабирование', desc: 'После достижения ТОПа — расширение семантики, выход на новые регионы, улучшение конверсии.' },
];

const tariffs = [
  {
    name: 'Старт',
    price: 'от 50 000 ₽',
    period: '/мес.',
    desc: 'Для малого бизнеса и молодых сайтов',
    features: ['До 50 запросов', 'Технический аудит', 'Базовая оптимизация', 'Ежемесячный отчёт', 'Персональный менеджер'],
    accent: false,
  },
  {
    name: 'Бизнес',
    price: 'от 90 000 ₽',
    period: '/мес.',
    desc: 'Для активно растущих компаний',
    features: ['До 200 запросов', 'Глубокая SEO-оптимизация', 'Работа с ПФ', 'Еженедельный отчёт', 'Контент (2 статьи)', 'Анализ конкурентов'],
    accent: true,
  },
  {
    name: 'Премиум',
    price: 'от 150 000 ₽',
    period: '/мес.',
    desc: 'Для лидеров и крупного бизнеса',
    features: ['Неограниченная семантика', 'Полный комплекс SEO', 'Агрессивная работа с ПФ', 'Ежедневный мониторинг', 'Контент (8 статей)', 'Выделенный аналитик'],
    accent: false,
  },
];

export default function ServicePromotion() {
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
              Продвижение<br />в Яндекс<br />
              <span style={{ color: '#7dd3fc' }}>и Google</span>
            </h1>
            <p className="font-ibm text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Комплексное SEO-продвижение с упором на поведенческие факторы. Результаты видны через 30–60 дней.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakty" className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)' }}>
                Получить стратегию
              </Link>
              <Link to="/keisy" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                Кейсы
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: 'TrendingUp', n: 'x4', l: 'средний рост трафика' },
              { icon: 'Target', n: 'ТОП‑3', l: 'позиции по запросам' },
              { icon: 'Users', n: '150+', l: 'проектов в ТОПе' },
              { icon: 'Clock', n: '3–6', l: 'месяцев до результата' },
            ].map(s => (
              <div key={s.n} className="p-6 rounded-sm" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Icon name={s.icon as 'TrendingUp'} size={20} style={{ color: 'var(--brand-blue-light)', marginBottom: 8 }} />
                <div className="font-montserrat font-900 text-2xl text-white">{s.n}</div>
                <div className="font-ibm text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Методология</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Как мы работаем</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(s => (
              <div key={s.n} className="p-8 rounded-sm border transition-all duration-300 hover:shadow-lg" style={{ borderColor: 'var(--brand-gray-light)' }}>
                <div className="font-montserrat font-900 text-4xl mb-4" style={{ color: 'rgba(26,111,196,0.15)', lineHeight: 1 }}>{s.n}</div>
                <h3 className="font-montserrat font-700 text-base mb-3" style={{ color: 'var(--brand-gray-dark)' }}>{s.title}</h3>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Стоимость</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Тарифы на продвижение</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map(t => (
              <div
                key={t.name}
                className="p-8 rounded-sm"
                style={{
                  background: t.accent ? 'var(--brand-blue)' : 'white',
                  border: t.accent ? 'none' : '1px solid var(--brand-gray-light)',
                  boxShadow: t.accent ? '0 20px 60px rgba(26,111,196,0.3)' : 'none',
                  transform: t.accent ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {t.accent && (
                  <div className="font-montserrat font-700 text-xs uppercase tracking-widest mb-4 text-white opacity-70" style={{ letterSpacing: '0.2em' }}>
                    Популярный
                  </div>
                )}
                <h3 className="font-montserrat font-800 text-xl mb-1" style={{ color: t.accent ? 'white' : 'var(--brand-gray-dark)' }}>{t.name}</h3>
                <p className="font-ibm text-xs mb-5" style={{ color: t.accent ? 'rgba(255,255,255,0.6)' : 'var(--brand-gray-mid)' }}>{t.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-montserrat font-900 text-3xl" style={{ color: t.accent ? 'white' : 'var(--brand-blue)' }}>{t.price}</span>
                  <span className="font-ibm text-sm" style={{ color: t.accent ? 'rgba(255,255,255,0.6)' : 'var(--brand-gray-mid)' }}>{t.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {t.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Icon name="Check" size={14} style={{ color: t.accent ? '#7dd3fc' : 'var(--brand-blue)', flexShrink: 0 }} />
                      <span className="font-ibm text-sm" style={{ color: t.accent ? 'rgba(255,255,255,0.85)' : 'var(--brand-gray)' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakty"
                  className="block text-center py-3 rounded-sm font-montserrat font-700 text-sm uppercase tracking-widest transition-all duration-200"
                  style={{
                    background: t.accent ? 'white' : 'var(--brand-blue)',
                    color: t.accent ? 'var(--brand-blue)' : 'white',
                    letterSpacing: '0.1em',
                  }}
                >
                  Выбрать
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Получить персональную стратегию" subtitle="Расскажите о вашем сайте — составим план продвижения с прогнозом позиций и трафика." />
      <Footer />
    </div>
  );
}
