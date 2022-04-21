import dynamic from 'next/dynamic';

const componentsMap = {
  // sections
  HeroSection: dynamic(() =>
    namedComponent(import('./HeroSection'), 'HeroSection', { ssr: false })
  ),
  HeroCards: dynamic(() =>
    namedComponent(import('./HeroCards'), 'HeroCards', { ssr: false })
  ),
  AboutSection: dynamic(() =>
    namedComponent(import('./AboutSection'), 'AboutSection', { ssr: false })
  ),
  ServiceSection: dynamic(() =>
    namedComponent(import('./ServiceSection'), 'ServiceSection', { ssr: false })
  ),
  OurClinic: dynamic(() =>
    namedComponent(import('./OurClinic'), 'OurClinic', { ssr: false })
  ),
  CovidSection: dynamic(() =>
    namedComponent(import('./CovidSection'), 'CovidSection', { ssr: false })
  ),
  BlogSection: dynamic(() =>
    namedComponent(import('./BlogSection'), 'BlogSection', { ssr: false })
  ),
  CardGridSection: dynamic(() =>
    namedComponent(import('./CardGridSection'), 'CardGridSection', {
      ssr: false,
    })
  ),
};

export const DynamicComponent = (props) => {
  if (!props.type) {
    const propsOutput = JSON.stringify(props, null, 2);
    throw new Error(
      `Object does not have the 'type' property required to select a component: ${propsOutput}`
    );
  }
  const Component = componentsMap[props.type];
  if (!Component) {
    throw new Error(
      `No component match object with type: '${props.type}'\nMake sure DynamicComponent.tsx file has an entry for '${props.type}' in 'componentsMap'`
    );
  }
  return <Component {...props} />;
};

const namedComponent = async (modPromise, exportName) => {
  const mod = await modPromise;
  return mod[exportName];
};
