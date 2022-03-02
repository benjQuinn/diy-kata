const reachDestination = (distance, speed) => {
  const time = distance / speed;
  return `I should be there in ${Math.round(time * 2) / 2} hours`;
};

module.exports = reachDestination;
