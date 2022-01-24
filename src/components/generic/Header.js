import React from 'react';
import { Layout } from 'antd';
import '../../assets/scss/Header.scss'


const {Header: AntHeader } = Layout

export default function Header() {
  return <AntHeader className='header'>
      داشبورد مدیریت
  </AntHeader>
}
