const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, string) {
    return array.filter (function(el)
    {
        return el.toLowerCase().indexOf (string.toLowerCase())!==-1
    })

}
function fuzzyMatch (array, string) {
    return array.filter(function(el)
    {
        return el.startsWith(string)
    })
}
function matchName(drivers, info) {
    const newArray = drivers.filter( function(el)  
    {
        return el.name == info;
    })
        return (newArray);
}