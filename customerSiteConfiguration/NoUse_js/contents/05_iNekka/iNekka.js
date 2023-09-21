
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
    // console.log( `\n\n 【経営支援】>>>>> Start window.addEventListener( LOAD ) >>>>> `);

    // 
    // ローリングタイトルセクション高取得
    // （事業実績セクション前迄の距離）
    let rolSecHgt     = calcRollingSecHeight();
    let i_nekkaHeight = calcEachSecHeight( 0 );

    // console.log( ` ? INEKKA section's HEIGHT     【${i_nekkaHeight}】`);

    // i_nekkaHeight = 800;

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
      
      // 
      // キャッチコピー表示
      gsap.to( '#cthCopy1', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 3.0,  // 1.8 (like2.5)
        // stagger: {
        //   each: 0.1
        // },
        scrollTrigger: {
          trigger: '#inekkaGallery',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'bottom 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
            
      // 
      // メッセージ本体表示
      gsap.to( '#forExample1', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaGallery',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'top 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    } else  {

      // 
      // キャッチコピー表示
      gsap.to( '#cthCopy1', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 3.0,  // 1.8 (like2.5)
        // stagger: {
        //   each: 0.1
        // },
        scrollTrigger: {
          trigger: '#inekkaGallery',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'bottom 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      
      // 
      // メッセージ本体表示
      gsap.to( '#forExample1', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaGallery',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    }
  
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
    .to( '.msgDetailMB', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
    }, "<0" )

    // 
    // 理念・イメージ画像表示
    .to( '.inekkaLargeLogo', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<0' )

    // .to( '.ACestusBGImg', {
    //   x: 0,
    //   y: 0,
    //   opacity: 1,
    //   duration: 2.5,  // 1.8 (like2.5)
    // }, '<0' )


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
    .to( '.msgDetailPC', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
    }, "<0" )
    // 
    // 理念・イメージ画像表示
    .to( '.inekkaLargeLogo', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.5,  // 1.8 (like2.5)
    }, '<0' )

    // .to( '.ACestusBGImg', {
    //   x: 0,
    //   y: 0,
    //   opacity: 1,
    //   duration: 2.5,  // 1.8 (like2.5)
    // }, '<0' )
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
  // document.querySelector( '.iNekkaDetailContents' ).classList.add( 'active' );

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

  // console.log( "\n\n 【いーねっか販売】>>>>> Start calcRollingSecHeight() >>>>> " );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

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
  const topBottomSpace  = 50;
  const intervalSpace   = 50;
  const secBottomMargin = 120;

  // セクション指定ＩＤ　０・１・２・３・４
  let secPos;

  // セクション内各要素の高さ取得
  // セクション共通タイトル　「Philosophy」
  let sTtlHgt;
  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let cCpyHgt;
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let dMsgHgt;
  let iWrk;
  let iWk1;

  sTtlHgt = 0;
  cCpyHgt = 0;
  dMsgHgt = 0;

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
  secPos = document.getElementById( secElms["sName"] ).getBoundingClientRect().top + window.pageYOffset;
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

  // 
  // タイトル・キャッチコピー・説明文章の高さを加えた、文字サイドのボトム位置を算出
  iWrk = topBottomSpace + sTtlHgt + intervalSpace
                        + cCpyHgt + intervalSpace
                        + dMsgHgt + topBottomSpace;

  // 
  // 説明文章を補完する画像の先頭位置と画像高さから、そのボトム位置を算出
  iWk1 = vhTopx( 30 ) + document.getElementById( "inekkaLgLogoImage" ).clientHeight;

  // secPos = document.getElementById( "inekkaLgLogoImage" ).getBoundingClientRect().top;
  // iWk1   = document.getElementById( "inekkaLgLogoImage" ).clientHeight + secPos;

  // console.log( `    ? This Section's info  TEXT[ ${Math.round(iWrk) + "px"} ]`);
  // console.log( `    ? This Section's info IMAGE[ HEIGHT ${document.getElementById( "inekkaLgLogoImage" ).clientHeight} / BOTTOM ${Math.round(iWk1)+"px"} ]\n`);

  // 
  // 文字サイドのボトム位置と、補完画像のボトム位置を比較し、
  // 低い方を、セクション高の計算値に採用する。
  if ( iWk1 > iWrk )  { iWrk = iWk1; }
                        iWrk = Math.round( iWrk ) + secBottomMargin;
                        // iWrk = Math.round( iWrk );
  
  // // 
  // // Mobile時、高さ延長
  // if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
  //   // iWrk = iWrk - 188;
  //   // iWrk = iWrk - 138;

  // // 
  // // PC時、セクション高調整
  // } else  {
  //   // iWrk = iWrk - 155;
  //   // iWrk = iWrk - 115;
  // }

  // 
  // 当該セクション、高さ設定
  document.getElementById( secElms["sName"] ).style.height = iWrk + "px";   // + 300
                                                                            // + dMsgHgt + topBottomSpace + "px";

  // console.log( `    ? This Section HEIGHT[ ${iWrk + "px"} ]\n`);
  
  // window.alert( " ? 当該セクションの高さを計算し終わった・・・" );

  // console.log( " 【いーねっか商品販売】<<<<< Exit  calcRollingSecHeight() <<<<< \n\n" );

  return (topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + intervalSpace + dMsgHgt);
}


// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】calcEachSecHeight()
//  機能：ページ内実績説明セクション構成要素表示位置算出
//    　　
//  引数：無し
//  戻値：セクション高
// ******************************************************************
// ******************************************************************
function calcEachSecHeight( secNo ) {

  // console.log( `\n\n 【いーねっか商品販売】>>>>> Start calcEachSecHeight( secNo：${secNo} ) >>>>> ` );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

  // 
  // 各要素ID名格納配列
  // 
  // 【３：事業活動・経営支援】
  // 【７：お知らせ・ブログ セクション】
  const secElms = [
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["inekkaGallery"],
      // 事業種別
      cthCpy : ["cthCopy1"],
      // 事業説明詳細文章
      dtlMsg : ["forExample1", "forExample2"],
    },
    // {
    //   // セクション名（ページトップからの位置取得）
    //   sName  : ["ACestusDtlExp"],
    //   // 事業種別
    //   cthCpy : ["cthCopy2"],
    //   // 事業説明詳細文章
    //   dtlMsg : ["forExample3", "forExample4"],
    // }
  ];

  // 共通設定値
  const topBottomSpace  = 50;
  const intervalSpace   = 50;
  const secBottomMargin = 150;
  const ulineHgt        = vhTopx( 6 );


  // セクション指定ＩＤ　０・１・２・３・４
  let secPos;

  // セクション内各要素の高さ取得
  // セクション共通タイトル　「Philosophy」
  let sTtlHgt = 0;
  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let cCpyHgt = 0;
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let dMsgHgt = [0, 0];
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

  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  cCpyHgt = document.getElementById( secElms[secNo]["cthCpy"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["cthCpy"]}」 キャッチコピー　高さ【${cCpyHgt}】` );
  
  // 事業実績説明文章１
  dMsgHgt[0] = document.getElementById( secElms[secNo]["dtlMsg"][0] ).clientHeight;
  // console.log( `》「${secElms[secNo]["dtlMsg"][0]}」 ギャラリー　高さ【${dMsgHgt[0]}】` );
  
  iWrk = topBottomSpace + cCpyHgt    + intervalSpace
                        + dMsgHgt[0] + intervalSpace
                        + dMsgHgt[1] + topBottomSpace;

  // 
  // Mobile時、高さ延長
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
    // iWrk = iWrk - 80;
    // iWrk = iWrk + 40;

  // 
  // PC時、セクション高調整
  } else  {
    iWrk = iWrk + 95;
  }

  // console.log( `    ? This Section HEIGHT[ ${iWrk} ]\n`);

  // 
  // 当該セクション、高さ設定
  document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + secBottomMargin + "px";

  // // console.log( `    ? This Section HEIGHT[ ${topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + intervalSpace + dMsgHgt + topBottomSpace + "px"} ]\n`)
  // console.log( `    ? This Section HEIGHT[ ${topBottomSpace + sTtlHgt + intervalSpace + cCpyHgt + intervalSpace + dMsgHgt[0]+ dMsgHgt[2]+ dMsgHgt[3] + "px"} ]\n`);

  // // window.alert( " ? 当該セクションの高さを計算し終わった・・・" );

  // console.log( ` 【いーねっか商品販売】<<<<< Exit  calcEachSecHeight( secNo：${secNo} ) <<<<< \n\n` );

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