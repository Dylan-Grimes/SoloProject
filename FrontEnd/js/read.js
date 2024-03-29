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
            inTableTeam(team);
        }

    });
}

function readPlayers() {

    makeRequest("http://34.89.70.8:9000/players").then((data) => {
        console.log(data);

        let playerData = JSON.parse(data);

        console.log(playerData);



        for (let player of playerData) {
            inTablePlayer(player);
        }
        //sortTable(teamPlayer);

    });
}

function inModal(data) {
    let div = document.getElementById("playerList");
    let contInner;
    let container = document.createElement("div");
    div.appendChild(container);
    let players;
    let playersValues = [];
    players = [];

    players.push(data.playerName);
    players.push(data.playerRating);
    players.push(data.playerRole);

    playersValues.push(players);
    console.log(players);

    for (let player of players) {
        contInner = document.createElement("Label");

        var typ = document.createAttribute("class");
        typ.value = "col-form-label";
        contInner.attributes.setNamedItem(typ)

        contInner.innerHTML = player;
        console.log(player);
        container.appendChild(contInner);
    }

}


function inTableTeam(data) {
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

    for (let team of teams) {
        contInner = document.createElement("td");

        var typ = document.createAttribute("data-toggle");
        typ.value = "modal";
        contInner.attributes.setNamedItem(typ)

        var typ1 = document.createAttribute("data-target");
        typ1.value = "#updateFunctionalityTeams";
        contInner.attributes.setNamedItem(typ1)


        contInner.innerHTML = team;

        container.appendChild(contInner);
    }
    for (let key in data) {

        let tagName = document.createAttribute("name");
        tagName.value = key;
        contInner.setAttributeNode(tagName);
        container.appendChild(contInner);
    }
}

function inTablePlayer(data) {
    let tableBody = document.getElementById("tableBodyPlayers");
    let contInner;

    let container = document.createElement("tr");
    tableBody.appendChild(container);

    let playerValues = [];
    let players;

    players = [];

    players.push(data.id);
    players.push(data.playerName);
    players.push(data.playerTeam);
    players.push(data.playerRole);
    players.push(data.playerRating);

    playerValues.push(players);
    console.log(players);

    for (let player of players) {
        contInner = document.createElement("td");

        var typ = document.createAttribute("data-toggle");
        typ.value = "modal";
        contInner.attributes.setNamedItem(typ)

        var typ1 = document.createAttribute("data-target");
        typ1.value = "#updateFunctionalityPlayers";
        contInner.attributes.setNamedItem(typ1)


        contInner.innerHTML = player;

        container.appendChild(contInner);
    }
    for (let key in data) {

        let tagName = document.createAttribute("name");
        tagName.value = key;
        contInner.setAttributeNode(tagName);
        container.appendChild(contInner);
    }
}

function sortTableTeam(table) {
    let rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("teamTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        console.log(rows.length);
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")["teamRating"];
            y = rows[i + 1].getElementsByTagName("TD")["teamRating"];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTablePlayer(table) {
    let rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("playerTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        console.log(rows.length);
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")["playerRating"];
            y = rows[i + 1].getElementsByTagName("TD")["playerRating"];
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}