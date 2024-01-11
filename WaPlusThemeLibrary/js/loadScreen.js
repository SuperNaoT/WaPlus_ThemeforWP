// 
//【JavaScript】 
// ■ 各種イベント対応、コールバックノーティファイア登録
// ****************************************************************************

document.addEventListener( 'DOMContentLoaded', function() {

  //
  // ******************************************************************
  // ******************************************************************
  // 
  // 【Knowledge】＊＊＊＊＊
  // 【関数名】function(u)
  //  機能：ユーザーエージェントでスマホとタブレットを判定
  //  引数：ユーザーエージェント情報
  // ***************************************
  const _ua_iphone = (function(u){
    return {
      Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
        ||    u.indexOf("ipad") != -1
        ||   (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        ||   (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        ||    u.indexOf("kindle") != -1
        ||    u.indexOf("silk") != -1
        ||    u.indexOf("playbook") != -1,
      Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
        ||    u.indexOf("iphone") != -1
        ||    u.indexOf("ipod") != -1
        ||   (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
        ||   (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
        ||    u.indexOf("blackberry") != -1
    }
  })(window.navigator.userAgent.toLowerCase());

  // 
  // *****************************************************
  // Pallax効果有効化
  // *****************************************************
  // 

  // 
  // let rellax    = new Rellax('.js-pallax');
  // let rlxImgM   = new Rellax('.js-expMImage img',  {center:true, breakpoints:[576,768,1201]} );
  // let rlxImgL   = new Rellax('.js-expLImage img',  {center:true} );
  // let circleO   = new Rellax('.circleO', { speed:2, center:true} );

  function ChkArgumentsInURL() {
    // console.log( `\n >>>>> Enter ChkArgumentsInURL() >>>>> `);

    // 
    // URL 内引数の有無チェック
    if (1 < document.location.search.length) {
      var query      = document.location.search.substring(1);

      // 複数引数の分割
      var parameters = query.split('&');

      // 個別引数の格納
      var result = new Object();
      for (var i = 0; i < parameters.length; i++) {
        var element = parameters[i].split('=');

        // 引数名
        var paramName  = decodeURIComponent(element[0]);
        // 値
        var paramValue = decodeURIComponent(element[1]);

        // 配列格納
        result[paramName] = decodeURIComponent(paramValue);
      }
      return result;
    }

    // console.log( ` <<<<< Exit  ChkArgumentsInURL() <<<<< \n`);
    return null;
  }

  // ******************************************************************
  // ******************************************************************
  // 
  // 【関数名】window.addEventListener()
  //  機能：ロードイベント対応ページ表示
  //  引数：無し
  // ***************************************
  window.addEventListener( 'load', ()=>{

    // 
    // サイトメイン画面ロード時、パラメータをチェック
    // １．loadScreen: 定義時は、サイトロードスクリーンを非表示
    // ２．location  : サイトメイン画面内飛び先ＩＤ
    // 
    // console.log( `\n >>>>> Enter window.addEventListener( LOAD ) >>>>> `);

    // 
    // URL 内引数の取得
    var  param  = ChkArgumentsInURL();
    if ( param == null || param["loadScreen"] == undefined )  {
    } else  {
      // let locationId = param["location"];
      document.querySelector( 'body' ).classList.add( 'noLoadScreen' );
    }

    // 
    // Cookie 情報を連想配列に格納
    function getCookieArray(){
      var arr = new Array();
      if(document.cookie != ''){
          var tmp = document.cookie.split('; ');
          for(var i=0 ; i<tmp.length ; i++ )  {
              var data = tmp[i].split('=');
              arr[i] = decodeURIComponent(data[1]);
              // console.log( ` >>>>> ${data[0]} = ${arr[i]}` );
          }
      } else  {
        // console.log( ' !!!!! There is not any cookie data !!!!!' );
      }
      return arr;
    }

    // 
    // 取得 Cookie情報から「key」を指定して有無チェック
    let cookieInfo = getCookieArray();
    let ifg        = 0;
    // console.log( ` Cookie count : ${cookieInfo.length}` );      // [key,value] 
    for (let i=0 ; i<cookieInfo.length ; i++ )  {              //一つ一つ取り出して
        // console.log( ` Cookie value? ${cookieInfo[i]} ${ifg}` );      // [key,value] 
        if( cookieInfo[i] == 'LOADED'){   // 取り出したいkeyと合致したら
            ifg = 1;
            // console.log( ` Cookie is Exist! ${cookieInfo[i]} : ${ifg}` );      // [key,value] 
            break;
        }
    }

    // 
    //「cookie」への当ページ表示状況の設定
    // ・初期ロード時のみ、サイトロード画面を表示する
    // ・一度表示した場合には、サイトロード画面を表示しない
    // **************************************************
    if( !ifg )  {
      // 
      // 当ページ読込み済みフラグ設定
      // 
      // 当ページ読込み済みフラグクッキー、有効期限設定（当日限り）
      let date = new Date(Date.now());    //  - 86400e3 ： 前日設定
          date = date.toUTCString();
      document.cookie = `load-unload=LOADED; Max-Age=300`;   // 300秒（5分）指定
      
      // 
      // サイトローディング画面の非表示
      // ★ サイトローディング画面・サイトメインページ制御は「dispHeaderScrollGuide()」関数にて実施
      // *********************************************************************
      document.querySelector( '.loading' ).classList.add( 'active' );

    }

    // 
    // サブページからの遷移の場合、サイトロード画面は非表示にしたい！
    //「index.html」内スクリプトにて、
    // 呼ばれた際の「URL内引数【loadScreen=no】」有無をチェックし、
    // その記述が有れば、下記クラスが追加されて居る。
    // 
    if ( document.querySelector( 'body' ).classList.contains( 'noLoadScreen' ) )  {
         document.querySelector( 'body' ).classList.remove  ( 'noLoadScreen' );
      ifg = 1;
    }

    init( ifg );

    // // 
    // // ローディング中画面表示中のスクロールロックを解除
    // document.querySelector( '.bodyLock' ).classList.remove( 'bodyLock' );

    // // 
    // // サイトメイン画面の表示
    // document.querySelector( '.mainContents' ).classList.add( 'active' );

    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    getPosSubM_SubMnuErase( 0 );    // ★★★

    // console.log( ` <<<<< Exit  window.addEventListener( LOAD ) <<<<< \n`);

  })
  // ******************************************************************
  // ******************************************************************

  // ******************************************************************
  // ******************************************************************
  // 
  // 【関数名】window.addEventListener()
  //  機能：画面サイズ変更イベント対応ページ表示
  //  引数：無し
  // ***************************************
  window.addEventListener('resize', ()=>{

    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    getPosSubM_SubMnuErase( 0 );

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
        end:   'center 60%', //アニメーションが始まる位置
        scrub: true,
        // markers: true,
      }
    });

    // 
    // スクロールアップ対応
    if ( this.oldScroll > this.scrollY )  {
      // console.log("scrolling up");
      gsap.to('.scrollGuideArea', { //アニメーションしたい要素を指定
        // opacity: 0.9,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#DispScrollGuide',//アニメーションが始まるトリガーとなる要素
          start: 'top center', //アニメーションが始まる位置
          // markers: true,
        }
      });

    // 
    // スクロールダウン対応
    } else  {
      // console.log("scrolling Down");
      // 
    }
    this.oldScroll = this.scrollY;
    
    // console.log( ` <<<<< Exit  window.onscroll( e ) <<<<< `);
  }
  // ******************************************************************
  // ******************************************************************

  // 
  // サブメニュー表示制御
  subMenusDispCtr( 0, document.querySelectorAll( '.navInter' ) );  //　　★★★

  // 
  // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
  getPosSubM_SubMnuErase( 0 );  //　　★★★

  // 
  // メインページ内各セクション、アニメーション表示制御
  // eachPageAnimeCtr();
    
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
// １．init()：サイトロード画面表示制御関数
// ２．dispHeaderScrollGuide()：サイト本体・トップページ表示
// ３．eachPageAnimeCtr()：メインページ内個別セクションアニメーション制御
// ５．getParam()：URL 内 引数（LOAD画面表示非表示フラグ）取得関数
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 参考【https://www.youtube.com/watch?v=L97u5Ip3fcs&ab_channel=CODELABO】 
// ******************************************************************
// 【関数名】init( ifg )
//  機能：サイト・トップページ表示制御
//  引数：ifg (int) / in ：ページ表示制御
//        0 : 初期（サイトロード）画面、トップページ表示
//        1 : トップページのみ表示
// ******************************************************************
// ******************************************************************
const init = ( ifg ) => {
  // console.log( `\n >>>>> Start init( ${ifg} ) >>>>> `);

  if ( window.innerHeight > window.innerWidth )  {
    document.getElementById  ( "loadWPLogo"  ).style.width    = 10 + "vh";
    document.getElementById  ( "loadWPSpan1" ).style.fontSize =  5 + "vh";
    document.getElementById  ( "loadWPSpan2" ).style.fontSize =  5 + "vh";
    document.getElementById  ( "loadWPSpan3" ).style.fontSize =  5 + "vh";
    document.getElementById  ( "loadWPSpan4" ).style.fontSize =  5 + "vh";
    document.getElementById  ( "loadWPSpan5" ).style.fontSize =  5 + "vh";
    document.getElementById  ( "loadWPSpan6" ).style.fontSize =  5 + "vh";
    // console.log( `　　 ????? change LOAD Screen's LOGO and SAPN 【VH】 !!!!!` );
  } else  {
    document.getElementById  ( "loadWPLogo"  ).style.width    = 10 + "vw";
    document.getElementById  ( "loadWPSpan1" ).style.fontSize =  5 + "vw";
    document.getElementById  ( "loadWPSpan2" ).style.fontSize =  5 + "vw";
    document.getElementById  ( "loadWPSpan3" ).style.fontSize =  5 + "vw";
    document.getElementById  ( "loadWPSpan4" ).style.fontSize =  5 + "vw";
    document.getElementById  ( "loadWPSpan5" ).style.fontSize =  5 + "vw";
    document.getElementById  ( "loadWPSpan6" ).style.fontSize =  5 + "vw";
    // console.log( `　　 ????? change LOAD Screen's LOGO and SAPN 【VW】 !!!!!` );
  }

  if ( !ifg )  {

    // console.log( '\n★ サイトロード画面からの表示 ★\n\n' );

    gsap.timeline()
    // 幕開け（洎夫藍色 / さふらんいろ / Safuraniro）
    .to( '.bg', {
      scaleY: 1,
      duration: 0.5,    // 0.8
      ease: 'Power4.easeIn'
    })
    // グラデーション前座
    .to( '.gra-out', {
      y: '-100%',
      duration: 0.5,    // 0.3
      ease: 'Power1.easeOut'
    }, '-=0.4' )        // 前のアニメーションの終了する「0.4秒前」にアクションを開始する
    // グラデーションフィナーレ
    .to( '.gra-inner', {
      opacity: 1,
      duration: 1.0,    // ADD
      ease: 'Power1.easeOut'
    }, '-=0.4' )        // 前のアニメーションの終了する「0.4秒前」にアクションを開始する

    // 
    // 会社ロゴを上昇・位置移動しなから表示
    .to( 'h1 img', {
      opacity: 0.7,
      y: '-27%',      // '-10%'
      duration: 3,  // 1.8
      ease: 'power4.out'
    }, '-=0.4' )        // 前のアニメーションの終了する「0.4秒前」にアクションを開始する
    // 
    // 社名を回転・色変化・位置移動しなから表示
    .to( 'h1 span', {
      x: 0,
      y: 0,
      color: '#fff',
      opacity: 1,
      duration: 1.8,  // 1.8 (like2.5)
      rotationY: '0deg',
      stagger: {
        each: 0.1,
        from: 'random'
      }
    }, '-=1.0' )    // -=0.4 ☛ 前のアニメーションの終了する「0.4秒前」にアクションを開始する
    .to( '.bg', {
      opacity: 0,
      duration: 0.1,    // 0.5
      ease: 'Power1.easeOut',

      // 
      // サイト本体の表示
      // 
      onComplete: dispHeaderScrollGuide,
      onCompleteParams:[]
    }, '+=1' )

  } else  {

    // console.log( '\n★ サイト本体のみの表示機能 ★\n\n' );

    // 
    // サイト本体の表示
    // 
    dispHeaderScrollGuide();
    
  }

  // console.log( ` <<<<< Exit  init( ${ifg} ) <<<<< \n`);
}

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】dispHeaderScrollGuide()
//  機能：サイト・トップページ表示
//  引数：無し
// ******************************************************************
// ******************************************************************
function dispHeaderScrollGuide() {
  // console.log( `\n >>>>> Start dispHeaderScrollGuide( トップページ表示 ) >>>>> `);

  // 
  // For mobile phone screen size.
  //*********************************************************/ 
  if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {

    // window.alert( " 【dispHeaderScrollGuide()】Mobile Size recognized ! " );

    gsap.timeline()
    // 
    // ★ 2022/01/20
    // 「【active】クラス設定表示」からの、
    // 「【active】クラス削除」による非表示に変更
    // 
    .to( 'header', {
      opacity: 0.9,
      y: 0,
      duration: 0.8,    // 1.0
      ease: 'Power1.easeOut'
    })
    
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    CustomerFrontPageContents();
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

    // 
    // 理念・イメージ画像表示
    gsap.timeline()
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

    // window.alert( " 【dispHeaderScrollGuide()】PC Size recognized ! " );

    gsap.timeline()
    // 
    .to( 'header', {
      opacity: 0.9,
      y: 0,
      duration: 0.8,    // 1.0
      ease: 'Power1.easeOut'
    })

    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    CustomerFrontPageContents();
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    // ■ ここで、カスタマー作成のトップページ本体を表示したい！
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

    // 
    // 縦書き・スクロールガイド表示
    gsap.timeline()
    .to( '.scrollGuideArea', {
      x: 0,
      y: 0,
      opacity: 0.9,
      duration: 5.0,
    }, '<1' )

  }
  // 
  // ★ ローディング中画面表示中のスクロールロックを解除
  // *********************************************************************
  document.querySelector( '.bodyLock' ).classList.remove( 'bodyLock' );

  // 
  // ★ サイトローディング画面の非表示
  // *********************************************************************
  if ( document.querySelector( '.loading' ).classList.contains( 'active' ) )  {
       document.querySelector( '.loading' ).classList.remove  ( 'active' );
  }

  // 
  // ★ サイトメイン画面の表示
  // *********************************************************************
  document.querySelector( '.mainContents' ).classList.add( 'active' );

  // console.log( ` <<<<< Exit  dispHeaderScrollGuide() <<<<< \n`);
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