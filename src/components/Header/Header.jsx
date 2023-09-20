import cl from './Header.module.scss';

const Header = () => {
  return (
    <header className={cl.header}>
      <img className={cl.logo} src="./img/logo.svg" alt="logo" />
    </header>
  );
};

export default Header;
