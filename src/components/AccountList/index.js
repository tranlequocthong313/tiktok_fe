import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountList.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function AccountList({ accounts, label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {accounts.map((account, index) => (
                <AccountItem key={index} account={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

AccountList.propTypes = {
    accounts: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
};

export default AccountList;
