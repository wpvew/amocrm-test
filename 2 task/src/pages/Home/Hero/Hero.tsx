/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { Layout } from '../../../components/Layout';
import { generateId } from '../../../utils/generateRandomIndex';
import styles from './hero.scss';

const giftList = [
  {
    title: (
      <>
        <span className={styles.giftTitleDesk}>Виджеты</span>
        <span className={styles.giftTitleMob}>30 Виджеты</span>
      </>
    ),
    subtitle: '30 готовых решений',
  },
  { title: 'Dashboard', subtitle: 'с показателями вашего бизнеса' },
  { title: 'Skype Аудит', subtitle: 'отдела продаж и CRM системы' },
  {
    title: (
      <>
        <span className={styles.giftTitleDesk}>35 дней</span>
        <span className={styles.giftTitleMob}>Месяц аmoCRM</span>
      </>
    ),
    subtitle: 'использования CRM',
  },
].map(generateId);

export function Hero() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div>
          <h1 className={styles.title}>
            Зарабатывайте больше <span>с WELBEX</span>
          </h1>
          <p className={styles.subtitle}>Развиваем и контролируем продажи за вас</p>
        </div>
        <div className={styles.side}>
          <h2 className={styles.sideTitle}>
            Вместе с <span>бесплатной консультацией</span> мы дарим:
          </h2>
          <ul className={styles.gifts}>
            {giftList.map((gift) => (
              <li key={gift.id}>
                <h3 className={styles.giftTitle}>{gift.title}</h3>
                <p className={styles.giftSubtitle}>{gift.subtitle}</p>
              </li>
            ))}
          </ul>
          <button className={styles.btn}>Получить консультацию</button>
        </div>
      </div>
    </Layout>
  );
}
