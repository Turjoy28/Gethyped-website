import WorkCard from './WorkCard';

const workItems = [
  {
    title: 'Van nul naar vol, binnen 3 weken',
    brand: 'Bullit',
    colorClass: 'is-orange',
    cardClass: 'work-card--low',
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
  },
  {
    title: 'Zacht in smaak, sterk in beeld',
    brand: 'Roasta',
    colorClass: 'is-blue',
    cardClass: 'work-card--mid',
    video: 'https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4',
  },
  {
    title: 'Content die echt smaakt (en raakt)',
    brand: 'Loco',
    colorClass: 'is-green',
    cardClass: 'work-card--high',
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="work-section bg-[#FAF9F6]">
      <div className="work-shell mx-auto w-full px-0">
        <div className="work-grid">
          <div className="work-intro">
            <h2 className="work-title">
              <span>Content</span>
              <span>dat scoort.</span>
            </h2>
            <p className="work-description">
              Wij vertellen jouw verhaal. Op een manier die echt past bij jouw doelgroep.
              Met creatieve content die werkt en het verschil maakt.
            </p>
            <a href="#contact" className="work-cta">
              <span>Bekijk al ons werk</span>
              <span className="work-cta__icon" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          <div className="work-cards" aria-label="Work showcase cards">
            {workItems.map((item) => (
              <WorkCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
