// const square = function(x){
//     return x*x;
// }

// console.log(square(3))

// const square = x => {
//     return x* x;
// }

// console.log(square(4))

const square = (x) => x*x

console.log(square(9))

const event = {
    name: 'Birthday Party',
    guestList: ['Sajal', 'Venky', 'Neel'],
    printGuestList(){
        console.log('Guest list for '+this.name)

        this.guestList.forEach((guest) => {
            console.log(guest+" is attending the "+this.name)
        })
    }
}

event.printGuestList()