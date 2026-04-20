import { useState } from 'react';

const navItems = [
  { href: '#expertises', label: 'Expertises' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 24"
    fill="none"
    className="h-[clamp(0.95rem,1.05vw,1.41875rem)] w-[clamp(0.7rem,0.8vw,1.073125rem)] flex-none"
    aria-hidden="true"
  >
    <path
      d="M17.4906 11.0361C17.1898 10.6437 16.8237 10.3037 16.4837 9.96371C15.6075 9.17906 14.6136 8.61673 13.7766 7.79284C11.8281 5.88352 11.3965 2.73184 12.6389 0.3125C11.3965 0.613283 10.3111 1.29331 9.38256 2.03873C5.99549 4.75886 4.66158 9.55831 6.25704 13.6777C6.30935 13.8085 6.36166 13.9393 6.36166 14.1093C6.36166 14.397 6.16549 14.6585 5.90394 14.7632C5.60316 14.8939 5.2893 14.8155 5.04083 14.6062C4.96661 14.5441 4.90453 14.4687 4.85774 14.3839C3.37998 12.5138 3.14459 9.83294 4.13848 7.68822C1.95453 9.46676 0.764478 12.4746 0.934486 15.3124C1.01295 15.9663 1.09142 16.6202 1.31373 17.274C1.49682 18.0587 1.84991 18.8433 2.24224 19.5365C3.65461 21.7989 6.10011 23.4205 8.72869 23.7474C11.5273 24.1005 14.522 23.5905 16.6667 21.655C19.0599 19.4841 19.8969 16.0055 18.6676 13.0238L18.4976 12.6838C18.223 12.0823 17.4906 11.0361 17.4906 11.0361ZM13.3581 19.2749C12.992 19.5888 12.3904 19.9288 11.9196 20.0596C10.4549 20.5827 8.99024 19.8503 8.12712 18.9872C9.68335 18.621 10.6118 17.4702 10.8865 16.3063C11.1088 15.2601 10.6903 14.397 10.5203 13.39C10.3634 12.4223 10.3895 11.5984 10.7426 10.6961C10.9911 11.193 11.2526 11.6899 11.5665 12.0823C12.5735 13.39 14.1559 13.9654 14.4959 15.744C14.5482 15.9271 14.5743 16.1101 14.5743 16.3063C14.6136 17.3787 14.1428 18.5556 13.3581 19.2749Z"
      fill="#ef4444"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="layout-shell relative flex w-full items-center justify-between py-5 min-[992px]:h-[120px] min-[992px]:min-h-[120px] min-[992px]:py-0">
      <div className="flex shrink-0 items-center justify-start">
        <div className="w-[9.375rem] shrink-0 min-[992px]:h-[clamp(1.95rem,3.95vw,4.75rem)] min-[992px]:w-[clamp(4.75rem,9.8vw,11.76175rem)]">
          <img
            src="/assets/site_logo.svg"
            alt="Get Hyped Logo"
            className="block h-auto w-full border-0 min-[992px]:h-full"
          />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 min-[992px]:flex min-[992px]:items-center min-[992px]:justify-center">
        <div className="flex h-[clamp(2.5rem,2.92vw,3.5rem)] w-[clamp(16rem,21.15vw,25.375rem)] overflow-hidden rounded-[1em] bg-white p-2">
          <ul className="flex h-full w-full list-none items-center justify-between gap-[clamp(0.12rem,0.28vw,0.5rem)] p-0">
            {navItems.map((item) => (
              <li key={item.href} className="flex h-full flex-1">
                <a
                  href={item.href}
                  className="button-color-swoosh grid h-full w-full place-items-center rounded-[0.75em] text-[clamp(0.68rem,0.78vw,1rem)] font-bold tracking-[-0.03em] text-ink no-underline"
                >
                  <span className="button-color-swoosh_bg">
                    <span
                      style={{ '--index': 0 }}
                      className="button-color-swoosh_bg-inner is-first"
                    ></span>
                    <span
                      style={{ '--index': 1 }}
                      className="button-color-swoosh_bg-inner is-second"
                    ></span>
                  </span>
                  <span data-text={item.label} className="button-color-swoosh_inner">
                    <span className="button-color-swoosh_text">{item.label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end gap-4">
        <button
          className="button-default hidden h-[clamp(2.3rem,2.92vw,3.4375rem)] w-[clamp(7rem,9.1vw,10.9375rem)] shrink-0 shadow-[0_2px_8px_0_rgba(252,184,250,0.15)] focus:outline-none min-[992px]:flex"
        >
          <span className="button-default__inner">
            <span className="button-default__background is-nav"></span>
            <span className="button-default__text">Get Results</span>
            <span className="button-default__icon">
              <span className="button-default__icon-wrap">
                <FireIcon />
              </span>
            </span>
          </span>
        </button>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-[0.875rem] bg-pink-soft min-[992px]:hidden"
          onClick={toggleMenu}
        >
          <span className="flex flex-col gap-[0.38rem]">
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink transition-transform duration-200 ${
                isMenuOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-5 rounded-full bg-ink transition-transform duration-200 ${
                isMenuOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            ></span>
          </span>
        </button>
      </div>

      <div
        className={`absolute right-4 top-full z-30 mt-3 w-[min(18rem,calc(100vw-2rem))] rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)] min-[992px]:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } sm:right-6`}
      >
        <ul className="flex list-none flex-col gap-1 p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-3.5 text-base font-bold text-slate-800 no-underline transition-colors duration-200 hover:bg-rose-50 hover:text-pink-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="button-default mx-auto mt-4 flex h-[clamp(2.3rem,2.92vw,3.4375rem)] w-full max-w-[10.9375rem] shadow-[0_2px_8px_0_rgba(252,184,250,0.15)]"
          onClick={closeMenu}
        >
          <span className="button-default__inner">
            <span className="button-default__background is-nav-mobile"></span>
            <span className="button-default__text">Get Results</span>
            <span className="button-default__icon">
              <span className="button-default__icon-wrap">
                <FireIcon />
              </span>
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
