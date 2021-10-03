import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="mailto:contact@hiddentity.fr">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            Trouvez l&apos;emploi que vous{'\n'}
            <span className="text-primary-500">méritez vraiment</span>
          </>
        }
        description="Notre mission, supprimer les barrières du recrutement."
        button={
          <div className="w-full max-w-md self-center center">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              action="https://hiddentity.us4.list-manage.com/subscribe/post?u=2a2d72067208921b3df7a14f4&amp;id=f28c53000a"
              method="post"
            >
              <div className="justify-items-start">
                <h3 className="text-3xl font-bold text-black">
                  Intéressé(e) par le projet ?
                </h3>
                <p className="text-left my-4">
                  Car ce n&apos;est qu&apos;ensemble que nous pourrons
                  construire l&apos;avenir du recrutement ✋
                </p>
              </div>
              <div className="mb-4 flex items-center">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 mr-4"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="EMAIL"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="me@hiddentity.fr"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-full bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Suivre le projet
                </button>
              </div>
            </form>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
