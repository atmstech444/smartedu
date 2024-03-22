import { AppContext } from '@/contextApi/AppProvider';
import { AppContextType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useContext } from 'react';

const SearchField = () => {
    const { toggleHeaderSerach, headerSerachOpen } = useContext(
        AppContext
      ) as AppContextType;
    return (
        <>
            <div className={`header__search-3 white-bg transition-3 ${headerSerachOpen ? 'search-opened' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="header__search-3-inner text-center">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="header__search-3-btn">
                                        <button type='button' className="header__search-3-btn-close" onClick={toggleHeaderSerach}>
                                            <i className="fal fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="header__search-3-header">
                                        <h3>Search</h3>
                                    </div>
                                    <div className="header__search-3-categories">
                                        <ul className="search-category">
                                            <li><Link href="/course-grid">All Categories</Link></li>
                                            <li><Link href="/course-grid">Art & Design</Link></li>
                                            <li><Link href="/course-grid">Development</Link></li>
                                            <li><Link href="/course-grid">Business</Link></li>
                                            <li><Link href="/course-grid">Markeing</Link></li>
                                            <li><Link href="/course-grid">UX Design</Link></li>
                                        </ul>
                                    </div>
                                    <div className="header__search-3-input p-relative">
                                        <input type="text" placeholder="Search for products... " />
                                        <button type="submit"><i className="far fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchField;