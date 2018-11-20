var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  // cms route loads cms.html
  app.get("/searches", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/search.html"));
  });

  // blog route loads blog.html
  app.get("/proposal", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/proposal.html"));
  });

  // authors route loads author-manager.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/home", function(rec, res) {
    var handlebarsObject = {
      msg: "this is a message",
    };
    res.render("home", handlebarsObject);
  })

  app.get('/search', function(rec,res){
    var country  = {
      name: "cuba",
      population:20,
      language: "american",
      found: false,
    };

    res.render('search', country);

    
  })
   // Render 404 page for any unmatched routes
   app.get("*", function (req, res) {
    res.render("404");
  });
};

 

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};

