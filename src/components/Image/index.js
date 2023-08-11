import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');

    function handleError() {
        setFallback(fallback);
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            alt={alt}
            src={_fallback || src}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    classNames: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
