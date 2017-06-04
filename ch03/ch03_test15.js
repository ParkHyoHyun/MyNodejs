var Users = [{name:'소녀시대', age:20}, {name:'걸스데이',age:22}, {name:'티아라', age:23}];
console.log('호출 전 배열 요소의 수 : %d',Users.length);

Users.unshift({name:'라붐',age:20});
console.log('호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();
console.log('2호출 후 배열 요소의 수 : %d', Users.length);

Users.splice(1,0,{name:'애프터스쿨',age:25});
console.log('splice()로 요소를 인데스 1에 추가한 후');
console.dir(Users);

Users.splice(2,1);
console.log('splice()로 인덱스 1의 요소를 1개 삭제한 후');
console.dir(Users);