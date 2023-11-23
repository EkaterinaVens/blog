import React from 'react';
import { Spin } from 'antd';

import cls from './style.module.scss';

export default function Spinner() {
  return (
    <div className={cls.spinner}>
      <Spin size="large" />
    </div>
  );
}
