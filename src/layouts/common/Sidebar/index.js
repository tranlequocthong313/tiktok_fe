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
        </aside>
    );
}

export default Sidebar;
