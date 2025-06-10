import React from 'react';
import styles from './Forms.module.css';
import { FormsProps } from './type';

const buttons = [
  { key: 'login', label: 'LOGIN' },
  { key: 'register', label: 'REGISTRATION' },
  { key: 'recovery', label: 'PASSWORD RECOVERY' },
  { key: 'profileUpdate', label: 'PROFILE UPDATE' },
  { key: 'supportRequest', label: 'SUPPORT REQUEST' },
  { key: 'productFeedback', label: 'PRODUCT FEEDBACK' },
  { key: 'form7', label: 'FORM 7' },
  { key: 'form8', label: 'FORM 8' },
  { key: 'form9', label: 'FORM 9' },
];

export const Forms: React.FC<FormsProps> = ({ onSelect, activeForm, children }) => {
  return (
    <div className={styles.forms}>
      <div className={styles.sidebar}>
        {buttons.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.button} ${activeForm === key ? styles.active : ''}`}
            onClick={() => onSelect(key)}
          >
            <span className={styles.label}>{label}</span>
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Forms;