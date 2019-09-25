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

        for (let team of teamData) {
            inTable(team);
        }

    });
}


function inTable(data) {
    let tableBody = document.getElementById("tableBody");
    let contInner;

    let container = document.createElement("tr");
    tableBody.appendChild(container);

    let teams;
    let teamsValues = [];
    teams = [];

    teams.push(data.id);
    teams.push(data.teamName);
    teams.push(data.teamRating);

    teamsValues.push(teams);
    console.log(teams);


    for (let pair in data) {
        contInner = document.createElement("td");
        let tagName = document.createAttribute("name");
        tagName.value = pair;
        contInner.setAttributeNode(tagName);

    }

    for (let team of teams) {
        contInner.innerHTML = team;
        console.log(team);
    }

    container.appendChild(contInner);

}