"use client";

import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';

type Skill = {
  name: string;
  level: number;
};

export default function CompetencesSection() {
  const [competences, setCompetences] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompetences();
  }, []);

  const fetchCompetences = async () => {
    try {
      const { data: skillsData } = await supabase.from('skills').select('*');
      setCompetences(skillsData ?? []);
    } catch (error) {
      console.error('Error fetching skills data:', error);
    } finally {
      setLoading(false);
    }
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

  if (loading) return <p>Loading...</p>;

  return (
    <section id="competences" className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Capacités de Champion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competences.map((competence, index) => (
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
  );
}
