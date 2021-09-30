import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="La première bêta d'Hiddentity est disponible."
      subtitle="N'attendez plus, et rejoignez-nous dès aujourd'hui."
      button={
        <Link href="#join">
          <a>
            <Button>Rejoindre la beta</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
