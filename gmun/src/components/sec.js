import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import styles from './sec.module.css'; // Import CSS Module
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FaFacebookF = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaFacebookF })));
const FaLinkedinIn = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaLinkedinIn })));
const FaInstagram = lazy(() => import('react-icons/fa').then((mod) => ({ default: mod.FaInstagram })));

const teamMembers = lazy(() => import('./teamData')); // Ensure this path is correct
const secretrait = lazy(() => import('./secretariat')); // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const Sec = () => {
  const scrollDownRef = useRef(null);
  const [isSecretariat, setIsSecretariat] = useState(false); // State to toggle data
  const [currentData, setCurrentData] = useState([]); // Current dataset

  useEffect(() => {
    const loadInitialData = async () => {
      const data = await import('./teamData');
      setCurrentData(data.default);
    };

    loadInitialData();
  }, []);

  const toggleData = async () => {
    if (isSecretariat) {
      const data = await import('./teamData');
      setCurrentData(data.default);
    } else {
      const data = await import('./secretariat');
      setCurrentData(data.default);
    }
    setIsSecretariat(!isSecretariat);
  };

  useEffect(() => {
    const mediaAnimation = gsap.matchMedia();

    ScrollTrigger.defaults({
      markers: false,
    });

    const colors = ['#F3EDE3', '#B69354', '#CDC9E3', '#574A73', '#F3EDE3', '#B69354'];

    mediaAnimation.add('(min-width: 666px)', () => {
      // Desktop animations
      const details = gsap.utils.toArray(`.${styles.desktopContentSection}`);
      const photos = gsap.utils.toArray(`.${styles.desktopPhoto}`);

      gsap.set(photos, { clipPath: 'inset(100% 0% 0% 0%)', autoAlpha: 1 });

      details.forEach((section, i) => {
        const bgColor = colors[i % colors.length]; // Cycle through colors

        if (bgColor === '#F3EDE3') {
          section.classList.add(styles.bgLightCream);
        } else if (bgColor === '#B69354') {
          section.classList.add(styles.bgGolden);
        } else if (bgColor === '#CDC9E3') {
          section.classList.add(styles.bgLightPurple);
        } else if (bgColor === '#574A73') {
          section.classList.add(styles.bgDarkPurple);
        }

        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => {
            gsap.to(section, { backgroundColor: bgColor, duration: 1 });
          },
          onLeaveBack: () => {
            gsap.to(section, { backgroundColor: '#F3EDE3', duration: 1 });
          },
        });
      });

      details.forEach((detail, index) => {
        const headline = detail.querySelector(`.${styles.reveal}`);
        const photo = photos[index];

        const animation = gsap.timeline({
          scrollTrigger: {
            trigger: headline,
            start: 'top 100%',
            end: 'top 60%',
            scrub: 0.5,
            markers: false,
          },
        })
          .to(photo, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5 })
          .to(headline, { opacity: 1, y: 0, duration: 1.5 }, '-=1.5');

        return animation;
      });
    });

    mediaAnimation.add('(max-width: 665px)', () => {
      const details = gsap.utils.toArray(`.${styles.desktopContentSection}`);

      details.forEach((section, i) => {
        const bgColor = colors[i % colors.length]; // Cycle through colors

        if (bgColor === '#F3EDE3') {
          section.classList.add(styles.bgLightCream);
        } else if (bgColor === '#B69354') {
          section.classList.add(styles.bgGolden);
        } else if (bgColor === '#CDC9E3') {
          section.classList.add(styles.bgLightPurple);
        } else if (bgColor === '#574A73') {
          section.classList.add(styles.bgDarkPurple);
        }

        ScrollTrigger.create({
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => {
            gsap.to(section, { backgroundColor: bgColor, duration: 1 });
          },
          onLeaveBack: () => {
            gsap.to(section, { backgroundColor: '#F3EDE3', duration: 1 });
          },
        });
      });
    });

    ScrollTrigger.create({
      trigger: `.${styles.desktopContentSection}:last-child`,
      start: 'top center',
      onEnter: () => {
        gsap.to(scrollDownRef.current, { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        gsap.to(scrollDownRef.current, { opacity: 0.7, duration: 0.5 });
      },
    });

    gsap.set(scrollDownRef.current, { opacity: 0.7 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mediaAnimation.revert();
    };
  }, [currentData]);

  return (
    <div className={styles.gallery}>
      <header className={styles.teamHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>OUR TEAM</h1>
          <button className={styles.showSecretariatBtn} onClick={toggleData}>
            {isSecretariat ? 'SHOW TEAM' : 'SHOW SECRETARIAT'}
          </button>
        </div>
      </header>

      <div className={styles.container}>
        <Suspense fallback={<div>Loading team data...</div>}>
          {currentData.map((member, index) => (
            <div key={index} className={`${styles.contentSection} ${styles.desktopContentSection}`}>
              <div className={styles.text}>
                <h2 className={styles.reveal}>{member.name}</h2>
                <p>{member.role}</p>
                <div className={styles.socialIcons}>
                  <Suspense fallback={<span>Loading...</span>}>
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Facebook`}
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <FaInstagram />
                    </a>
                  </Suspense>
                </div>
              </div>
              <div className={`${styles.image} ${styles.desktopPhoto}`}>
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
            </div>
          ))}
        </Suspense>
      </div>

      <div className={styles.scrollDown} ref={scrollDownRef}>
        Scroll down
      </div>
    </div>
  );
};

export default Sec;
