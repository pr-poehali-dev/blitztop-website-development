import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Продвижение в Яндекс и Google', href: '/prodvizhenie' },
  { label: 'SEO-оптимизация', href: '/seo' },
  { label: 'Контент-маркетинг', href: '/kontent' },
  { label: 'Разработка сайтов', href: '/razrabotka' },
  { label: 'Кейсы', href: '/keisy' },
  { label: 'Блог', href: '/blog' },
  { label: 'Контакты', href: '/kontakty' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(v => {
      document.body.style.overflow = !v ? 'hidden' : '';
      return !v;
    });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : 'rgba(255,255,255,0.97)',
          borderBottom: scrolled ? '1px solid #e8edf3' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 24px rgba(26,36,54,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="flex items-center justify-center w-8 h-8 rounded-sm text-white font-montserrat font-800 text-sm"
              style={{ background: 'var(--brand-blue)' }}
            >
              BT
            </div>
            <span
              className="font-montserrat font-800 text-base tracking-tight"
              style={{ color: 'var(--brand-gray-dark)', letterSpacing: '-0.01em' }}
            >
              BLITZTOP
              <span style={{ color: 'var(--brand-blue)' }}>.RU</span>
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Phone */}
            <a
              href="tel:+79064205420"
              className="hidden md:flex items-center gap-2 font-montserrat font-600 text-sm transition-colors duration-150"
              style={{ color: 'var(--brand-gray-dark)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand-blue)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--brand-gray-dark)')}
            >
              <Icon name="Phone" size={14} />
              +7 906 420-54-20
            </a>

            {/* Social icons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://t.me/blitztop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-150"
                style={{ background: 'var(--brand-gray-light)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--brand-blue)', (e.currentTarget.querySelector('svg') as SVGElement)?.setAttribute('stroke', 'white'))}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--brand-gray-light)')}
                title="Telegram"
              >
                <Icon name="Send" size={14} className="text-brand-gray" />
              </a>
              <a
                href="https://vk.com/blitztop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-150"
                style={{ background: 'var(--brand-gray-light)' }}
                title="ВКонтакте"
              >
                <span className="font-montserrat font-700 text-xs" style={{ color: 'var(--brand-gray)' }}>VK</span>
              </a>
              <a
                href="https://ok.ru/blitztop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-sm transition-all duration-150"
                style={{ background: 'var(--brand-gray-light)' }}
                title="ОК / MAX"
              >
                <span className="font-montserrat font-700 text-xs" style={{ color: 'var(--brand-gray)' }}>МХ</span>
              </a>
            </div>

            {/* Burger */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-sm transition-colors"
              style={{ background: menuOpen ? 'var(--brand-blue)' : 'var(--brand-gray-light)' }}
              aria-label="Меню"
            >
              <span
                className="block w-5 h-0.5 transition-all duration-300 origin-center"
                style={{
                  background: menuOpen ? 'white' : 'var(--brand-gray-dark)',
                  transform: menuOpen ? 'rotate(45deg) translateY(4px)' : '',
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{
                  background: menuOpen ? 'white' : 'var(--brand-gray-dark)',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300 origin-center"
                style={{
                  background: menuOpen ? 'white' : 'var(--brand-gray-dark)',
                  transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : '',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile phone bar */}
      <div
        className="fixed top-16 left-0 right-0 z-40 md:hidden flex items-center justify-center gap-4 py-2 px-4"
        style={{ background: 'var(--brand-gray-light)', borderBottom: '1px solid #dde4ed' }}
      >
        <a
          href="tel:+79064205420"
          className="flex items-center gap-2 font-montserrat font-600 text-sm"
          style={{ color: 'var(--brand-gray-dark)' }}
        >
          <Icon name="Phone" size={13} />
          +7 906 420-54-20
        </a>
      </div>

      {/* Nav drawer */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          pointerEvents: menuOpen ? 'all' : 'none',
          opacity: menuOpen ? 1 : 0,
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(26, 36, 54, 0.6)', backdropFilter: 'blur(2px)' }}
          onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
        />

        {/* Panel */}
        <nav
          className="absolute top-0 right-0 bottom-0 w-full max-w-sm flex flex-col transition-transform duration-300"
          style={{
            background: 'var(--brand-gray-dark)',
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          {/* Nav header */}
          <div className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <span className="font-montserrat font-700 text-white text-sm tracking-widest uppercase" style={{ letterSpacing: '0.15em' }}>
              Навигация
            </span>
            <button
              onClick={() => { setMenuOpen(false); document.body.style.overflow = ''; }}
              className="w-8 h-8 flex items-center justify-center rounded-sm transition-colors"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <Icon name="X" size={16} className="text-white" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto py-6">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center justify-between px-8 py-4 font-ibm text-sm transition-all duration-150 group"
                style={{
                  color: location.pathname === item.href ? 'var(--brand-blue-light)' : 'rgba(255,255,255,0.8)',
                  borderLeft: location.pathname === item.href ? '3px solid var(--brand-blue)' : '3px solid transparent',
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = 'white';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = location.pathname === item.href ? 'var(--brand-blue-light)' : 'rgba(255,255,255,0.8)';
                  (e.currentTarget as HTMLElement).style.background = '';
                }}
              >
                {item.label}
                <Icon name="ChevronRight" size={14} style={{ opacity: 0.4 }} />
              </Link>
            ))}
          </div>

          {/* Nav footer */}
          <div className="px-8 py-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <a
              href="tel:+79064205420"
              className="flex items-center gap-3 font-montserrat font-700 text-white text-base mb-4"
            >
              <Icon name="Phone" size={16} style={{ color: 'var(--brand-blue-light)' }} />
              +7 906 420-54-20
            </a>
            <div className="flex gap-3">
              <a href="https://t.me/blitztop" className="flex items-center gap-1.5 text-xs font-ibm px-3 py-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                <Icon name="Send" size={12} /> Telegram
              </a>
              <a href="https://vk.com/blitztop" className="flex items-center gap-1.5 text-xs font-ibm px-3 py-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                VK
              </a>
              <a href="https://ok.ru/blitztop" className="flex items-center gap-1.5 text-xs font-ibm px-3 py-2 rounded-sm" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
                MAX
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
