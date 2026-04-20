import HeroText from './HeroText';
import VideoStatCard from './VideoStatCard';

const heroCards = [
  {
    stat: '10M+',
    label: {
      title: 'Organische views',
      caption: 'Groei door slimme content',
    },
    color: 'blue',
    className: 'hero-card--tilt-left hero-card--drop-low',
  },
  {
    video: 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4',
    className: 'hero-card--tilt-left',
  },
  {
    stat: '30+',
    label: {
      title: 'Merken geholpen',
      caption: 'Van start-up tot multinational',
    },
    color: 'green',
    className: 'origin-bottom rotate-[2.6deg] hero-card--drop-mid max-[640px]:rotate-[2deg]',
  },
  {
    video: `${import.meta.env.BASE_URL}assets/petrolhead-loop.mp4`,
    label: 'WAT DIE AUTO WILT.',
    className: 'hero-card--tilt-car max-[991px]:hidden',
  },
];

const HeroSection = () => {
  return (
    <header
      id="section_hero"
      className="pb-[3.25rem] pt-0 min-[992px]:pb-16 min-[992px]:pt-[clamp(0.35rem,0.8vw,1rem)]"
    >
      <div className="layout-shell">
        <HeroText
          title="Get Hyped. Get Noticed. Get Results."
          subtitle={['Klaar met gokken op content', 'die niets oplevert?']}
        />

        <div
          className="hero-cards-stack mt-[clamp(2.2rem,4vw,4rem)]"
          aria-label="Hero results cards"
        >
          {heroCards.map((card, index) => (
            <VideoStatCard
              key={`${card.stat ?? card.video}-${index}`}
              stat={card.stat}
              label={card.label}
              video={card.video}
              color={card.color}
              className={card.className}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
