import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button
            className={cx('menu-item', { seperate: item.seperate })}
            leftIcon={item.icon}
            to={item.to}
            onClick={onClick}
        >
            {item.title}
        </Button>
    );
}

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
