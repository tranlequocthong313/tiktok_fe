import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [] }) {
    return (
        <nav>
            {items.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </nav>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Menu;
