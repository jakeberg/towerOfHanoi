


// Click event for choices.
var columns = document.querySelectorAll(".column");

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.addEventListener('click', placeDisk);
}

var d1 = document.getElementById("disk1");
d1.addEventListener('click', selectDisk);

var d2 = document.getElementById("disk2");
d2.addEventListener('click', selectDisk);

var d3 = document.getElementById("disk3");
d3.addEventListener('click', selectDisk);

var d4 = document.getElementById("disk4");
d4.addEventListener('click', selectDisk);
