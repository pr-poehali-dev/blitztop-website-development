import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const cases = [
  {
    id: 1,
    metric: 'x4',
    label: 'Рост трафика',
    tag: 'E-commerce',
    title: 'Интернет-магазин электроники',
    period: '6 месяцев',
    result: 'Трафик вырос в 4 раза за счёт работы с CTR: переработали сниппеты, добавили микроразметку, улучшили мобильную версию.',
    tasks: ['Оптимизация CTR в выдаче', 'Работа с поведенческими факторами', 'Техническая оптимизация', 'Микроразметка Schema.org'],
    before: '4 200', after: '17 800', unit: 'визитов/мес.',
    color: '#1a6fc4',
  },
  {
    id: 2,
    metric: 'ТОП‑3',
    label: '85% запросов',
    tag: 'Спецтехника',
    title: 'Поставщик спецтехники, Москва',
    period: '3 месяца',
    result: 'Вывели 85% целевых запросов в ТОП-3 Яндекса за счёт глубокой работы с поведенческими факторами и улучшения структуры сайта.',
    tasks: ['Кластеризация семантики', 'Улучшение структуры каталога', 'Работа с ПФ', 'Коммерческие факторы'],
    before: '12', after: '85', unit: '% запросов в ТОП-3',
    color: '#0e4f8f',
  },
  {
    id: 3,
    metric: '+250%',
    label: 'Продаж из поиска',
    tag: 'Косметика',
    title: 'Интернет-магазин косметики',
    period: '8 месяцев',
    result: 'Комплексное SEO: от реструктуризации каталога до полноценного контент-плана. Рост продаж на 250% при том же рекламном бюджете.',
    tasks: ['Реструктуризация каталога', 'Контент-стратегия', 'Оптимизация карточек', 'Работа с отзывами'],
    before: '280 000', after: '980 000', unit: 'руб./мес. из SEO',
    color: '#3b8fd4',
  },
  {
    id: 4,
    metric: 'x3',
    label: 'Лидов из Google',
    tag: 'Медицина',
    title: 'Медицинский центр',
    period: '5 месяцев',
    result: 'Оптимизация факторов E-E-A-T: добавили экспертные статьи, оформили профили врачей, улучшили техническую базу. Лиды из Google выросли втрое.',
    tasks: ['E-E-A-T оптимизация', 'Профили врачей', 'Медицинский контент', 'Локальное SEO'],
    before: '18', after: '54', unit: 'лидов/мес. из Google',
    color: '#1a6fc4',
  },
  {
    id: 5,
    metric: '+40%',
    label: 'Конверсия',
    tag: 'B2B',
    title: 'Оптовые поставки материалов',
    period: '4 месяца',
    result: 'Лидер ниши в B2B-сегменте. Рост конверсии на 40% через UX-проектирование и пересмотр структуры посадочных страниц.',
    tasks: ['UX-аудит и редизайн', 'Оптимизация посадочных', 'Семантическое ядро B2B', 'Контент для ЛПР'],
    before: '1.2', after: '1.68', unit: '% конверсия сайта',
    color: '#0e4f8f',
  },
  {
    id: 6,
    metric: '+180%',
    label: 'Органического трафика',
    tag: 'Недвижимость',
    title: 'Агентство недвижимости',
    period: '7 месяцев',
    result: 'Полный перезапуск SEO-стратегии с нуля. Контент-план на 120 статей, региональное продвижение, работа с Google Maps.',
    tasks: ['Контент-план 120 статей', 'Региональное продвижение', 'Google Business Profile', 'Работа с отзывами'],
    before: '3 100', after: '8 680', unit: 'визитов/мес.',
    color: '#3b8fd4',
  },
];

export default function Cases() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{ paddingTop: 'calc(64px + 4rem)', background: 'var(--brand-gray-dark)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, var(--brand-blue) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <span className="block font-montserrat font-600 text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>
            Результаты работы
          </span>
          <h1 className="font-montserrat font-900 text-5xl md:text-6xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Кейсы и результаты
          </h1>
          <p className="font-ibm text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Реальные цифры, реальные клиенты. Каждый кейс — задокументированный рост бизнеса.
          </p>
        </div>
      </section>

      {/* Stats summary */}
      <section className="py-10 px-6 border-b" style={{ background: 'var(--brand-blue)', borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: '150+', l: 'проектов в ТОПе' },
            { n: '92%', l: 'довольных клиентов' },
            { n: '7+', l: 'лет экспертизы' },
            { n: '40+', l: 'ниш в портфолио' },
          ].map(s => (
            <div key={s.n} className="text-center">
              <div className="font-montserrat font-900 text-3xl text-white">{s.n}</div>
              <div className="font-ibm text-xs mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {cases.map((c, i) => (
            <div
              key={c.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-sm overflow-hidden border transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: 'var(--brand-gray-light)' }}
            >
              {/* Metric */}
              <div
                className="flex flex-col justify-center items-start p-10"
                style={{ background: i % 2 === 0 ? 'var(--brand-gray-dark)' : c.color }}
              >
                <span
                  className="inline-block font-ibm text-xs px-3 py-1 rounded-full mb-4"
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
                >
                  {c.tag}
                </span>
                <div className="font-montserrat font-900 text-5xl text-white mb-1">{c.metric}</div>
                <div className="font-montserrat font-600 text-lg text-white opacity-80">{c.label}</div>
                <div className="font-ibm text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  За {c.period}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 col-span-2 flex flex-col justify-between" style={{ background: 'white' }}>
                <div>
                  <h3 className="font-montserrat font-700 text-xl mb-3" style={{ color: 'var(--brand-gray-dark)' }}>
                    {c.title}
                  </h3>
                  <p className="font-ibm text-sm leading-relaxed mb-5" style={{ color: 'var(--brand-gray)' }}>
                    {c.result}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tasks.map(t => (
                      <span
                        key={t}
                        className="font-ibm text-xs px-3 py-1 rounded-full"
                        style={{ background: 'var(--brand-gray-light)', color: 'var(--brand-gray)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Before / After */}
                <div
                  className="flex items-center gap-6 p-4 rounded-sm"
                  style={{ background: 'var(--brand-white)' }}
                >
                  <div>
                    <div className="font-ibm text-xs mb-1" style={{ color: 'var(--brand-gray-mid)' }}>До</div>
                    <div className="font-montserrat font-700 text-lg" style={{ color: 'var(--brand-gray)' }}>{c.before}</div>
                    <div className="font-ibm text-xs" style={{ color: 'var(--brand-gray-mid)' }}>{c.unit}</div>
                  </div>
                  <Icon name="ArrowRight" size={18} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                  <div>
                    <div className="font-ibm text-xs mb-1" style={{ color: 'var(--brand-gray-mid)' }}>После</div>
                    <div className="font-montserrat font-700 text-lg" style={{ color: 'var(--brand-blue)' }}>{c.after}</div>
                    <div className="font-ibm text-xs" style={{ color: 'var(--brand-gray-mid)' }}>{c.unit}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'var(--brand-gray-light)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">Хотите такие же результаты?</h2>
          <p className="font-ibm text-base mb-8" style={{ color: 'var(--brand-gray)' }}>
            Расскажите о вашем бизнесе — составим индивидуальную стратегию продвижения.
          </p>
          <Link to="/kontakty" className="btn-primary inline-flex items-center gap-2">
            Обсудить мой проект <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
