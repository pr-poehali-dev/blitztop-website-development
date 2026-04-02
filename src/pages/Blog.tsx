import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Поведенческие факторы', 'ИИ и SEO', 'Тренды', 'Контент', 'Техническое SEO', 'Аналитика'];

const posts = [
  {
    slug: 'pf-prodazhi-2026',
    title: 'Как ПФ влияют на продажи в 2026?',
    excerpt: 'Разбираем механизмы работы алгоритмов Яндекса и способы удержания внимания пользователей на сайте. Поведенческие факторы сегодня — не опция, а обязательная часть любой SEO-стратегии.',
    tag: 'Поведенческие факторы',
    date: '15 марта 2026',
    readTime: '7 мин',
    featured: true,
  },
  {
    slug: 'ai-seo',
    title: 'Искусственный интеллект в SEO',
    excerpt: 'Как не навредить сайту ИИ-контентом и пройти проверки на анти-спам в современных реалиях поиска. Практические советы по работе с нейросетями.',
    tag: 'ИИ и SEO',
    date: '8 марта 2026',
    readTime: '9 мин',
    featured: true,
  },
  {
    slug: 'trendy-2026',
    title: 'SEO тренды 2026 года',
    excerpt: 'Главные изменения: от голосовых команд до нейро-ответов. К чему готовить бизнес уже сегодня, чтобы не потерять позиции завтра.',
    tag: 'Тренды',
    date: '1 марта 2026',
    readTime: '6 мин',
    featured: false,
  },
  {
    slug: 'seo-vs-kontekst',
    title: 'SEO или Контекст: Что выбрать?',
    excerpt: 'Сравнение двух методов: когда органика выгоднее прямой рекламы и как считать окупаемость. Реальные цифры ROI из наших кейсов.',
    tag: 'Аналитика',
    date: '20 февраля 2026',
    readTime: '8 мин',
    featured: false,
  },
  {
    slug: 'lsi-copywriting',
    title: 'LSI-копирайтинг: новый стандарт',
    excerpt: 'Почему ключевые слова больше не работают и что писать вместо них для попадания в интент. Разбор структуры текста, который нравится и людям, и поисковикам.',
    tag: 'Контент',
    date: '12 февраля 2026',
    readTime: '5 мин',
    featured: false,
  },
  {
    slug: 'tekhnicheskiy-fundament',
    title: 'Технический фундамент сайта',
    excerpt: 'Почему без Core Web Vitals ваш сайт никогда не попадёт в ТОП Google. Инструкция по ускорению и оптимизации технических параметров.',
    tag: 'Техническое SEO',
    date: '5 февраля 2026',
    readTime: '11 мин',
    featured: false,
  },
  {
    slug: 'eeat-meditsina',
    title: 'E-E-A-T факторы для медицины',
    excerpt: 'Как медицинским сайтам соответствовать требованиям Google по экспертности, авторитетности и доверию. Разбор успешного кейса медицинского центра.',
    tag: 'Контент',
    date: '28 января 2026',
    readTime: '8 мин',
    featured: false,
  },
  {
    slug: 'semanticheskoe-yadro',
    title: 'Семантическое ядро в 2026 году',
    excerpt: 'Как правильно собрать и кластеризовать семантику с учётом новых алгоритмов. Инструменты и методики от практикующих SEO-специалистов BLITZTOP.',
    tag: 'Техническое SEO',
    date: '20 января 2026',
    readTime: '10 мин',
    featured: false,
  },
  {
    slug: 'sniippety-yandex',
    title: 'Расширенные сниппеты Яндекса',
    excerpt: 'Как попасть в быстрые ответы и специальные блоки выдачи. Разметка schema.org, FAQ и HowTo — пошаговая инструкция с примерами.',
    tag: 'Поведенческие факторы',
    date: '12 января 2026',
    readTime: '6 мин',
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'Все' || p.tag === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);

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
            Экспертные материалы
          </span>
          <h1 className="font-montserrat font-900 text-5xl md:text-6xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Блог BLITZTOP
          </h1>
          <p className="font-ibm text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Практические статьи о SEO, контент-маркетинге и разработке. Без воды — только рабочие инсайты.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 py-5 px-6 border-b bg-white shadow-sm" style={{ borderColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-ibm text-xs px-4 py-2 rounded-full transition-all duration-150"
                style={{
                  background: activeCategory === cat ? 'var(--brand-blue)' : 'var(--brand-gray-light)',
                  color: activeCategory === cat ? 'white' : 'var(--brand-gray)',
                  fontWeight: activeCategory === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Icon name="Search" size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--brand-gray-mid)' }} />
            <input
              type="text"
              placeholder="Поиск по статьям..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border rounded-full font-ibm text-sm outline-none transition-all duration-200"
              style={{ borderColor: 'var(--brand-gray-light)', background: 'var(--brand-gray-light)', color: 'var(--brand-gray-dark)' }}
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-16 px-6" style={{ background: 'var(--brand-white)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-montserrat font-700 text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--brand-gray-mid)', letterSpacing: '0.2em' }}>
              Рекомендуемые материалы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card block group">
                  <div
                    className="h-3 w-full"
                    style={{ background: 'linear-gradient(90deg, var(--brand-blue) 0%, var(--brand-blue-light) 100%)' }}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-ibm text-xs px-3 py-1 rounded-full"
                        style={{ background: 'rgba(26,111,196,0.08)', color: 'var(--brand-blue)' }}
                      >
                        {post.tag}
                      </span>
                      <span className="font-ibm text-xs" style={{ color: 'var(--brand-gray-mid)' }}>{post.readTime} чтения</span>
                    </div>
                    <h3 className="font-montserrat font-800 text-xl mb-3 leading-snug group-hover:text-brand-blue transition-colors" style={{ color: 'var(--brand-gray-dark)' }}>
                      {post.title}
                    </h3>
                    <p className="font-ibm text-sm leading-relaxed mb-6" style={{ color: 'var(--brand-gray)' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-ibm text-xs" style={{ color: 'var(--brand-gray-mid)' }}>{post.date}</span>
                      <span className="flex items-center gap-1.5 font-montserrat font-600 text-sm" style={{ color: 'var(--brand-blue)' }}>
                        Читать статью <Icon name="ArrowRight" size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {regular.length > 0 && (
            <>
              <h2 className="font-montserrat font-700 text-xs uppercase tracking-widest mb-8" style={{ color: 'var(--brand-gray-mid)', letterSpacing: '0.2em' }}>
                Все материалы
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {regular.map(post => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card block group">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="font-ibm text-xs px-3 py-1 rounded-full"
                          style={{ background: 'var(--brand-gray-light)', color: 'var(--brand-blue)' }}
                        >
                          {post.tag}
                        </span>
                        <span className="font-ibm text-xs" style={{ color: 'var(--brand-gray-mid)' }}>{post.readTime}</span>
                      </div>
                      <h3 className="font-montserrat font-700 text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors" style={{ color: 'var(--brand-gray-dark)' }}>
                        {post.title}
                      </h3>
                      <p className="font-ibm text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: 'var(--brand-gray)' }}>
                        {post.excerpt}
                      </p>
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
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" size={40} style={{ color: 'var(--brand-gray-mid)', margin: '0 auto 16px' }} />
              <p className="font-ibm text-base" style={{ color: 'var(--brand-gray-mid)' }}>Ничего не найдено. Попробуйте изменить запрос.</p>
            </div>
          )}
        </div>
      </section>

      <ContactForm
        title="Нужна SEO-консультация?"
        subtitle="Задайте вопрос экспертам BLITZTOP — мы ответим и расскажем, что поможет именно вашему сайту."
      />
      <Footer />
    </div>
  );
}
