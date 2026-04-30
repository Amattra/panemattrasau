'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Grazie per il tuo messaggio! Ti risponderemo al pi presto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-brown/20 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
            placeholder="Mario Rossi"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-brown/20 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
            placeholder="mario@esempio.it"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brown mb-2">
          Telefono
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brown/20 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
          placeholder="+39 333 1234567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brown mb-2">
          Messaggio *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brown/20 bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors resize-none"
          placeholder="Scrivi il tuo messaggio..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-4 bg-terracotta text-cream rounded-full font-semibold text-lg hover:bg-brown transition-colors shadow-lg shadow-terracotta/20"
      >
        Invia Messaggio
      </button>
    </form>
  );
}
