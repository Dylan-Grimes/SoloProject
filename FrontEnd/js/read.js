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

    for (let team of teams) {
        contInner = document.createElement("td");
        
        
        contInner.innerHTML = team;
        console.log(team);
        container.appendChild(contInner);
        }
        for (let key in data) {
        console.log(key);
        let tagName = document.createAttribute("name");
        tagName.value = key;
        contInner.setAttributeNode(tagName);
        container.appendChild(contInner);
    }

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tableBody");
    switching = true;
    while (switching) {
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("teamName")[0];
            y = rows[i + 1].getElementsByTagName("teamName")[0];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } 


  
    
}

