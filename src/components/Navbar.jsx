import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        Menu
      </button>
    </nav>
  );
}
