import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Avatar({ src, alt, size = 32 }) {
    return <Image src={src} alt={alt} className={cx('wrapper')} width={size} height={size} />;
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.number,
};

export default Avatar;
