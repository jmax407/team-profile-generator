class generatePage {
  constructor( data = "" ) {
    this.data = data;
  }
  createData() {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <title>My Team</title>
        <style>
          .navbar{
            padding: 40px 20px;
            background-color: #d02200;
            color: #fff;
            text-align: center;
          }
          h1 {
            margin: 0 auto;
          }
          .employee-name {
            display: block;
            font-size: 1.5em;
          }
          .card-header {
            background: #093da7;
            color: #fff;
          }
          .card-body {
            padding: 20px 15px;
            background: #f1f1f1;
          }
          .card-body ul {
            border:1px solid rgba(0,0,0,.125);
          }
        </style>
      </head>
      <body>
        <header class="navbar">
          <div class="container-fluid text-center">
            <h1>My Team</h1>
          </div>
        </header>

        <main class="pt-5">
          <div class="container-fluid">
            <div class="row">
              ${this.data.map((employee) => {
              return`
              <div class="col-lg-2 col-md-4 col-sm-12">
              <div class="card">
              <div class="card-header">
                <span class="employee-name">${employee.getName()}</span>
                <span class="job-title">
                ${employee.getOffice ? `<i class="fa fa-coffee" aria-hidden="true"></i>` : employee.github ? `<i class="fas fa-pencil-ruler"></i>` : `<i class="fas fa-graduation-cap"></i>`}
                 ${employee.getRole()}
                 </span>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.getId()}</li>
                  <li class="list-group-item">Email: ${employee.getEmail()}</li>
                  <li class="list-group-item">${employee.getOffice ? `Office Number: ${employee.getOffice()}` : employee.github ? `<a href="https://github.com/${employee.getGitHub()}" rel="noopener" target="_blank"> GitHub: ${employee.getGitHub()} </a>` : `School: ${employee.getSchool()}`} </li>
                </ul>
              </div>
            </div>
          </div>
          <!--card-->
              `
              }).join('')}
          </div>
        </main>

    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

      </body>
    </html>
    `
  }


// generateManager(aboutManager) {
//   return `
//   <div class="col-lg-2 col-md-4 col-sm-12">
//       <div class="card manager">
//         <div class="card-header">
//           <span id="manager-name" class="employee-name">${aboutManager.Manager.name}</span>
//           <span class="job-title"><i class="fa fa-coffee" aria-hidden="true"></i> ${aboutManager.Manager.role}</span>
//         </div>
//         <div class="card-body">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${aboutManager.Manager.id}</li>
//             <li class="list-group-item">Email: ${aboutManager.Manager.email}</li>
//             <li class="list-group-item">Office Number: </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <!--card-->
//   </div>
//   `;
// }
// generateTeamMember(aboutTeamMember)  {
//   return `
//   <div class="col-lg-2 col-md-4 col-sm-12">
//       <div class="card manager">
//         <div class="card-header">
//           <span id="manager-name" class="employee-name">${aboutTeamMember.name}</span>
//           <span class="job-title"><i class="fa fa-coffee" aria-hidden="true"></i> ${aboutTeamMember.role}</span>
//         </div>
//         <div class="card-body">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${aboutTeamMember.id}</li>
//             <li class="list-group-item">Email: ${aboutTeamMember.email}</li>
//             <li class="list-group-item">Office Number: </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <!--card-->
//   </div>
//   `;
// }
// module.exports = generatePage => {
//  console.log(generatePage);
// const { Manager, Employee} = generatePage;


//     return `
//  <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">

//     <!-- Bootstrap CSS -->
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
//     <title>My Team</title>
//     <style>
//       .navbar{
//         padding: 40px 20px;
//         background-color: #d02200;
//         color: #fff;
//         text-align: center;
//       }
//       h1 {
//         margin: 0 auto;
//       }
//       .employee-name {
//         display: block;
//         font-size: 1.5em;
//       }
//       .card-header {
//         background: #093da7;
//         color: #fff;
//       }
//       .card-body {
//         padding: 20px 15px;
//         background: #f1f1f1;
//       }
//       .card-body ul {
//         border:1px solid rgba(0,0,0,.125);
//       }
//     </style>
//   </head>
//   <body>
//     <header class="navbar">
//       <div class="container-fluid text-center">
//         <h1>My Team</h1>
//       </div>
//     </header>

//     <main class="pt-5">
//       <div class="container-fluid">
//         <div class="row">
//           ${generateManager(manager)}
//           ${generateTeamMember(employee)}
//       </div>
//     </main>

 
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

//   </body>
// </html>
//     `;
// };
}
module.exports = generatePage;