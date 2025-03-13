'use client';

import React from 'react';
import styles from './login.module.css';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className={styles.loginPage}>
            <h2 className={styles.title}>Login</h2>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
