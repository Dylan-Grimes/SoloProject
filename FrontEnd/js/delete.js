function deleteTeam() {

    var input = document.getElementById("idToDeleteTeam").value;

    console.log(input);

    makeRequest("http://34.89.70.8:9000/teams/", input , type = "DELETE")
        .then((data) => {
            console.log("Deleted" + data);
            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        })

        

}

function deletePlayer() {

    var input = document.getElementById("idToDeletePlayer").value;

    console.log(input);

    makeRequest("http://34.89.70.8:9000/players/", input , type = "DELETE")
        .then((data) => {
            console.log("Deleted" + data);
            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        })

        

}