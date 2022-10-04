// import fetch from './node-fetch'

// // // let APIKEY = 'd1d706b5-745e-4a72-a3ea-2beb8bc7b021'



// fetch('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/3840?res=3hourly&key=d1d706b5-745e-4a72-a3ea-2beb8bc7b021')
// .then((response) => response.json())
// .then((data) => console.log(data));




import temp from './alltemps.json' assert {type: 'json'}
console.log(temp)

console.log(temp.Locations.location[1].name)
