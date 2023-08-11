import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Avatar from '~/components/Avatar';

const cx = classNames.bind(styles);

function AccountPreview({ account: { avatar, full_name, nickname, followers_count, likes_count, tick } }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar src={avatar} alt={nickname} size={44} />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickname')}>
                    {nickname}
                    {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('name')}>{full_name}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{followers_count} </strong>
                    <span>Followers</span>
                    <strong className={cx('value')}>{likes_count} </strong>
                    <span>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountPreview;
