// ESERCIZIO 1

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    isOlderThan(obj) {
        if (parseInt(obj.age) > parseInt(this.age)) {
            return `${this.firstName} is younger than ${obj.firstName}.`
        } else if (parseInt(obj.age) < parseInt(this.age)) {
            return `${this.firstName} is older than ${obj.firstName}.`
        } else if (parseInt(obj.age) === parseInt(this.age)) {
            return `${this.firstName} and ${obj.firstName} have the same age.`
        }
    }
}

const nameInput = document.getElementById('name')
const surnameInput = document.getElementById('surname')
const ageInput = document.getElementById('age')
const locationInput = document.getElementById('location')
const form1 = document.getElementsByTagName('form')[0]
const cardContainer1 = document.getElementById('card-container-1')

let users = []
let index1 = 0

const createUserCard = function () {
    if (index1 < 2) {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.classList.add('me-2')
        newCard.classList.add('w-50')
        newCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${users[index1].firstName} ${users[index1].lastName}</h5>
            <hr />
            <h6 class="card-subtitle mb-2 text-body-secondary">Età: ${users[index1].age}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">Luogo: ${users[index1].location}</h6>
        </div>
        `
        cardContainer1.appendChild(newCard)
    }
}

form1.addEventListener('submit', function(e){
    e.preventDefault()
    const user = new User(nameInput.value, surnameInput.value, ageInput.value, locationInput.value)
    users.push(user)
    createUserCard()
    
    nameInput.value = ''
    surnameInput.value = ''
    ageInput.value = ''
    locationInput.value = ''
    index1++
})

const compareButton1 = document.getElementById('compare1')
const outputText1 = document.getElementById('output-text-1')

compareButton1.addEventListener('click', function(){
   outputText1.innerText = users[0].isOlderThan(users[1])
})

const resetButton1 = document.getElementById('reset1')

resetButton1.addEventListener('click', function(){
    cardContainer1.innerHTML = ''
    nameInput.value = ''
    surnameInput.value = ''
    ageInput.value = ''
    locationInput.value = ''
    outputText1.innerText = ''
    index1 = 0
    users = []
})



// ESERCIZIO 2

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    shareOwner(obj) {
        if (this.ownerName === obj.ownerName) {
            return true
        } else {
            return false
        }
    }
}

const petNameInput = document.getElementById('pet-name')
const ownerInput = document.getElementById('owner')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')
const form2 = document.getElementsByTagName('form')[1]
const cardContainer2 = document.getElementById('card-container-2')

let pets = []
let index2 = 0

const createPetCard = function () {
        const newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.classList.add('me-2')
        newCard.classList.add('mb-2')
        newCard.classList.add('w-25')
        newCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${pets[index2].petName}</h5>
            <hr />
            <h6 class="card-subtitle mb-2 text-body-secondary">Padrone: ${pets[index2].ownerName}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">Specie: ${pets[index2].species}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">Razza: ${pets[index2].breed}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">ID: ${index2}</h6>
        </div>
        `
        cardContainer2.appendChild(newCard)
}

form2.addEventListener('submit', function(e){
    e.preventDefault()
    const pet = new Pet(petNameInput.value, ownerInput.value, speciesInput.value, breedInput.value)
    pets.push(pet)
    createPetCard()
    
    petNameInput.value = ''
    ownerInput.value = ''
    speciesInput.value = ''
    breedInput.value = ''
    index2++
})

const compareButton2 = document.getElementById('compare2')
const outputText2 = document.getElementById('output-text-2')
const idInput1 = document.getElementById('id1')
const idInput2 = document.getElementById('id2')

compareButton2.addEventListener('click', function(){
    if (pets[parseInt(idInput1.value)].shareOwner(pets[parseInt(idInput2.value)])) {
        outputText2.innerText = `${pets[parseInt(idInput1.value)].petName} and ${pets[parseInt(idInput2.value)].petName} share the same owner!`
    } else {
        outputText2.innerText = `${pets[parseInt(idInput1.value)].petName} and ${pets[parseInt(idInput2.value)].petName} dont' share the same owner.`
    }
   idInput1.value = ''
   idInput2.value = ''
})

const resetButton2 = document.getElementById('reset2')

resetButton2.addEventListener('click', function(){
    cardContainer2.innerHTML = ''
    petNameInput.value = ''
    ownerInput.value = ''
    speciesInput.value = ''
    breedInput.value = ''
    outputText2.innerText = ''
    index2 = 0
    pets = []
})