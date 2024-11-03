"use client";

import { useState, useEffect } from 'react';
import { DownloadIcon, GithubIcon, LinkedinIcon, TwitterIcon, MenuIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from '@supabase/supabase-js';
import emailjs from '@emailjs/browser';

const supabase = createClient('https://bamezldmqavuiqkxodvr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhbWV6bGRtcWF2dWlxa3hvZHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2Mzc5OTQsImV4cCI6MjA0NjIxMzk5NH0.fjAU_lZEnuKsgo7wQL6K_43KfrbkgulpfiLu-M8nhcA');

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [menuOpen, setMenuOpen] = useState(false);
const [projets, setProjets] = useState<Project[]>([]);
const [competences, setCompetences] = useState<Skill[]>([]);
const [parcours, setParcours] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'apprentissage', 'projets', 'competences', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [{ data: projectsData }, { data: skillsData }, { data: experienceData }] = await Promise.all([
        supabase.from('projects').select('*'),
        supabase.from('skills').select('*'),
        supabase.from('experience').select('*')
      ]);

      setProjets(projectsData ?? []);
      setCompetences(skillsData ?? []);
      setParcours(experienceData ?? []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const getTierColor = (level: number) => {
  const colors: { [key: number]: string } = {
    5: 'bg-purple-500',
    4: 'bg-red-500',
    3: 'bg-orange-500',
    2: 'bg-yellow-500',
    1: 'bg-green-500',
  };
  return colors[level] || 'bg-gray-500';
};

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');

    emailjs.send(
      'service_2ykbyfa',
      'template_6kh9xoj',
      form,
      'JcOYtqleSIffUMR6N'
    )
      .then((result) => {
        setFormStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setFormStatus('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-blue-600">LSNG</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['introduction', 'apprentissage', 'projets', 'competences', 'contact'].map((sectionId) => (
                  <button
                    key={sectionId}
                    onClick={() => scrollToSection(sectionId)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === sectionId ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                  >
                    {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3">
            {['introduction', 'apprentissage', 'projets', 'competences', 'contact'].map((sectionId) => (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === sectionId ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-16">
        <section id="introduction" className="min-h-screen flex items-center justify-center bg-[url('/lol-background-light.jpg')] bg-cover bg-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white bg-opacity-90 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">Le-Savio NGUYEN</h1>
            <p className="mb-6 text-lg">
              Bienvenue dans mon portfolio. Je suis un Développeur Web formé à la Web@cadémie, créant des expériences numériques.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="outline" asChild>
                <a href="/Profile.pdf" download>
                  <DownloadIcon className="mr-2 h-4 w-4" /> Télécharger CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/lsng1" target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/lsng/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
			  <Card className="bg-blue-50 border-blue-200">
							<CardHeader>
								<CardTitle>À propos de l'Invocateur</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									Tel un champion dans la Faille, j'ai affiné mes compétences à travers d'innombrables batailles contre les bugs et les fonctionnalités.
									Mon voyage a commencé dans les voies du HTML et du CSS, a évolué à travers la jungle du JavaScript,
									et maintenant je commande un arsenal diversifié de technologies pour créer de puissantes applications web.
								</p>
							</CardContent>
						</Card>
            </div>
          </div>
        </section>

        <section id="apprentissage" className="min-h-screen flex items-center justify-center bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-600 text-center">Parcours d'Apprentissage</h2>
            <div className="flex space-x-8 py-4">
              {parcours.map((item, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <div className="relative flex flex-col items-center">
                    {index < parcours.length - 1 && (
                      <div className="absolute left-1/2 w-20 h-1 bg-blue-500 transform -translate-y-8 -translate-x-1/2"></div>
                    )}
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <Card className="w-80 bg-white border-blue-200 shadow-lg text-left">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.duration}</p>
                        {item.location && <p className="text-gray-600">Location: {item.location}</p>}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projets" className="min-h-screen flex items-center justify-center bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">Projets Légendaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(projets) && projets.map((projet, index) => (
                <Card key={index} className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle>{projet.name}</CardTitle>
                    <CardDescription>{projet.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">Category:</h4>
                    <p>{projet.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="competences" className="min-h-screen flex items-center justify-center bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">Capacités de Champion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.isArray(competences) && competences.map((competence, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${getTierColor(competence.level)}`}>
                    {competence.level}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold">{competence.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
      </main>

      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2024 LSNG. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
