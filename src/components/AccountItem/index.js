import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ account: { avatar, full_name, tick, nickname } }) {
    return (
        <Link className={cx('wrapper')} to={`/@${nickname}`}>
            <Image className={cx('avatar')} src={avatar} alt={full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{full_name}</span>
                    {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
