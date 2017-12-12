export const equals = (large, small) => {
  if (Array.isArray(large)) {
    return large.includes(small)
  }
  else {
    return large === small
  }
}