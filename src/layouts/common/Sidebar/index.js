import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import config from '~/config';
import AccountList from '~/components/AccountList';
import Footer from './Footer';

const MENU_ITEMS = [
    {
        title: 'For You',
        icon: <HomeIcon />,
        activeIcon: <HomeActiveIcon />,
        to: config.routes.root,
    },
    {
        title: 'Following',
        icon: <UserGroupIcon />,
        activeIcon: <UserGroupActiveIcon />,
        to: config.routes.following,
    },
    {
        title: 'LIVE',
        icon: <LiveIcon />,
        activeIcon: <LiveActiveIcon />,
        to: config.routes.live,
    },
];

const FAKE_ACCOUNTS = [
    {
        full_name: 'Tiin.vn',
        nickname: 'tiin.vn',
        tick: true,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
        followings_count: 1,
        followers_count: 65,
        likes_count: 1000,
    },
    {
        full_name: 'Tiin.vn',
        nickname: 'tiin.vn',
        tick: true,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
        followings_count: 1,
        followers_count: 65,
        likes_count: 1000,
    },
    {
        full_name: 'Tiin.vn',
        nickname: 'tiin.vn',
        tick: true,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
        followings_count: 1,
        followers_count: 65,
        likes_count: 1000,
    },
    {
        full_name: 'Tiin.vn',
        nickname: 'tiin.vn',
        tick: true,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
        followings_count: 1,
        followers_count: 65,
        likes_count: 1000,
    },
    {
        full_name: 'Tiin.vn',
        nickname: 'tiin.vn',
        tick: true,
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
        followings_count: 1,
        followers_count: 65,
        likes_count: 1000,
    },
];

function Sidebar() {
    const cx = classNames.bind(styles);
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    const [followingAccounts, setFollowingAccounts] = useState([]);

    useEffect(() => {
        setSuggestedAccounts(FAKE_ACCOUNTS);
        setFollowingAccounts(FAKE_ACCOUNTS);
    }, []);

    const seeAllFollowingAccounts = useCallback(() => {
        setFollowingAccounts((prev) => [...prev, ...FAKE_ACCOUNTS]);
    }, []);
    const seeAllSuggestedAccounts = useCallback(() => {
        setSuggestedAccounts((prev) => [...prev, ...FAKE_ACCOUNTS]);
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu items={MENU_ITEMS} />

            <AccountList
                label="Suggested accounts"
                accounts={suggestedAccounts}
                onSeeAll={seeAllSuggestedAccounts}
                hideSeeAll={suggestedAccounts.length >= 20}
            />

            <AccountList
                label="Following accounts"
                accounts={followingAccounts}
                onSeeAll={seeAllFollowingAccounts}
                hideSeeAll={followingAccounts.length >= 20}
            />

            <Footer />
        </aside>
    );
}

export default Sidebar;
