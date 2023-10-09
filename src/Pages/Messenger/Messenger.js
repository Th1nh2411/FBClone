import styles from './Messenger.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { useContext, useEffect, useState } from 'react';
import { StoreContext, actions } from '../../store';
import { Avatar, Col, ConfigProvider, Input, Row } from 'antd';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import MESSAGE_DATA from './data';
import { InfoIcon, PhoneIcon, VideoCallIcon } from '../../components/Icons/Icons';
const cx = classNames.bind(styles);

function Messenger() {
    const [typeMessage, setTypeMessage] = useState(0);
    const [contact, setContact] = useState();
    const [state, dispatch] = useContext(StoreContext);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgContainer: '#3a3b3c',
                    colorText: '#fff',
                    fontWeightStrong: '500',
                },
            }}
        >
            <div className={cx('wrapper')}>
                <div className={cx('sideBar')}>
                    <div className={cx('sideBar-header')}>
                        <h2>Chat</h2>
                        <div className={cx('sideBar-actions')}>
                            <div className={cx('sideBar-action')}>
                                <BsThreeDots />
                            </div>
                            <div className={cx('sideBar-action')}>
                                <BsPencilSquare />
                            </div>
                        </div>
                    </div>
                    <div className={cx('sideBar-search-wrapper')}>
                        <Input
                            // style={{ border: 'none' }}
                            className={cx('sideBar-search')}
                            size="large"
                            placeholder="Tìm kiếm trên Messenger"
                            prefix={<BiSearch />}
                        />
                    </div>
                    <div className={cx('sideBar-options')}>
                        <p onClick={() => setTypeMessage(0)} className={cx('sideBar-option', { active: !typeMessage })}>
                            Hộp thư
                        </p>
                        <p onClick={() => setTypeMessage(1)} className={cx('sideBar-option', { active: typeMessage })}>
                            Cộng đồng
                        </p>
                    </div>
                    <div className={cx('list-contact')}>
                        {MESSAGE_DATA.contacts.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setContact(item)}
                                className={cx('contact-item', { active: contact && contact.id === item.id })}
                            >
                                <div className={cx('align-center')}>
                                    <Avatar style={{ width: 56, height: 56, marginRight: 10 }} src={item.image} />
                                    <div>
                                        <h5 style={{ fontSize: 14 }}>{item.name}</h5>
                                        <p style={{ fontSize: 12, color: '#ccc' }}>
                                            {item.lastMess} - {item.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('content', { unselected: !contact })}>
                    {contact ? (
                        <>
                            <div className={cx('content-header')}>
                                <div className={cx('align-center')}>
                                    <Avatar style={{ marginRight: 8 }} size="large" src={contact.image} />
                                    <div>
                                        <h5 style={{ fontSize: 14 }}>{contact.name}</h5>
                                        <p style={{ fontSize: 12, color: '#ccc' }}>{contact.status}</p>
                                    </div>
                                </div>
                                <div className={cx('align-center')}>
                                    <div className={cx('message-action')}>
                                        <PhoneIcon />
                                    </div>
                                    <div className={cx('message-action')}>
                                        <VideoCallIcon />
                                    </div>
                                    <div className={cx('message-action')}>
                                        <InfoIcon />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('content-body')}>
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <Avatar style={{ width: 56, height: 56 }} src={contact.image} />
                                    <h5 style={{ fontSize: 16, padding: '10px 0' }}>{contact.name}</h5>
                                    <div style={{ fontSize: 12, color: '#ccc' }}>
                                        <p>Facebook</p>
                                        <p>Các bạn {contact.friend ? 'không phải' : ''} là bạn bè trên Facebook</p>
                                        <p>Sống tại {contact.address}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>
                            <div
                                style={{
                                    background:
                                        'url(https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/rT65reXCYoG.png) 0 0 / 248px 390px no-repeat',
                                    width: 244,
                                    height: 180,
                                }}
                            ></div>
                            <h3 style={{ textAlign: 'center' }}> Chưa chọn đoạn chat nào</h3>
                        </div>
                    )}
                </div>
            </div>
        </ConfigProvider>
    );
}

export default Messenger;
