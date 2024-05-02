
const id = "ssafy",
    name = "yangyu",
    age = 30;


// ES 6 이전 문법: 해당 형태의 json 문법 사용
const user1 = {
    "id": id,
    "name": name,
    "age:": age,
    info: function () {
        
    },

    info: () => {
        
    },
}

// 매번 위처럼 프로퍼티 이름 명시하기 귀찮음
// ES6 문법 property  shorthand + concise method
const user2 = {
    id,
    name,
    age,
    info() { },
};
user2.age = 35;
user2['user-name']="정경원";
