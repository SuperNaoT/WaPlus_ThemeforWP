
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

    // gsap.to( '#pageCthImage', {
    //   x: 0,
    //   y: 0,
    //   opacity: 1,
    //   duration: 4.0,  // 1.8 (like2.5)
    //   scrollTrigger: {
    //     trigger: '#rollingTitlePage',//アニメーションが始まるトリガーとなる要素
    //     start: '40% center', // 50% アニメーションが始まる位置
    //     end:   '40% center', // 50% アニメーションが始まる位置
    //     // scrub: true,
    //     // markers: true,
    //   },
    // })

    if ( document.getElementById('singlePageBkImg') != null )  {
      animateElm = ".singlePageBkImg";
    } else  {
      animateElm = ".singlePageBkImgBlog";
    }

    // gsap.to( '.singlePageBkImg', {
    gsap.to( animateElm, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        trigger: '#rollingTitlePage',//アニメーションが始まるトリガーとなる要素
        start: '40% center', // 50% アニメーションが始まる位置
        end:   '40% center', // 50% アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })

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

  if ( document.getElementById('singlePageBkImg') != null )  {
    animateElm = ".singlePageBkImg";
  } else  {
    animateElm = ".singlePageBkImgBlog";
  }

  // 
  // For mobile phone screen size.
  //*********************************************************/ 
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // window.alert( " 【manageSup.js - dispEachSubPage()】Mobile Size recognized ! " );

    gsap.timeline()
    
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
    // .to( '.pageCthImage', {
    //   x: 0,
    //   y: 0,
    //   opacity: 1,
    //   duration: 2.5,  // 1.8 (like2.5)
    // }, '<0' )
    // **********************************************************
    // **********************************************************
        // 
    // 理念・イメージ画像表示
    // .to( '.singlePageBkImg', {
    .to( animateElm, {
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
    // .to( '.pageCthImage', {
    //   x: 0,
    //   y: 0,
    //   opacity: 1,
    //   duration: 2.5,  // 1.8 (like2.5)
    // }, '<0' )

    // **********************************************************
    // **********************************************************
    // **********************************************************
    // 
    // 理念・イメージ画像表示
    // .to( '.singlePageBkImg', {
    .to( animateElm, {
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

    // 
    // 理念・イメージ画像表示
    .to( '.scrollGuideArea', {
      x: 0,
      y: 0,
      opacity: 1.0,
      duration: 5.0,
    }, '<1' )

    // window.alert( " 【manageSup.js - dispEachSubPage()】PC Size recognized ! " );  
  }

  // 
  // ★ サイトメイン画面の表示
  // *********************************************************************
  // document.querySelector( '.ITWebSolContents' ).classList.add( 'active' );
  document.querySelector( '.postPageContents' ).classList.add( 'active' );

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
function vhTopx( vhD ) {
  return Math.round( vhD * ( window.outerHeight / 120 ) );
}
function calcSecHgtfromEachElmPos( secNo ) {

  // console.log( `\n\n 【開発実績】>>>>> Start calcSecHgtfromEachElmPos( ${secNo} ) >>>>> ` );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

  // // 
  // // 各要素ID名格納配列
  // // 
  // // 【３：事業活動・経営支援】
  // // 【７：お知らせ・ブログ セクション】
  const secElms = [
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["rollingTitlePage"],
  //     // セクション共通タイトル
  //     sTitle : ["msgMainTitleLC"],
  //     // 事業種別
  //     cthCpy : ["cthCopy"],
  //     // 事業説明詳細文章
  //     // dtlMsgCnt: 1,
  //     // dtlMsg : ["forExample"],
  //     dtlMsg : ["detailInfo"],
    }
  ]


  // // 共通設定値
  const topBottomSpace  = 80;
  const intervalSpace   = 50;

  // // セクション指定ＩＤ　０・１・２・３・４
  // let secPos;

  // // セクション内各要素の高さ取得
  // // セクション共通タイトル　「Philosophy」
  // let sTtlHgt = 0;
  // // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  // let cCpyHgt = 0;
  // // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  // let dMsgHgt = 0;

  // let iWrk    = 0;

  // // 
  // // *****************************************************
  // // *****************************************************
  // // 各セクション・モバイル表示時、先頭からの位置取得　０・１・２・３・４
  // // *****************************************************
  // // 
  // // 【Knowledge】＊＊＊＊＊
  // // 【document.getElementById(～).getBoundingClientRect().top】
  // // 「現在の表示【Window左上原点】からの距離」を取得するので、
  // // 「取得した値にスクロール量【window.pageYOffset】を加算」しないと、ページ構成上の位置を算出出来ない
  // // 
  // // 【参考：https://ja.javascript.info/coordinates】
  // // 
  secPos = document.getElementById( secElms[secNo]["sName"] ).getBoundingClientRect().top + window.pageYOffset;
  // console.log( `》「${secElms[secNo]["sName"]}」 セクション位置【${secPos}】` );

  // // セクション共通タイトル「事業支援／ブログ」　０・４
  // sTtlHgt = document.getElementById( secElms[secNo]["sTitle"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["sTitle"]}」 タイトル　高さ【${sTtlHgt}】` );

  // // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  // cCpyHgt = document.getElementById( secElms[secNo]["cthCpy"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["cthCpy"]}」 キャッチコピー　高さ【${cCpyHgt}】` );
  
  // // 事業実績説明文章
  // dMsgHgt = document.getElementById( secElms[secNo]["dtlMsg"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["dtlMsg"]}」 投稿記事説明部　高さ【${dMsgHgt}】` );


  allMsgHgt = document.getElementById( "rollingTitle" ).clientHeight;
  // console.log( `》「rollingTitle」 投稿記事説明部全体　高さ【${allMsgHgt}】` );

  // // 
  // // タイトル・キャッチコピー・説明文章の高さを加えた、文字サイドのボトム位置を算出
  // iWrk = topBottomSpace + sTtlHgt + intervalSpace
  //                       + cCpyHgt + intervalSpace
  //                       + dMsgHgt + topBottomSpace;
  iWrk = allMsgHgt + secPos;

  // iWrk = topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + dMsgHgt - 100;
  
  // 
  // 先頭「ローリングタイトル付き」セクション、セクション高を設定
  if ( secNo == 0 )  {

      
    // 
    // 説明文章を補完する画像の先頭位置と画像高さから、そのボトム位置を算出
    // iWk1 = vhTopx( 150 ) + document.getElementById( "pageCthImage" ).clientHeight;
    if ( document.getElementById('singlePageBkImg') != null )  {
      imgPos = document.getElementById( "singlePageBkImg" ).getBoundingClientRect().top + window.pageYOffset;
      iWk1   = document.getElementById( "singlePageBkImg" ).clientHeight;
    } else  {
      imgPos = document.getElementById( "singlePageBkImgBlog" ).getBoundingClientRect().top + window.pageYOffset;
      iWk1   = document.getElementById( "singlePageBkImgBlog" ).clientHeight;    
    }
    // console.log( `》「singlePageBkImg」 投稿記事説明背景画像　高さ【${iWk1}】` );

    iWk1 = iWk1 + imgPos;

    // console.log( `    ? This Section's info  TEXT[ ${Math.round(iWrk) + "px"} ]`);
    // console.log( `    ? This Section's info IMAGE[ ${iWk1 + "px"} ]\n`);

    // 
    // 文字サイドのボトム位置と、補完画像のボトム位置を比較し、
    // 低い方を、セクション高の計算値に採用する。
    if ( iWk1 > iWrk )  { iWrk = iWk1; }
                          // iWrk = Math.round( iWrk ) + secBottomMargin;
                          iWrk = Math.round( iWrk );
  
    // 
    // 高さ調整実施
    // ■ モバイル時
    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
      iWrk = iWrk + 111;

      // 
    // ■ PC利用時
    } else  {
      iWrk = iWrk + 100;
      // iWrk = iWrk + 162;
    }
 
    document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + "px";
    // console.log( `    ? After all... This Section【${secElms[secNo]["sName"]}】 HEIGHT[ ${iWrk} ]\n`);
  }

  // console.log( ` 【開発実績】<<<<< Exit  calcSecHgtfromEachElmPos( ${secNo} ) <<<<< \n\n` );

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