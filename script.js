// // var counter = 0;

// // while(counter <= 99){
// // console.log("Tweet Tweet");
// // counter++;
// // }

// // // for(var i = 0; i < 100; i++){
// // //     console.log("Tweet Tweet");
// // }

// var favoriteFoods = ['BBQ Chicken Wings', 'Indian Chicken Chilli', 'Chicken Korma', 'American Turkey Chili', 'Rachel Sandwich']

// // var i = " "
// for(i = 0; i < favoriteFoods.length; i++){
//     console.log(favoriteFoods[i]);
// }

// var interests = ['Sports Cars', 'Ultrarunning', "Golf", "Travel", "Scuba Diving"];

// // var e = " "
// for(e = 0; e < interests.length; e++){
//     if(interests[e] === "Ultrarunning"){
//     console.log("My favorite hobby is" + " " + interests[e]);
// }   else {
//     console.log("One of my interests is" + " " + interests[e]);
// }}

// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

// for(h = 0; h < harryPotterTitles.length; h++){
//     console.log("Harry Potter" + " " + harryPotterTitles[h]);
// }

// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

// for(var g = 0; g < grades.length; g++){
//     if (grades[g] >= 0 && grades[g]<= 69){
//         console.log("You got an F.");
//     }   if (grades[g] >= 70 && grades[g]<= 76){
//         console.log("You got a D.");
//     }   if (grades[g] >= 77 && grades[g]<= 83){
//         console.log("You got a C.");
//     }   if(grades[g] >= 84 && grades[g]<= 92){
//         console.log("You got a B.");
//     }   else {
//         console.log("You got an A. Good job!");
// }}

// var HTMLString = "";
// var listContainer = document.querySelector("#restaurants-list");

// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

// for (var r = 0; r < downtownRestaurants.length; r++){
//     HTMLString = HTMLString + `<li>${downtownRestaurants[r]}</li>`;
//     console.log(downtownRestaurants[r]);
// }
//     listContainer.innerHTML = HTMLString;
    
    var movieSchedule = [
        {
          title: "Ralph Breaks the Internet",
          rating: "PG",
          currentlyPlaying: true,
          poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
        }, 
        {
          title: "The Grinch",
          rating: "G",
          currentlyPlaying: true,
          poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
        },
        {
          title: "A Star is Born",
          rating: "R",
          currentlyPlaying: false,
          poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
        },
         {
          title: "Bohemian Rhapsody",
          rating: "PG-13",
          currentlyPlaying: true
        },
        {
          title: "Fantastic Beasts: The Crimes of Grindlewald",
          rating: "PG-13",
          currentlyPlaying: true,
          poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
        },
        {
          title: "Robin Hood",
          rating: "PG-13",
          currentlyPlaying: false,
          poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
        },
        {
          title: "Spider-Man: Into the Spider-Verse",
          rating: "PG-13",
          currentlyPlaying: true,
        }
      ]
      var MovieContainer = document.querySelector("#movie-schedule");
      var MovieString = "";
    

    for (var m = 0; m <= movieSchedule.length; m++){
        MovieString = MovieString + `<h3 id="title">${movieSchedule[m].title}<h3><p id="rating">${movieSchedule[m].rating}</p><img id="poster">${movieSchedule[m].poster}`;

    //   for (m = 0; m = movieSchedule.length; m++){
    //         MovieString = MovieString + `<h3 id="title">${movieSchedule.title[m]}<h3><p id="rating">${movieSchedule.rating[m]}</p><img id="poster">${movieSchedule.poster[m]}`;
      }
        MovieContainer.innerHTML = MovieString;