import React from 'react';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
import { Youtube, Github, Instagram, Terminal, ExternalLink, Smartphone } from 'lucide-react';

interface ProjectItem {
  title: string;
  badge: string;
  description: string;
  playStoreUrl: string;
  githubUrl: string;
  tech: string[];
  borderStyle: string;
}

interface SocialLink {
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
}

const featuredProjects: ProjectItem[] = [
  {
    title: 'Impostor Royale',
    badge: 'Google Play / Producción',
    description: 'Juego móvil nativo de deducción social offline (Pass & Play) para 3 a 10 jugadores en un solo dispositivo, sin requerir conexión a internet ni registros.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.impostor.royale',
    githubUrl: 'https://github.com/FranyelPacheco/impostor-royale-privacy',
    tech: ['TypeScript', 'React Native', 'Expo Router', 'AsyncStorage'],
    borderStyle: 'border-blue-500/30 bg-[#0C111E]/90',
  },
  {
    title: "Pa' que sufras",
    badge: 'Google Play / Producción',
    description: 'Party game móvil de tensión social con más de 750 preguntas curadas, animaciones nativas a 60 fps con Reanimated 4, almacenamiento persistente en C++ mediante MMKV y suite de pruebas unitarias con Jest.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.franyel_pacheco.paquesufras',
    githubUrl: 'https://github.com/FranyelPacheco/Pa-que-sufras',
    tech: ['TypeScript', 'React Native', 'Expo', 'Reanimated 4', 'MMKV', 'Jest'],
    borderStyle: 'border-rose-500/30 bg-[#0C111E]/90',
  },
];

const socialLinks: SocialLink[] = [
  {
    title: 'YouTube (@Programadorencamino)',
    subtitle: 'Tutoriales técnicos, arquitectura de software y build in public',
    url: 'https://www.youtube.com/@Programadorencamino',
    icon: <Youtube className="text-blue-400" size={20} />,
  },
  {
    title: 'TikTok (@programadorencamino)',
    subtitle: 'Desarrollo web, reviews de herramientas y cultura dev',
    url: 'https://www.tiktok.com/@programadorencamino',
    icon: <Terminal className="text-blue-400" size={20} />,
  },
  {
    title: 'Instagram (@programadorencamino)',
    subtitle: 'Avances de proyectos, decisiones de arquitectura y día a día',
    url: 'https://www.instagram.com/programadorencamino/?hl=es',
    icon: <Instagram className="text-blue-400" size={20} />,
  },
  {
    title: 'GitHub (FranyelPacheco)',
    subtitle: 'Código fuente abierto, proyectos y experimentos',
    url: 'https://github.com/FranyelPacheco',
    icon: <Github className="text-blue-400" size={20} />,
  },
];

export const BioLinkPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#06080E] text-white flex flex-col items-center px-4 py-12 relative overflow-hidden font-sans selection:bg-blue-600 selection:text-white">
      {/* Fondo con halo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-blue-600/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Header del Perfil */}
      <header className="relative z-10 flex flex-col items-center text-center max-w-md w-full mb-8">
        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-slate-800 shadow-xl mb-4">
          <img
            src={`${BASE}/avatar.png`}
            alt="Logo de Programador en camino: foto del creador con corchetes de código"
            className="w-full h-full object-cover rounded-full bg-[#0C111E]"
          />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Programador en camino</h1>
        <p className="text-xs font-mono text-blue-400 mb-3 tracking-wide">@programadorencamino</p>
        <p className="text-sm text-slate-300 max-w-xs leading-relaxed">
          Web, apps e IA sin humo. Código real con humor.
        </p>
      </header>

      {/* SECCION 1: PROYECTOS EN PRODUCCION */}
      <section className="relative z-10 max-w-md w-full mb-6">
        <div className="mb-3 px-1">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
            Proyectos en Producción
          </h2>
        </div>

        <div className="space-y-3.5">
          {featuredProjects.map((proj) => (
            <article
              key={proj.title}
              className={`p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 motion-reduce:transition-none ${proj.borderStyle}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                  {proj.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1">{proj.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{proj.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={proj.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <Smartphone size={14} />
                  <span>Google Play</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#06080E] hover:bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <Github size={14} />
                  <span>Repositorio</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECCION 2: ENLACES Y COMUNIDAD */}
      <section className="relative z-10 max-w-md w-full mb-8">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 px-1">
          Plataformas
        </h2>
        <div className="space-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#0C111E]/80 border border-slate-800/80 hover:bg-[#141C30] hover:border-blue-500/30 transition-all duration-300 motion-reduce:transition-none backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#06080E] border border-white/5">
                  {link.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-slate-400 font-normal">{link.subtitle}</div>
                </div>
              </div>
              <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-300 transition-all" />
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs text-slate-500 font-mono">
        <p className="text-slate-400 mb-1">Hoy programamos bien, pero mañana lo haremos mejor.</p>
        <p>&copy; {new Date().getFullYear()} Programador en camino</p>
      </footer>
    </main>
  );
};

export default BioLinkPage;
