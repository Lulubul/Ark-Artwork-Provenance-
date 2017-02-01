var data = { "users":[
            {
                "firstName":"Ray",
                "lastName":"Villalobos",
                "joined": {
                    "month":"January",
                    "day":12,
                    "year":2012
                }
            },
            {
                "firstName":"John",
                "lastName":"Jones",
                "joined": {
                    "month":"April",
                    "day":28,
                    "year":2010
                }
            }
    ]}
    // Let's first initialize sigma:
    var s = new sigma('container');
  var j= 0;
  for (var i in data.users) {
  
         s.graph.addNode({
    // Main attributes:
    id: "n" + j,
    label: data.users[i].lastName,
    // Display attributes:
    x: j,
    y: j,
    size: 1,
    color: '#f00'
    });
  
  if (j > 0){
    s.graph.addEdge({
      id: "e" + j,
      // Reference extremities:
      source: "n" + (j-1),
      target: "n" + j
    });
  
  }
    j++;
    }
    

    // Finally, let's ask our sigma instance to refresh:
    s.refresh();