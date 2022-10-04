import fs from 'fs'

fs.readFile("./alltemps.json", "utf8", (err, data) => {
 if (err) throw err
 let mySites = JSON.parse(data); 
 let jsonString = JSON.stringify(mySites, null, 2 )
  console.log(jsonString);

  let file = mySites.Locations.Location[0].id
  console.log(file)
});

