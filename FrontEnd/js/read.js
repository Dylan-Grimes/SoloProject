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
    console.log(data, data.identifier);

    let container = document.createElement("tr");
    tableBody.appendChild(container);

    for (let pair in data.id) {
        contInner = document.createElement("td");
        console.log(pair, pair.value);

        for (let key in pair ) {

            contInner.innerHTML = key;
            let tagName = document.createAttribute("name");
            console.log(key);
            tagName.value = key;
            contInner.setAttributeNode(tagName);
            container.appendChild(contInner);
        }

    }

}