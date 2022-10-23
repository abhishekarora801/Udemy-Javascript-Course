//Using switch and case!! IMPORTANT
const day = `monday`;
switch (day) {
    case 'monday': //day === ''monday' ,  strict comparison
        console.log(`Plan my course structure!`);
        console.log(`Go to coding meetup.`);
        break; //break is important, otherwise will print
    //next case statement also.
    case 'tuesday':
        console.log(`PREPARING THEORY VIDEOS`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`record vids`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day.`)
}
console.log(`---------------------------------------`);
console.log(`By if-else`);
const weekDay = prompt(`Please enter the day!`);

if (weekDay === 'monday') {
    console.log(`Plan my course structure!`);
    console.log(`Go to coding meetup.`);
}
else if (weekDay === 'tuesday') {
    console.log(`PREPARING THEORY VIDEOS`);
}
else if (weekDay === 'wednesday' || weekDay === 'thursday') {
    console.log(`Write code examples`);
}
else if (weekDay === 'friday') {
    console.log(`record vids`);
}
else if (weekDay === 'saturday' || weekDay === 'sunday') {
    console.log(`Enjoy the weekend`);
}
else {
    console.log('Please enter correct day!');
}


console.log(`---------------------------------------`);
console.log(`Exercise`);

const language = prompt(`Please enter language, you want to learn!`);
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'english':
        console.log(`Third place`);
        break;
    case 'hindi':
        console.log(`Number 4!`);
        break;
    case 'arabic':
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}
