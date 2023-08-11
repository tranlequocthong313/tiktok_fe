import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ account, onClick }) {
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <Image className={cx('avatar')} src={account.avatar} alt={account.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{account.name}</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>{account.username}</span>
            </div>
        </div>
    );
}

export default AccountItem;
