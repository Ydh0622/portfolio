import { Layers, Cpu, Wrench } from 'lucide-react';

export const AboutSection = () => {
  const skills = [
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: 'Frontend Core',
      items: ['React 18 / 19', 'TypeScript', 'Vite', 'React Router v7'],
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      title: 'State & Styling',
      items: ['Zustand', 'Tailwind CSS', 'Vanilla Extract', 'styled-components', 'Framer Motion'],
    },
    {
      icon: <Wrench className="w-5 h-5 text-indigo-600" />,
      title: 'Architecture & Tools',
      items: ['Electron (IPC)', 'Axios', 'Git / GitHub', 'Vercel'],
    },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Competencies & Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.title}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-4">
                {group.icon}
                <h3 className="font-bold text-gray-900">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};