import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function ContactForm({
  title = 'Получите бесплатную консультацию',
  subtitle = 'Оставьте заявку — мы свяжемся в течение 30 минут и ответим на все вопросы.',
  dark = false,
}: ContactFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const bg = dark ? 'var(--brand-gray-dark)' : 'var(--brand-blue)';
  const cardBg = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.12)';

  return (
    <section style={{ background: bg }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="block font-montserrat font-600 text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em' }}>
              Бесплатно
            </span>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="font-ibm text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {subtitle}
            </p>
            <div className="space-y-4">
              {[
                { icon: 'CheckCircle', text: 'Аудит сайта в подарок' },
                { icon: 'CheckCircle', text: 'Анализ конкурентов по вашей нише' },
                { icon: 'CheckCircle', text: 'Прогноз роста позиций' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon name={item.icon as 'CheckCircle'} size={16} style={{ color: '#7dd3fc', flexShrink: 0 }} />
                  <span className="font-ibm text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-sm p-8" style={{ background: cardBg, border: '1px solid rgba(255,255,255,0.12)' }}>
            {sent ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <Icon name="Check" size={28} className="text-white" />
                </div>
                <h3 className="font-montserrat font-700 text-white text-xl mb-2">Заявка принята!</h3>
                <p className="font-ibm text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Свяжемся с вами в течение 30 минут.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-ibm text-xs mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm font-ibm text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block font-ibm text-xs mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm font-ibm text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block font-ibm text-xs mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Ваш сайт или комментарий
                  </label>
                  <textarea
                    placeholder="https://yoursite.ru или опишите задачу..."
                    value={form.comment}
                    onChange={e => setForm({ ...form, comment: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 rounded-sm font-ibm text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-montserrat font-700 text-sm uppercase tracking-widest rounded-sm transition-all duration-200"
                  style={{
                    background: 'white',
                    color: 'var(--brand-blue)',
                    letterSpacing: '0.12em',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--brand-gray-light)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'white';
                  }}
                >
                  Получить консультацию
                </button>
                <p className="font-ibm text-xs text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
