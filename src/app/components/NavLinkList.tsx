"use client";

import { useState } from 'react';

interface NavLink {
  href: string;
  text: string;
}

interface NavLinkListProps {
  links: NavLink[];
}

export default function NavLinkList({ links }: NavLinkListProps) {
  const [filter, setFilter] = useState('');

  const filteredLinks = links.filter(link =>
    link.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter links..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <ul>
        {filteredLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
