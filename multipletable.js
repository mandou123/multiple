let contents = ""; //빈 문자열
let oppertunity; //입력 기회
let exclude; //입력받는 값
let excludeFinal; //최종으로 할당해줄 값

for(oppertunity = 0; oppertunity<5; oppertunity++) {
    exclude = prompt(`제외하고 출력할 수를 입력하세요 (입력 기회는 5번 입니다)`);

    if(exclude<2) {
        alert(`2보다 큰 수를 입력하세요`);
    } else if(exclude>9) {
        alert(`9보다 작은 수를 입력하세요`);
    } else if(isNaN(exclude)) {
        alert(`숫자를 입력하세요`);
    }
    else {
        excludeFinal = exclude;
        break;
    }
}

if(oppertunity>=5) {
   alert(`입력 횟수를 초과하여 2단부터 9단까지 모두 출력합니다`);
}
else {
    alert(`${excludeFinal} 단을 제외하고 출력합니다`);
}

for(let i=2; i<=9; i++) {
    for(let j=1; j<=9; j++) {
        if(i != excludeFinal) {
            contents += `${i}X${j} = ${i*j}<br>`;
        }
    }
}

function printanswer() {
    document.write(contents);
}