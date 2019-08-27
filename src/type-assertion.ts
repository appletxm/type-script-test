interface Bird {
    fly: () => void
    layEggs: () => void
}

interface Fish {
    swim: () => void
    layEggs: () => void
}

let bird: Bird = {
    fly(){
        console.info('i can fly')
    },
    layEggs() {
        console.info('YES bird lay eggs')
    }
}
let fish: Fish = {
    swim(){
        console.info('i can swim')
    },
    layEggs() {
        console.info('YES bird lay eggs')
    }
}

function getSmallPet(pet: any): Bird | Fish {
    // if ((pet as Fish).swim) {
    //     console.info('this is a fish')
    // } else if ((pet as Bird).fly) {
    //     console.info('this is a bird')
    // }
    return pet
}

function isFish(pet: Bird | Fish): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function move(pet: Fish | Bird) {
    if ('swim' in pet) {
        return pet.swim()
    }

    return pet.fly()
}

let myPet = getSmallPet(fish)
if ((myPet as Fish).swim) {
    (myPet as Fish).swim()
} else if ((myPet as Bird).fly) {
    (myPet as Bird).fly()
}

if (isFish(bird)) {
    bird.swim()
}
