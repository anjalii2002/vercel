import React from 'react'

const App = () => {
  return (
    <>
    <style>
      {
        `
        @layer library, reset, base, demo;
@import 'https://unpkg.com/open-props@2.0.0-beta.5' layer(library);
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap');

@layer reset {

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :where(:not(dialog)) {
    margin: 0;
  }
}

@layer base {
  html {
    --nav-block-size: 74px;
    --brand-gradient: linear-gradient(227deg,
        #1400c7 0%,
        #00bbff 100%);

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    min-block-size: 100dvb;
  }
}

@layer demo {
  .navbar {
    min-block-size: var(--nav-block-size);
    display: grid;
    position: fixed;
    inset-block-start: 0;
    inset-inline: 0;
    background-color: white;
    z-index: var(--layer-3);
    place-items: center end;
    padding-block: var(--size-3);
    padding-inline: var(--size-5);

    @media (width >=600px) {
      padding-inline: 6dvi;
    }
  }

  .nav-cta-btn {
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-7);
    inline-size: max-content;
    white-space: nowrap;
    text-decoration: none;
    padding-block: var(--size-3);
    padding-inline: var(--size-7);
    border: var(--border-size-2) solid transparent;
    color: black;
    position: relative;
    isolation: isolate;

    background: linear-gradient(white, white) padding-box,
      var(--brand-gradient) border-box;
    border-radius: var(--radius-6);
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      position: absolute;
      inset: 0;

      background: var(--brand-gradient);
      mix-blend-mode: screen;
    }

    &:hover {
      color: white;

      &::before {
        background: var(--brand-gradient) padding-box,
          var(--brand-gradient) border-box;
        background-repeat: no-repeat;
        background-size: contain;
        mix-blend-mode: normal;
        z-index: -1;
      }
    }
  }

  .section {
    --section-block-size: max(400px, 100dvb);
    display: grid;
    background-color: white;
    min-block-size: var(--section-block-size);
    position: relative;
    block-size: 100%;
    display: grid;

    >* {
      grid-area: 1/1;
    }
  }

  .section-wrapper {
    position: relative;
    display: grid;

    @media (width >=960px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (width < 960px) {
      padding-block-start: calc(var(--nav-block-size) + var(--size-7));
      padding-block-end: var(--size-7);
    }
  }

  .video {
    display: block;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    position: relative;
    z-index: -1;
  }

  .content-wrapper {
    display: grid;

    @media (width < 960px) {
      gap: var(--size-7);
    }
  }

  .meta {
    display: grid;
    gap: var(--size-3);
  }

  .content {
    display: grid;
    inline-size: 100%;
    place-items: center;
    padding-block: var(--size-7);
    padding-inline: var(--size-5);

    @media (width >=960px) {
      padding: var(--size-10);
      min-block-size: 100cqb;
      place-items: center end;
    }

    @media (width < 960px) {
      gap: var(--size-5);
    }
  }

  .mobile-visual {
    inline-size: 100%;
    aspect-ratio: var(--ratio-square);

    @media (width >=960px) {
      display: none;
    }
  }

  .headline {
    font-size: var(--font-size-7);
    font-weight: var(--font-weight-4);
    max-inline-size: var(--size-content-1);
    text-wrap: pretty;

    @media (width < 960px) {
      font-size: var(--font-size-6);
    }
  }

  .desc {
    font-size: var(--font-size-4);
    line-height: 1.5;
    max-inline-size: 40ch;
    text-wrap: pretty;

    @media (width < 960px) {
      font-size: var(--font-size-3);
    }
  }

  .visual {
    display: grid;
    position: sticky;
    block-size: var(--section-block-size);
    inset-block-start: 0;
    container-type: size;

    @media (width < 960px) {
      display: none;
    }
  }

  .video-visual {
    inline-size: 100%;
    block-size: var(--section-block-size);
    display: block;
    position: sticky;
    inset-block-start: 0;
    isolation: isolate;
    filter: hue-rotate(210deg);
  }

  .card-wrapper {
    container-type: size;
    display: grid;
    place-items: center;
    overflow: clip;

    >* {
      grid-area: 1/1;
    }
  }

  .card {
    aspect-ratio: var(--ratio-square);
    inline-size: 70cqi;
    border-radius: var(--radius-3);
    scale: 0.4;
  }

  .card-img {
    display: block;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }

  .card-1 {
    scale: 1;
  }

  .card-2 {
    translate: -35cqi 30cqb;
    opacity: 0.3;
  }

  .card-3 {
    translate: 0cqi 50cqb;
    opacity: 0.5;
  }

  .card-4 {
    translate: 45cqi 40cqb;
    opacity: 0.5;
  }

  .content-1 {
    --_text-gradient: linear-gradient(227deg,
        #1400c7 0%,
        #00bbff 100%);
  }

  .content-2 {
    --_text-gradient: linear-gradient(227deg,
        #28dc28 0%,
        #00bbff 100%);
  }

  .content-3 {
    --_text-gradient: linear-gradient(227deg,
        #1400c7 0%,
        #b800b1 100%);
  }

  .content-4 {
    --_text-gradient: linear-gradient(227deg,
        #b800b1 0%,
        #f50000 100%);
  }

  .text-highlight {
    background: var(--_text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}

@supports (animation-timeline: scroll()) {
  body {
    timeline-scope: --content-1, --content-2, --content-3, --content-4;
  }

  .section {
    view-timeline-name: --section;
  }

  .content-1 {
    view-timeline-name: --content-1;
  }

  .content-2 {
    view-timeline-name: --content-2;
  }

  .content-3 {
    view-timeline-name: --content-3;
  }

  .content-4 {
    view-timeline-name: --content-4;
  }

  .card {
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  .card-1 {
    animation-timeline: --content-1;
    animation-name: slide-up-first-card;
  }

  .card-2 {
    animation-timeline: --content-2;
    animation-name: slide-up-card;
  }

  .card-3 {
    animation-timeline: --content-3;
    animation-name: slide-up-card;
  }

  .card-4 {
    animation-timeline: --content-4;
    animation-name: slide-up-card;
  }

  .video-visual {
    animation-timeline: --section;
    animation-range-end: exit 110%;
    animation-name: update-hue;
    animation-timing-function: step-end;
    animation-fill-mode: forwards;
  }

  @keyframes update-hue {
    0% {
      filter: hue-rotate(210deg);
    }

    25% {
      filter: hue-rotate(150deg);
    }

    45% {
      filter: hue-rotate(300deg);
    }

    60% {
      filter: hue-rotate(4deg);
    }
  }

  @keyframes slide-up-first-card {
    50% {
      translate: 0;
      opacity: 1;
    }

    90% {
      translate: 0 -50cqi;
      scale: 0.6;
    }

    100% {
      translate: 0 -100cqi;
      opacity: 0;
    }
  }

  @keyframes slide-up-card {
    50% {
      opacity: 1;
      translate: 0;
      scale: 1;
    }

    90% {
      opacity: 0.5;
      scale: 0.6;
      translate: 0 -50cqb;
    }

    100% {
      translate: 0 -100cqi;
      opacity: 0;
    }
  }
}`
      }
    </style>
    <nav className="navbar">
      <a href="#" className="nav-cta-btn">
        Get Started
      </a>
    </nav>
    <div className="section">
      <div className="video-visual">
        <video
          className="video"
          autoPlay=""
          loop=""
          muted=""
          poster=""
          role="none"
          aria-label="background gradient animation"
        >
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-wrapper">
        <div className="content-wrapper">
          <div className="content content-1">
            <div className="mobile-visual">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div className="meta">
              <h2 className="headline">
                Unleash Your<span className="text-highlight"> Inner Warrior</span>
              </h2>
              <p className="desc">
                Join the battle and conquer the arena with unmatched skill and
                strategy.
              </p>
            </div>
          </div>
          <div className="content content-2">
            <div className="mobile-visual">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div className="meta">
              <h2 className="headline">
                Embark on Your
                <span className="text-highlight">Legendary Journey</span>
              </h2>
              <p className="desc">
                Immerse Yourself in a World Where Legends Clash and Heroes Rise to
                Glory.
              </p>
            </div>
          </div>
          <div className="content content-3">
            <div className="mobile-visual">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div className="meta">
              <h2 className="headline">
                Master the
                <span className="text-highlight">Art of Magic</span>
              </h2>
              <p className="desc">
                Harness powerful spells and enchantments to dominate your foes and
                change the course of battle.
              </p>
            </div>
          </div>
          <div className="content content-4">
            <div className="mobile-visual">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                alt="Agile warrior - Video game character"
              />
            </div>
            <div className="meta">
              <h2 className="headline">
                Rise as the <span className="text-highlight">Champion</span>
              </h2>
              <p className="desc">
                Lead your team to victory with unparalleled strength and
                unwavering determination.
              </p>
            </div>
          </div>
        </div>
        <div className="visual">
          <div className="card-wrapper">
            <div className="card card-1">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-1.avif"
                alt="Fantasy warrior  - Video game character"
              />
            </div>
            <div className="card card-2">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-2.avif"
                alt="Green haired ninja in armor - Video game character"
              />
            </div>
            <div className="card card-3">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-3.avif"
                alt="Female warrior in armor - Video game character"
              />
            </div>
            <div className="card card-4">
              <img
                className="card-img"
                src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/img-4.avif"
                alt="Agile warrior - Video game character"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default App