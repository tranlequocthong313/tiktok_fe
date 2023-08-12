import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import {
    AppleIcon,
    CloseIcon,
    DownArrowIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    KakaoTalkIcon,
    LineIcon,
    QRIcon,
    TwitterIcon,
    UserIcon,
} from '~/components/Icons';
import styles from './Auth.module.scss';
import Button from '~/components/Button';

const LOGIN = 0;
const SIGNUP = 1;
const BOTH = 2;

const AUTH_TYPES = [
    {
        title: 'Use QR code',
        type: LOGIN,
        icon: <QRIcon />,
    },
    {
        title: 'Use phone / email / username',
        type: LOGIN,
        icon: <UserIcon />,
    },
    {
        title: 'Use phone or email',
        type: SIGNUP,
        icon: <UserIcon />,
    },
    {
        title: 'Continue with Facebook',
        type: BOTH,
        icon: <FacebookIcon />,
    },
    {
        title: 'Continue with Google',
        type: BOTH,
        icon: <GoogleIcon />,
    },
    {
        title: 'Continue with Twitter',
        type: BOTH,
        icon: <TwitterIcon />,
    },
    {
        title: 'Continue with LINE',
        type: BOTH,
        icon: <LineIcon />,
    },
    {
        title: 'Continue with KakaoTalk',
        type: BOTH,
        icon: <KakaoTalkIcon />,
    },
    {
        title: 'Continue with Apple',
        type: LOGIN,
        icon: <AppleIcon />,
    },
    {
        title: 'Continue with Instagram',
        type: LOGIN,
        icon: <InstagramIcon />,
    },
];

const cx = classNames.bind(styles);

const LIMIT_TYPES_ON_SIGNUP = 3;

function Auth({ close }) {
    const [isLogin, setIsLogin] = useState(true);
    const [showMore, setShowMore] = useState(false);

    function getAuthTypes() {
        if (isLogin) {
            return AUTH_TYPES.filter((auth) => auth.type === BOTH || auth.type === LOGIN);
        }
        return AUTH_TYPES.filter((auth) => auth.type === BOTH || auth.type === SIGNUP);
    }

    function switchAuth() {
        setIsLogin((prev) => !prev);
        if (!isLogin) setShowMore(false);
    }

    function isShowMoreButton() {
        return !isLogin && !showMore;
    }

    function renderAuthTypes() {
        const res = [];
        const authTypes = getAuthTypes();

        for (let i = 0; i < authTypes.length; i++) {
            if (isShowMoreButton() && res.length === LIMIT_TYPES_ON_SIGNUP) return res;

            const { icon, title } = authTypes[i];
            res.push(
                <Button key={i} textOutline leftIcon={icon} flexOne className={cx('auth-btn')}>
                    {title}
                </Button>,
            );
        }
        return res;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('close-btn')} onClick={close}>
                <CloseIcon />
            </div>
            <div className={cx('auth-container')}>
                <div className={cx('auth-content')}>
                    <h2 className={cx('heading-title')}>{isLogin ? 'Log in to TikTok' : 'Sign up for TikTok'}</h2>
                    {renderAuthTypes()}
                    {isShowMoreButton() && (
                        <div className={cx('more-btn')} onClick={() => setShowMore((prev) => !prev)}>
                            <DownArrowIcon />
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('policy')}>
                <p className={cx('policy-content')}>
                    By continuing, you agree to TikTok's{' '}
                    <a href="/" className={cx('policy-link')}>
                        Terms of Service
                    </a>{' '}
                    and confirm that you have read TikTok's{' '}
                    <a href="/" className={cx('policy-link')}>
                        Privacy Policy
                    </a>
                </p>
            </div>
            <div className={cx('switch-auth')}>
                {isLogin ? (
                    <p>
                        Don't have an account?{' '}
                        <span onClick={switchAuth} className={cx('switch-btn')}>
                            Sign up
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an account?
                        <span onClick={switchAuth} className={cx('switch-btn')}>
                            Log in
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
}

Auth.propTypes = {
    close: PropTypes.func.isRequired,
};

export default memo(Auth);
