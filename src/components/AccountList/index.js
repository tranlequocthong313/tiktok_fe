import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './AccountList.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function AccountList({ accounts, label, onSeeAll, hideSeeAll }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accounts.map((account, index) => (
                <AccountItem key={index} account={account} />
            ))}
            {!hideSeeAll && (
                <p className={cx('more-btn')} onClick={onSeeAll}>
                    See all
                </p>
            )}
        </div>
    );
}

AccountList.propTypes = {
    accounts: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    onSeeAll: PropTypes.func.isRequired,
    hideSeeAll: PropTypes.bool.isRequired,
};

export default memo(AccountList);
