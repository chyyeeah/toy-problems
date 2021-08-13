/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  // build out a map of all the courses and their prereqs
  const prereqMap = {};
  prerequisites.forEach((p) => {
    const [course, prereq] = p;
    if (!prereqMap[course]) prereqMap[course] = [];
    prereqMap[course].push(prereq);
  });

  const allVisited = new Set(),
    order = [];

  const dfs = (c) => {
    const visited = new Set();
    allVisited.add(c);
    visited.add(c);
    if (!prereqMap[c]) return order.push(c);

    prereqMap[c].forEach((prereq) => {
      dfs(prereq);
    });
  };
};

// var findOrder = function (numCourses, prerequisites) {
//   const root = new Set(),
//     d = {};
//   let max = -1;

//   prerequisites.forEach((p) => {
//     const [c, prereq] = p;
//     root.add(prereq);
//     if (!d[prereq]) d[prereq] = new Set();
//     d[prereq].add(c);
//   });

//   prerequisites.forEach((p) => {
//     const [c, prereq] = p;
//     root.delete(c);
//     max = Math.max(max, c);
//   });

//   if (root.size === 0 && prerequisites.length > 0) return [];

//   const visited = new Set(),
//     queue = [],
//     result = [];

//   root.forEach((c) => {
//     queue.push(c);
//   });

//   while (queue.length > 0) {
//     const size = queue.length;
//     for (let i = 0; i < size; i++) {
//       const c = queue.shift();
//       if (!visited.has(c)) {
//         result.push(c);
//         if (d[c]) {
//           d[c].forEach((futureClass) => {
//             queue.push(futureClass);
//           });
//         }
//       }
//       visited.add(c);
//     }
//   }

//   if (result.length < numCourses) {
//     const diff = numCourses - result.length;
//     for (let i = max + 1; i <= max + diff; i++) {
//       result.push(i);
//     }
//   }

//   return result;
// };

// console.log(findOrder(2, [[1, 0]]));
// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));
console.log(findOrder(1, []));
// console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2], [0, 3]]));
// console.log(findOrder(3, [[1,0]]));