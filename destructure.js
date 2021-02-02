const person = { name: 'Mehedi Hasan', age: 22, job: 'Developer', address: 'Rajshahi', phone: '01798', friends: ['abir', 'sunny', 'Maruf'] };

const {name, age, job} = person;
// const name = person.name;
// const job = person.job;
// console.log(name, age, job);

const friends = ['Amir Khan', 'Salman Khan', 'Sharukh Khan', 'Atif Aslam'];
const [first, ...bestFriends] = friends;
console.log(bestFriends);


const complexObject = {
    name: 'jahid',
    info: {
        address: 'Jamira',
        leader: 'Mehedi'
    }
}

const {leader} = complexObject.info;
console.log(leader);