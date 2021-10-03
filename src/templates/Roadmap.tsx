import { Section } from '../layout/Section';

const Roadmap = () => (
  <Section title="À venir">
    <div className="text-3xl">
      <li className="text-primary-500 font-semibold list-disclosure">
        Première bêta disponible (chercheurs d&apos;emploi et recruteurs) - 2021
      </li>
      <li className="list-disc">Déploiement grand public - À venir</li>
    </div>
  </Section>
);

export { Roadmap };
