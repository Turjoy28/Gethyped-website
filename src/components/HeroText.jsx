const HeroText = ({ title, subtitle }) => {
  const hasPresetResponsiveLayout = title === 'Get Hyped. Get Noticed. Get Results.';
  const desktopLines = ['Get Hyped. Get', 'Noticed. Get Results.'];
  const mobileLines = ['Get Hyped. Get', 'Noticed. Get', 'Results.'];
  const subtitleLines = Array.isArray(subtitle) ? subtitle : null;

  return (
    <div className="mt-4 w-full max-w-[1344px] sm:mt-10 min-[992px]:mt-8">
      <h1
        className="w-full text-[clamp(3.1rem,10vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-ink sm:text-[clamp(3.3rem,7.9vw,5.1rem)] min-[992px]:text-[clamp(4.8rem,6vw,6.6rem)] xl:text-[clamp(5.6rem,6.35vw,8.1rem)]"
        aria-label={typeof title === 'string' ? title : undefined}
      >
        {hasPresetResponsiveLayout ? (
          <>
            <span className="block min-[992px]:hidden" aria-hidden="true">
              {mobileLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block whitespace-nowrap first:mb-[0.08em]">
                  {line}
                </span>
              ))}
            </span>

            <span className="hidden min-[992px]:block" aria-hidden="true">
              {desktopLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block whitespace-nowrap first:mb-[0.08em]">
                  {line}
                </span>
              ))}
            </span>
          </>
        ) : (
          title
        )}
      </h1>
      <p className="mt-[2.15rem] max-w-[14ch] text-[clamp(1rem,3.2vw,1.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink min-[992px]:max-w-[16ch] min-[992px]:text-[clamp(1.05rem,1.3vw,1.72rem)]">
        {subtitleLines ? (
          subtitleLines.map((line, index) => (
            <span key={`${line}-${index}`} className="block whitespace-nowrap">
              {line}
            </span>
          ))
        ) : (
          subtitle
        )}
      </p>
    </div>
  );
};

export default HeroText;
