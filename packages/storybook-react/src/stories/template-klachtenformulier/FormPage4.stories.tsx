import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonLink,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Link,
  LinkList,
  LinkListLink,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
  SpotlightSection,
  Strong,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtBreadcrumbNav,
  UtrechtDigidButton,
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwHuis,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';
import './index.css';
import FooterKlachten from './FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Template/Klachtenformulier/Stap 4',
  id: 'klachtenformulier-form-pages-stap-4',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <nav>
          <Logo>
            <LogoImage />
          </Logo>
        </nav>
      </PageHeader>
      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <BreadcrumbNav>
          <BreadcrumbNavLink href="./iframe.html?args=&id=klachtenformulier-form-pages-stap-3a--one&viewMode=story">
            <BreadcrumbNavSeparator>
              <UtrechtIconChevronLeft />
            </BreadcrumbNavSeparator>
            Terug
          </BreadcrumbNavLink>
        </BreadcrumbNav>
        <section>
          <Heading1>Einde van het klachtenformulier</Heading1>
          <SpotlightSection type="ok">
            <Heading2>Dank je wel!</Heading2>
            <Paragraph>
              In het echt zou je doorgaan naar de volgende stap. Maar voor deze test is dit nu het einde van het
              formulier. We hebben nog een paar korte vragen, en dan zijn we klaar.
            </Paragraph>
          </SpotlightSection>
          <br />
        </section>
        <section>
          <ButtonLink
            appearance="primary-action-button"
            href="./iframe.html?args=&id=klachtenformulier-form-pages-stap-1--one&viewMode=story"
          >
            Terug naar het begin&nbsp;
            <UtrechtIconArrow />
          </ButtonLink>
        </section>
      </PageContent>
      <FooterKlachten />
    </Page>
  ),
};