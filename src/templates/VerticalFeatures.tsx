import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Une solution aux problèmes d'aujourdhui"
    description={
      <>
        En France, une personne sur trois au sein de la population active déclare avoir été discriminée dans
        l&apos;emploi, et une personne sur cinq lors d&apos;une recherche d&apos;emploi.
        <br />
        <br />
        C&apos;est pourquoi nous proposons notre solution, hiddentity. Notre objectif est de réduire la discrimination à
        l&apos;embauche tout en améliorant et simplifiant les différentes étapes de la recherche d&apos;emploi ainsi que
        du processus de recrutement.
      </>
    }
  >
    <VerticalFeatureRow
      title="Chercheurs d'emploi"
      description="Marre de parcourir des centaines d'offres pour trouver la perle rare ? Via notre application mobile, définissez votre projet de recherche d'emploi en quelques minutes. Une notification vous préviendra lorsqu'une offre d'emploi «match» avec votre projet, vous pourrez accepter ou refuser l'offre proposée en un clic."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Recruteurs"
      description="Nous savons que votre temps est précieux. C’est pourquoi notre intelligence artificielle filtre les candidats afin de ne faire ressortir que les candidats les plus talentueux dans leur domaine."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
