"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Envoi en cours...');

    emailjs.send(
      'service_2ykbyfa',
      'template_6kh9xoj',
      form,
      'JcOYtqleSIffUMR6N'
    )
      .then(() => {
        setFormStatus('Message envoyé avec succès !');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setFormStatus('Échec de l\'envoi du message. Veuillez réessayer plus tard.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Invoquez-moi</h2>
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle>Formulaire de Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleFormChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Envoyer le Message</Button>
            </form>
            {formStatus && <p className="mt-4 text-center text-sm text-gray-600">{formStatus}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
