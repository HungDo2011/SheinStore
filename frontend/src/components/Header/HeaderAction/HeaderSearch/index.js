import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './HeaderSearch.module.scss';
import { PopperWrapper } from 'components/Popper';
import ProductSearchItem from './ProductSearchItem';
import { useDebounce } from 'hooks';
import config from 'config';

const cx = classNames.bind(styles);

function HeaderSearch() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        axios
            .get(process.env.REACT_APP_BASE_URL)
            .then((res) => {
                const list = res.data;
                let newList = [];
                list.filter((item) => {
                    if (item.name.indexOf(debouncedValue) >= 0) {
                        newList.push(item);
                    }
                    return newList;
                });
                setSearchResult(newList);
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
                setShowResult(false);
            });
        // eslint-disable-next-line
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setShowResult(false);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setSearchValue(inputValue);
        }
    };

    return (
        //Using a wrapper <div> or <span> tag around
        // the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0 && searchValue !== ''}
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper type="search">
                            <h4 className={cx('search-title')}>Bạn Muốn Tìm Gì??!!!</h4>
                            <div className={cx('menu-srollable')}>
                                {searchResult.map((item, index) => {
                                    return <ProductSearchItem item={item} key={item.id} />;
                                })}
                            </div>
                            <Link
                                onClick={() => {
                                    setSearchResult([]);
                                    setSearchValue('');
                                }}
                                className={cx('search-more-btn')}
                                to={config.routesConfig.womenProducts}
                            >
                                Xem thêm {'>>'}
                            </Link>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search-form')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        spellCheck={false}
                        type="text"
                        placeholder="Today Super Sale!!!!"
                        className={cx('search-input')}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('search-action')} onClick={handleClear}>
                            <CancelIcon />
                        </button>
                    )}
                    {loading && <CircularProgress size={20} className={cx('search-action', 'setTop')} />}
                    <Button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon sx={{ color: 'white', fontSize: '26px' }} />
                    </Button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default HeaderSearch;
