const judgeVegetable = function (veggies, metric) {
  veggies.sort(function (a, b) {
    return b[metric] - a[metric];
  });
  return veggies[0].submitter;
};
const veggies = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

judgeVegetable(veggies, metric);