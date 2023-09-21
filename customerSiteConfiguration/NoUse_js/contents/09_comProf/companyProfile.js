
// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************
document.addEventListener( 'DOMContentLoaded', function() {

  // window.alert( " ? 本当のはじまりだよ！" );

  // ******************************************************************
  // ******************************************************************
  // 
  // 【関数名】window.addEventListener()
  //  機能：ロードイベント対応ページ表示
  //  引数：無し
  // ***************************************
  window.addEventListener( 'load', ()=>{
    // console.log( `\n\n 【技術経験】>>>>> Start window.addEventListener( LOAD ) >>>>> `);

    // 
    // ローリングタイトルセクション高取得
    let rolSecHgt = calcSecHgtfromEachElmPos( 0 );

    // 
    // サイト本体の表示
    // 
    dispEachSubPage();

    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    getPosSubM_SubMnuErase( 0 );

    // console.log( ` 【技術経験】<<<<< Exit  window.addEventListener( LOAD ) <<<<< `);
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
    gsap.to( '#forExample', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        trigger: '#rollingTitlePage',//アニメーションが始まるトリガーとなる要素
        start: '10% center', //アニメーションが始まる位置
        end:   '10% center', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })

    // console.log( ` 【経営支援】<<<<< Exit  window.onscroll( e ) <<<<< `);
  }
  // ******************************************************************
  // ******************************************************************

  // // 
  // // 【com/headerDspGSAPCtr.js】に移動
  // // 
  // // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
  // getPosSubM_SubMnuErase( 0 );

  // // 
  // // サブメニュー表示制御
  // subMenusDispCtr( 0, document.querySelectorAll( '.navInter' ) );
  
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

  // window.alert( " ? 本当に描画していい？ " );

  // 
  // For mobile phone screen size.
  //*********************************************************/ 
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // window.alert( " 【manageSup.js - dispEachSubPage()】Mobile Size recognized ! " );

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
    // .to( '#detailInfo', {
    .to( '#forExample', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
    }, "<0" )
    // 
    // イメージ画像表示
    .to( '#businessTopImage', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<1' )
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
    // .to( '#detailInfo', {
    .to( '#forExample', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
    }, "<0" )
    // 
    // 理念・イメージ画像表示
    .to( '#businessTopImage', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<1' )

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

  // 
  // ★ サイトメイン画面の表示
  // *********************************************************************
  document.querySelector( '.cpProfileContents' ).classList.add( 'active' );

  // console.log( ` 【経営支援】<<<<<【manageSup.js】Exit  dispEachSubPage() <<<<< `);
}

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】calcSecHgtfromEachElmPos()
//  機能：セクション高（構成要素表示位置）算出
//    　　
//  引数：無し
//  戻値：セクション高
// ******************************************************************
// ******************************************************************
function calcSecHgtfromEachElmPos( secNo ) {

  // console.log( `\n\n 【会社概要】>>>>> Start calcSecHgtfromEachElmPos( ${secNo} ) >>>>> ` );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

  // 
  // 各要素ID名格納配列
  // 
  // 【３：事業活動・経営支援】
  // 【７：お知らせ・ブログ セクション】
  const secElms = [
    {
      // セクション名（ページトップからの位置取得）
      // sName  : ["rollingTitlePage"],
      sName  : ["rollingTitle"],
      // セクション共通タイトル
      sTitle : ["msgMainTitleLC"],
      // 事業種別
      cthCpy : ["cthCopy"],
      // 事業説明詳細文章
      dtlMsgCnt: 1,
      dtlMsg : ["detailInfo"],
    }
  ]

  // 共通設定値
  const topBottomSpace = 50;
  const intervalSpace  = 50;

  // セクション指定ＩＤ　０・１・２・３・４
  let secPos;

  // セクション内各要素の高さ取得
  // セクション共通タイトル　「Philosophy」
  let sTtlHgt = 0;
  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let cCpyHgt = 0;
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let dMsgHgt = 0;

  let iWrk    = 0;

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
  secPos = document.getElementById( secElms[secNo]["sName"] ).getBoundingClientRect().top + window.pageYOffset;
  // console.log( `》「${secElms[secNo]["sName"]}」 セクション位置【${secPos}】` );

  sTtlHgt = document.getElementById( secElms[secNo]["sName"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["sName"]}」 タイトル　高さ【${sTtlHgt}】` );

  // iWrk = topBottomSpace + sTtlHgt;
  iWrk = topBottomSpace + sTtlHgt - 50;
  
  // 
  // 先頭「ローリングタイトル付き」セクション、セクション高を設定
  if ( secNo == 0 )  {

    // 
    // ■ セクション高調整
    //  》モバイルデバイス利用時
    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
      // iWrk = iWrk + 5;
      iWrk = iWrk - 45;

    // 
    //  》ＰＣデバイス利用時
    } else  {
      iWrk = iWrk + 45;
    }


    // document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + "px";
    document.getElementById( "mainArea" ).style.height = iWrk + "px";
    // console.log( `    ? After all... This Section【${secElms[secNo]["sName"]}】 HEIGHT[ ${iWrk} ]\n`);
  }

  // // console.log( `    ? This Section HEIGHT[ ${topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + intervalSpace + dMsgHgt + topBottomSpace + "px"} ]\n`)
  // console.log( `    ? This Section HEIGHT[ ${topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + intervalSpace + dMsgHgt[0]+ dMsgHgt[2]+ dMsgHgt[3] + "px"} ]\n`);

  // // window.alert( " ? 当該セクションの高さを計算し終わった・・・" );

  // console.log( ` 【会社概要】<<<<< Exit  calcSecHgtfromEachElmPos( ${secNo} ) <<<<< \n\n` );

  return ( iWrk );
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