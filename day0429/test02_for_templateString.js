let user = { name: "kw", age: 26 }

for (let key in user) {
    console.log(key + ">>" + user[key]);
}

let arr = [10, 20, 30];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (let num of arr) {
    console.log(num);
}

///string 이어 붙이기 
let msg1 = "이름:" + user['name'] + ", 나이: " + user['age'];
let msg2 = `이름: ${user.name}, 나이:${user.age}`; //백틱 활용 