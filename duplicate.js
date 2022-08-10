const names = ['abul', 'babul', 'cabul', 'dabul', 'babul', 'abul', 'ebul', 'gabul', 'babul', 'babul', 'kabul'];

function removedDuplicate(names) {
    const removedName = [];
    for (let i = 0; i < names.length; i++){
        const index = i;
        const name = names[index];
        if (removedName.includes(name) === false) {
            removedName.push(name);
        }
    }
    return removedName;
}

const getRemovedName = removedDuplicate(names);
// console.log(getRemovedName); 