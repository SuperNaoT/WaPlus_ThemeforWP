// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************

// ブラウザのウインドウサイズを取得する
let WINDOW_W;
let WINDOW_H;

// CSSレスポンシブ評価値と合わせる！【_breakpoints.scss】
// let GB_minWidth = 680;           // 2024/01/08
// let GB_minWidth = 720;
let GB_minWidth = 961;
// let GB_minWidth = 991;

document.addEventListener( 'DOMContentLoaded', function() {
	
  // console.log( " ■■■■■　START breakPointsSetByWindowSize.js　■■■■■" );

  // ブラウザのウインドウサイズを取得する
  WINDOW_W = window.innerWidth;
  WINDOW_H = window.innerHeight;

  // console.log( " 【breakPointsSetByWindowSize.js】? width : " + WINDOW_W);
  // console.log( " 【breakPointsSetByWindowSize.js】? height: " + WINDOW_H);

  // 
  // Windowサイズが、breakpoints値より小さい時、
  // MOBILEデバイス判定に変換する。
  // PCにて閲覧中、Windowsサイズが小さくされた際に、
  // MOBILEデバイス用表示に変更する。
  // ***********************************************
  if ( WINDOW_W < GB_minWidth ) {

    // console.log( "①" );
    // alert(" ■■■■■　Checked MOBILE!");  

    // 
    // ■ 画面サイズ「GB_winWidth」未満の場合、
    // 【PC】クラスを【MOBILE】クラスに変更し、
    // 「JavaScriptの動作」を【MOBILE画面】用に設定し直し。
    // 
    // ■ 解説
    // 「JavaScript」内部では、【<body>】タグに設定される、
    // 「デバイスサイズ判定用クラス」【PC】【MOBILE】にて、
    // 「対象要素を判断」し、その動作をさせている。
    // 
    // 【PC/MOBILE】クラスの初期設定は、
    // 「globalVariablesDef.php/Mobile_Check.php」にて設定。
    // **************************************************
    if ( document.querySelector( 'body' ).classList.contains( 'PC' ) )  {
          document.querySelector( 'body' ).classList.remove  ( 'PC' );
          document.querySelector( 'body' ).classList.add ( 'MOBILE' );
          // console.log( " >>>>> MOBILE class Added !" );
          // console.log( "①" );
    }
    if ( !document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
          document.querySelector( 'body' ).classList.add ( 'MOBILE' );
          // console.log( " >>>>> MOBILE class Added !" );
          // console.log( "②" );
    }

    // alert(" ■■■■■　Checked MOBILE!");  

  } else  {

    // alert(" ■■■■■　Checked PC!");  

    // 
    // ■ 画面サイズ「GB_winWidth」以上の場合、
    // 【MOBILE】クラスを【PC】クラスに変更し、
    // 「JavaScriptの動作」を【PC画面】用に設定し直し。
    // 
    // ■ 解説
    // 「JavaScript」内部では、【<body>】タグに設定される、
    // 「デバイスサイズ判定用クラス」【PC】【MOBILE】にて、
    // 「対象要素を判断」し、その動作をさせている。
    // 
    // 【PC/MOBILE】クラスの初期設定は、
    // 「globalVariablesDef.php/Mobile_Check.php」にて設定。
    // **************************************************
    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
         document.querySelector( 'body' ).classList.remove  ( 'MOBILE' );
         document.querySelector( 'body' ).classList.add     ( 'PC'     );

      //  console.log( " >>>>> PC class Added !" );
      //  console.log( "②" );
    }
  }
  // console.log( " ■■■■■　END   breakPointsSetByWindowSize.js　■■■■■" );
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