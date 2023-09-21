
// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************
document.addEventListener( 'DOMContentLoaded', function() {

  // window.alert( " ? 本当のはじまりだよ！" );

  // let navInterElms = document.querySelectorAll( '.navInter' );

  // ******************************************************************
  // ******************************************************************
  // 
  // 【関数名】window.addEventListener()
  //  機能：ロードイベント対応ページ表示
  //  引数：無し
  // ***************************************
  window.addEventListener( 'load', ()=>{
    // console.log( `\n\n 【カテゴリ：ニュース一覧】>>>>> Start window.addEventListener( LOAD ) >>>>> `);

    // 
    // ローリングタイトルセクション高取得
    // （事業実績セクション前迄の距離）
    let rolSecHgt   = calcRollingSecHeight();

    // 
    // サイト本体の表示
    // 
    dispEachSubPage();

    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    getPosSubM_SubMnuErase( 0 );

    // console.log( ` 【経営支援】<<<<< Exit  window.addEventListener( LOAD ) <<<<< `);
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
    // console.log( ` 【経営支援】>>>>> Start window.onscroll( e ) >>>>> `);

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

    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
      
    } else  {

    }

  
    // console.log( ` 【経営支援】<<<<< Exit  window.onscroll( e ) <<<<< `);
  }
  // ******************************************************************
  // ******************************************************************
  
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

  // 
  // *****************************************************
  // Pallax効果有効化
  // *****************************************************
  // 
  let rellax  = new Rellax('.js-pallax');
  // let rectS   = new Rellax('.rectS' );
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
  // console.log( ` 【経営支援】>>>>>【manageSup.js】Start dispEachSubPage() >>>>> `);

  // 
  // カテゴリーページ背景画像要素IDの取得
  bgImageELM = document.querySelector( '.classTypeDEF' );

  // window.alert( " ? 本当に描画していい？ " );

  // 
  // For mobile phone screen size.
  //*********************************************************/ 
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // window.alert( " 【manageSup.js - dispEachSubPage()】Mobile Size recognized ! " );

    gsap.timeline()

    // **********************************************************
    // **********************************************************
    // 
    // 大見出し「New Arrivals!」
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
    .to( bgImageELM, {
        x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<0' )

    // 
    // サイドバー表示
    .to( '#sidebar', {
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
      opacity: 0.9,
      duration: 5.0,
    }, '<1' )

  // 
  // For PC screen size.
  //*********************************************************/ 
  } else  {

    gsap.timeline()

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
    .to( bgImageELM, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<0' )

    // 
    // サイドバー表示
    .to( '#sidebar', {
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
      opacity: 0.9,
      duration: 5.0,
    }, '<1' )

    // window.alert( " 【manageSup.js - dispEachSubPage()】PC Size recognized ! " );  
  }

  // console.log( ` 【経営支援】<<<<<【manageSup.js】Exit  dispEachSubPage() <<<<< `);
}

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】calcRollingSecHeight()
//  機能：ページ内ローリングタイトルセクション構成要素表示位置算出
//    　　
//  引数：無し
//  戻値：セクション高
// ******************************************************************
// ******************************************************************
function vhTopx( vhD ) {
  // console.log( ` >>>>> vhTopx( vh : ${vhD} ) >>>>>`);
  // console.log( `     ? viewport.height[ ${document.documentElement.clientHeight} ]`)
  // console.log( ` <<<<< vhTopx( px : ${vhD * ( window.outerHeight / 110 )} ) <<<<<`);
  return Math.round( vhD * ( window.outerHeight / 120 ) );
}

function calcRollingSecHeight() {

  // console.log( "\n\n 【categoryPageCtr】>>>>> Start calcRollingSecHeight() >>>>> " );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

  // 
  // 各要素ID名格納配列
  // 
  // 【３：事業活動・経営支援】
  // 【７：お知らせ・ブログ セクション】
  const secElms = {
    // セクション名（ページトップからの位置取得）
    sName   : ["rollingTitlePage"],
    // // セクション共通タイトル
    // sTitle  : ["msgMainTitleLC"],
    // // 事業種別
    // cthCpy  : ["cthCopy"],
    // // 事業説明詳細文章
    // dtlMsg  : ["msgDetail"],
    // サイドバー
    sideBar : ["sidebar"],
  }

  // セクション先頭高さ
  let secPos;

  // セクション内各要素の高さ取得
  // コンテンツ本体
  let iWrk;
  // 背景画像
  let iWk1;

  // 「rollingTitle」クラスの高さ
  let secHgt;
  // 「sidebar」ＩＤの高さ
  let sBarHgt;

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

  secPos = document.querySelector( '.rollingTitle' ).getBoundingClientRect().top + window.pageYOffset;
  secHgt = document.querySelector( '.rollingTitle' ).clientHeight;
  iWrk   = secPos + secHgt;
  iWrk   = Math.round( iWrk );

  // console.log( `》「.rollingTitle」 セクション位置【${secPos}】` );
  // console.log( `》「.rollingTitle」 セクション高さ【${secHgt}】` );
  // console.log( `》「.rollingTitle」 セクション下部【${iWrk}  】` );
  
  // カテゴリーページ背景画像要素IDの取得
  secPos = document.querySelector( '.classTypeDEF' ).getBoundingClientRect().top + window.pageYOffset;
  secHgt = document.querySelector( '.classTypeDEF' ).clientHeight;
  iWk1   = secPos + secHgt;
  iWk1   = Math.round( iWk1 );

  // console.log( `》「.classTypeDEF」 背景画像の位置【${secPos}】` );
  // console.log( `》「.classTypeDEF」 背景画像の高さ【${secHgt}】` );
  // console.log( `》「.classTypeDEF」 背景画像の下部【${iWk1}  】` );

  // 
  // カテゴリーページコンテンツ表示範囲より、背景画像の方が大きい
  // ページ高さを背景画像高さに合わせる
  if ( iWk1 > iWrk )  { iWrk = iWk1; }

  // サイドバー
  sBarHgt = document.getElementById( secElms["sideBar"] ).clientHeight;

  // console.log( `》「${secElms["sideBar"]}」 サイドバー　高さ【${sBarHgt}】` );

  // 
  //  クライアント画面サイズ認識：レスポンシヴ対応用
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
    // iWrk = iWrk + 40 + 100;
    // iWrk = iWrk + sBarHgt - 50;
  } else  {
    // iWrk = iWrk - 100;
  }

  // 
  // 当該セクション、高さ設定
  document.getElementById( secElms["sName"] ).style.height = iWrk + "px";

  // console.log( `  ? This Section HEIGHT [ ${iWrk + "px"} ]\n`);
  // console.log( " 【categoryPageCtr】<<<<< Exit  calcRollingSecHeight() <<<<< \n\n" );

  return(iWrk);
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