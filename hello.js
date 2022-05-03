// const mission = 'learn';
const mission = process.argv[2];

console.log(process.argv);

if (mission === 'learn') 
    console.log('Time to write some Node code!')
else 
    console.log(`Is ${mission} really more fun? :(`)