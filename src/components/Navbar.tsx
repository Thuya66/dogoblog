import { NavLink } from 'react-router-dom';
import { LANGUAGES } from '../constants';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { i18n } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  const isActive = ({ isActive }: any) =>
    `link ${isActive ? 'active' : ''}`;

  return (
    <div className="flex flex-row items-end navbar ">
      <h1>DOGO-Blog</h1>
      <div className="links ">
        <NavLink to="/" className={isActive}>
          Home
        </NavLink>
        <NavLink to="/create" className={isActive}>
          Add Blog
        </NavLink>
      </div>
      <select
        id="underline_select"
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className="block rounded-md bg-transparent ml-4 text-sm focus-within:text-sm focus:text-sm py-1.5 text-gray-900 outline-none sm:max-w-xs sm:text-sm sm:leading-6"
      >
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code} className="left-0">
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Navbar;
