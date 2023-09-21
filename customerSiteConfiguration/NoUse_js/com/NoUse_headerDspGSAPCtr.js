
//
//「documet/HTML全て読み込んだら実行される関数」として定義する。
//「必ず」記述する。
//
document.addEventListener( 'DOMContentLoaded', function() {

  // 
  // 【関数名】window.addEventListener()
  //  機能：ロードイベント対応ページ表示
  //  引数：無し
  // ***************************************
  window.addEventListener( 'load', ()=>{

    // ヘッダー部表示
    headerDispGSAPCtr();
  })

  // 
  // ヘッダー部ナビメニュー配下サブメニュー表示位置、
  // サブメニュー上部消去領域位置の取得

  let url = location.href;
  console.log( ' >>>>> 【headerDspGSAPCtr.js】 url【 ' + url + ' 】\n');

  getPosSubM_SubMnuErase( 0 );

  // 
  // ヘッダー部ナビメニュー配下サブメニュー表示制御
  subMenusDispCtr( 0, document.querySelectorAll( '.navInter' ) );

  // 
  // ヘッダー部ナビメニュー配下サブメニュー表示制御
  // subMenusDispCtr( 1, document.querySelectorAll( '.navInter' ) );

  // 
  // ■ ヘッダー部表示制御関数
  //   「100%」上方に移動済みヘッダー部を、
  //   「GSAP」にて表示する
  // 
  // 
  function headerDispGSAPCtr() {
    gsap.timeline()
    // 
    .to( 'header', {
      opacity: 0.9,
      y: 0,
      duration: 0.8,    // 1.0
      ease: 'Power1.easeOut'
    })
  }
})
// 
// ********************************************************
// ********************************************************
// 
// 【難読化】JavaScript 難読化ツール利用
//    参照　：https://uxbear.me/obfuscator/
//    ツール：https://obfuscator.io/
// 
// ********************************************************
// ********************************************************
// 