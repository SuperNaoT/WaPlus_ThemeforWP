// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************
document.addEventListener( 'DOMContentLoaded', function() {
  // console.log( " ■■■■■　START checkViewportDirection.js　■■■■■" );

  window.addEventListener('resize', ()=>{

    // 
    // PC
    // if ( document.querySelector( 'body' ).classList.contains( 'PC' ) )  {
      // console.log( " デバイス種別・ＰＣ" );

      // 
      // ビューポート縦型・横型判定にて【.container】サイズを設定
      mql1 = window.matchMedia("(orientation: landscape)");
    
      if ( mql1.matches )  {
        // console.log( " ビューポート方向・横方向【" + mql1.matches + "】" );
        
        if ( document.querySelector( '.container' ).classList.contains( 'portraitContainer' ) )  {
             document.querySelector( ".container" ).classList.remove  ( "portraitContainer" );
        }
        document.querySelector(".container").classList.add("landscapeContainer");
      } else  {
        // console.log( " ビューポート方向・縦方向【" + mql1.matches + "】" );

        if ( document.querySelector( '.container' ).classList.contains( 'landscapeContainer' ) )  {
             document.querySelector( ".container" ).classList.remove  ( "landscapeContainer" );
     }
     document.querySelector(".container").classList.add("portraitContainer");
      }
    // } else  {
    //   console.log( " デバイス種別・Ｍｏｂｉｌｅ" );
    // }
  
  });

  // console.log( " ■■■■■　END   checkViewportDirection.js　■■■■■" );
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