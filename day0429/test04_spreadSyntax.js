const num = [10, 20, 30, 40];

//얕은 복사
const copy1 = num;
copy1[0] = 90;

//배열의 주소를 복사하였기 때문에 원본은 하나를 공유함 
console.log(num);
console.log(copy1);

//깊은 복사
const copy2 = [];
for (let n of num) {
    copy2.push(n);
}

//원본을 얇게 펼쳐 옮겨 담으면 그 항목 하나하나가 복사됨
const copy3 = [...num];

//펼쳤는데 하나하나가 객체인 경우 -> 객체는 주소를 전달하므로 
const users = [
    { name: 'godBJ', status: '고고함' },
    { name: '대지훈', status: '목소리큼' },
]

const copyUsers = [...users]; //쪼갠 하나하나가 각각 주소
copyUsers[0].name = '김종원';
console.log(users); //사본을 변경했는데 원본이 변경됨

//복잡한 구조의 json을 완전히 깊은 복사 하고 싶으면 
let copyStr = JSON.stringify(users); //문자열로 만들어서 복사하고
let copy4 = JSON.parse(copyStr); //복사된 문자열을 json 객체로 파싱

const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [...a1, 80, 90, ...a2];
const user = { name: 'kwon', age: 26 };
const info = { job: 'student', phone: '010-123-2321' };
const userinfo = { ...user, ...info };
console.log(userinfo);

//대입 연산자 왼쪽 응용
const { name: myName, ...ttt } = userinfo;
console.log(myName);
console.log(ttt);