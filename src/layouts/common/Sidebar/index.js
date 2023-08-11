import classNames from 'classnames/bind';

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

function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <aside className={cx('wrapper')}>
            <Menu items={MENU_ITEMS} />

            <AccountList
                label="Suggested accounts"
                accounts={[
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                ]}
            />

            <AccountList
                label="Following accounts"
                accounts={[
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                    {
                        full_name: 'Tiin.vn',
                        nickname: 'tiin.vn',
                        tick: true,
                        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1691848800&x-signature=54cjXCr1njKvdeD0dikrPAZEh5w%3D',
                    },
                ]}
            />
        </aside>
    );
}

export default Sidebar;
