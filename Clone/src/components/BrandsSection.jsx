import BrandCard from './BrandCard';

const brandItems = [
  { logo: '/assets/68c1952f22281ee50d3620b5_zclv.svg', altText: 'Bullit' },
  { logo: '/assets/68c194e6d1b186563459b107_morssinkhof.svg', altText: 'Morssinkhof Rymoplast' },
  { logo: '/assets/6849d88f755388cc2c74ecff_salontopper.svg', altText: 'Salontopper' },
  { logo: '/assets/6849d880bed5996600cbc586_seesing-flex.svg', altText: 'Seesing Flex' },
  { logo: '/assets/6849d86cd6ba384af3c14e58_graafschap-college.svg', altText: 'Graafschap College' },
  { logo: '/assets/6849d85341bf0d7476e56a8c_fides.svg', altText: 'Fides' },
  { logo: '/assets/6849d838fc5735f090bd9843_SRHK.svg', altText: 'SRHK' },
  { logo: '/assets/6849d81e72e08110e3fd1a17_knltb.svg', altText: 'KNLTB' },
  { logo: '/assets/684c05642bf8f5cea7384403_de-talententuin.svg', altText: 'De Talententuin' },
  { logo: '/assets/684b062ebc242028ca4b3ea1_tho.svg', altText: 'THO' },
];

const BrandsSection = () => {
  const loopItems = [...brandItems, ...brandItems];

  return (
    <section className="brands-section bg-[#FAF9F6]" aria-label="Brands">
      <div className="brands-shell mx-auto w-full">
        <h2 className="brands-title">
          <span>These brands</span>
          <span>got hyped.</span>
        </h2>

        <div className="brands-track-wrap">
          <div className="brands-track">
            {loopItems.map((item, index) => (
              <BrandCard key={`${item.altText}-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
