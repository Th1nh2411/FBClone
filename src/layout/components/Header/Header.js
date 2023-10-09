import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext, actions } from '../../../store';
import { Badge, Button, Dropdown, Input, Space, Tooltip } from 'antd';
import { MdOutlineClose, MdOutlineMenu, MdSearch } from 'react-icons/md';
import { IoLogOut, IoPerson } from 'react-icons/io5';
import Cookies from 'js-cookie';
import { GameIcon, GroupIcon, HomeIcon, MarketIcon, MessengerIcon, VideoIcon } from '../../../components/Icons/Icons';
const cx = classNames.bind(styles);

function Header() {
    const [state, dispatch] = useContext(StoreContext);
    const navigate = useNavigate();
    const [showMenuMb, setShowMenuMb] = useState(false);
    const userInfo = state.userInfo;
    const overlayRef = useRef();
    const handleDocumentClick = (event) => {
        if (overlayRef.current && overlayRef.current.contains(event.target)) {
            setShowMenuMb(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleShowMenuMb = () => {
        setShowMenuMb(!showMenuMb);
    };
    const handleCloseMenuMb = () => {
        setShowMenuMb(false);
    };
    const handleLogOut = () => {
        dispatch(actions.setUserInfo(null));
        Cookies.remove('accessToken');
        Cookies.remove('userInfo');
    };
    const optionItems = [
        {
            key: '1',
            label: (
                <Badge dot={state.unpaidBooking}>
                    <p style={{ fontSize: '1.6rem' }}>Trang cá nhân</p>
                </Badge>
            ),
            icon: <IoPerson style={{ fontSize: '1.8rem' }} />,
        },
        {
            key: '2',
            label: <p style={{ fontSize: '1.6rem' }}>Đăng xuất</p>,
            icon: <IoLogOut style={{ fontSize: '1.8rem' }} />,
        },
    ];
    return (
        <>
            <header className={cx('wrapper', 'dark-mode', { active: showMenuMb })}>
                <div className={cx('inner')}>
                    <div className={cx('logo-wrapper')}>
                        <Link to={config.routes.home}>
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                                className={cx('logo')}
                                alt="logo"
                            />
                        </Link>
                        <div onClick={handleCloseMenuMb} className={cx('close-btn-mb')}>
                            <MdOutlineClose />
                        </div>
                    </div>
                    <div className={cx('side-group')}>
                        <nav className={cx('header-nav')}>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.home}
                            >
                                <HomeIcon />
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.video}
                            >
                                <VideoIcon />
                            </NavLink>

                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.market}
                            >
                                <MarketIcon />
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.group}
                            >
                                <GroupIcon />
                            </NavLink>
                            <NavLink
                                className={(nav) => cx('header-nav_item', { active: nav.isActive })}
                                to={config.routes.game}
                            >
                                <GameIcon />
                            </NavLink>
                        </nav>
                    </div>
                    <div className={cx('header-actions')} size={'large'}>
                        <div onClick={() => navigate(config.routes.messenger)} className={cx('action')}>
                            <MessengerIcon width="2rem" height="2rem" />
                        </div>
                        <Dropdown
                            menu={{
                                items: optionItems,
                                onClick: ({ key }) => {
                                    if (key == 1) navigate(config.routes.profile);
                                    if (key == 2) handleLogOut();
                                },
                            }}
                        >
                            <Image
                                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82"
                                className={cx('user-img')}
                            />
                        </Dropdown>
                    </div>
                </div>
            </header>
            <div ref={overlayRef} className={cx('menu-modal-overlay', { active: showMenuMb })}></div>
            <MdOutlineMenu onClick={handleShowMenuMb} className={cx('show-menu-mb')} />
        </>
    );
}

export default Header;
