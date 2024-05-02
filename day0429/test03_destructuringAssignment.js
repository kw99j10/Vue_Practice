let user = { id: "ssafy", name: "kwon", age: 26, phone: "010-1234-5678" };

//백엔드가 json 데이터를 줬으면 하나씩 뽑아서 씀
function print1(data) {
    console.log('print1>' + data['id'] + "," + data['name']);
}

print1(user);

//하나씩 뽑아쓰기 번거로움
function print2({ id, name }) {
    console.log('print2>' + id + "," + name);
}

//대입 연산자 왼쪽에 사용 -> 오른쪽 덩어리 부심
let { age, phone } = user;

//이런 라이브러리 함수가 있다고 가정하고 호출 -> 결과로 객체 나옴
function lib() {
    return { title: 'vue js', author: "kyungwon", price: 30000 };
}

//라이브러리 실행 결과에서 원하는거 뽑아내기 
let { title: t, price: p } = lib();

//나중에 html에서 import할 때 아래처럼 코딩 
{/* <script type="module">
    import {name, say} from "test03_export.js";
    console.log('내 이름은'+name);
    say();
</script> */}
