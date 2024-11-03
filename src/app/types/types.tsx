interface Project {
  name: string;
  description: string;
  category: string;
}

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  title: string;
  role: string;
  duration: string;
  location?: string; 
}
