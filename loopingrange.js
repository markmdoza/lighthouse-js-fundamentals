function range(start, end, step) {
  let some_array = [];
  if ((step <= 0) || (start > end) || (start === undefined) || (end === undefined) || (step === undefined)) {
    return [];
  }
  for (let i = start; i <= end; i += step) {
    some_array.push(i);
  } return some_array;
}