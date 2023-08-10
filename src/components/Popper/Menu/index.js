import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Popper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <Popper>
                        {items.map((item, index) => (
                            <MenuItem key={index} item={item} />
                        ))}
                    </Popper>
                </div>
            )}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
        >
            {children}
        </Tippy>
    );
}

export default Menu;
