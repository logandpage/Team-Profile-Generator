function generateHTML(data) {
    return `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Page</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </head>
  <body>
    <style>
        .ul{
            list-style-type:none;
            right: 0;
            position: relative;
        }
        li{
            float: left;
            margin: 20px;
        }
        .cardbody{
            width: 200px;
            border-radius: 10px;
            box-shadow: 5px 10px 8px #888888;
        }
    </style>
  <div class="jumbotron" style="background: gray" >
    <h1 class="text-center" >Company Employees</h1>
    </div>
    <div class='container'>
    <ul class="ul">
    ${makeCards(data)}
    </ul>
    </div>

    



  `;
  };
  function makeCards(data) {
    return data
      .map(x => {
        let position = x.getRole();
        switch (position) {
          case "Manager":
            return makeManagerCard(x);
            break;
          case "Engineer":
            return makeEngineerCard(x);
            break;
          case "Intern":
            return makeInternCard(x);
            break;
        }
      })
      .join("\n");
  }
  function makeManagerCard(x) {
    console.log(x);
    let mangerCard = `
    <li>
    <div class="col-md-3">
    <div class="card cardbody">
      <div class="card-header" style="background: #5178ED">
                   ${x.name}<br>
                   <div>${x.getRole()}</div>
                  </div>
      <div class="card-body">
        <form role="form">			
          <div class="form-group">
              <label>ID: 
              ${x.id}
                </label>
          </div>
          <div class="form-group">
            <label for="reserve-email" id="reserve-email">Email: 
            ${x.email}
            </label>
          </div>
          <div class="form-group">
              <label>Office Number: 
              ${x.officeNumber}
              </label>					
          </div>				
          </form>
      </div>
    </div>
  </div>
  </li>
  `;
    return mangerCard;
  }
  function makeEngineerCard(x) {
    let engineerCard = `
        <li>
        <div class="col-md-3">
                    <div class="card cardbody">
                      <div class="card-header" style="background: #5178ED">
                                   ${x.name}<br>
                                  <div><i></i> ${x.getRole()}</div><i class="">
                                  </div>
                      <div class="card-body">
                        <form role="form">			
                          <div class="form-group">
                              <label>ID:
                              ${x.id} 
                              </label>
                          </div>
                          <div class="form-group">
                            <label>Email: 
                            ${x.email}
                            </label>
                          </div>
                          <div class="form-group">
                              <label>Github: 
                              ${x.github}
                              </label>					
                          </div>				
                          </form>
                      </div>
                    </div>
                  </div>
                  </li>
    `;
    return engineerCard;
  }
  function makeInternCard(x) {
    let internCard = `
    <li>
    <div class="col-md-3">
        <div class="card cardbody">
          <div class="card-header" style="background: #5178ED">
                 ${x.name}<br>
                <div><i class="fa fa-coffee"></i> ${x.getRole()}</div>
                </div>
          <div class="card-body">
          <form role="form">			
            <div class="form-group">
              <label>ID:
              ${x.id} 
              </label>
            </div>
            <div class="form-group">
            <label>Email: 
            ${x.email}
            </label>
            </div>
            <div class="form-group">
              <label>School: 
              ${x.school}
              </label>					
            </div>				
            </form>
          </div>
        </div>
              </div>
              </li>

    </body>
    </html>      
    `;
    return internCard;
  }
  
  module.exports = generateHTML;