import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const DeliveryPage: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t('key')}</h1>;
};
