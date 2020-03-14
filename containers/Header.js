import React from 'react';
import Link from 'next/link';

const Header = () => {
  const links = [
    { id: 0, title: 'inicio', path: '/' },
    { id: 1, title: 'contacto', path: '/contact' },
    { id: 2, title: 'sobre nosotros', path: '/about' },
    { id: 3, title: 'iniciar session', path: '/login' },
  ];

  return (
    <header>
      <h1>Caps</h1>
      {links.map(link => (
        <Link href={link.path} key={link.id}>
          <a className="btn">{link.title}</a>
        </Link>
      ))}
    </header>
  );
};

export default Header;
