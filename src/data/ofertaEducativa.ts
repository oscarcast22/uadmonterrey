export interface Carrera {
  nombre: string;
  pdf: string;
}

export interface Area {
  nombre: string;
  colorVar: string;
  carreras: Carrera[];
}

export const areas: Area[] = [
  {
    nombre: 'Salud',
    colorVar: '--color-salud',
    carreras: [
      { nombre: 'Enfermería', pdf: '/planes-de-estudio/salud/enfermeria.pdf' },
      { nombre: 'Fisioterapia', pdf: '/planes-de-estudio/salud/fisioterapia.pdf' },
      { nombre: 'Medicina General', pdf: '/planes-de-estudio/salud/medicina-general.pdf' },
      { nombre: 'Nutrición', pdf: '/planes-de-estudio/salud/nutricion.pdf' },
      { nombre: 'Odontología', pdf: '/planes-de-estudio/salud/odontologia.pdf' },
      { nombre: 'Psicología', pdf: '/planes-de-estudio/salud/psicologia.pdf' },
    ],
  },
  {
    nombre: 'Ing. y Tecnología',
    colorVar: '--color-ing-tecnologia',
    carreras: [
      { nombre: 'Ing. Biomédica', pdf: '/planes-de-estudio/ingenieria/ing-biomedica.pdf' },
      { nombre: 'Ing. Inteligencia Artificial y Seguridad de Software', pdf: '/planes-de-estudio/ingenieria/ing-ia-seguridad.pdf' },
      { nombre: 'Ing. Seguridad Industrial y Laboral', pdf: '/planes-de-estudio/ingenieria/ing-seguridad-industrial.pdf' },
      { nombre: 'Ing. Industrial', pdf: '/planes-de-estudio/ingenieria/ing-industrial.pdf' },
    ],
  },
  {
    nombre: 'Comercio',
    colorVar: '--color-comercio',
    carreras: [
      { nombre: 'Administración de Negocios', pdf: '/planes-de-estudio/comercio/administracion-negocios.pdf' },
    ],
  },
  {
    nombre: 'Bienestar',
    colorVar: '--color-bienestar',
    carreras: [
      { nombre: 'Cosmetología', pdf: '/planes-de-estudio/bienestar/cosmetologia.pdf' },
    ],
  },
];
