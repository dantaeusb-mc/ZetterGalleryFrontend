import React, {ChangeEvent, useRef, useState} from 'react';
import styles from './LanguageSelector.module.scss';

interface ILanguageOption {
  code: string;
  label: string;
}

const languages: ILanguageOption[] = [
  { code: 'en', label: 'English'},
  { code: 'ru', label: 'Русский'}
];

export default function LanguageSelector(): JSX.Element {
  const [code, setCode] = useState(languages[0].code);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCode(event.target.value);
  }

  return (
    <div className={ styles['language-wrapper'] } >
      <label htmlFor="language-select">
        <div className={ styles['language-overlay'] }>{ code.toUpperCase() }</div>
        <select id="language-select" className={ styles['language-select'] } value={ code } onChange={ handleChange }>
          { languages.map((option, iterator) => {
            return (<option key={ iterator } value={ option.code }>{ option.label }</option>)
          }) }
        </select>
      </label>
    </div>
  );
}
