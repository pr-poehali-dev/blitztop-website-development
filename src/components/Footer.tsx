import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const services = [
  { label: 'Продвижение в Яндекс и Google', href: '/prodvizhenie' },
  { label: 'SEO-оптимизация', href: '/seo' },
  { label: 'Контент-маркетинг', href: '/kontent' },
  { label: 'Разработка сайтов', href: '/razrabotka' },
];

const company = [
  { label: 'О компании', href: '/#about' },
  { label: 'Кейсы', href: '/keisy' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/kontakty' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--brand-gray-dark)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-sm text-white font-montserrat font-800 text-sm"
                style={{ background: 'var(--brand-blue)' }}
              >
                BT
              </div>
              <span className="font-montserrat font-800 text-base text-white" style={{ letterSpacing: '-0.01em' }}>
                BLITZTOP<span style={{ color: 'var(--brand-blue-light)' }}>.RU</span>
              </span>
            </Link>
            <p className="font-ibm text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Экспертное SEO-продвижение сайтов в ТОП Яндекса и Google с 2017 года.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/blitztop"
                className="flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-150"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                title="Telegram"
              >
                <Icon name="Send" size={14} style={{ color: 'rgba(255,255,255,0.6)' }} />
              </a>
              <a
                href="https://vk.com/blitztop"
                className="flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-150"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                title="ВКонтакте"
              >
                <span className="font-montserrat font-700 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>VK</span>
              </a>
              <a
                href="https://ok.ru/blitztop"
                className="flex items-center justify-center w-9 h-9 rounded-sm transition-all duration-150"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                title="MAX"
              >
                <span className="font-montserrat font-700 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>МХ</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm mb-5 uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
              Услуги
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="font-ibm text-sm transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm mb-5 uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
              Компания
            </h4>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c.href}>
                  <Link
                    to={c.href}
                    className="font-ibm text-sm transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-sm mb-5 uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
              Контакты
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+79064205420"
                className="flex items-center gap-3 font-ibm text-sm transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                <Icon name="Phone" size={14} style={{ color: 'var(--brand-blue-light)' }} />
                +7 906 420-54-20
              </a>
              <a
                href="mailto:info@blitztop.ru"
                className="flex items-center gap-3 font-ibm text-sm transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                <Icon name="Mail" size={14} style={{ color: 'var(--brand-blue-light)' }} />
                info@blitztop.ru
              </a>
              <div className="flex items-start gap-3 font-ibm text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Icon name="MapPin" size={14} style={{ color: 'var(--brand-blue-light)', marginTop: 2, flexShrink: 0 }} />
                Москва, Россия. Работаем по всей стране.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-ibm text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2017–2026 BLITZTOP.RU. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-ibm text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Политика конфиденциальности
            </a>
            <a href="#" className="font-ibm text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}