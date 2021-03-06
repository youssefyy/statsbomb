/**
 * insertSorted has better performance than in naive.js
 * @param {*} arr sorted array
 * @param {*} n array size
 * @param {*} key 
 * @returns 
 */
 export function insertSorted(arr, n, key) {
    let i;
    for (i = n - 1; (i >= 0 && arr[i] > key); i--)
        arr[i + 1] = arr[i];

    arr[i + 1] = key;

    return (n + 1);
}