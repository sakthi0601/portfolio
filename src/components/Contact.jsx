import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';
import { sendContactEmail } from '../service/emailService';

const InputField = ({ label, name, type = 'text', value, onChange, placeholder, rows }) => {
  const [focused, setFocused] = useState(false);
  const baseStyle = {
    background: '#FFF5F5',
    border: `1px solid ${focused ? '#DC2626' : '#F0E0E0'}`,
    color: '#111111',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused ? '0 0 0 3px rgba(220,38,38,0.10)' : 'none',
    outline: 'none',
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: '#333333' }}>{label}</label>
      {rows ? (
        <textarea name={name} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder} rows={rows} className="w-full rounded-xl px-4 py-3 text-sm resize-none" style={baseStyle} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder} className="w-full rounded-xl px-4 py-3 text-sm" style={baseStyle} />
      )}
    </div>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    const result = await sendContactEmail(form);
    if (result.success) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); }
    else setStatus('error');
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactItems = [
    { icon: '📧', label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: '📱', label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: '📍', label: 'Location', value: PERSONAL_INFO.location, href: null },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border" style={{ color: '#DC2626', border: '1px solid rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.06)' }}>
              Let's Connect
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2" style={{ color: '#111111' }}>
              Get In Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#666666' }}>
              Have an opportunity or project in mind? I'd love to hear from you.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div variants={fadeInLeft} className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold mb-6" style={{ color: '#111111' }}>Contact Information</h3>
              {contactItems.map((item) => (
                <motion.div key={item.label} whileHover={{ scale: 1.02 }} className="rounded-xl p-4 border flex items-start gap-4 transition-all" style={{ background: '#FFFFFF', border: '1px solid #F0E0E0' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(220,38,38,0.08)' }}>{item.icon}</div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: '#666666' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:underline" style={{ color: '#111111' }}>{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: '#111111' }}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Red accent card */}
              <div className="rounded-2xl p-6 mt-6" style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)', color: '#FFFFFF' }}>
                <h4 className="font-bold mb-2">Open to Opportunities</h4>
                <p className="text-sm opacity-85 leading-relaxed">Currently open to full-time roles, freelance projects, and collaborations in full stack development.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="lg:col-span-3">
              <div className="rounded-2xl p-6 sm:p-8 border" style={{ background: '#FFFFFF', border: '1px solid #F0E0E0', boxShadow: '0 4px 24px rgba(220,38,38,0.06)' }}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="Your Name" name="name" value={form.name} onChange={handleChange} placeholder="Sakthi P" />
                    <InputField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                  <InputField label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Opportunity / Collaboration" />
                  <InputField label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the project or opportunity..." rows={5} />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all"
                    style={{ background: status === 'loading' ? '#EF4444' : '#DC2626', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(220,38,38,0.3)' }}
                  >
                    {status === 'loading' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
                  </motion.button>

                  {status === 'error' && <p className="text-sm text-center" style={{ color: '#DC2626' }}>Something went wrong. Please try again.</p>}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
