/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styles from './header.scss';
import common from '@styles/_common.scss';
import classNames from 'classnames';
import { GenericList } from '../GenericList';
import { EIcons, Icon } from '../Icon';

export const socialList = [
  { name: <Icon name={EIcons.telegram} sizeW={18} sizeH={14} />, link: '#' },
  { name: <Icon name={EIcons.phone} size={16} />, link: '#' },
  { name: <Icon name={EIcons.whatsapp} size={16} />, link: '#' },
];

const menuList = [
  { name: 'Услуги  ', link: '#' },
  { name: 'Виджеты  ', link: '#' },
  { name: 'Интеграции  ', link: '#' },
  { name: 'Кейсы  ', link: '#' },
  { name: 'Сертификаты  ', link: '#' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames(common.container, styles.container)}>
        <div className={styles.logo}>
          <a className={styles.logoLink} href='/'>
            <Icon name={EIcons.logo} sizeW={140} sizeH={24} />
          </a>
          <span className={styles.about}>крупный интегратор CRM в Росcии и ещё 8 странах</span>
        </div>
        <nav className={styles.navigation}>
          <GenericList
            list={menuList}
            className={styles.menu}
            marginRight='30px'
            mobTextTransform='uppercase'
            mobileSize='mobFontM'
          />
        </nav>
        <a className={styles.phone} href='tel:+75555555555'>
          +7 555 555-55-55
        </a>
        <GenericList list={socialList} className={styles.social} marginRight='33px' />
      </div>
    </header>
  );
}
