import { createContext, ReactElement, useEffect, useState } from 'react';

const DeviceContext = createContext(0);

type PageProps = {
  children?: JSX.Element | Array<JSX.Element>;
};

export function DeviceContextProvider(props: PageProps): ReactElement {
  const [deviceWidth, setDeviceWidth] = useState(0);

  useEffect(() => {
    setDeviceWidth(window.innerWidth);
  }, []);

  return (
    <DeviceContext.Provider value={deviceWidth}>
      {props.children}
    </DeviceContext.Provider>
  );
}

export default DeviceContext;
