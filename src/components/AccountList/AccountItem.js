import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import styles from './AccountList.module.scss';
import { Popper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Avatar from '~/components/Avatar';

const cx = classNames.bind(styles);

function AccountItem({ account }) {
    const { avatar, nickname, full_name, tick } = account;

    return (
        // Div helps to fix a Tippy bug
        <div>
            <Tippy
                delay={[800, 0]}
                interactive
                placement="bottom"
                offset={[-20, 0]}
                render={(attr) => (
                    <div tabIndex={-1} {...attr}>
                        <Popper>
                            <AccountPreview account={account} />
                        </Popper>
                    </div>
                )}
            >
                <Link className={cx('account-item')} to={`/@${nickname}`}>
                    <Avatar src={avatar} alt={nickname} size={32} />
                    <div className={cx('info')}>
                        <h4 className={cx('nickname')}>
                            <span>{nickname}</span>
                            {tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('name')}>{full_name}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountItem;
