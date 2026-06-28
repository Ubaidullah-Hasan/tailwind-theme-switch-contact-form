// src/components/ContactForm.jsx
import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    
    // Success simulation
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const inputClasses = "input-field"; // from index.css
  const labelClasses = "block text-sm font-medium text-[hsl(var(--text-muted-hsl))] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelClasses}>Name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--text-muted-hsl))]" aria-hidden="true" />
          <input
            id="name" type="text" autoComplete="name"
            className={`${inputClasses} pl-10 ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
            value={formData.name}
            onChange={e => setFormData(d => ({...d, name: e.target.value}))}
            placeholder="Your name"
            disabled={status === 'loading'}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </div>
        {errors.name && <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--text-muted-hsl))]" aria-hidden="true" />
          <input
            id="email" type="email" autoComplete="email"
            className={`${inputClasses} pl-10 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            value={formData.email}
            onChange={e => setFormData(d => ({...d, email: e.target.value}))}
            placeholder="you@example.com"
            disabled={status === 'loading'}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </div>
        {errors.email && <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[hsl(var(--text-muted-hsl))]" aria-hidden="true" />
          <textarea
            id="message" rows={5}
            className={`${inputClasses} pl-10 resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
            value={formData.message}
            onChange={e => setFormData(d => ({...d, message: e.target.value}))}
            placeholder="Your message..."
            disabled={status === 'loading'}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'msg-error' : undefined}
          />
        </div>
        {errors.message && <p id="msg-error" className="mt-1 text-sm text-red-500" role="alert">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
        disabled={status === 'loading'}
      >
        {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
        {status === 'success' && <CheckCircle className="w-5 h-5" />}
        {status === 'error' && <AlertCircle className="w-5 h-5" />}
        <span>
          {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
        </span>
      </button>

      {status === 'success' && (
        <p className="text-center text-sm text-emerald-500 animate-fade-in" role="status">
          Message sent successfully! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-500" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}