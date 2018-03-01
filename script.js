let tempDisk;
let rod3 = document.getElementById("rod3")
var main = document.querySelector("main");


function createDisks() {
    var destination = document.getElementById("rod1");
    for (i = 4; i > 0; i--) {
        let div = document.createElement("div");
        div.id = (String(i));
        div.className = ("disk");
        destination.appendChild(div);
    }
}
createDisks();

function createHandler() {
    var disks = document.getElementsByClassName("disk")
    for (let i = 0; i < disks.length; i++) {
        let disk = disks[i];
        disk.addEventListener('click', selectDisk);
    }
}
createHandler()

function selectDisk(event) {
    let thisDisk = event.target;
    let idNum = thisDisk.id;
    tempDisk = thisDisk;
    console.log(tempDisk)
}

function placeDisk(event) {
    let thisButton = event.target;
    let parent = thisButton.parentElement;
    tempId = tempDisk.id;
    let topDisk = parent.lastElementChild.id;
    if (tempId == 1) {
        parent.appendChild(tempDisk);
    } else if (tempId < topDisk || topDisk == false){
        parent.appendChild(tempDisk);
    }

    if (rod3.childElementCount == 5){
        alert("You win!");
    }
}

// Click event for choices.
var columns = document.querySelectorAll("button");

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.addEventListener('click', placeDisk);
}