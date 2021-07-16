/**
 * @param {string} instructions
 * @return {boolean}
 */
/**
 * Limit Cycle Trajectory
 * We are moving in a circle if
 * - we end up at (0, 0) OR
 * - we aren't facing north
 */

var isRobotBounded = function (instructions) {
  // 0 = north
  // 1 = east
  // 2 = south
  // 3 = west
  let x = y = direction = 0;

  for (let i = 0; i < instructions.length; i++) {
    const char = instructions[i];

    if (char === 'L') direction = (direction + 3) % 4;
    if (char === 'R') direction = (direction + 1) % 4;
    if (char === 'G') {
      if (direction === 0) y++;
      if (direction === 1) x++;
      if (direction === 2) y--;
      if (direction === 3) x--;
    }
  }

  return (x === 0 && y === 0) || direction !== 0;
};