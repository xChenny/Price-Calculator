export const equals = (large, small) => {
  // covers "print location" option
  if (typeof large === 'undefined') return true;
  if (Array.isArray(large)) {
    return large.includes(small);
  }
  else {
    return large === small;
  }
}