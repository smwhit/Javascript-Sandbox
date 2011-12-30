$(function () {
    "use strict";
    var App = {
        init:function () {

            var that = this;

            this.movies = [
                { Name:"The Red Violin", ReleaseYear:"1998" },
                { Name:"Eyes Wide Shut", ReleaseYear:"1999" },
                { Name:"The Inheritance", ReleaseYear:"1976" }
            ];

            this.markup = "<li class='list-item'>${Name} (${ReleaseYear})</li>";

            $.template("movieTemplate", this.markup);

            $("#AddMovie").click(function () {
                                this.newMovie = $("#newMovie").val();
                                this.releaseDate = $("#releaseDate").val();
                                $("#movieList").empty();
                                that.movies.push({ Name:this.newMovie, ReleaseYear:this.releaseDate });
                                $("#newMovie").val("");
                                $("#releaseDate").val("");
                                that.render();
                            }
                        );
            this.render();
        },

        render:function () {
            $.tmpl("movieTemplate", this.movies).appendTo("#movieList");
        }
    };

    window.MovieApp = App.init();
});
