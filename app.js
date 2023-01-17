// create an array of strings - ['Dopey', 'Grumpy', 'Happy', 'Sleepy', 'Sneezy', 'Bashful', 'Doc']
var dwarves = ['Dopey', 'Grumpy', 'Happy', 'Sleepy', 'Sneezy', 'Bashful', 'Doc']


// remove the first item and place it in the 3rd position and print the new array
var homie = dwarves[0]
dwarves.splice(0, 1)
dwarves.splice(2, 0, homie)


// remove 'Sleepy' (hint: use .filter()) and print the array
slaughterDwarf('Sleepy')
console.log('sorry buddy\n' + dwarves)


// convert the array of strings into an array of objects (hint: use .map())
dwarves = dwarves.map(function (dwarf) {
    var name = dwarf
    var length = name.length

    return {
        'name': name,
        'length': length
    }
})
console.log(dwarves)


// call the following public api and print the data thats returned (hint: create a separate function and use async await)
async function callTestAPI() {
    var response = await fetch('https://jsonplaceholder.typicode.com/users')
    var data = await response.json()
    return data
}

callTestAPI().then(data => console.log(data))


// print all names that start with 'C' from the data returned in the public api
callTestAPI().then(data => {
    data.forEach(person => {
        if (person.name.charAt(0) == "C")
            console.log(person.name)
    })
})





// obligatory murder dwarf function
function slaughterDwarf(name) {
    dwarves = dwarves.filter(function (item) {
        return item !== name
    })
}