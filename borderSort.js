/*
Given matrix, an n x n square matrix of integers, let's define its 0-border as the union of its leftmost and rightmost columns, as well as its top and bottom rows.

If we were to remove the matrix's 0-border, then the 0-border of the resulting matrix can be defined as the 1-border of the original matrix. We can continue this way to define the 2-border, 3-border, etc.

0-border	1-border	2-border

For each k in [0, 1, ..., floor((n - 1) / 2)], your task is to sort the elements in each k-border and place them in clockwise order, starting from the top-left corner.

Example

For

matrix = [[9, 7, 4, 5],
          [1, 6, 2, -6],
          [12, 20, 2, 0],
          [-5, -6, 7, -2]]
the output should be

borderSort(matrix) =
[[-6, -6, -5, -2],
 [12, 2, 2, 0],
 [9, 20, 6, 1],
 [7, 7, 5, 4]]
The 0-border consists of the elements [9, 7, 4, 5, -6, 0, -2, 7, -6, -5, 12, 1]. After sorting, the elements order is [-6, -6, -5, -2, 0, 1, 4, 5, 7, 7, 9, 12]. So we'll place these back on the matrix clockwise, starting from the top-left corner.
The 1-border consists of the elements [6, 2, 2, 20]. After sorting, the elements order is [2, 2, 6, 20].
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

A square matrix of integers.

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
matrix.length = matrix[i].length,
-100 ≤ matrix[i][j] ≤ 100.

[output] array.array.integer

The resulting matrix after sorting each k-border.
*/

function borderSort(matrix) {
  // recursive function
      // if matrix has no more values, return empty matrix

      // unravel the matrix
      // sort the layer
      // call recusive function with the matrix, which will return a matrix
      // add the sorted layer to the returned matrix
      // return new matrix

  // return invoked recursive function

  var sortLayers = function(matrix) {
      var validMatrix = matrix.length > 0;
      if (!validMatrix) return matrix;

      var layer = [];
      if (validMatrix) {
          var topLayer = matrix.shift();
          topLayer.forEach(function(e) {
              layer.push(e);
          });
      }

      if (validMatrix[0]) {
          var currLength = matrix.length;
          for (var i = 0; i < currLength; i++) {
              layer.push(matrix[i].pop());
          }
      }

      if (validMatrix[0]) {
          var bottomLayer = matrix.pop();
          bottomLayer.forEach(function(e) {
              layer.push(e);
          });
      }

      if (validMatrix[0]) {
          var currentLength = matrix.length;
          for (var i = 0; i < currLength; i++) {
              layer.push(matrix[i].shift());
          }
      }

      layer.sort();

      var transformedMatrix = sortLayers(matrix);

      if (layer.length === 1) return [layer];

      var parts = layer.length / 4;
      var top = [];
      var right = [];
      var bottom = [];
      var left = [];
      for (var i = 0; i < layer.length; i++) {
          if (i < parts) {
              top.push(layer.shift());
          } else if (i < parts * 2) {
              right.push(layer.shift());
          } else if (i < parts * 3) {
              bottom.push(layer.shift());
          } else if (i < parts * 4) {
              left.push(layer.shift());
          }
      }

      var transformedLength = transformedMatrix.length;

      transformedMatrix.unshift(top);
      for (var i = 0; i < transformedLength; i++) {
          transformedMatrix[i].push(right.shift());
      }
      transformedMatrix.push(bottom);
      for (var i = transformedLength - 1; i >= 0; i--) {
          transformedMatrix[i].unshift(left.shift());
      }

      return transformedMatrix;
  };

  return sortLayers(matrix);
}

/*
[[9,7,4,5],
 [1,6,2,-6],
 [12,20,2,0],
 [-5,-6,7,-2]]

[[9,4],
 [6,8]]

[[-100,-100],
 [-100,-100]]

[[15,-66,-18,99],
 [-80,-36,90,-10],
 [-59,-37,82,-33],
 [-15,26,61,-2]]
*/