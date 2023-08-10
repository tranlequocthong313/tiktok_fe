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
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Popper } from '~/components/Popper';
import images from '~/assets/images';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

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
};

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Tippy
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
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('menu-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
