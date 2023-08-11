import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faCircleQuestion,
    faKeyboard,
    faLanguage,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Fragment, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { Popper } from '~/components/Popper';
import images from '~/assets/images';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faFly } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = {
    root: ['language', 'feedback_and_help', 'keyboard_shortcuts'],
    language: {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: ['en', 'vn', 'it'],
        subMenuTitle: 'Language',
    },
    feedback_and_help: {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    keyboard_shortcuts: {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    en: {
        type: 'language',
        title: 'English',
        code: 'en',
    },
    vn: {
        type: 'language',
        title: 'Tiếng Việt',
        code: 'vn',
    },
    it: {
        type: 'language',
        title: 'Italiano',
        code: 'it',
    },
    view_profile: {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    get_coins: {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    settings: {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    log_out: {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        seperate: true,
    },
};

const user = true;

if (user) {
    MENU_ITEMS.root.unshift('settings');
    MENU_ITEMS.root.unshift('get_coins');
    MENU_ITEMS.root.unshift('view_profile');
    MENU_ITEMS.root.push('log_out');
}

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <HeadlessTippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <Popper>
                                <h4 className={cx('search-label')}>Accounts</h4>
                                {[
                                    {
                                        name: 'NguyenVanA',
                                        username: 'Nguyen Van A',
                                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                                    },
                                    {
                                        name: 'NguyenVanA',
                                        username: 'Nguyen Van A',
                                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                                    },
                                    {
                                        name: 'NguyenVanA',
                                        username: 'Nguyen Van A',
                                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                                    },
                                    {
                                        name: 'NguyenVanA',
                                        username: 'Nguyen Van A',
                                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                                    },
                                ].map((account, index) => (
                                    <AccountItem key={index} account={account} onClick={() => alert('clicked')} />
                                ))}
                            </Popper>
                        </div>
                    )}
                    visible={searchResult.length > 0}
                    interactive
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {user ? (
                        <Fragment>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text to="/upload">
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </Fragment>
                    )}
                    <Menu items={MENU_ITEMS}>
                        {user ? (
                            <img
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D"
                            />
                        ) : (
                            <button className={cx('menu-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
