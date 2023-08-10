import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Popper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

function Menu({ children, items = {}, onChangeMenuItem = (item) => {} }) {
    const [history, setHistory] = useState(!!items.root ? [items.root] : []);
    const [subMenuTitle, setSubMenuTitle] = useState('');

    function getMenu() {
        const res = [];
        for (let key of Object.keys(items)) {
            if (history[history.length - 1].includes(key)) {
                res.push(items[key]);
            }
        }
        return res;
    }

    function onClickMenuItem(item) {
        if (!!item.children) {
            setHistory((prev) => [...prev, item.children]);
            setSubMenuTitle(item.subMenuTitle);
        } else {
            onChangeMenuItem(item);
        }
    }

    function goBack() {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }

    function onHideMenu() {
        setHistory((prev) => prev.slice(0, 1));
    }

    return (
        <Tippy
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <Popper>
                        {history.length > 1 && <MenuHeader title={subMenuTitle} onBack={goBack} />}
                        {getMenu().map((item, index) => (
                            <MenuItem key={index} item={item} onClick={() => onClickMenuItem(item)} />
                        ))}
                    </Popper>
                </div>
            )}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            onHide={onHideMenu}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
