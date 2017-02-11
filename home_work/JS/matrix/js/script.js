/**
 * Created by user on 19.07.2016.
 */
var A = [
    [0,1,1,0,0],
    [0,1,1,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1],
    [0,0,0,0,0],
];


function generate_matrix(M, N) {
    var A1 = [];
    for (var i = 0; i < M; i++) {
        A1[i] = [];
        for (var j = 0; j < N; j++) {
            A1[i][j] = (i + 1) * 10 + j;
        }
    }
    return A1;
}

function generate_matrix_random(M, N) {
    var A1 = [];
    for (var i = 0; i < M; i++) {
        A1[i] = [];
        for (var j = 0; j < N; j++) {
            A1[i][j] = Math.round(Math.random());
        }
    }
    return A1;
}

var A = generate_matrix(4, 4);
display_matrix(A);
var B = submatrix_replace(A,
    2, 0, 3, 1,
    0, 2, 1, 3
);
display_matrix(B);

function submatrix_replace(A,
                           x11, y11, x12, y12,
                           x21, y21, x22, y22) {
    var M = x12 - x11;
    var N = y12 - y11;
    for (var i = 0; i <= N; i++) {
        for (var j = 0; j <= M; j++) {
            var z = A[y11 + i][x11 + j];
            A[y11 + i][x11 + j] = A[y21 + i][x21 + j];
            A[y21 + i][x21 + j] = z;
        }
    }
    return A;
}
/*
display_matrix(A);

var B = submatrix_replace(A,
    1, 0, 2, 1,
    3, 2, 4, 3
);
 display_matrix(B);
 */
function display_matrix(A) {
    for (var i = 0; i < A.length; i++) {
        console.log(A[i]);
    }
    console.log('\n');
}

function find_submatrix(A) {
    return A;
}

