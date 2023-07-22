/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { GenericList } from '../GenericList';
import { socialList } from '../Header';
import common from '@styles/_common.scss';
import classNames from 'classnames';
import styles from './footer.scss';

const company = [
  { name: 'Партнёрская программа', link: '#' },
  { name: 'Вакансии', link: '#' },
];

const menu = [
  { name: 'Расчёт стоимости', link: '#' },
  { name: 'Услуги', link: '#' },
  { name: 'Виджеты', link: '#' },
  { name: 'Интеграции', link: '#' },
  { name: 'Наши клиенты', link: '#' },
  { name: 'Кейсы', link: '#' },
  { name: 'Благодарственные письма', link: '#' },
  { name: 'Сертификаты', link: '#' },
  { name: 'Блог на Youtube', link: '#' },
  { name: 'Вопрос / Ответ', link: '#' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classNames(common.container, styles.container)}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <p className={styles.header}>О компании</p>
            <nav>
              <GenericList list={company} direction='column' marginBottom='13px' fontWeight={400} />
            </nav>
          </div>
          <div className={styles.column}>
            <p className={styles.header}>Меню</p>
            <nav>
              <GenericList list={menu} className={styles.menu} marginBottom='13px' fontWeight={400} />
            </nav>
          </div>
          <div className={styles.column}>
            <p className={styles.header}>Контакты</p>
            <a className={styles.phone} href='tel:+75555555555'>
              +7 555 555-55-55
            </a>
            <GenericList list={socialList} className={styles.social} marginRight='14px' />
            <address className={styles.address}>Москва, Путевой проезд 3с1, к 902</address>
          </div>
        </div>
        <div className={styles.under}>
          <p className={styles.rights}>©WELBEX 2022. Все права защищены.</p>
          <a className={styles.link} href='#'>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
