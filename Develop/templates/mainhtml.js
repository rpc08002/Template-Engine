function mainHTML(data) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-yrfSO0DBjS56u5M+SjWTyAHujrkiYVtRYh2dtB3yLQtUz3bodOeialO59u5lUCFF" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
          <style>
              .jumbotron {
                  background-color: #443850;
              }
              body {
                  background-color: white;
              }
              h1 {
                  color: white;
              }
              .card-header, .card-body {
                  background-color: white;
              }
          </style>
      </head>
      
      <body>
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 d-flex justify-content-center">
                      ${data}
                  </div>
              </div>
          </div>
      </body>
      
      </html>
  `;
  }
  // export mainRender
  module.exports = mainHTML;