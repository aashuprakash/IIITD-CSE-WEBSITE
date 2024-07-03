'use client';
import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import PubCard from '@/components/research/publications/PubCard';

const parserOptions = {
  compact: true,
  spaces: 4,
  ignoreComment: true,
  ignoreDeclaration: true,
  ignoreInstruction: true,
};

const ParsePublicationData = (pubData) => {
  let pubType;
  const parsedData = [];
  pubData.forEach((item) => {
    if ('article' in item) {
      pubType = item.article;
    } else if ('inproceedings' in item) {
      pubType = item.inproceedings;
    }
    if (pubType === undefined || pubType.author === undefined) return;
    let venue, category;
    if (
      pubType._attributes.key.includes('journals/corr/') &&
      pubType._attributes.publtype === 'informal'
    ) {
      category = 'arXiv';
      venue = pubType.journal._text + ' ' + pubType.year._text;
    } else if (pubType._attributes.key.includes('journals/')) {
      category = 'Journal';
      venue = pubType.journal._text + ' ' + pubType.year._text;
    } else if (pubType._attributes.key.includes('conf/')) {
      category = 'Conference';
      venue = pubType.booktitle._text + ' ' + pubType.year._text;
    }
    let parsedEntry = {
      title: pubType.title._text,
      authors: pubType.author?.map((author) => author._text),
      date: pubType._attributes.mdate,
      link: pubType.ee._text,
      uuid: uuidv4(),
      category: category,
      venue: venue,
    };
    parsedData.push(parsedEntry);
  });
  return parsedData.slice(0, 40);
};

export default function RecentPublications({ dblpIds }) {
  const [publications, setPublications] = useState([]);
  const parser = require('xml-js');

  const [loading, setLoading] = useState(false);
  const fetchPubs = useCallback(() => {
    setLoading(true);
    const safeDblpIds = Array.isArray(dblpIds) ? dblpIds : [];

    const requests = safeDblpIds.map(async (dplpId) => {
      return axios
        .get('https://dblp.org/pid/' + dplpId + '.xml')
        .then((response) => {
          const parsedData = parser.xml2js(response.data, parserOptions);
          return ParsePublicationData(parsedData.dblpperson.r);
        })
        .catch((error) => {
          return [];
        });
    });
    if (requests.length > 0) {
      Promise.all(requests).then((results) => {
        const allPublications = [...new Set(results.flat())];
        setPublications(allPublications);
        setLoading(false);
      });
    } else {
      setPublications([]);
      setLoading(false);
    }
  }, [dblpIds, parser]);

  useEffect(() => {
    fetchPubs();
  }, [fetchPubs]);

  const colors = [
    '#B8D0EA',
    '#D4BACD',
    '#EEEECD',
    '#9CD1CE',
    '#E1BEBE',
    '#BFB3D7',
  ];
  const pubcards = publications
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 20)
    .map((pub, index) => {
      const color = colors[index % colors.length];
      return (
        <PubCard
          key={pub.uuid}
          title={pub.title}
          venue={pub.venue}
          color={color}
          authors={pub.authors.slice(0, 6)}
          link={pub.link}
        />
      );
    });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { dragFree: true, slidesToScroll: 'auto' },
    [WheelGesturesPlugin()],
  );
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="banner-layout">
      <div className="body-2xlarge font-semibold">Recent Publications</div>
      <br />
      {loading ? (
        <div className="flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="var(--primary-main)"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {pubcards.map((card, index) => (
                <div className="embla__slide" key={index}>
                  {card}
                </div>
              ))}
            </div>
          </div>
          <div className="embla__controls px-5">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : '',
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
