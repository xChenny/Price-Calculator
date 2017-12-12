export const equals = (large, small) => {
  if (typeof large === 'undefined') return true
  if (Array.isArray(large)) {
    return large.includes(small)
  }
  else {
    return large === small
  }
}