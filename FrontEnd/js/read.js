function readTeams() {

    makeRequest("http://34.89.70.8:9000/teams").then((data) => {
        console.log(data);

        let teamData = JSON.parse(data);

        console.log(teamData);

        let teamInfo = [];
        let teams;

        for (let p of teamData) {
            teams = [];

            teams.push(p.id);
            teams.push(p.teamName);
            teams.push(p.teamRating);


            teamInfo.push(teams);

            console.log(teams);
        }

        for (let team of teamInfo) {
            inTable(team);
        }

    });
}


function inTable(data) {
    let tableBody = document.getElementById("tableBody");
    let contInner;

    let container = document.createElement("tr");
    tableBody.appendChild(container);

    for (let team of data) {
        contInner = document.createElement("td");
        contInner.innerHTML = team;
        //for (let key in team) {
        let tagName = document.createAttribute("name");
        tagName.value = team.value;
        contInner.setAttributeNode(tagName);
        //}
        container.appendChild(contInner);
    }

}