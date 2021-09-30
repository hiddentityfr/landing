import { Section } from '../layout/Section';

const members = [
  {
    name: 'Yann Sainson',
    role: 'CEO',
  },
  {
    name: 'Antoine Ordonez',
    role: 'CTO',
  },
  {
    name: 'Ioannis Kesisoglou',
    role: 'Développeur Mobile',
  },
  {
    name: 'Quentin Flayac',
    role: 'Développeur Fontend',
  },
  {
    name: 'Antonin Rieux',
    role: 'Développeur Backend',
  },
  {
    name: 'Adrien Colombier',
    role: 'Développeur Fontend',
  },
];

const Team = () => (
  <Section
    title="L'équipe"
    description="6 personnes qui se sont données le défi de révolutionner le recrutement."
  >
    <div className="grid grid-cols-3">
      {members.map(({ name, role }) => (
        <div key={name}>
          <h3 className="text-3xl text-gray-900 font-semibold">{name}</h3>
          <div className="text-xl leading-9">{role}</div>
        </div>
      ))}
    </div>
  </Section>
);

export { Team };
