import { useContext } from 'react';
import DeviceContext from '../../store/DeviceContext';

type Device = 'desktop' | 'mobile' | 'tablet';

export function useDevice(): Device {
  const deviceWidth = useContext(DeviceContext);

  if (deviceWidth < 480) return 'mobile';
  if (deviceWidth < 768) return 'tablet';
  return 'desktop';
}
