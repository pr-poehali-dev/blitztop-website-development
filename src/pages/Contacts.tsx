import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
            Мы на связи
          </span>
          <h1 className="font-montserrat font-900 text-5xl md:text-6xl text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Контакты
          </h1>
          <p className="font-ibm text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Свяжитесь любым удобным способом. Отвечаем в течение 2 часов в рабочее время.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left: info */}
            <div>
              <span className="section-tag">Как с нами связаться</span>
              <span className="divider-blue" />
              <h2 className="section-title">Готовы обсудить ваш проект</h2>
              <p className="font-ibm text-base leading-relaxed mb-10" style={{ color: 'var(--brand-gray)' }}>
                Оставьте заявку или позвоните напрямую. Первичная консультация бесплатна — расскажем о потенциале вашего сайта.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: 'Phone', title: 'Телефон', val: '+7 906 420-54-20', href: 'tel:+79064205420' },
                  { icon: 'Mail', title: 'Email', val: 'info@blitztop.ru', href: 'mailto:info@blitztop.ru' },
                  { icon: 'MapPin', title: 'Адрес', val: 'Москва, Россия. Работаем по всей стране.', href: undefined },
                  { icon: 'Clock', title: 'Режим работы', val: 'Пн–Пт: 9:00–19:00 МСК', href: undefined },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-sm flex-shrink-0"
                      style={{ background: 'var(--brand-gray-light)' }}
                    >
                      <Icon name={item.icon as 'Phone'} size={18} style={{ color: 'var(--brand-blue)' }} />
                    </div>
                    <div>
                      <div className="font-ibm text-xs mb-1" style={{ color: 'var(--brand-gray-mid)' }}>{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="font-montserrat font-600 text-base transition-colors" style={{ color: 'var(--brand-gray-dark)' }}>
                          {item.val}
                        </a>
                      ) : (
                        <span className="font-montserrat font-600 text-base" style={{ color: 'var(--brand-gray-dark)' }}>{item.val}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-montserrat font-700 text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--brand-gray-mid)', letterSpacing: '0.15em' }}>
                  Мессенджеры и соцсети
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: 'Send', label: 'Telegram', href: 'https://t.me/blitztop' },
                    { icon: 'MessageCircle', label: 'ВКонтакте', href: 'https://vk.com/blitztop' },
                    { icon: 'Globe', label: 'MAX / ОК', href: 'https://ok.ru/blitztop' },
                  ].map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-sm font-ibm text-sm font-500 transition-all duration-150 border"
                      style={{
                        borderColor: 'var(--brand-gray-light)',
                        color: 'var(--brand-gray)',
                        background: 'white',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-blue)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--brand-blue)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand-gray-light)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--brand-gray)';
                      }}
                    >
                      <Icon name={s.icon as 'Send'} size={14} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="p-8 md:p-10 rounded-sm border" style={{ borderColor: 'var(--brand-gray-light)' }}>
                <h3 className="font-montserrat font-700 text-xl mb-2" style={{ color: 'var(--brand-gray-dark)' }}>
                  Оставить заявку
                </h3>
                <p className="font-ibm text-sm mb-6" style={{ color: 'var(--brand-gray-mid)' }}>
                  Ответим в течение 2 часов в рабочее время
                </p>

                {sent ? (
                  <div className="text-center py-12">
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4"
                      style={{ background: 'rgba(26,111,196,0.1)' }}
                    >
                      <Icon name="CheckCircle" size={28} style={{ color: 'var(--brand-blue)' }} />
                    </div>
                    <h4 className="font-montserrat font-700 text-lg mb-2" style={{ color: 'var(--brand-gray-dark)' }}>Заявка отправлена!</h4>
                    <p className="font-ibm text-sm" style={{ color: 'var(--brand-gray)' }}>Мы свяжемся с вами в течение 2 часов.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-ibm text-xs mb-2" style={{ color: 'var(--brand-gray-mid)' }}>Ваше имя *</label>
                      <input
                        type="text"
                        placeholder="Иван Иванов"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="input-field"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-ibm text-xs mb-2" style={{ color: 'var(--brand-gray-mid)' }}>Телефон *</label>
                        <input
                          type="tel"
                          placeholder="+7 (999) 000-00-00"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-ibm text-xs mb-2" style={{ color: 'var(--brand-gray-mid)' }}>Email</label>
                        <input
                          type="email"
                          placeholder="mail@example.ru"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-ibm text-xs mb-2" style={{ color: 'var(--brand-gray-mid)' }}>Сообщение</label>
                      <textarea
                        placeholder="Опишите вашу задачу или укажите URL сайта..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={4}
                        className="input-field resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Отправить заявку
                    </button>
                    <p className="font-ibm text-xs text-center" style={{ color: 'var(--brand-gray-mid)' }}>
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
