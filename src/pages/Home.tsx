import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Продвижение в ТОП',
    price: 'от 50 000 руб.',
    desc: 'Акцент на CTR, возвраты и поведенческие показатели.',
    icon: 'TrendingUp',
    href: '/prodvizhenie',
  },
  {
    title: 'Техническое SEO',
    price: 'от 30 000 руб.',
    desc: 'Код, скорость загрузки и структура для роста индексации.',
    icon: 'Settings',
    href: '/seo',
  },
  {
    title: 'Контент-стратегия',
    price: 'от 25 000 руб.',
    desc: 'Экспертные статьи, повышающие лояльность аудитории.',
    icon: 'FileText',
    href: '/kontent',
  },
  {
    title: 'Разработка сайтов',
    price: 'от 80 000 руб.',
    desc: 'Конверсионные решения, готовые к продвижению.',
    icon: 'Monitor',
    href: '/razrabotka',
  },
];

const cases = [
  { metric: 'x4', label: 'Трафика', desc: 'Интернет-магазин электроники. Результат за счёт работы с CTR за 6 месяцев.', tag: 'E-commerce' },
  { metric: 'ТОП‑3', label: '85% запросов', desc: 'Ниша спецтехники, Москва. Вывели 85% запросов за 3 месяца работы с ПФ.', tag: 'Спецтехника' },
  { metric: '+250%', label: 'Продаж', desc: 'Магазин косметики. Комплексное SEO: от структуры до контент-плана.', tag: 'Косметика' },
  { metric: 'x3', label: 'Лидов из Google', desc: 'Медицинский центр. Оптимизация факторов E-E-A-T и техническая база.', tag: 'Медицина' },
  { metric: '+40%', label: 'Конверсия', desc: 'Оптовые поставки. Рост конверсии через UX-проектирование.', tag: 'B2B' },
];

const reviews = [
  { text: 'Сотрудничаем с BLITZTOP уже второй год. Продажи из Яндекса выросли втрое.', name: 'Игорь В.', company: 'ТД «СпецМаш»', rating: 5 },
  { text: 'Ребята сделали нам интернет-магазин и сразу вывели его в плюс. Огромное спасибо.', name: 'Анна К.', company: 'BeautyStore', rating: 5 },
  { text: 'Прозрачная аналитика и реальный рост позиций по ПФ. Рекомендую коллегам.', name: 'Олег П.', company: 'Риэлт-Групп', rating: 5 },
  { text: 'Техническое SEO на высшем уровне. Сайт стал летать и позиции пошли вверх.', name: 'Дмитрий С.', company: 'ТехноПро', rating: 5 },
  { text: 'Очень глубокая работа с текстами. Google любит наш блог благодаря BLITZTOP.', name: 'Елена М.', company: 'МедЦентр', rating: 5 },
];

const faqs = [
  { q: 'Почему SEO стоит так дорого?', a: 'SEO — это комплекс работ: технический аудит, оптимизация кода, создание контента, работа с поведенческими факторами, аналитика и постоянный мониторинг. Качественное продвижение требует глубокой экспертизы и системного подхода, а результат сохраняется годами.' },
  { q: 'Как быстро придут результаты?', a: 'Первые улучшения позиций обычно видны через 1–2 месяца. Значимый рост трафика — через 3–6 месяцев. Для новых сайтов потребуется больше времени на накопление авторитета домена.' },
  { q: 'Безопасно ли продвижение через ПФ?', a: 'Да, при профессиональном подходе. Мы используем только белые методы управления поведенческими факторами: улучшение UX, качество контента, работа со сниппетами. Никаких накруток — только реальные пользователи.' },
  { q: 'Вы работаете по всей России?', a: 'Да, мы работаем дистанционно по всей России и странам СНГ. Офис в Москве, встречи — онлайн или лично.' },
  { q: 'Какие гарантии вы даёте?', a: 'Мы фиксируем KPI в договоре: рост позиций по целевым запросам, прирост трафика и другие измеримые показатели. При недостижении целей — перерасчёт стоимости.' },
  { q: 'Что если у меня новый сайт?', a: 'Для новых сайтов мы разрабатываем стратегию с нуля: правильная архитектура, техническая основа, первичный контент и поэтапное наращивание ссылочного профиля. Это самый быстрый путь к результату.' },
];

