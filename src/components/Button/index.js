import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

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
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    className,
    children,
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

export default Button;
