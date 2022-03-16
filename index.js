// Code your solution here
function findMatching(drivers, name){
  let user = drivers.filter(element => name === element || name.toLowerCase() === element);
        return user;
    };

function fuzzyMatch (drivers, name){
    let user = drivers.filter(element => name.slice(0,2) === element.slice(0,2));
    return user;
}


function matchName (drivers, name){
    let user = drivers.filter(element => name === element.name);
    return user;
}


