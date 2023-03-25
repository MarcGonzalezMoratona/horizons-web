import { createContext, ReactElement, useState } from 'react';

const PageContext = createContext({
  pageType: 'landing',
  PageHandler: (pageType: string) => {},
});

interface PageProps {
  children?: JSX.Element | Array<JSX.Element>;
}

export function PageContextProvider(props: PageProps): ReactElement {
  const [pageType, setPageType] = useState('landing');

  function PageHandler(pageType: string): void {
    setPageType(pageType);
  }

  return (
    <PageContext.Provider value={{ pageType, PageHandler }}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageContext;
