var booksByCategory = {
    Action: ["Days Of Elijah Apocalypse", "The King Of Drugs", "Red Square"],
    History: ["Invasion", "World History", "Padre,Prisoner & Pen-Pusher"],
    Science: ["The Science Anatomy", "Hostory Of Modern Science", "The Universe At Large"]
}

    function changecat(value) {
        if (value.length == 0) document.getElementById("BookName").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in booksByCategory[value]) {
                catOptions += "<option>" + booksByCategory[value][categoryId] + "</option>";
            }
            document.getElementById("bookName").innerHTML = catOptions;
            console.log(booksByCategory);
        }
    }