const footerNav = ['Expertises', 'Work', 'About', 'Contact'];
const socialLinks = ['in', 't', 'ig', 'yt'];

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__shell">
        <div className="site-footer__hero">
          <h2 className="site-footer__title">Let&apos;s Get Hyped!</h2>
          <div className="site-footer__hero-actions">
            <a href="mailto:info@gethyped.nl" className="site-footer__mail-btn">
              Mail ons direct
              <span aria-hidden="true" className="site-footer__mail-btn-icon">
                ✉
              </span>
            </a>
            <a href="#section_hero" className="site-footer__results-btn">
              Get Results
              <span aria-hidden="true" className="site-footer__results-btn-icon">
                🔥
              </span>
            </a>
          </div>
        </div>

        <div className="site-footer__panel-wrap">
          <div className="site-footer__sticker">GH</div>

          <div className="site-footer__panel">
            <div className="site-footer__brand">
              <img src="/assets/site_logo.svg" alt="Get Hyped" className="site-footer__logo" />
            </div>

            <div className="site-footer__meta">
              <ul className="site-footer__nav-pills">
                {footerNav.map((label) => (
                  <li key={label}>
                    <a href={`#${label.toLowerCase()}`}>{label}</a>
                  </li>
                ))}
              </ul>

              <div className="site-footer__social">
                <span>Follow us</span>
                <ul>
                  {socialLinks.map((item) => (
                    <li key={item}>
                      <a href="#contact" aria-label={item}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="site-footer__legal-row">
                <p>© {new Date().getFullYear()} Get Hyped</p>
                <p>© Design by iPublic</p>
              </div>
            </div>

            <div className="site-footer__contact">
              <h3>Contact</h3>
              <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
              <a href="tel:+316135337496">+31 6 1353 7496</a>
              <h3>Adres</h3>
              <p>Betuwestraatst 6</p>
              <p>7141 AL Groenlo</p>
              <a href="#contact">Privacy voorwaarden</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
