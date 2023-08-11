import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback = images.noImage, ...props }, ref) {
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
}

export default forwardRef(Image);
