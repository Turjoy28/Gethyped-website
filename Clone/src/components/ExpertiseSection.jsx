import { useEffect, useRef } from 'react';
import ExpertisePanel from './ExpertisePanel';

const expertiseItems = [
  {
    theme: 'social',
    number: '01',
    title: 'Social strategy',
    heading: 'Slimme strategie. Sterke start.',
    desc: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen dat naar een duidelijk plan met formats die echt impact maken.',
    buttonText: 'Meer over social strategie',
    video:
      "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
      
  },
  {
    theme: 'content',
    number: '02',
    title: 'Content creation',
    heading: 'Content die opvalt en raakt.',
    desc: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    buttonText: 'Meer over content creatie',
    video:
     "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
  },
  {
    theme: 'activation',
    number: '03',
    title: 'Activation',
    heading: 'Zichtbaar waar en wanneer het telt.',
    desc: 'De juiste content verdient het om gezien te worden. We verspreiden die content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen.',
    buttonText: 'Meer over activatie',
    video:
      "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
  },
  {
    theme: 'data',
    number: '04',
    title: 'Data',
    heading: 'Inzichten die impact maken.',
    desc: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    buttonText: 'Meer over data',
    video:
     "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
  },
];

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function easeInOutCubic(value) {
  const x = clamp01(value);
  return x < 0.5 ? 4 * x * x * x : 1 - ((-2 * x + 2) ** 3) / 2;
}

const ExpertiseSection = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const slots = Array.from(stack.querySelectorAll('.expertise-stack__slot'));
    const motions = slots.map((slot) => slot.querySelector('.expertise-stack__motion'));

    let rafId = 0;

    const clearCardEffects = () => {
      motions.forEach((motion) => {
        if (!motion) return;
        motion.style.transform = '';
        motion.style.filter = '';
        motion.style.opacity = '';
        motion.style.visibility = '';
        motion.style.willChange = '';
      });
    };

    const runAnimation = () => {
      if (reducedMotion.matches) {
        clearCardEffects();
        return;
      }

      const stickyTop = Number.parseFloat(
        getComputedStyle(stack).getPropertyValue('--expertise-stack-sticky-top')
      );
      const viewportHeight = window.innerHeight;
      const startY = viewportHeight;
      const endY = (Number.isFinite(stickyTop) ? stickyTop : 64) + 12;
      const progressRange = Math.max(1, startY - endY);
      const slotTops = slots.map((slot) => slot.getBoundingClientRect().top);

      const enterRawProgress = slots.map((slot) => {
        const rect = slot.getBoundingClientRect();
        return clamp01((startY - rect.top) / progressRange);
      });
      const enterProgress = enterRawProgress.map((raw) => easeInOutCubic(raw));

      motions.forEach((motion, index) => {
        if (!motion) return;

        const inProgress = index === 0 ? 1 : enterProgress[index];
        const outProgress = index < motions.length - 1 ? enterProgress[index + 1] : 0;
        const nextRawProgress = index < motions.length - 1 ? enterRawProgress[index + 1] : 0;
        const nextTop = index < slots.length - 1 ? slotTops[index + 1] : Number.POSITIVE_INFINITY;
        const hasReachedStickyBand = nextTop <= endY + 8;

        /*
         * Keep cards locked to the exact same position.
         * Only the active card scales in; covered cards are removed quickly
         * so they never keep peeking through while the next card stacks up.
         */
        const scale = 0.9 + inProgress * 0.1;
        const isCovered = hasReachedStickyBand || (nextRawProgress >= 0.22 && outProgress >= 0.2);

        motion.style.transform = `translate3d(0, 0, 0) scale(${scale.toFixed(4)})`;
        motion.style.filter = 'none';
        motion.style.opacity = isCovered ? '0' : '1';
        motion.style.visibility = isCovered ? 'hidden' : 'visible';
        motion.style.willChange = 'transform, opacity, visibility';
      });
    };

    const onFrame = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(runAnimation);
    };

    window.addEventListener('scroll', onFrame, { passive: true });
    window.addEventListener('resize', onFrame);
    reducedMotion.addEventListener('change', onFrame);
    onFrame();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onFrame);
      window.removeEventListener('resize', onFrame);
      reducedMotion.removeEventListener('change', onFrame);
      clearCardEffects();
    };
  }, []);

  return (
    <section
      id="expertises"
      className="bg-[#FAF9F6] pb-20 pt-12 min-[1024px]:pt-16"
    >
      <div ref={stackRef} className="layout-shell expertise-stack">
        {expertiseItems.map((item, index) => (
          <div
            key={item.number}
            className="expertise-stack__slot"
            style={{
              /* Later cards sit above earlier ones so the next layer fully covers the previous */
              zIndex: index + 1,
            }}
          >
            <div className="expertise-stack__sticky">
              <div className="expertise-stack__motion">
                <ExpertisePanel {...item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
