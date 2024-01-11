// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************

document.addEventListener( 'DOMContentLoaded', function() {

  // //
  // // ******************************************************************
  // // ******************************************************************
  // // 
  // // 【Knowledge】＊＊＊＊＊
  // // 【関数名】function(u)
  // //  機能：ユーザーエージェントでスマホとタブレットを判定
  // //  引数：ユーザーエージェント情報
  // // ***************************************
  // const _ua_iphone = (function(u){
  //   return {
  //     Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
  //       ||    u.indexOf("ipad") != -1
  //       ||   (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
  //       ||   (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
  //       ||    u.indexOf("kindle") != -1
  //       ||    u.indexOf("silk") != -1
  //       ||    u.indexOf("playbook") != -1,
  //     Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
  //       ||    u.indexOf("iphone") != -1
  //       ||    u.indexOf("ipod") != -1
  //       ||   (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
  //       ||   (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
  //       ||    u.indexOf("blackberry") != -1
  //   }
  // })(window.navigator.userAgent.toLowerCase());

})

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】CustomerFrontPageContents()
//  機能：サイト・トップページ表示
//  引数：無し
// ******************************************************************
// ******************************************************************
function CustomerFrontPageContents() {
  // console.log( `\n >>>>> Start CustomerFrontPageContents( トップページ表示 ) >>>>> `);

  // 
  // For mobile phone screen size.
  //*********************************************************/ 
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // window.alert( " 【CustomerFrontPageContents()】Mobile Size recognized ! " );

  // 
  // For PC screen size.
  //*********************************************************/ 
  } else  {

    // window.alert( " 【CustomerFrontPageContents()】PC Size recognized ! " );

  }

  // console.log( ` <<<<< Exit  CustomerFrontPageContents() <<<<< \n`);
}


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