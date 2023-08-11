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
import useDebounce from '~/hooks/useDebounce';

const cx = classNames.bind(styles);

const DEBOUNCED_MS = 500;

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounedValue = useDebounce(keyword, DEBOUNCED_MS);

    function clearInput() {
        setKeyword('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    function hideResult() {
        setShowResult(false);
    }

    useEffect(() => {
        if (debounedValue.trim()) {
            setLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounedValue)}&type=less`)
                .then((res) => res.json())
                .then(({ data }) => {
                    setSearchResult(data);
                })
                .finally(() => setLoading(false));
        } else {
            setSearchResult([]);
        }
    }, [debounedValue]);

    return (
        <HeadlessTippy
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <Popper>
                        <h4 className={cx('search-label')}>Accounts</h4>
                        {searchResult.map((account) => (
                            <AccountItem key={account.id} account={account} />
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
                {!!keyword && !loading && (
                    <button className={cx('clear')} onClick={clearInput}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
