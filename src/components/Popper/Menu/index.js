import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Popper } from '~/components/Popper';
import MenuItem from './MenuItem';
import { useState } from 'react';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

function Menu({ children, items = {}, hideOnClick = false, onChangeMenuItem = (item) => {} }) {
    const [history, setHistory] = useState(!!items.root ? [items.root] : []);
    const [subMenuTitle, setSubMenuTitle] = useState('');

    function getMenu() {
        const res = [];
        for (const key of history[history.length - 1]) {
            res.push(items[key]);
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
            offset={[12, 8]}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <Popper>
                        {history.length > 1 && <MenuHeader title={subMenuTitle} onBack={goBack} />}
                        <div className={cx('menu-body')}>
                            {getMenu().map((item, index) => (
                                <MenuItem key={index} item={item} onClick={() => onClickMenuItem(item)} />
                            ))}
                        </div>
                    </Popper>
                </div>
            )}
            delay={[0, 600]}
            interactive
            placement="bottom-end"
            onHide={onHideMenu}
            hideOnClick={hideOnClick}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.object,
    hideOnClick: PropTypes.bool,
    onChangeMenuItem: PropTypes.func,
};

export default Menu;
