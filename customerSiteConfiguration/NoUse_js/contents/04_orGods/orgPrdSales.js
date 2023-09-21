
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
    // console.log( ` ? set PERFORMANSE section's Image TOP-POS [${String( rolSecHgt ) + "px"}] ` );
    // document.getElementById( "rectSPC1" ).style.top = String( rolSecHgt ) + "px";
    // let inekka_topPos = document.getElementById( "inekkaDtlExp" ).getBoundingClientRect().top;
    let i_nekkaHeight = calcEachSecHeight( 0 );
    let aCestusHeight = calcEachSecHeight( 1 );
    // console.log( ` ? set PERFORMANSE section's FIRST  height [${String( pfmSecHgt[0] ) + "px"}] ` );
    // console.log( ` ? set PERFORMANSE section's SECOND height [${String( pfmSecHgt[1] ) + "px"}] ` );
    // console.log( ` ? set PERFORMANSE section's THIRD  height [${String( pfmSecHgt[2] ) + "px"}] ` );

    // console.log( ` ? INEKKA section's TOP-POS    【${inekka_topPos}】`);
    // console.log( ` ? INEKKA section's HEIGHT     【${i_nekkaHeight}】`);

    // i_nekkaHeight = 800;

    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

      // スマホ処理

      // 
      // いーねっか・装飾画像セット表示
      gsap.to( '#inekkaLogoMB', {
        x: 0,
        y: 0,
        opacity: 1,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top bottom', //アニメーションが始まる位置 70%
          end:   'top bottom', //アニメーションが始まる位置 70%
          // scrub: true,
          // markers: true,
        },
      })
      
      gsap.to( '#rectSPC6', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'top 70%', //アニメーションが始まる位置
          // start: '10% 70%', //アニメーションが始まる位置
          // end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#rectSPC7', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'top 70%', //アニメーションが始まる位置
          // start: '10% 70%', //アニメーションが始まる位置
          // end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#rectSPC8', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'top 70%', //アニメーションが始まる位置
          // start: '10% 70%', //アニメーションが始まる位置
          // end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#rectSPC9', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'top 70%', //アニメーションが始まる位置
          // start: '10% 70%', //アニメーションが始まる位置
          // end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    } else  {

      //PC処理
    
      // 
      // 移動要素表示「✕軸方向」配置算出
      let posInf1  = document.getElementById( "rectSPC1"     ).getBoundingClientRect();
      let posInf2  = document.getElementById( "rectSPC2"     ).getBoundingClientRect();
      let posInf3  = document.getElementById( "rectSPC3"     ).getBoundingClientRect();
      let posInf4  = document.getElementById( "rectSPC4"     ).getBoundingClientRect();
      let pos2     = ( posInf4.left  -   posInf1.right ) / 3
                   +   posInf1.right - ( posInf2.width   / 2 ) - 30 ;
      let pos3     = ( posInf4.left  - ( pos2 + posInf2.width ) ) / 2
                                     + ( pos2 + posInf2.width ) - (posInf3.width/2) ;
      document.getElementById( "rectSPC2" ).style.left = pos2 + "px";
      document.getElementById( "rectSPC3" ).style.left = pos3 + "px";

      // 
      // 親要素のTOP位置からの距離
      document.getElementById( "rectSPC1" ).style.top  = i_nekkaHeight + 100 + "px";      // 250
      document.getElementById( "rectSPC2" ).style.top  = i_nekkaHeight + 200 + "px";
      document.getElementById( "rectSPC3" ).style.top  = i_nekkaHeight + 200 + "px";

      // 
      // いーねっか・装飾画像セット表示
      gsap.to( '#rectSPC1', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#rectSPC2', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#rectSPC3', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#rectSPC4', {
        x: 0,
        y: 0,
        opacity: 0.7,
        // duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    }

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
      gsap.to( '#cthCopy6', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 3.0,  // 1.8 (like2.5)
        // stagger: {
        //   each: 0.1
        // },
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'bottom 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

      // 
      // メッセージ本体表示
      gsap.to( '#forExample6', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#forExample7', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '50% 70%', //アニメーションが始まる位置
          end:   '80% 70%', //アニメーションが始まる位置
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
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
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
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
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
          trigger: '#inekkaDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '50% 70%', //アニメーションが始まる位置
          end:   '80% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    }

    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
      
      // 
      // キャッチコピー表示
      gsap.to( '#cthCopy7', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 3.0,  // 1.8 (like2.5)
        // stagger: {
        //   each: 0.1
        // },
        scrollTrigger: {
          trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'bottom 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

      // 
      // メッセージ本体表示
      gsap.to( '#forExample8', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#forExample9', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '50% 70%', //アニメーションが始まる位置
          end:   '80% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    } else  {

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
          trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
          start: 'top 70%', //アニメーションが始まる位置
          end:   'bottom 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

      // 
      // メッセージ本体表示
      gsap.to( '#forExample3', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '10% 70%', //アニメーションが始まる位置
          end:   '40% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })
      gsap.to( '#forExample4', {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 4.0,  // 1.8 (like2.5)
        scrollTrigger: {
          trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
          start: '50% 70%', //アニメーションが始まる位置
          end:   '80% 70%', //アニメーションが始まる位置
          // scrub: true,
          // markers: true,
        },
      })

    }

    // 
    // メッセージ本体表示
    gsap.to( '#forExample3', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
        start: '10% 70%', //アニメーションが始まる位置
        end:   '40% 70%', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })
    gsap.to( '#forExample4', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
        start: '50% 70%', //アニメーションが始まる位置
        end:   '80% 70%', //アニメーションが始まる位置
        // scrub: true,
        // markers: true,
      },
    })


    gsap.to( '.ACestusBGImg', {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 4.0,  // 1.8 (like2.5)
      scrollTrigger: {
        trigger: '#ACestusDtlExp',//アニメーションが始まるトリガーとなる要素
        start: '30% 70%', //アニメーションが始まる位置
        end:   '30% 70%', //アニメーションが始まる位置
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
  let rectS   = new Rellax('.rectS' );
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
    .to( '.flowerKnitImage', {
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
    .to( '.flowerKnitImage', {
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
      opacity: 1.0,
      duration: 5.0,
    }, '<1' )

    // window.alert( " 【manageSup.js - dispEachSubPage()】PC Size recognized ! " );  
  }

  // 
  // ★ サイトメイン画面の表示
  // *********************************************************************
  document.querySelector( '.orgPrdSalesContents' ).classList.add( 'active' );

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
  return Math.round( vhD * ( window.outerHeight / 120 ) );
}
function calcRollingSecHeight() {

  // console.log( "\n\n 【オリジナル商品販売】>>>>> Start calcRollingSecHeight() >>>>> " );

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
    dtlMsg : ["msgDetailPC", "msgDetailMB"],
  }

  // 共通設定値
  const topBottomSpace  = 50;
  const intervalSpace   = 50;
  const secBottomMargin = 100;
  const ulineHgt        = vhTopx(6);

  // セクション指定ＩＤ　０・１・２・３・４
  let secPos = 0;

  // セクション内各要素の高さ取得
  // セクション共通タイトル　「Philosophy」
  let sTtlHgt = 0;
  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let cCpyHgt = 0;
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let dMsgHgt = 0;
  let iWrk    = 0;
  let iWk1    = 0;
  let iWk2    = 0;

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
  
  // 
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  // Mobile時
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    dMsgHgt = document.getElementById( secElms["dtlMsg"][1] ).clientHeight;
    // console.log( `》「${secElms["dtlMsg"][1]}」 説明文章　高さ【${dMsgHgt}】` );

    // Mobile時、高さ補正
    // dMsgHgt = dMsgHgt + 50;

  // PC時
  } else  {

    dMsgHgt = document.getElementById( secElms["dtlMsg"][0] ).clientHeight;

    // 高さ補正
    dMsgHgt = dMsgHgt + 45 + 40;

    // console.log( `》「${secElms["dtlMsg"][0]}」 説明文章　高さ【${dMsgHgt}】` );
  }


  // 
  // タイトル・キャッチコピー・説明文章の高さを加えた、文字サイドのボトム位置を算出
  iWrk = topBottomSpace + sTtlHgt + intervalSpace + ulineHgt
                        + cCpyHgt + intervalSpace
                        + dMsgHgt;
                        // + dMsgHgt + topBottomSpace;
      
  // 
  // 説明文章を補完する画像の先頭位置と画像高さから、そのボトム位置を算出
  iWk1 = vhTopx( 30 ) + document.getElementById( "flowerKnitImage" ).clientHeight;

  // console.log( `    ? This Section's info  TEXT[ ${Math.round(iWrk) + "px"} ]`);
  // console.log( `    ? This Section's info IMAGE[ HEIGHT ${document.getElementById( "flowerKnitImage" ).clientHeight} / BOTTOM ${Math.round(iWk1)+"px"} ]\n`);

  iWk2 = Math.abs( iWrk - iWk1 );

  // 
  // 文字サイドのボトム位置と、補完画像のボトム位置を比較し、
  // 低い方を、セクション高の計算値に採用する。
  if ( iWk1 > iWrk )  { iWrk = iWk1; }
                        // iWrk = Math.round( iWrk ) + secBottomMargin;
                        iWrk = Math.round( iWrk );
  if ( iWk2 <   50 )  { iWrk = iWrk + secBottomMargin; }

  // Mobile時
  // if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  { iWrk = iWrk - 70; }

  // 
  // 当該セクション、高さ設定
  document.getElementById( secElms["sName"] ).style.height = iWrk + "px";
                                                                            // + dMsgHgt + topBottomSpace + "px";

  // console.log( `    ? This Section HEIGHT[ ${iWrk + "px"} ]\n`);
  // console.log( " 【オリジナル商品販売】<<<<< Exit  calcRollingSecHeight() <<<<< \n\n" );

  return (iWrk);
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

  // console.log( `\n\n 【オリジナル商品販売】>>>>> Start calcEachSecHeight( secNo：${secNo} ) >>>>> ` );

  // window.alert( " ? 当該セクションの高さを計算するよ、イイかな？" );

  // 
  // 各要素ID名格納配列
  // 
  // 【３：事業活動・経営支援】
  // 【７：お知らせ・ブログ セクション】
  const secElms = [
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["inekkaDtlExp"],
      // 事業種別
      cthCpy : ["cthCopy1", "cthCopy6"],
      // 事業説明詳細文章
      dtlMsg : ["forExample1", "forExample2", "forExample6", "forExample7"],
    },
    {
      // セクション名（ページトップからの位置取得）
      sName  : ["ACestusDtlExp"],
      // 事業種別
      cthCpy : ["cthCopy2", "cthCopy7"],
      // 事業説明詳細文章
      dtlMsg : ["forExample3", "forExample4", "forExample8", "forExample9"],
    }
  ];

  const logoElms = ["inekkaLogoMB", "ACestusLogoMB"];

  // 共通設定値
  const topBottomSpace  = 50;
  const intervalSpace   = 50;
  const secBottomMargin = 120;
  const ulineHgt        = vhTopx(6);

  // セクション指定ＩＤ　０・１・２・３・４
  let secPos;

  // セクション内各要素の高さ取得
  // セクション共通タイトル　「Philosophy」
  let bLgHgt  = 0;
  // 事業種別　　　　　　　　「事業支援／IT WEK／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let cCpyHgt = 0;
  // 事業説明詳細文章　　　　「事業支援／IT WEB／I-nekka／ACestus／ブログ」　０・１・２・３・４
  let dMsgHgt = [0, 0];
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
  
  // 
  // Mobile時、高さ延長
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // ロゴ高さ
    bLgHgt = document.getElementById( logoElms[secNo] ).clientHeight;
    // console.log( `》「${logoElms[secNo]}」 ブランドロゴ　高さ【${bLgHgt}】` );

    // Mobile時、高さ補正
    switch( secNo ) {
      case 0:
        // bLgHgt = bLgHgt + 50;
        bLgHgt = bLgHgt + 150;
        break;
      default:
        bLgHgt = bLgHgt + 150;
    }

    // キャッチコピー
    cCpyHgt = document.getElementById( secElms[secNo]["cthCpy"][1] ).clientHeight;
    // console.log( `》「${secElms[secNo]["cthCpy"][1]}」 キャッチコピー　高さ【${cCpyHgt}】` );

    // 事業実績説明文章１
    dMsgHgt[0] = document.getElementById( secElms[secNo]["dtlMsg"][2] ).clientHeight;
    // console.log( `》「${secElms[secNo]["dtlMsg"][2]}」 説明文章１　高さ【${dMsgHgt[0]}】` );
    
    // 事業実績説明文章２
    dMsgHgt[1] = document.getElementById( secElms[secNo]["dtlMsg"][3] ).clientHeight;
    // console.log( `》「${secElms[secNo]["dtlMsg"][3]}」 説明文章２　高さ【${dMsgHgt[1]}】` );

  } else  {

    // PC時、高さ補正
    // bLgHgt = secBottomMargin;
    // bLgHgt = -220;      // margin-bottom: 0;
    // bLgHgt = -70;       // margin-bottom: 150px;

    // キャッチコピー
    cCpyHgt = document.getElementById( secElms[secNo]["cthCpy"][0] ).clientHeight;
    // console.log( `》「${secElms[secNo]["cthCpy"][0]}」 キャッチコピー　高さ【${cCpyHgt}】` );

    // 事業実績説明文章１
    dMsgHgt[0] = document.getElementById( secElms[secNo]["dtlMsg"][0] ).clientHeight;
    // console.log( `》「${secElms[secNo]["dtlMsg"][0]}」 説明文章１　高さ【${dMsgHgt[0]}】` );
    
    // 事業実績説明文章２
    dMsgHgt[1] = document.getElementById( secElms[secNo]["dtlMsg"][1] ).clientHeight;
    // console.log( `》「${secElms[secNo]["dtlMsg"][1]}」 説明文章２　高さ【${dMsgHgt[1]}】` );

  }


  // 
  // タイトル・キャッチコピー・説明文章の高さを加えた、文字サイドのボトム位置を算出
  iWrk = topBottomSpace + bLgHgt 
                        + cCpyHgt    + intervalSpace + ulineHgt
                        + dMsgHgt[0] + intervalSpace + ulineHgt
                        + dMsgHgt[1] + topBottomSpace;

  // console.log( `    ? This Section[ ${secElms[secNo]["sName"]} ] HEIGHT[ ${iWrk} ]\n`);

  // 
  // 当該セクション、高さ設定
  document.getElementById( secElms[secNo]["sName"] ).style.height = iWrk + "px";

  // console.log( ` 【オリジナル商品販売】<<<<< Exit  calcEachSecHeight( secNo：${secNo} ) <<<<< \n\n` );

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