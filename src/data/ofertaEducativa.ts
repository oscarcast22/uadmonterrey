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
      { nombre: 'Enfermería', pdf: '/planes-de-estudio/PLAN_ENFERMERIA.jpg' },
      { nombre: 'Fisioterapia', pdf: '/planes-de-estudio/PLAN_FISIO.jpg' },
      { nombre: 'Medicina General', pdf: '/planes-de-estudio/PLAN_MEDICINA.jpg' },
      { nombre: 'Nutrición', pdf: '/planes-de-estudio/PLAN_NUTRICION.jpg' },
      { nombre: 'Odontología', pdf: '/planes-de-estudio/PLAN_ODONTOLOGIA.jpg' },
      { nombre: 'Psicología', pdf: '/planes-de-estudio/PLAN_PSICOLOGIA.jpg' },
    ],
  },
  {
    nombre: 'Ing. y Tecnología',
    colorVar: '--color-ing-tecnologia',
    carreras: [
      { nombre: 'Ing. Biomédica', pdf: '/planes-de-estudio/PLAN_BIOMEDICA.jpg' },
      { nombre: 'Ing. Inteligencia Artificial y Seguridad de Software', pdf: '/planes-de-estudio/PLAN_ING-IA.jpg' },
      { nombre: 'Ing. Seguridad Industrial y Laboral', pdf: '/planes-de-estudio/ingenieria/ing-seguridad-industrial.pdf' },
      { nombre: 'Ing. Industrial', pdf: '/planes-de-estudio/PLAN_INGENIERIA INDUSTRIAL.jpg' },
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
      { nombre: 'Cosmetología', pdf: '/planes-de-estudio/PLAN_COSME.jpg' },
    ],
  },
  {
    nombre: 'Jurídica',
    colorVar: '--color-juridica',
    carreras: [
      { nombre: 'Criminología', pdf: '/planes-de-estudio/PLAN_CRIMINOLOGIA.jpg' },
    ],
  },
];
