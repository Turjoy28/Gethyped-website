const aboutHeading = [
  'Wij maken content die opvalt. Die',
  'blijft hangen. Die jouw doelgroep',
  'raakt en jouw merk in beweging',
  'brengt. Snel, krachtig en energiek.',
];

const aboutBody = [
  'We stoppen niet bij mooie plaatjes en',
  'vette beelden. We maken het meetbaar.',
  'Zo weet je precies wat werkt en wat niet.',
  'Nooit meer content zonder strategie.',
  'Nooit meer content zonder resultaat.',
];

const ArrowRightIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
  >
    <path
      d="M4.16699 10H15.8337"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.833 5L15.833 10L10.833 15"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutStrip = () => {
  const headingLabel = aboutHeading.join(' ');

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-[1920px] px-4 pb-14 pt-12 sm:px-5 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-[8.5rem]"
    >
      <div className="layout-shell">
        <h2
          aria-label={headingLabel}
          className="mx-auto max-w-[56.5rem] text-center text-[clamp(1.7rem,7.2vw,4.9rem)] font-semibold leading-[0.97] tracking-[-0.035em] text-ink lg:text-[clamp(2.7rem,4.8vw,4.9rem)] xl:leading-[0.92] xl:tracking-[-0.08em]"
        >
          <span className="xl:hidden">{headingLabel}</span>

          <span className="hidden xl:block" aria-hidden="true">
            {aboutHeading.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </span>
        </h2>

        <div className="mx-auto mt-9 max-w-[29rem] sm:mt-11 lg:mt-[4.8rem]">
          <p className="text-[clamp(0.82rem,2.8vw,1.95rem)] font-semibold leading-[1.24] tracking-[-0.02em] text-ink lg:hidden">
            {aboutBody.join(' ')}
          </p>

          <p
            aria-hidden="true"
            className="hidden text-[clamp(1.2rem,1.92vw,1.95rem)] font-semibold leading-[1.22] tracking-[-0.05em] text-ink lg:block"
          >
            {aboutBody.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-4 flex justify-center sm:mt-5 lg:mt-6">
            <a
              href="#expertises"
              className="group inline-flex items-center gap-1.5 rounded-[0.8rem] border border-black/35 bg-transparent py-0.5 pl-2.5 pr-1 text-[0.78rem] font-semibold tracking-[-0.01em] text-ink transition-colors duration-200 hover:border-black sm:gap-2 sm:rounded-[0.9rem] sm:py-1 sm:pl-3 sm:pr-1.5 sm:text-[0.88rem] lg:gap-3 lg:rounded-[1rem] lg:py-1.5 lg:pl-4 lg:pr-1.5 lg:text-base lg:tracking-[-0.03em]"
            >
              <span>Leer ons kennen</span>
              <span className="grid h-7 w-7 place-items-center rounded-[0.58rem] bg-ink text-white transition-transform duration-200 group-hover:translate-x-0.5 sm:h-8 sm:w-8 sm:rounded-[0.66rem] lg:h-10 lg:w-10 lg:rounded-[0.82rem]">
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
