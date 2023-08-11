import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import { Popper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    function clearInput() {
        setKeyword('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    function hideResult() {
        setShowResult(false);
    }

    // test
    useEffect(() => setSearchResult([1, 1, 1]), []);

    return (
        <HeadlessTippy
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <Popper>
                        <h4 className={cx('search-label')}>Accounts</h4>
                        {[
                            {
                                name: 'NguyenVanA',
                                username: 'Nguyen Van A',
                                avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                            },
                            {
                                name: 'NguyenVanA',
                                username: 'Nguyen Van A',
                                avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                            },
                            {
                                name: 'NguyenVanA',
                                username: 'Nguyen Van A',
                                avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                            },
                            {
                                name: 'NguyenVanA',
                                username: 'Nguyen Van A',
                                avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8cba623a40db08b0acd4ddcc512bdd5~c5_100x100.jpeg?x-expires=1691805600&x-signature=DL%2FQG63dMOWFSvBUY4XTMwkPY8Q%3D',
                            },
                        ].map((account, index) => (
                            <AccountItem key={index} account={account} onClick={() => alert('clicked')} />
                        ))}
                    </Popper>
                </div>
            )}
            visible={showResult && searchResult.length > 0}
            interactive
            onClickOutside={hideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    onFocus={() => setShowResult(true)}
                />
                {!!keyword && (
                    <button className={cx('clear')} onClick={clearInput}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
