function submitUpdateForm(formData) {
    let keyValues = {};
    let id = 0;

    for (let element of formData.elements) {
        if (element.name) {
            if (element.name === "id") {
                id = element.value;
            } else {
                keyValues[element.name] = element.value;
            }
        }
    }

    console.log("http://34.89.70.8:9000/teams/" + id);
    console.log(keyValues);

    makeRequest("http://34.89.70.8:9000/teams/" + id, keyValues, "PUT")
        .then((data) => {
            console.log("it Worked!" + data);

            $('#updateFunctionalityTeams').modal('hide');
            $('.modal').on('hidden.bs.modal', function () {
                $(this).find('form')[0].reset();
            });

            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        });

    return false;
}

function submitUpdateFormPlayers(formData) {
    let keyValues = {};
    let id = 0;

    for (let element of formData.elements) {
        if (element.name) {
            if (element.name === "id") {
                id = element.value;
            } else {
                keyValues[element.name] = element.value;
            }
        }
    }

    console.log("http://34.89.70.8:9000/players/" + id);
    console.log(keyValues);

    makeRequest("http://34.89.70.8:9000/players/" + id, keyValues, "PUT")
        .then((data) => {
            console.log("it Worked!" + data);

            $('#updateFunctionalityPlayers').modal('hide');
            $('.modal').on('hidden.bs.modal', function () {
                $(this).find('form')[0].reset();
            });

            window.location.href = window.location.href
        })
        .catch((data) => {
            console.log("It failed!" + data);
        });

    return false;
}