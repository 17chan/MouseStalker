// JavaScript Document
const stalker = document.getElementById('stalker'); 

//aタグにホバー中かどうかの判別フラグ(なくても動く)
//let hovFlag = false;



//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});


//リンクへ吸い付く処理
const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
//        hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hov_');
		cursor.classList.add('hov_');

        //マウスストーカーの位置をリンクの中心に固定
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
//        hovFlag = false;
        stalker.classList.remove('hov_');
		cursor.classList.remove('hov_');
    });
}







//準備
let cursorR = 4;  //カーソルの半径（使ってない）
const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

//リンクにホバー時はクラスをつける
//const linkElem = document.querySelectorAll('a');
//for (let i = 0; i < linkElem.length; i++) {
//    linkElem[i].addEventListener('mouseover', function (e) {
//        cursor.classList.add('hov_');
//    });
//    linkElem[i].addEventListener('mouseout', function (e) {
//        cursor.classList.remove('hov_');      
//    });
//}

