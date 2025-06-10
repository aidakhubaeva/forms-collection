import React, { useState } from 'react';
import styles from './FormRender.module.css';
import { FormRendererProps } from './type';

const FormRender: React.FC<FormRendererProps> = ({ title, description, fields }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    fields.forEach(({ name }) => {
      if (!formData[name]) {
        newErrors[name] = 'Required field';
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Submitted:', formData);
    }
  };

  const isValidForm = fields.every(({ name }) => formData[name]);

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}

        {fields.map(({ name, type = 'text', placeholder }) => (
          <div key={name} className={styles.field}>
            {errors[name] && (
              <div className={styles.error}>{errors[name]}</div>
            )}
            {type === 'textarea' ? (
              <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                value={formData[name] || ''}
                onChange={(e) => handleChange(name, e.target.value)}
              />
            ) : (
              <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={formData[name] || ''}
                onChange={(e) => handleChange(name, e.target.value)}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className={styles.button}
          disabled={!isValidForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRender;