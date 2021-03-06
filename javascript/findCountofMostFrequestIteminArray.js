/*
Find Count of Most Frequent Item in an Array

Write a program to find count of the most frequent item of an array.

Example:
    input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
    ouptut: 5

Assumptions:
    Assume that input is array of integers.
*/

function mostFrequentItemCount(collection) {
    if(collection.length === 0) return 0;

    var occurrences = [];

    collection.sort();
    occurrences.push(1);
    for(var i = 0; i < collection.length; i++) {
        if(collection[i] !== collection[i-1]) occurrences.push(1);
        else occurrences[occurrences.length-1]++;
    }

    return Math.max.apply(null,occurrences);
}
