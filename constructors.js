function createPerson(name) {
    return {
        name ,
        talk(){
            return 'My name is ' + this.name
        }
    }
}


const me =  createPerson('John Doe')
const you = createPerson('Sina')

console.log(me.talk())
console.log(you.talk())

// End of Factory functions 

// Constructor Functions 

function CreatePerson(name){
    this.name = name
    CreatePerson.prototype.talk = function (){
        return 'Mambo , naitwa ' + this.name
    }
}


const mimi = new CreatePerson('Starnoh John')

console.log(mimi.talk())


