import React from 'react';
import styles from './DashboardPage.module.css';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import Transactions from 'components/Transactions/Transactions';
import { Header } from '../../components/Header/Header';
import Currency from 'components/Currency/Currency';
import AddIcon from '@mui/icons-material/Add';
import { useDeviceSize } from 'hooks/useDeviceSize';

function DashboardPage() {
  const { deviceType } = useDeviceSize();
  return (
    <div className={styles.dashboard}>
      <Header />
      <div className={styles.dashboard__content}>
        <div className={styles.dashboard__left}>
          <div className={styles.dashboard__navigation}>
            <Navigation />
          </div>
          <div className={styles.dashboard__balance}>
            <Balance amount="24 000.00" />{' '}
          </div>
        </div>
        <div className={styles.dashboard__right}>
          <div className={styles.dashboard__currency}>
            <Currency />
          </div>
        </div>

        <Transactions />
        <button className={styles.dashboard__add}>
          <AddIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
