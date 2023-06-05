const smartGarbage = function (trash, bins) {
  bins[trash] ++;
  return bins;
};
  smartGarbage(recycling, { waste: 4, recycling: 2, compost: 5 });