import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountList.module.scss';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ account: { avatar, nickname, full_name, tick } }) {
    return (
        <Link className={cx('account-item')} to={`/@${nickname}`}>
            <Image className={cx('avatar')} src={avatar} alt={nickname} />
            <div className={cx('info')}>
                <h4 className={cx('nickname')}>
                    <span>{nickname}</span>
                    {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('name')}>{full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountItem;
