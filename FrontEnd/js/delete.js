function deleteTeam() {

    var input = document.getElementById("idToDelete").value;

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