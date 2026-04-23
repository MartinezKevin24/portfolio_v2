export const defaultLang = 'es' as const;

export const ui = {
  es: {
    'meta.title': 'Kevin Martínez - Desarrollador Front-End',
    'presentation.greeting': 'Aló, ¡bienvenido!',
    'presentation.bio': 'Soy <strong>Kevin Martínez</strong>, Ingeniero de sistemas y desarrollador fullstack. Me encanta la música, bailar, los juegos de mesa y crear soluciones.',
    'cta.title': 'Trabajemos',
    'cta.highlight': '¡juntos!',
    'cta.button': 'Contáctame',
    'resume.title': 'CV / Resume',
    'project.back': '← Proyectos',
    'project.visit': 'Ver sitio →',
    'project.role': 'Rol',
    'project.tech': 'Tecnologías',
    'project.highlights': 'Lo que hice',
    'project.images': 'Capturas',
  },
  en: {
    'meta.title': 'Kevin Martínez - Front-End Developer',
    'presentation.greeting': 'Aló, welcome!',
    'presentation.bio': "I'm <strong>Kevin Martínez</strong>, Systems Engineer and Fullstack Developer. I love music, dancing, board games, and creating solutions.",
    'cta.title': "Let's build it",
    'cta.highlight': 'together!',
    'cta.button': 'Contact me',
    'resume.title': 'CV / Resume',
    'project.back': '← Projects',
    'project.visit': 'Visit site →',
    'project.role': 'Role',
    'project.tech': 'Tech Stack',
    'project.highlights': 'What I did',
    'project.images': 'Screenshots',
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: TranslationKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
