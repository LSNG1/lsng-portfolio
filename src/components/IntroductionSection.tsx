"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function IntroductionSection() {
  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center bg-cover bg-center">
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
        </div>
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
    </section>
  );
}
