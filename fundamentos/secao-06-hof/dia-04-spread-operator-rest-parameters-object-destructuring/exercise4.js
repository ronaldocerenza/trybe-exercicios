const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

const filterPeaple = (array) => {
  return array.filter((peaple) => peaple.nationality === 'Australian')
  .filter((element) => element.bornIn > 1900 && element.bornIn <= 2000).map((element) => element.name)}

console.log(filterPeaple(people));