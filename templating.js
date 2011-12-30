$(function() {
  
    var movies = [
          { Name: "The Red Violin", ReleaseYear: "1998" },
          { Name: "Eyes Wide Shut", ReleaseYear: "1999" },
          { Name: "The Inheritance", ReleaseYear: "1976" }
      ];

          var markup = "<li><b>${Name}</b> (${ReleaseYear})</li>";

          // Compile the markup as a named template
          $.template( "movieTemplate", markup );

          // Render the template with the movies data and insert
          // the rendered HTML under the "movieList" element
          render();

          function render() {
              $.tmpl( "movieTemplate", movies ).appendTo( "#movieList" );
          }

        $("#AddMovie").click(function() {
            var newMovie =  $("#newMovie").val();
            var releaseDate = $("#releaseDate").val();
            $("#movieList").empty();
            movies.push({ Name: newMovie, ReleaseYear: releaseDate });
            $("#newMovie").val("");
            $("#releaseDate").val("");
            render();
        });
});
