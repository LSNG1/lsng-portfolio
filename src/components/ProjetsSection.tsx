"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import supabase from '../supabaseClient';

type Project = {
  name: string;
  description: string;
  category: string;
};

export default function ProjetsSection() {
  const [projets, setProjets] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjets();
  }, []);

  const fetchProjets = async () => {
    try {
      const { data: projectsData } = await supabase.from('projects').select('*');
      setProjets(projectsData ?? []);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section id="projets" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Projets Légendaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projets.map((projet, index) => (
            <Card key={index} className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>{projet.name}</CardTitle>
                <CardDescription>{projet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Catégorie:</h4>
                <p>{projet.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
