
// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************
document.addEventListener( 'DOMContentLoaded', function() {

  // 
  // *****************************************************
  // Pallax効果有効化
  // *****************************************************
  // 
  let rellax    = new Rellax('.js-pallax');
  // let rlxImgM   = new Rellax('.js-expMImage img',  {center:true, breakpoints:[576,768,1201]} );
  // let rlxImgL   = new Rellax('.js-expLImage img',  {center:true} );
  // let circleO   = new Rellax('.circleO', { speed:2, center:true} );

  // ******************************************************************
  // ******************************************************************
  // 
  // 【関数名】window.addEventListener()
  //  機能：ロードイベント対応ページ表示
  //  引数：無し
  // ***************************************
  window.addEventListener( 'load', ()=>{
    // console.log( ` >>>>> Start window.addEventListener( LOAD ) >>>>> `);

    calcEachElmPosPhilo();

    // 
    // サイト本体の表示
    // 
    dispEachSubPage();

    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    getPosSubM_SubMnuErase( 1 );

    // console.log( ` <<<<< Exit  window.addEventListener( LOAD ) <<<<< `);
  })
  // ******************************************************************
  // ******************************************************************
  
  // ******************************************************************
  // ******************************************************************
  // 
  // 【関数名】window.onscroll()
  //  機能：スクロールイベント対応処理
  //  引数：e / エレメント情報
  // ***************************************
  window.onscroll = function(e) {
    // console.log( ` >>>>> Start window.onscroll( e ) >>>>> `);

    // 
    // スクロールガイド、フッター部表示時は消去
    gsap.to('.scrollGuideArea', { //アニメーションしたい要素を指定
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: 'footer',//アニメーションが始まるトリガーとなる要素
        start: 'top 60%', //アニメーションが始まる位置
        end:   'bottom 60%', //アニメーションが始まる位置
        scrub: true,
        // markers: true,
      }
    });

    // console.log( ` <<<<< Exit  window.onscroll( e ) <<<<< `);
  }
  // ******************************************************************
  // ******************************************************************

  // // 
  // // 【com/headerDspGSAPCtr.js】に移動
  // // 
  // // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
  // getPosSubM_SubMnuErase( 1 );

  // // 
  // // サブメニュー表示制御
  // subMenusDispCtr( 1, document.querySelectorAll( '.navInter' ) );

  
  // ******************************************************************
  // ******************************************************************
  // ハンバーガーメニュー内、個別メニュークリックイベント対応ハンドラ
  // ******************************************************************
    document.getElementById( 'hamburgerNav'        ).addEventListener( 'click', function() {
    document.getElementById( 'hamburgerMenuButton' ).classList.toggle( 'active' );
    document.getElementById( 'hamburgerNav'        ).classList.toggle( 'active' );
    document.getElementById( 'mask'                ).classList.toggle( 'active' );
    // console.log( "\n\n\n !!!!!!!!!! Hamburger Menu was CLICKED !!!!! \n\n\n");
  })

})

