
// // ブラウザのウインドウサイズを取得する
// let WINDOW_W;
// let WINDOW_H;

// // CSSレスポンシブ評価値と合わせる！【_breakpoints.scss】
// let GB_minWidth = 680;

document.addEventListener( 'DOMContentLoaded', function() {

  // // ブラウザのウインドウサイズを取得する
  // WINDOW_W = window.innerWidth;
  // WINDOW_H = window.innerHeight;

  window.addEventListener("load", function() {

    // console.log( " 【sideScrollScript.js】? width : " + WINDOW_W);
    // console.log( " 【sideScrollScript.js】? height: " + WINDOW_H);
  
    // if ( WINDOW_W < GB_minWidth ) {
  
    //   console.log( "①" );
  
    //   // やりたい処理
    //     if ( document.querySelector( 'body' ).classList.contains( 'PC' ) )  {
    //          document.querySelector( 'body' ).classList.remove  ( 'PC' );
    //          document.querySelector( 'body' ).classList.add ( 'MOBILE' );
  
    //           console.log( " >>>>> MOBILE class Added !" );
    //           console.log( "②" );
    //     }
    // }
  
    // 
    // モバイル端末の場合は、横スクロール無し
    // **********************************************
    if ( !(document.querySelector( 'body' ).classList.contains( 'MOBILE' )) )  {

      // console.log( " >>>>> 【sideScrollScript.js】Active SIDE-SCROLL 【mobile】class doesn't apper!" );
      //プラグインを定義
      // gsap.registerPlugin(ScrollTrigger);

      // 
      // ***************************************
      // ***************************************
      // ***************************************
      // 横スクロール機能実装
      // ***************************************
      // ***************************************
      // ***************************************
      // 横スクロール全画面、イベント認識領域
      const area  = document.querySelector(".js-sideScrollArea");
      // 横スクロール全画面、ラッパー
      const wrap  = document.querySelector(".js-allPanelWrapper");
      // 実横スクロール、各１画面
      const panels = document.querySelectorAll(".js-panel");
      // 実横スクロール、画面枚数
      const num   = panels.length;
    
      // console.log( ` ☛ 画面枚数【${num}】`);

      // 
      // 横幅を指定
      // １．全横スクロール幅計算（％）
      gsap.set(wrap,  { width: num * 100 + "%" });    // 100
      // ２．個別画面幅、横スクロール全体幅に於ける比率計算（％）
      gsap.set(panels, { width: 100 / num + "%" });   // 100

      // console.log( ` ☛ 全横スクロール幅計算　（％）【${num * 100}％】`);
      // console.log( ` ☛ 全体幅に於ける比率計算（％）【${100 / num}％】`);
      // console.log( ` ☛ ✕軸方向への移動量　　（％）【${-100 * ( num - 1 )}％】`);

      // 
      // 個別画面移動表示処理
      gsap.to(panels, {
        xPercent: -100 * ( num - 1 ), //x方向に移動させる   // 100
        ease: "none",
        // 横スクロールトリガの設定
        scrollTrigger: {
          trigger: area,      //トリガー
          start: "top top",   //開始位置
          end: "+=1000",      //終了位置
          pin: true,          //ピン留め・横スクロールの肝
          scrub: true,        //スクロール量に応じて動かす
        }
      });
      // ***************************************
      // ***************************************
      // ***************************************
    }
  });
})
