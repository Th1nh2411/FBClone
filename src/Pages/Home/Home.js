import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Image from '../../components/Image';
import images from '../../assets/images';
import { Button, Col, Input, InputNumber, Row } from 'antd';
import { useContext, useEffect, useMemo, useState } from 'react';
import { StoreContext, actions } from '../../store';
import * as tourService from '../../services/tourService';
import { Link } from 'react-router-dom';
import config from '../../config';
const cx = classNames.bind(styles);

function Home() {
    const [state, dispatch] = useContext(StoreContext);

    return <div className={cx('wrapper')}>HOME PAGE</div>;
}

export default Home;