// 
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************
// JavaScript 共通関数群
// １．dispEachSubPage()       ：各サブページ表示制御
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】dispEachSubPage()
//  機能：サイト・トップページ表示
//  引数：無し
// ******************************************************************
// ******************************************************************
function dispEachSubPage() {
  // console.log( ` >>>>>【philo.js】Start dispEachSubPage() >>>>> `);

  // 
  // For mobile phone screen size.
  //*********************************************************/ 
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // window.alert( " 【philo.js - dispEachSubPage()】Mobile Size recognized ! " );

    gsap.timeline()

    // 
    // 【com/headerDspGSAPCtr.js】に移動
    // 
    // .to( 'header', {
    //   opacity: 0.9,
    //   y: 0,
    //   duration: 0.8,    // 1.0
    //   ease: 'Power1.easeOut'
    // })
    
    // **********************************************************
    // **********************************************************
    // 21-1122
    // **********************************************************
    // **********************************************************
    // 
    // 大見出し「Philosophy!」
    // を、回転・色変化・位置移動しなから表示
    .to( '.mbLine span', {
      x: 0,
      y: 0,
      color: '#665A1A',
      opacity: 1,
      duration: 0.8,  // 1.8 (like2.5)
      rotationY: '0deg',
      stagger: {
        each: 0.1
        // from: 'random'
      }
    }, '-=0.5' )

    // 
    // キャッチコピー表示
    .to( '#cthCopy', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
      stagger: {
        each: 0.1
      }
    }, '-=1.0' )

    // 
    // 理念・イメージ画像表示
    .to( '.msgDetailMB', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
    }, "<0" )

    // 
    // 理念・イメージ画像表示
    .to( '.sakuraImage', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<0' )
    // **********************************************************
    // **********************************************************
    // **********************************************************
    // **********************************************************
    // **********************************************************

    // 
    // 理念・イメージ画像表示
    .to( '.scrollGuideArea', {
      x: 0,
      y: 0,
      opacity: 1.0,
      duration: 5.0,
    }, '<1' )

  // 
  // For PC screen size.
  //*********************************************************/ 
  } else  {

    gsap.timeline()

    // // 
    // // 【com/headerDspGSAPCtr.js】に移動
    // // 
    // // 
    // .to( 'header', {
    //   opacity: 0.9,
    //   y: 0,
    //   duration: 0.8,    // 1.0
    //   ease: 'Power1.easeOut'
    // })
    
    // **********************************************************
    // **********************************************************
    // 21-1122
    // **********************************************************
    // **********************************************************
    // 
    // 大見出し「Philosophy」
    // を、回転・色変化・位置移動しなから表示
    .to( '.pcLine span', {
      x: 0,
      y: 0,
      color: '#665A1A',
      opacity: 1,
      duration: 0.8,  // 1.8 (like2.5)
      rotationY: '0deg',
      stagger: {
        each: 0.1
        // from: 'random'
      }
    }, '-=0.5' )

    // 
    // キャッチコピー表示
    .to( '#cthCopy', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
      stagger: {
        each: 0.1
      }
    }, '-=1.8' )
    // 
    // 理念・イメージ画像表示
    .to( '.msgDetailPC', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
    }, "<0" )
    // 
    // 理念・イメージ画像表示
    .to( '.sakuraImage', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<0' )
    // **********************************************************
    // **********************************************************
    // **********************************************************
    // **********************************************************
    // **********************************************************

    // 
    // 理念・イメージ画像表示
    .to( '.scrollGuideArea', {
      x: 0,
      y: 0,
      opacity: 1.0,
      duration: 5.0,
    }, '<1' )

    // window.alert( " 【philo.js - dispEachSubPage()】PC Size recognized ! " );

  }

  // 
  // ★ サイトメイン画面の表示
  // *********************************************************************
  document.querySelector( '.philosophyContents' ).classList.add( 'active' );
  // document.querySelector( '.mainContents' ).classList.add( 'active' );

  // console.log( ` <<<<<【philo.js】Exit  dispEachSubPage() <<<<< `);
}

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】calcEachElmPosPhilo()
//  機能：モバイルデバイス時、メインページ構成要素表示位置算出
//    ※　ＰＣ表示（横スクロール）時は「position:relative/absolute」にて表示位置を決めている。
//    　　その為に、モバイル表示時：各要素高に応じた自然なセクション高と要素配置にできない。
//    　　対策として、
//    　　各セクションのページ上部からのＹ位置を（各包含要素の高さと間隔を確認）算出
//    　　
//  引数：無し
// ******************************************************************
// ******************************************************************
function calcEachElmPosPhilo() {

  // console.log( "\n\n >>>>> Start calcEachElmPosPhilo() >>>>> " );

  // 
  // 各要素ID名格納配列
  // 
  // 【３：事業活動・経営支援】
  // 【７：お知らせ・ブログ セクション】
  const secElms = {
    // セクション名（ページトップからの位置取得）
    sName  : ["rollingTitlePage"],
    // セクション共通タイトル
    sTitle : ["msgMainTitleLC"],
    // 事業種別
    cthCpy : ["cthCopy"],
    // 事業説明詳細文章
    dtlMsg : ["msgDetail"],
  }

  // 共通設定値
  const topBottomSpace = 70;
  const intervalSpace  = 50;

  // セクション指定ＩＤ　０・１・２・３・４
  let secPos = 0;

  // セクション内各要素の高さ取得
  // セクション共通タイトル　「Philosophy」
  let sTtlHgt = 0;
  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let cCpyHgt = 0;
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let dMsgHgt = 0;

  let iWrk1 = 0;
  let iWrk2 = 0;
  let iWrk3 = 0;

  // 
  // *****************************************************
  // *****************************************************
  // 各セクション・モバイル表示時、先頭からの位置取得　０・１・２・３・４
  // *****************************************************
  // 
  // 【Knowledge】＊＊＊＊＊
  // 【document.getElementById(～).getBoundingClientRect().top】
  // 「現在の表示【Window左上原点】からの距離」を取得するので、
  // 「取得した値にスクロール量【window.pageYOffset】を加算」しないと、ページ構成上の位置を算出出来ない
  // 
  // 【参考：https://ja.javascript.info/coordinates】
  // 
  secPos = document.getElementById( secElms[ "sName"] ).getBoundingClientRect().top + window.pageYOffset;
  // console.log( `》「${secElms["sName"]}」 セクション位置【${secPos}】` );

  // セクション共通タイトル「事業支援／ブログ」　０・４
  sTtlHgt = document.getElementById( secElms["sTitle"] ).clientHeight;
  // console.log( `》「${secElms["sTitle"]}」 タイトル　高さ【${sTtlHgt}】` );

  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  cCpyHgt = document.getElementById( secElms["cthCpy"] ).clientHeight;
  // console.log( `》「${secElms["cthCpy"]}」 キャッチコピー　高さ【${cCpyHgt}】` );
  
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  dMsgHgt = document.getElementById( secElms["dtlMsg"] ).clientHeight;
  // console.log( `》「${secElms["dtlMsg"]}」 説明文章　高さ【${dMsgHgt}】` );

  // タイトル・キャッチコピー・説明文の高さ
  iWrk1 = topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + intervalSpace + dMsgHgt + topBottomSpace;

  // 説明画像の高さ
  secPos  = document.getElementById( "philoImage" ).getBoundingClientRect().top + window.pageYOffset;
  dMsgHgt = document.getElementById( "philoImage" ).clientHeight;

  iWrk2 = secPos + dMsgHgt + topBottomSpace;
  iWrk3 = iWrk2;

  // 
  // 説明画像の高さが高ければ、画像高さ当該ページ高に設定する。
  if ( iWrk1 > iWrk2 )  { iWrk3 = iWrk1; }
       iWrk3 = iWrk3 - 80;    // 調整

  // 
  //  クライアント画面サイズ認識：レスポンシヴ対応用・モバイルデバイス表示
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
    // iWrk3 = iWrk3 + 50;    // 調整
  } else  {
    // 
    // ローリングタイトル・Pallax効果付文章、下部マージン統一「100px高」
    // iWrk3 = iWrk3 + 10;    // 調整
    iWrk3 = iWrk3 + 55;    // 調整

  }

  // 
  // 当該セクション、高さ設定
  document.getElementById( secElms["sName"] ).style.height = iWrk3 + "px";
  // console.log( `    ? This Section HEIGHT[ ${iWrk3 + "px"} ]\n`)

  // console.log( " <<<<< Exit  calcEachElmPosPhilo() <<<<< \n\n" );

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