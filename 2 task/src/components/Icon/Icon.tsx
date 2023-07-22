import React from 'react';
import TelegramIcon from './icons/TelegramIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import LogoIcon from './icons/LogoIcon';
import styles from './icon.scss';
import classNames from 'classnames';

export enum EIcons {
  telegram = 'TelegramIcon',
  whatsapp = 'WhatsappIcon',
  phone = 'PhoneIcon',
  logo = 'LogoIcon',
}

interface IIconProps {
  name: EIcons;
  size?: number;
  sizeW?: number;
  sizeH?: number;
  classes?: string;
}

export function Icon({ name, size, sizeW, sizeH, classes }: IIconProps) {
  const iconComponents = {
    TelegramIcon,
    WhatsappIcon,
    PhoneIcon,
    LogoIcon,
  };
  const IconComponent = iconComponents[name];
  const width = sizeW || size;
  const height = sizeH || size;

  return (
    <svg
      className={classNames(classes, styles.svg)}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {<IconComponent />}
    </svg>
  );
}
