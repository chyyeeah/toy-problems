function sortedSquaredArray(array) {
  const result = [];
	array.forEach(e => result.push(e ** 2));
	result.sort((a, b) => a - b);
  return result;
}