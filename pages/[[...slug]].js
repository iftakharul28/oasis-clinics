import { toFieldPath } from '@stackbit/annotations';
import Head from 'next/head';

import { DynamicComponent } from '../components/DynamicComponent';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { pageUrlPath } from '../utils/page-utils';
import { pagesByLayout, dataByType } from '../utils/sourcebit-utils';

const allPages = pagesByLayout('Page');
const siteConfig = dataByType('SiteConfig');

const FlexiblePage = ({ header, page, footer }) => {
  return (
    <div className="page-container">
      <Head>
        <title>{page.frontmatter.title}</title>
      </Head>
      <div className="header__main">
        <Header {...header} />
      </div>
      <main data-sb-object-id={page?.__metadata?.id}>
        {page.frontmatter.sections?.length > 0 && (
          <>
            {page.frontmatter.sections.map((section, index) => (
              <DynamicComponent
                key={index}
                {...section}
                {...toFieldPath(`sections.${index}`)}
              />
            ))}
          </>
        )}
      </main>
      <div className="page-footer">
        <Footer {...footer} />
      </div>
    </div>
  );
};

export default FlexiblePage;

export const getStaticProps = async ({ params }) => {
  const pagePath = '/' + (params?.slug || []).join('/');
  const page = allPages.find((page) => pageUrlPath(page) === pagePath);
  return {
    props: { page, header: siteConfig.header, footer: siteConfig.footer },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: allPages.map((page) => pageUrlPath(page)),
    fallback: false,
  };
};
