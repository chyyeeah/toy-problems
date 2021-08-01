class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceFromOrigin() {
    return ((this.x ** 2) + (this.y ** 2)) ** (0.5);
  }

  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }
};

const insert_max_heap = (heap, point, k) => {
  heap.push(point);
  if (heap.length < 2) return;
  let nodePos = heap.length - 1;

  // if heap.length > k
  // swap
  // pop last element from heap
  // bubble point down
  if (heap.length > k) {
    [heap[nodePos], heap[0]] = [heap[0], heap[nodePos]];
    heap.pop();
    nodePos = 0;
    if (heap.length === 2) {
      if (heap[0] < heap[2]) [heap[2], heap[0]] = [heap[0], heap[2]];
    } else {
      let leftPos = (nodePos * 2) + 1,
        rightPos = (nodePos * 2) + 2;

      while (
        heap[nodePos].distanceFromOrigin() < heap[leftPos].distanceFromOrigin()
        || heap[nodePos].distanceFromOrigin() < heap[rightPos].distanceFromOrigin()
      ) {
        if (heap[leftPos].distanceFromOrigin() > heap[rightPos].distanceFromOrigin()) {
          [heap[nodePos], heap[leftPos]] = [heap[leftPos], heap[nodePos]];
          nodePos = leftPos;
        } else {
          [heap[nodePos], heap[rightPos]] = [heap[rightPos], heap[nodePos]];
          nodePos = rightPos;
        }
        leftPos = (nodePos * 2) + 1;
        rightPos = (nodePos * 2) + 2;
      }
    }
  } else {
      // if point < root
      // bubble point up
    let parentPos = Math.floor((nodePos - 1) / 2);
    while (heap[parentPos] && heap[nodePos].distanceFromOrigin() > heap[parentPos].distanceFromOrigin()) {
      [heap[nodePos], heap[parentPos]] = [heap[parentPos], heap[nodePos]];
      nodePos = parentPos;
      parentPos = Math.floor((nodePos - 1) / 2);
    }
  }
};

const find_closest_points = function (points, k) {
  const maxHeap = [];

  // insert first k points into maxHeap
  for (let i = 0; i < k; i++) {
    insert_max_heap(maxHeap, points[i], k);
  }

  // if point is < root node,
  // insert opint into maxHeap
  for (let i = k; i < points.length; i++) {
    const { x, y } = points[i];
    if (points[i].distanceFromOrigin() < points[0].distanceFromOrigin()) {
      insert_max_heap(maxHeap, points[i], k);
    }
  }

  return maxHeap;
};

// console.log(calculateEuclideanDistance(1, 2));

points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++)
  result += points[i].get_point();
console.log(result);
points = find_closest_points([new Point(1, 2), new Point(1, 3)], 1)
result = "Here are the k points closest the origin: ";
for (i = 0; i < points.length; i++)
  result += points[i].get_point();
console.log(result);