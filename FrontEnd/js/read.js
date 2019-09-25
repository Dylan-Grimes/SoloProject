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
    console.log("data" , data);
    console.log("data2" , data.value);

    let container = document.createElement("tr");
    tableBody.appendChild(container);

    for (let key in data) {
        contInner = document.createElement("td");
        console.log(key, key.value);

        for (let key in key ) {

            contInner.innerHTML = key.value;
            let tagName = document.createAttribute("name");
            console.log("team " , key);
            tagName.value = key;
            contInner.setAttributeNode(tagName);
            container.appendChild(contInner);
        }

    }

}