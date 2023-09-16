const mexico = {  
        id:24,
        country: "Mexico",
        capital: "Mexico City",
        neighbours: ["USA", "Guatemala", "Belize"]
    }

    console.log(mexico);
    mexico.id = 25;
    mexico.neighbours.push("Honduras");

    console.log(mexico)
