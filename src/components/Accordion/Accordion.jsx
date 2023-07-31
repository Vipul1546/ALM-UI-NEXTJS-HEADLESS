import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';
import { dataObj } from '../../assets/constants/data';
import Chevron from '../../assets/icons/Chevron';
import IconMinus from '../../assets/icons/IconMinus';
import IconPlus from '../../assets/icons/IconPlus';
import Flex from '../Flex/Flex';
import styles from './Accordion.module.scss';

const AccoElem = ({ item, active, setActive, variant, iconType }) => {
  const contentRef = useRef();

  useLayoutEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
  }, [contentRef, active]);
  const toggle = () => {
    active ? setActive() : setActive(item.tabNav);
  };
  const variantToggle = () => {
    if (iconType === 'plus') {
      return active ? <IconMinus height={14} fill="#fff" /> : <IconPlus height={14} width={14} fill="#fff" />;
    } else {
      return <Chevron height={14} width={14} />;
    }
  };
  return (
    <div className={`${styles.accordion} ${variant}`}>
      <h6 onClick={toggle} className={active ? styles.active : ''}>
        <Flex container justifyContent={'space-between'} alignItems={'center'}>
          {item.tabNav}
          {variantToggle()}
        </Flex>
      </h6>
      <div ref={contentRef} className={styles.content}>
        <p>{item.content}</p>
      </div>
    </div>
  );
};
const Accordion = ({ variant = 'primary', iconType }) => {
  const [active, setActive] = useState('a');
  if (variant.includes('hover-image')) {
    return (
      <>
        <div className={`${styles.accordion} ${variant}`}>
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <figure className={styles.item}>
                <img
                  src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1.webp"
                  loading="eager"
                  srcset="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1-p-500.webp 500w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1-p-800.webp 800w, https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1.webp 980w"
                  data-w-id="0b84718e-c201-e886-a3e6-fbde4d3f3945"
                  sizes="(max-width: 991px) 100vw, 9vw"
                  alt=""></img>
                <figcaption className={styles.caption}>
                  <h2>{i + 1}</h2>
                  <p>Don't you dare to hover me</p>
                </figcaption>
              </figure>
            ))}
        </div>
      </>
    );
  }
  return (
    <>
      {dataObj &&
        Array.isArray(dataObj) &&
        dataObj.map((item, idx) => (
          <AccoElem
            key={idx}
            item={item}
            active={active === item.tabNav}
            setActive={setActive}
            variant={variant}
            iconType={iconType}
          />
        ))}
    </>
  );
};

Accordion.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default Accordion;
