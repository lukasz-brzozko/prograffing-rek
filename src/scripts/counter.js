import { CountUp } from 'countup.js';

const DATA_NUMBERS_SELECTOR = '.about__numbers-data';
const DATA_NUMBERS = [
  {
    id: 'first-number',
    number: 42,
    suffix: '+',
  },
  {
    id: 'second-number',
    number: 73,
    suffix: '%',
  },
  {
    decimalPlaces: 2,
    id: 'third-number',
    number: 5,
    separator: '.',
  },
];

const observerTarget = document.querySelector(DATA_NUMBERS_SELECTOR);

const animate = ({ id, number, ...options }) => new CountUp(id, number, options).start();

const checkIsIntersecting = (entry) => {
  if (entry.isIntersecting) DATA_NUMBERS.forEach(animate);
};

const observerClb = (entries) => {
  entries.forEach(checkIsIntersecting);
};

const createObserver = () => {
  if (observerTarget !== null) {
    const observer = new IntersectionObserver(observerClb);
    observer.observe(observerTarget);
  }
};

export default createObserver;
