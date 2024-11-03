"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import supabase from '../supabaseClient';

type Experience = {
  title: string;
  role: string;
  duration: string;
  location?: string;
};

export default function ApprentissageSection() {
  const [parcours, setParcours] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchParcours();
  }, []);

  const fetchParcours = async () => {
    try {
      const { data: experienceData } = await supabase.from('experience').select('*');
      setParcours(experienceData ?? []);
    } catch (error) {
      console.error('Error fetching experience data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
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
                    {item.location && <p className="text-gray-600">Lieu: {item.location}</p>}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
