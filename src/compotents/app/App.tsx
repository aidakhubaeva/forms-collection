import React, { useState } from 'react';
import styles from './App.module.css';
import { Header } from '../header';
import { Forms } from '../forms';
import { FormRender } from '../form-render';
import { formsData } from '../../formsData';

function App() {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const form = activeForm ? formsData[activeForm] : null;

  return (
    <div className={styles.app}>
      <Header />
      <Forms onSelect={setActiveForm} activeForm={activeForm}>
        {form && (
          <FormRender
            title={form.title}
            description={form.description}
            fields={form.fields}
          />
        )}
      </Forms>
    </div>
  );
}

export default App;