const blogPosts = [
  { title: 'Как ПФ влияют на продажи в 2026?', tag: 'Поведенческие факторы', date: '15 марта 2026', href: '/blog/pf-prodazhi-2026' },
  { title: 'Искусственный интеллект в SEO', tag: 'ИИ и SEO', date: '8 марта 2026', href: '/blog/ai-seo' },
  { title: 'SEO тренды 2026 года', tag: 'Тренды', date: '1 марта 2026', href: '/blog/trendy-2026' },
  { title: 'SEO или Контекст: Что выбрать?', tag: 'Сравнение', date: '20 февраля 2026', href: '/blog/seo-vs-kontekst' },
  { title: 'LSI-копирайтинг: новый стандарт', tag: 'Контент', date: '12 февраля 2026', href: '/blog/lsi-copywriting' },
  { title: 'Технический фундамент сайта', tag: 'Техническое SEO', date: '5 февраля 2026', href: '/blog/tekhnicheskiy-fundament' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(v => !v)}>
      <div className="flex items-center justify-between">
        <h3 className="font-montserrat font-600 text-base pr-8" style={{ color: 'var(--brand-gray-dark)' }}>{q}</h3>
        <div
          className="flex items-center justify-center w-7 h-7 rounded-sm flex-shrink-0 transition-all duration-200"
          style={{ background: open ? 'var(--brand-blue)' : 'var(--brand-gray-light)' }}
        >
          <Icon name={open ? 'Minus' : 'Plus'} size={14} style={{ color: open ? 'white' : 'var(--brand-gray)' }} />
        </div>
      </div>
      {open && (
        <p className="font-ibm text-sm leading-relaxed mt-4 pr-8 animate-fade-in" style={{ color: 'var(--brand-gray)' }}>
          {a}
        </p>
      )}
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#f59e0b', fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

export default function Home() {
  const [calcForm, setCalcForm] = useState({ url: '', phone: '' });

  return (
    <div className="min-h-screen">
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: 64 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 hero-overlay" />

        {/* Decorative shapes */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at 80% 30%, rgba(59,143,212,0.8) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 opacity-5"
          style={{
            background: 'radial-gradient(circle, white 0%, transparent 70%)',
          }}
        />

        {/* Grid accent lines */}
        <div className="absolute top-24 right-1/4 w-px h-32 opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, white, transparent)' }} />
        <div className="absolute bottom-32 left-1/3 w-32 h-px opacity-20" style={{ background: 'linear-gradient(to right, transparent, white, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in-delay-1 flex items-center gap-3 mb-8">
              <span className="block w-8 h-px" style={{ background: 'var(--brand-blue-light)' }} />
              <span className="font-montserrat font-600 text-xs uppercase tracking-widest text-white opacity-70" style={{ letterSpacing: '0.22em' }}>
                SEO-агентство № 1
              </span>
            </div>

            <h1
              className="animate-fade-in-delay-2 font-montserrat font-900 text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-none"
              style={{ letterSpacing: '-0.02em' }}
            >
              Экспертное SEO<br />
              <span style={{ color: '#7dd3fc' }}>в ТОП</span> с гарантией
            </h1>

            <p className="animate-fade-in-delay-3 font-ibm text-lg md:text-xl leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '640px' }}>
              Выводим бизнес в лидеры Яндекса и Google через глубокое улучшение поведенческих факторов и техническое совершенство.
            </p>
            <p className="animate-fade-in-delay-3 font-ibm text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px' }}>
              Увеличиваем продажи, а не просто трафик. Используем алгоритмы нового поколения для управления вниманием пользователей.
            </p>

            <div className="animate-fade-in-delay-4 flex flex-wrap gap-4">
              <Link to="/kontakty" className="btn-primary inline-flex items-center gap-2" style={{ background: 'white', color: 'var(--brand-blue)' }}>
                Получить бесплатный аудит
                <Icon name="ArrowRight" size={16} />
              </Link>
              <Link to="/keisy" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                Смотреть кейсы
              </Link>
            </div>

            {/* Stats row */}
            <div className="animate-fade-in-delay-4 flex flex-wrap gap-8 mt-14 pt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              {[
                { n: '7+', l: 'лет на рынке' },
                { n: '150+', l: 'проектов в ТОП' },
                { n: '92%', l: 'клиентов продлевают договор' },
                { n: '3–6', l: 'месяцев до результата' },
              ].map(s => (
                <div key={s.n}>
                  <div className="font-montserrat font-900 text-3xl text-white">{s.n}</div>
                  <div className="font-ibm text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-ibm text-xs uppercase tracking-widest text-white" style={{ letterSpacing: '0.2em' }}>scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, white, transparent)' }} />
        </div>
      </section>

      {/* ── О НАС ── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">О компании</span>
              <span className="divider-blue" />
              <h2 className="section-title">BLITZTOP — команда стратегов и аналитиков</h2>
              <p className="font-ibm text-base leading-relaxed mb-6" style={{ color: 'var(--brand-gray)' }}>
                С 2017 года мы специализируемся на высокотехнологичном SEO. Мы создаем условия, при которых поисковые системы <strong>обязаны</strong> поставить ваш сайт на первое место.
              </p>
              <p className="font-ibm text-base leading-relaxed mb-8" style={{ color: 'var(--brand-gray)' }}>
                Наш подход основан на глубоком анализе данных, поведении пользователей и постоянном A/B-тестировании. Мы не угадываем — мы знаем, что работает.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: '12', l: 'специалистов в команде' },
                  { n: '45+', l: 'ниш освоено' },
                  { n: '2', l: 'офиса в России' },
                  { n: '100%', l: 'белые методы' },
                ].map(s => (
                  <div key={s.n} className="p-4 rounded-sm" style={{ background: 'var(--brand-gray-light)' }}>
                    <div className="stat-number">{s.n}</div>
                    <div className="font-ibm text-sm mt-1" style={{ color: 'var(--brand-gray)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-sm overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, var(--brand-blue-dark) 0%, var(--brand-blue) 100%)',
                  padding: '3px',
                }}
              >
                <div className="rounded-sm p-10" style={{ background: 'var(--brand-gray-dark)' }}>
                  <div className="space-y-6">
                    {[
                      { icon: 'Target', title: 'Работаем на результат', desc: 'KPI прописаны в договоре' },
                      { icon: 'BarChart2', title: 'Прозрачная отчётность', desc: 'Еженедельные отчёты с реальными данными' },
                      { icon: 'Shield', title: 'Только белые методы', desc: 'Никаких санкций от поисковиков' },
                      { icon: 'Users', title: 'Персональный менеджер', desc: 'Всегда на связи, отвечаем за 2 часа' },
                    ].map(item => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div
                          className="flex items-center justify-center w-10 h-10 rounded-sm flex-shrink-0"
                          style={{ background: 'rgba(26,111,196,0.2)' }}
                        >
                          <Icon name={item.icon as 'Target'} size={18} style={{ color: 'var(--brand-blue-light)' }} />
                        </div>
                        <div>
                          <div className="font-montserrat font-600 text-sm text-white">{item.title}</div>
                          <div className="font-ibm text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── УСЛУГИ ── */}
      <section className="py-24 px-6 bg-brand-white" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Что мы делаем</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Услуги и стоимость</h2>
            <p className="font-ibm text-base max-w-xl mx-auto" style={{ color: 'var(--brand-gray)' }}>
              Каждое направление — отдельная экспертиза. Работаем комплексно или точечно под вашу задачу.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <Link key={s.href} to={s.href} className="card-service group block">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-sm mb-6 transition-all duration-300"
                  style={{ background: 'var(--brand-gray-light)' }}
                >
                  <Icon name={s.icon as 'TrendingUp'} size={22} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 className="font-montserrat font-700 text-base mb-2" style={{ color: 'var(--brand-gray-dark)' }}>
                  {s.title}
                </h3>
                <p className="font-montserrat font-800 text-sm mb-3" style={{ color: 'var(--brand-blue)' }}>
                  {s.price}
                </p>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>
                  {s.desc}
                </p>
                <div className="flex items-center gap-1.5 mt-5 font-montserrat font-600 text-xs" style={{ color: 'var(--brand-blue)' }}>
                  Подробнее <Icon name="ArrowRight" size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── КАЛЬКУЛЯТОР ── */}
      <section className="py-20 px-6" style={{ background: 'var(--brand-gray-light)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-tag">Бесплатно</span>
          <span className="divider-blue mx-auto" />
          <h2 className="section-title">Узнайте потенциал вашего сайта</h2>
          <p className="font-ibm text-base mb-10" style={{ color: 'var(--brand-gray)' }}>
            Укажите URL и телефон — мы рассчитаем стоимость и пришлём прогноз роста позиций.
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="url"
              placeholder="URL вашего сайта"
              value={calcForm.url}
              onChange={e => setCalcForm({ ...calcForm, url: e.target.value })}
              className="input-field flex-1"
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              value={calcForm.phone}
              onChange={e => setCalcForm({ ...calcForm, phone: e.target.value })}
              className="input-field w-full sm:w-48"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Рассчитать
            </button>
          </form>
        </div>
      </section>

      {/* ── КЕЙСЫ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="section-tag">Результаты</span>
              <span className="divider-blue" />
              <h2 className="section-title mb-0">Кейсы: цифры и факты</h2>
            </div>
            <Link to="/keisy" className="font-montserrat font-600 text-sm flex items-center gap-2 mt-4 md:mt-0" style={{ color: 'var(--brand-blue)' }}>
              Все кейсы <Icon name="ArrowRight" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map(c => (
              <div
                key={c.metric}
                className="p-8 rounded-sm border transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{
                  background: 'white',
                  borderColor: 'var(--brand-gray-light)',
                  borderTop: '3px solid var(--brand-blue)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-montserrat font-900 text-4xl" style={{ color: 'var(--brand-blue)', lineHeight: 1 }}>
                      {c.metric}
                    </span>
                    <div className="font-montserrat font-600 text-sm mt-1" style={{ color: 'var(--brand-gray-dark)' }}>
                      {c.label}
                    </div>
                  </div>
                  <span
                    className="font-ibm text-xs px-3 py-1 rounded-full"
                    style={{ background: 'var(--brand-gray-light)', color: 'var(--brand-gray)' }}
                  >
                    {c.tag}
                  </span>
                </div>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: 'var(--brand-gray)' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ── */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Клиенты о нас</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Отзывы клиентов</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="review-card">
                <StarRating count={r.rating} />
                <p className="font-ibm text-sm leading-relaxed mb-5 italic" style={{ color: 'var(--brand-gray)' }}>
                  «{r.text}»
                </p>
                <div>
                  <div className="font-montserrat font-700 text-sm" style={{ color: 'var(--brand-gray-dark)' }}>{r.name}</div>
                  <div className="font-ibm text-xs mt-0.5" style={{ color: 'var(--brand-gray-mid)' }}>{r.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Частые вопросы</span>
            <span className="divider-blue mx-auto" />
            <h2 className="section-title">Вопросы и ответы</h2>
          </div>
          {faqs.map(faq => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── БЛОГ ── */}
      <section className="py-24 px-6" style={{ background: 'var(--brand-white)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="section-tag">Экспертиза</span>
              <span className="divider-blue" />
              <h2 className="section-title mb-0">Блог: экспертные материалы</h2>
            </div>
            <Link to="/blog" className="font-montserrat font-600 text-sm flex items-center gap-2 mt-4 md:mt-0" style={{ color: 'var(--brand-blue)' }}>
              Все статьи <Icon name="ArrowRight" size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <Link key={post.href} to={post.href} className="blog-card block">
                <div className="p-6">
                  <span
                    className="inline-block font-ibm text-xs px-3 py-1 rounded-full mb-4"
                    style={{ background: 'var(--brand-gray-light)', color: 'var(--brand-blue)' }}
                  >
                    {post.tag}
                  </span>
                  <h3 className="font-montserrat font-700 text-base leading-snug mb-3" style={{ color: 'var(--brand-gray-dark)' }}>
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-ibm text-xs" style={{ color: 'var(--brand-gray-mid)' }}>{post.date}</span>
                    <span className="flex items-center gap-1 font-montserrat font-600 text-xs" style={{ color: 'var(--brand-blue)' }}>
                      Подробнее <Icon name="ArrowRight" size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
