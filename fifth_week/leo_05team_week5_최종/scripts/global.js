// Console용 문구
let cssRule = 'font-size:2em;';
let cssLogo1 =
    'color:#39549a;' +
    'font-size: 60px;' +
    'font-weight: bold;' +
    'letter-space:-1px;' +
    'font-family:Tahoma,Arial,sans-serif';
let cssLogo2 =
    'color:#daa520;' +
    'font-size: 60px;' +
    'font-weight: bold;' +
    'letter-space:-1px;' +
    'font-family:Tahoma,Arial,sans-serif';
if (window.console != undefined) {
    setTimeout(
        console.log.bind(
            console,
            '%cHTML/CSS%c코칭스터디',
            cssLogo1,
            cssLogo2
        ),
        0
    );
    setTimeout(
        console.log.bind(
            console,
            '%c  드디어 leo_05team 5주차 마지막 미션 제출합니다!!!',
            cssRule
        ),
        0
    );
}
