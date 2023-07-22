import React from 'react';
import styles from './genericlist.scss';
import classNames from 'classnames';
import { generateId } from '../../utils/generateRandomIndex';

type TList = {
  name: React.ReactNode;
  link: string;
};

interface IGenericListProps {
  list: Array<TList>;
  className?: string;
  marginRight?: string | number;
  marginBottom?: string | number;
  direction?: 'row' | 'column';
  size?: 'fontS' | 'fontM' | 'fontL';
  mobileSize?: 'mobFontS' | 'mobFontM' | 'mobFontL';
  fontWeight?: 300 | 400 | 500;
  mobTextTransform?: 'uppercase' | 'lowercase' | 'none';
}

export function GenericList(props: IGenericListProps) {
  const {
    list,
    className,
    marginBottom,
    marginRight,
    direction,
    size = 'fontL',
    mobileSize = 'mobFontL',
    fontWeight,
    mobTextTransform = 'none',
  } = props;
  const listWithId = list.map(generateId);

  return (
    <ul className={className || classNames(styles.list)} style={{ flexDirection: direction }}>
      {listWithId.map((item) => (
        <li className={styles.item} key={item.id} style={{ marginBottom, marginRight }}>
          <a
            className={classNames(styles.link, styles[size], styles[mobileSize], styles[mobTextTransform])}
            href={item.link}
            style={{ fontWeight }}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
