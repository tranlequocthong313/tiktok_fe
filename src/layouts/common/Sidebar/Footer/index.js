import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('line')}>
                <a href="/" className={cx('link')}>
                    About
                </a>
                <a href="/" className={cx('link')}>
                    Newsroom
                </a>
                <a href="/" className={cx('link')}>
                    Contact
                </a>
                <a href="/" className={cx('link')}>
                    Careers
                </a>
            </div>
            <div className={cx('line')}>
                <a href="/" className={cx('link')}>
                    Tiktok for Good
                </a>
                <a href="/" className={cx('link')}>
                    Advertise
                </a>
                <a href="/" className={cx('link')}>
                    Developers
                </a>
                <a href="/" className={cx('link')}>
                    Transparency
                </a>
                <a href="/" className={cx('link')}>
                    Tiktok Rewards
                </a>
                <a href="/" className={cx('link')}>
                    Tiktok Embeds
                </a>
            </div>
            <div className={cx('line')}>
                <a href="/" className={cx('link')}>
                    Help
                </a>
                <a href="/" className={cx('link')}>
                    Safety
                </a>
                <a href="/" className={cx('link')}>
                    Terms
                </a>
                <a href="/" className={cx('link')}>
                    Privacy
                </a>
                <a href="/" className={cx('link')}>
                    Creator Portal
                </a>
                <a href="/" className={cx('link')}>
                    Community Guidelines
                </a>
            </div>
            <div className={cx('line')}>
                <span className={cx('copyright')}>© 2023 TikTok</span>
            </div>
        </footer>
    );
}

export default Footer;
