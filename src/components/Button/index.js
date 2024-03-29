import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const buttonTypes = Object.freeze({
    href: 'a',
    to: Link,
});
function ButtonFactory(props) {
    for (const [key, value] of Object.entries(props)) {
        if (Object.keys(props).includes(key) && value && value.length > 0) {
            return buttonTypes[key];
        }
    }
    return 'button';
}

function removeEventsOnDisabled(disabled, args) {
    if (disabled) {
        Object.keys(args).forEach((key) => {
            if (key.startsWith('on') && typeof args[key] === 'function') {
                delete args[key];
            }
        });
    }
}

function Button({
    primary = false,
    outline = false,
    text = false,
    textOutline = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    className,
    children,
    flexOne = false,
    ...args
}) {
    removeEventsOnDisabled(disabled, args);
    const Component = ButtonFactory(args);
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
        'text-outline': textOutline,
        'flex-one': flexOne,
        [className]: className,
    });

    return (
        <Component className={classes} {...args}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    flexOne: PropTypes.bool,
};

export default Button;
