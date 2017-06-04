var Users = [{name:'소녀시대', age:20}, {name:'걸스데이',age:22}, {name:'티아라', age:23}];
console.log('호출 전 배열 요소의 수 : %d',Users.length);

Users.unshift({name:'라붐',age:20});
console.log('호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();
console.log('2호출 후 배열 요소의 수 : %d', Users.length);