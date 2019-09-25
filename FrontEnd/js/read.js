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
    console.log(data, data.teamName);

    let container = document.createElement("tr");
    tableBody.appendChild(container);
    let teams;
    let teamsValues = [];
    for (let p of data) {


        teams = [];

        teams.push(p.id);
        teams.push(p.teamName);
        teams.push(p.teamRating);


        teamsValues.push(teams);
        console.log(teams);
    }

    for (let pair in data) {
        contInner = document.createElement("td");
        console.log(pair)



            contInner.innerHTML = key;
            let tagName = document.createAttribute("name");

            tagName.value = pair;
            contInner.setAttributeNode(tagName);
            container.appendChild(contInner);

    }

}