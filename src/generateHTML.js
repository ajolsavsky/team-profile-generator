
// create Manager card
const generateManager = function (manager) {
    return `
    <!-- Manager Card -->

    <div class="shadow-lg card mb-2" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">${manager.name}</h3>
            <h5><span class="material-symbols-outlined">
                diversity_3
                </span> Manager</h5>
        </div>
        <div class="card-body bg-info pt-5 pb-5">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}?subject=Web%20Inquiry">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
      </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <!-- Intern Card -->
      <div class="shadow-lg card mb-2" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">${intern.name}</h3>
            <h5><span class="material-symbols-outlined">
                school
                </span> Intern</h5>
        </div>
        <div class="card-body bg-info pt-5 pb-5">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="${intern.email}?subject=Web%20Inquiry">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
      </div>
    `;
}

renderHTML = (data) => {
    cardArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();;

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        } else if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
    }

    const teamCards = cardArray.join('');

    const generateTeamPage = generateFinalPage(teamCards)
    return console.log(generateTeamPage);
}

const generateFinalPage = function(teamCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <script src="index.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
    <nav class="shadow p-3 mb-5 bg-primary">
        <div class="d-flex justify-content-center align-items-center">
          <span class="mt-5 mb-5 h1 align-self-center text-white">My Team</span>
        </div>
      </nav>
    
    <div class="d-flex flex-wrap justify-content-evenly space-between">
    <!-- Team Cards Generated Below -->
    ${teamCards}
    </div>
    
</body>
</html>
    `
}


// export to index.js
module.exports = renderHTML;