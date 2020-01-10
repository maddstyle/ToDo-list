console.log("CONNECTED");

const toDos = ["Buy New Turtle"];

window.setTimeout(function () {

    let input = prompt("What would you like to do?");

    while (input !== "quit") {
        //handle input
        if (input === "list") {
            listToDos();
        } else if (input === "new") {
            addToDos();
        } else if (input === "delete") {
            deleteToDos();
        }
            //ask for new input again
        input = prompt("What would you like to do?");
        }
        console.log("OK, YOU QUIT THE APP");


        function listToDos() {
            toDos.forEach(function (toDo, i) {
                console.log(i + " : " + toDo)
            });
        }

        function addToDos() {
            //ask for new todo
            let newToDos = prompt("Add new Todo.");
            toDos.push(newToDos);
            //add new todos in array
            console.log("Added ToDo.");
        }

    function deleteToDos() {
        //ask for index todo b deleted
        let index = prompt("Add index you want to delete.");
        //delete that toDo with splice()
        toDos.splice(index, 1);
        console.log("Deleted toDo");
    }
}, 500);