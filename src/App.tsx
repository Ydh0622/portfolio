import { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, Monitor } from 'lucide-react';
import { projectsData, type Project } from './data/projectsData';
import { GithubIcon } from './components/GithubIcon';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-gray-900 tracking-tight">
            Portfolio<span className="text-indigo-600">.</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">
              Contact
            </a>
            <a
              href="https://github.com/Ydh0622"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />

        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Projects</h2>
            <p className="text-gray-600 mt-2">
              실무 도메인 아키텍처 설계와 사용자 문제 해결 과정을 담은 핵심 프로젝트입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 border-b border-gray-100">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.themeColor} p-6 flex flex-col justify-between text-white`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="px-2.5 py-1 text-xs font-semibold bg-white/20 backdrop-blur-xs rounded-full">
                            {project.category}
                          </span>
                          <Monitor className="w-5 h-5 text-white/70" />
                        </div>
                        <div>
                          <p className="text-xs text-white/80 font-medium mb-1">{project.period}</p>
                          <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-full">
                        {project.team}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">{project.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm font-semibold text-indigo-600 mb-4">{project.subtitle}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2.5">
                        주요 구현 기능
                      </p>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-indigo-500 font-bold">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 py-4 bg-gray-50/60 border-t border-gray-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    아키텍처 & 트러블슈팅 보기
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                    >
                      <GithubIcon className="w-4 h-4" /> GitHub
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" /> 발표자료
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ExperienceSection />
      </main>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <Footer />
    </div>
  );
}