const catFacts = [
  {
    id: 0,
    fact : 'The cat appears to be the only domestic companion animal not mentioned in the Bible'
  },
  {
    id: 1,
    fact : 'Cats have supersonic hearing'
  },
  {
    id: 2,
    fact : 'The first cat in space was a French cat named Felicette. She survived the trip.'
  },
  {
    id: 3,
    fact : 'In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.'
  },
  {
    id: 4,
    fact : 'The tiniest cat on record is Mr. Pebbles, a 2-year-old cat that weighed 1.3 kg) and was 15.5 cm high.'
  },
  {
    id: 5,
    fact : 'A domestic cat can run at speeds of 30 mph.'
  },
  {
    id: 6,
    fact : 'Abraham Lincoln loved cats. He had four of them while he lived in the White House.'
  },
  {
    id: 7,
    fact : 'A cats field of vision is about 185 degrees.'
  },
  {
    id: 8,
    fact : 'A cat will tremble or shiver when it is in extreme pain.'
  },
  {
    id: 9,
    fact : 'Cats dislike citrus scent.'
  },
  {
    id: 10,
    fact : 'There is a species of cat smaller than the average housecat. It is native to Africa.'
  },
  {
    id: 11,
    fact : `Cats respond better to women than to men, probably due to the fact that women's voices have a higher pitch.`
  },
  {
    id: 12,
    fact : 'If a cat is frightened, the hair stands up fairly evenly all over the body.'
  },
  {
    id: 13,
    fact : `Cats don't have sweat glands over their bodies like humans do. Instead, they sweat only through their paws.`
  },
  {
    id: 14,
    fact : 'People who are allergic to cats are actually allergic to cat saliva.'
  },
  {
    id: 15,
    fact : 'A cat has two vocal chords, and can make over 100 sounds.'
  },
  {
    id: 16,
    fact : 'Cats see six times better in the dark and at night than humans.'
  },
  {
    id: 17,
    fact: 'A steady diet of dog food may cause blindness in your cat - it lacks taurine.'
  },
  {
    id: 18,
    fact: 'A steady diet of dog food may cause blindness in your cat - it lacks taurine.'
  },
  {
    id: 19,
    fact: 'The domestic cat is the only species able to hold its tail vertically while walking.'
  }
];

export const getCatFact = () => {
  const randomNumber = Math.floor(Math.random() * 20);
  return catFacts[randomNumber];
};
