
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
    // console.log( `\n\n 【IT WEB ソリューション】>>>>> Start window.addEventListener( LOAD ) >>>>> `);

    // 
    // ローリングタイトルセクション高取得
    // let rolSecHgt = calcEachElmPosMngSupRolling();
    let rolSecHgt = calcSecHgtfromEachElmPos( 0 );

    // 
    // 事業実績説明セクション高取得
    // let pfmSecHgt = calcEachElmPosITWebSolPerform();
    let pfmSecHgt = calcSecHgtfromEachElmPos( 1 );

    // 
    // 保有技術力説明セクション高取得
    // let pfmSecHgt = calcEachElmPosITWebSolPerform();
    let sklSecHgt = calcSecHgtfromEachElmPos( 2 );


    document.getElementById( "rectSPC1" ).style.top = String( pfmSecHgt+100 ) + "px";
    document.getElementById( "rectSPC2" ).style.top = String( pfmSecHgt+100 ) + "px";
    document.getElementById( "rectSPC3" ).style.top = String( pfmSecHgt+100 ) + "px";
    document.getElementById( "rectSPC4" ).style.top = String( pfmSecHgt+100 ) + "px";

    // 
    // サイト本体の表示
    // 
    dispEachSubPage();

    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    getPosSubM_SubMnuErase( 0 );

    // console.log( ` 【IT WEB ソリューション】<<<<< Exit  window.addEventListener( LOAD ) <<<<< `);
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
        trigger: '#itWebPfm',//アニメーションが始まるトリガーとなる要素
        start: 'top 70%', //アニメーションが始まる位置
        end:   'bottom 70%', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })

    // 
    // キャッチコピー表示
    gsap.to( '#cthCopy2', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 3.0,  // 1.8 (like2.5)
      // stagger: {
      //   each: 0.1
      // },
      scrollTrigger: {
        trigger: '#itWebHuman',//アニメーションが始まるトリガーとなる要素
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
        trigger: '#itWebPfm',//アニメーションが始まるトリガーとなる要素
        start: '10% 70%', //アニメーションが始まる位置
        end:   '40% 70%', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })
    gsap.to( '#forExample2', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        // trigger: '#itWebPfm',//アニメーションが始まるトリガーとなる要素
        // start: '50% 70%', //アニメーションが始まる位置
        // end:   '80% 70%', //アニメーションが始まる位置
        trigger: '#itWebHuman',//アニメーションが始まるトリガーとなる要素
        start: '10% 70%', //アニメーションが始まる位置
        end:   '40% 70%', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })
    gsap.to( '#forExample3', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        trigger: '#itWebHuman',//アニメーションが始まるトリガーとなる要素
        start: '30% center', //アニメーションが始まる位置
        end:   '60% center', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })
    gsap.to( '#myDeskTopImage', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        // trigger: '#itWebPfm',//アニメーションが始まるトリガーとなる要素
        // start: '50% 70%', //アニメーションが始まる位置
        // end:   '80% 70%', //アニメーションが始まる位置
        trigger: '#itWebHuman',//アニメーションが始まるトリガーとなる要素
        start: '20% center', //アニメーションが始まる位置
        end:   '50% center', //アニメーションが始まる位置
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
  let rectS   = new Rellax('.rectS'    );

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
    .to( '.sunShineImage', {
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
    .to( '.sunShineImage', {
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

    // window.alert( " 【manageSup.js - dispEachSubPage()】PC Size recognized ! " );  
  }

  // 
  // ★ サイトメイン画面の表示
  // *********************************************************************
  document.querySelector( '.ITWebSolContents' ).classList.add( 'active' );

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

  // console.log( "\n\n 【IT WEB】>>>>> Start calcSecHgtfromEachElmPos() >>>>> " );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

  // 
  // 各要素ID名格納配列
  // 
  // 【３：事業活動・経営支援】
  // 【７：お知らせ・ブログ セクション】
  const secElms = [
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["rollingTitlePage"],
      // セクション共通タイトル
      sTitle : ["msgMainTitleLC"],
      // 事業種別
      cthCpy : ["cthCopy"],
      // 事業説明詳細文章
      dtlMsgCnt: 1,
      dtlMsg : ["msgDetail"],
    },
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["itWebPfm"],
      // セクション共通タイトル
      sTitle : ["cstmName"],
      // 事業種別
      cthCpy : ["cthCopy1"],
      // 事業説明詳細文章
      dtlMsgCnt: 1,
      dtlMsg : ["forExample1"],
    },
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["itWebHuman"],
      // セクション共通タイトル
      sTitle : ["cstmName1"],
      // 事業種別
      cthCpy : ["cthCopy2"],
      // 事業説明詳細文章
      dtlMsgCnt: 2,
      dtlMsg : ["forExample2", "forExample3"],
    }
  ]

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
  let dMsgHgt = 0;

  let iWrk    = 0;
  let iWk1    = 0;

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

  // セクション共通タイトル「事業支援／ブログ」　０・４
  sTtlHgt = document.getElementById( secElms[secNo]["sTitle"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["sTitle"]}」 タイトル　高さ【${sTtlHgt}】` );

  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  cCpyHgt = document.getElementById( secElms[secNo]["cthCpy"] ).clientHeight;
  // console.log( `》「${secElms[secNo]["cthCpy"]}」 キャッチコピー　高さ【${cCpyHgt}】` );
  
  // 事業実績説明文章１・２
  for( let i=0 ; i<secElms[secNo]["dtlMsgCnt"] ; i++ )  {
    dMsgHgt = dMsgHgt + document.getElementById( secElms[secNo]["dtlMsg"][i] ).clientHeight;
    // console.log( `》①「${secElms[secNo]["dtlMsg"][i]}」 説明文章[${i}]　高さ【${document.getElementById( secElms[secNo]["dtlMsg"][i] ).clientHeight}】` );
    if ( i > 0 )  {
      dMsgHgt = dMsgHgt + intervalSpace;
      // console.log( `》②「${secElms[secNo]["dtlMsg"][i]}」 説明文章[${i}]　間隔【${intervalSpace}】` );
    }
    // console.log( `》③「${secElms[secNo]["dtlMsg"][i]}」 説明文章[${i}]　合計【${dMsgHgt}】` );
  }

  // 
  // タイトル・キャッチコピー・説明文章の高さを加えた、文字サイドのボトム位置を算出
  iWrk = topBottomSpace + sTtlHgt + intervalSpace
                        + cCpyHgt + intervalSpace
                        + dMsgHgt + topBottomSpace;
                        // 
                        // メッセージは「Pallax効果」にて上へ移動するので、
                        // ボトムのマージン（空白）を追加しない。
                        // + dMsgHgt + topBottomSpace;
  
  // 
  // モバイル表示時、各セクション高調整用の値
  DefineHgtArrange = 70;

  // 
  // 先頭「ローリングタイトル付き」セクション他、各セクション高を設定
  if ( secNo == 0 )  {
    
    // 
    // 説明文章を補完する画像の先頭位置と画像高さから、そのボトム位置を算出
    iWk1 = vhTopx( 30 ) + document.getElementById( "macOnDeskImage" ).clientHeight;

    // console.log( `    ? This Section's info  TEXT[ ${Math.round(iWrk) + "px"} ]`);
    // console.log( `    ? This Section's info IMAGE[ HEIGHT ${document.getElementById( "macOnDeskImage" ).clientHeight} / BOTTOM ${Math.round(iWk1)+"px"} ]\n`);

    // 
    // 文字サイドのボトム位置と、補完画像のボトム位置を比較し、
    // 低い方を、セクション高の計算値に採用する。
    if ( iWk1 > iWrk )  { iWrk = iWk1; }
                          iWrk = Math.round( iWrk );

    // 
    // 高さ調整実施
    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

      iWrk = iWrk - DefineHgtArrange;
    } else  {
      // iWrk = iWrk - 30;
      iWrk = iWrk + 14;
    }
  
    document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + "px";

  // 事業実績セクション
  } else if ( secNo == 1 )  {
          
    // 
    // uline高さを考慮
    iWrk = iWrk + ulineHgt;

    // 
    // 説明文章を補完する画像の先頭位置と画像高さから、そのボトム位置を算出
    iWk1 = vhTopx( 0 ) + document.getElementById( "rectSPC1" ).clientHeight;

    // console.log( `    ? This Section's info  TEXT[ ${Math.round(iWrk) + "px"} ]`);
    // console.log( `    ? This Section's info IMAGE[ HEIGHT ${document.getElementById( "rectSPC1" ).clientHeight} / BOTTOM ${Math.round(iWk1)+"px"} ]\n`);

    // 
    // 文字サイドのボトム位置と、補完画像のボトム位置を比較し、
    // 低い方を、セクション高の計算値に採用する。
    if ( iWk1 > iWrk )  { iWrk = iWk1; }
                          // iWrk = Math.round( iWrk ) + secBottomMargin;
                          iWrk = Math.round( iWrk );

      // 高さ調整実施
      if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
        iWrk = iWrk - DefineHgtArrange;
        document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + secBottomMargin + "px";      // 200
      } else  {
        // 
        // 当該セクション下余白サイズ調整「150px」
        iWrk = iWrk - 7;
      }
 
    // document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + secBottomMargin + "px";      // 200

  // 対応可能業務説明セクション
  } else  {

    iWrk = iWrk + document.getElementById( "itEngBtn" ).clientHeight + intervalSpace;
          
    // 
    // uline高さを考慮
    iWrk = iWrk + ulineHgt * 2;

    // 
    // for MOBILE
    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

      // 高さ調整実施
      // iWrk = iWrk - DefineHgtArrange;
      iWrk = iWrk - 92;

      document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + "px";      // 100

    // 
    // for PC
    } else  {
      // 
      // 当該セクション下余白サイズ調整「150px」
      iWrk = iWrk - 8;
      // document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + "px";      // 100
    }
  }

  // console.log( `    ? This Section HEIGHT[ ${iWrk + "px"} ]\n`);

  // console.log( " 【経営支援】<<<<< Exit  calcSecHgtfromEachElmPos() <<<<< \n\n" );

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