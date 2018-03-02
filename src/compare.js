export const equals = (largerOptionList, smallerOptionList) => {
  // covers "print location" option
  if (typeof largerOptionList === 'undefined') return true;
  if (Array.isArray(largerOptionList)) {
    return largerOptionList.includes(smallerOptionList);
  }
  else {
    return largerOptionList === smallerOptionList;
  }
}