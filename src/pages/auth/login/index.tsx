import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../utils/languages';

const number: number = 15;

const Login = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('login')}</p>
      <p>{t('days_since_implementation', { number })}</p>
      {languages.map(({ code, name, country_code }) => (
        <button key={country_code} onClick={() => i18next.changeLanguage(code)}>
          {name} <span className={`fi fi-${country_code} fis`}></span>
        </button>
      ))}
    </div>
  );
};

export default Login;
