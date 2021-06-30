const monaco = "Monaco is one of the beautiful city in france";

console.log(monaco.replace("Monaco","Paris")); //javascript replace method this method is used to replace a specific word using two arguments...//


// let myField= "lome"=-
 
// console.log(myField.replaceAll("l", "c"));// bug error in code.....


var city = [
    {
        'region': "Europe",
        'name': "Paris"
    },
    {
        'region': "Europe",
        "name": "Amsterdam"
    },
    {
        'region': "Europe",
        "name": "Vienna"
    },
    {
        'region': "America",
        "name": "san francisco"
    },
    {
        "region": "South America",
        "name": "Bogota"
    },
]
 var groupBy = (xs, key) => {
              return xs.reduce(function(rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
              }, {});
 };
 var resultByRegion = groupBy(city, 'region');
 console.log(resultByRegion);   // Grouping an array of objects using the reduce method which allows arrays to be grouped
                                //in a specific way determined either by it's common data types

  function* getUniqueID() {
      var uniqueNumber = 101;
      while (true) {
          yield uniqueNumber++;
      }
  }  
   const uniqueID = getUniqueID();
   
   console.log(uniqueID.next().value);
   console.log(uniqueID.next().value);
   console.log(uniqueID.next().value);   //Using the next method allows one to generate unique numbers each time the code is run.


   //Map() Method ---- map is widely used by developers in daily coding, Map offers various use cases depending upon one custom
                    //    requirements.

 
     
                    
                    var city = [
                        {
                            'id': 1,
                            'name': "Manchester",
                            "region": 'Uk'
                        },
                        {
                            'id': 2,
                            'name': "Mersyside",
                            "region": "UK"
                        },
                        {
                            'id': 3,
                            'name': "New York",
                            'region': "United State",
                        },
                        {
                            'id': 4,
                            'name': 'New delhi',
                            "region": "Ireland"
                        },
                        {
                            'id': 5,
                            'name': "Brookyln",
                             "region": "New York"
                        },
                    ]
const cityName = city.map(city => city.name);
console.log(cityName); 
 //Most times developers tend to add new key-pari within exisiting array, Take for Instance ✔✔✔✔✔✔

//In here we gonna be using the variable city.

city.map(city => city.cityWithName = city.name + '-' + city.region);
console.log(city);
                    
//Let's take another apporach and add new key-pair value,
  const newCity = city.map((city) => ({
      ...city,
      newCity: true,
  }));

  console.log(newCity);

  //Cast Values in array using-map()
  //Awesome tricks - harness the power of map function you will convert an array of strings
  //into any array of numbers.

  var countries = [
     {
          "id": 1,
          "country": "Argentina",
          "capital": ''
      },
      {
          "id": 2,
          "country": "Brazil",
          "capital": "Sa Paoulo"
      },
      {
          "id": 2,
          "country": 'Mexico',
          "capital": 'Mexico city'
      },
      {
          "id": 3,
          "country": "Turkey",
          "capital": "istanbul"
      },
      {
          "id": 4,
          "country": "France",
          "capital": "paris"
      },
      {
          "id": 5,
          "country": "Germany",
           "capital": 'Berlin'
      },
      {
          "id": 6,
          "country": "Netherlands",
          "capital": "Amsterdam"
      },{
          "id":7,
          "country": "Italy",
          "capital": "Rome"
      },
  ]


  const countriesCountry = countries.map(countries => countries.country);

  console.log(countriesCountry);

  countries.map(country)