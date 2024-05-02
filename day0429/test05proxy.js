//vuejs에 프록시가 많이 활용되고 있음을 추론하기 위함
let kw = { name: '라송연', action: undefined };

const boeun = new Proxy(kw, {
    set: function (target,key,value) {
        console.log(value + "하기 전에 ");
        target[key] = value;
        console.log(value + '검사');
    }
})

//data 뿐만 아니라 화면도 변경
boeun.action = '과제';