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
import searchService from '~/services/searchService';

const cx = classNames.bind(styles);

const DEBOUNCED_MS = 500;

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedKeyword = useDebounce(keyword, DEBOUNCED_MS);

    function clearInput() {
        setKeyword('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    function hideResult() {
        setShowResult(false);
    }

    useEffect(() => {
        if (debouncedKeyword.trim()) {
            setLoading(true);
            searchService
                .search(debouncedKeyword)
                .then((data) => setSearchResult(data))
                .catch((e) => console.log(e))
                .finally(() => setLoading(false));
        } else {
            setSearchResult([]);
        }
    }, [debouncedKeyword]);

    function changeKeyword(e) {
        if (!e.target.value.startsWith(' ')) {
            setKeyword(e.target.value);
        }
    }

    return (
        // Wrap with div element to fix Tippy bug
        <div>
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
                        onChange={changeKeyword}
                        value={keyword}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!keyword && !loading && (
                        <button className={cx('clear')} onClick={clearInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
