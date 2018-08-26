let tempDisk;
let rod3 = document.getElementById("rod3")
var main = document.querySelector("main");

// Click event for choices.
var columns = document.querySelectorAll("button");

// Creates all discs for board
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

// Assigns a click handler for each disk
function createHandler() {
    var disks = document.getElementsByClassName("disk")
    for (let i = 0; i < disks.length; i++) {
        let disk = disks[i];
        disk.addEventListener('click', selectDisk);
    }
}
createHandler()

// Allows each disk to be clickable to enable selection
function selectDisk(event) {
    let thisDisk = event.target;
    let idNum = thisDisk.id;
    if (idNum == thisDisk.parentElement.lastElementChild.id){
        tempDisk = thisDisk;
    }
}

// After the selection of disk, placeDisk moves the disk to the correct rod
function placeDisk(event) {
    let thisButton = event.target;
    let parent = thisButton.parentElement;
    tempId = tempDisk.id;
    let topDisk = parent.lastElementChild.id;
    if (parent.className == "column") {
        if (tempId < topDisk || topDisk == false) {
            parent.appendChild(tempDisk);
        }
    }
    if (rod3.childElementCount == 5) {
        alert("You win!");
    }
}

for (let i = 0; i < columns.length; i++) {
    let column = columns[i];
    column.addEventListener('click', placeDisk);
}

// Resets by reloading page
document.getElementById("reset").addEventListener("click", (event) => {
    window.location.reload()
})