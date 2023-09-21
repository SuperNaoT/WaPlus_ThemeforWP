// 
// ****************************************************************************
// ****************************************************************************
// ■ メインナビゲーションメニュー配下、サブメニュー表示／消去制御関連
//   １．【loadScreen.js】にて呼出される
//   ２．「メインナビゲーションメニュー」配下イベント対応、表示／消去処理を登録
// ****************************************************************************
// ****************************************************************************

// ********************************************
// ********************************************
// ヘッダー部「ナビゲーションメニュー・要素名」定義
// ********************************************
menuElements = [
  "menuPos-0",
  "menuPos-1",
  "menuPos-2",
  "menuPos-3",
  "menuPos-4",
  "menuPos-5",
  "menuPos-6",
  "menuPos-7",
  "menuPos-8",
  "menuPos-9",
  "menuPos-10",
  "menuPos-11",
  "menuPos-12",
  "menuPos-13",
  "menuPos-14",
  "menuPos-15",
  "menuPos-16",
  "menuPos-17",
  "menuPos-18",
  "menuPos-19",
];
// ヘッダー部「サブナビメニュー・要素名」定義
// ********************************************
subMenuElements = [
  "menuPos-0_subMenu",
  "menuPos-1_subMenu",
  "menuPos-2_subMenu",
  "menuPos-3_subMenu",
  "menuPos-4_subMenu",
  "menuPos-5_subMenu",
  "menuPos-6_subMenu",
  "menuPos-7_subMenu",
  "menuPos-8_subMenu",
  "menuPos-9_subMenu",
  "menuPos-10_subMenu",
  "menuPos-11_subMenu",
  "menuPos-12_subMenu",
  "menuPos-13_subMenu",
  "menuPos-14_subMenu",
  "menuPos-15_subMenu",
  "menuPos-16_subMenu",
  "menuPos-17_subMenu",
  "menuPos-18_subMenu",
  "menuPos-19_subMenu",
];  
// ********************************************************
// 和Plus 標準テーマ内、ナヴィゲーションメニュー設定可能最大数
// ********************************************************
let GB_maxNavMenuCount = 20;
// ********************************************************

// 
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************
// ****************************************************************************
// JavaScript 共通関数群
// １．subMenusDispCtr()       ：サブメニュー表示制御
// ２．subMENUDispErase( n )     ：サブメニューダイアログ、全消去／個別表示
// ３．getPosSubM_SubMnuErase()：サブメニュー本体・消去領域、位置取得関数
// ****************************************************************************
// ****************************************************************************
// ******************************************************************
// 【関数名】subMenusDispCtr()
//  機能：ナビゲーションメニュー内サブメニュー表示制御
//  引数：無し
//        mnuKind：ナビゲーションメニュー表示中ページ種別
//          １：事業理念ページ　　・HOMEメニュー配下サブメニュー無し
//          ０：事業理念ページ以外・HOMEメニュー配下サブメニュー有り（基本形式）
// ******************************************************************
// ******************************************************************
function subMenusDispCtr( mnuKind, navInterElms ) {

  // console.log( " >>>>> Enter subMenusDispCtr( mnuKind : " + mnuKind + " ) " );
  // console.log( " ? subMenuElements["+ mnuKind +"] : " + subMenuElements[mnuKind] );
  // 
  // mnuKind：ナビゲーションメニュー表示位置
  // 
  // サブメニュー全消去
  for( let i=0 ; i<GB_maxNavMenuCount ; i++ )  {

    // console.log(" ? menuElements["+i+"] : ["+ menuElements[i] +"]");

    // if ( mnuKind != 1 )  {
    // 
    // *****************************************************
    // *****************************************************
    // ヘッダー・ナビゲーションメニュー「menuPos-＊」Hover イベント認識
    // *****************************************************
    // ☛ サブメニュー表示制御
    if ( document.getElementById( menuElements[i] ) != null )  {

      // 
      // ■ 引数にて指定された位置のメニュー要素上にマウスが乗った！
      //   ☛ サブメニューが存在すれば、サブメニューの「opacity:1」にて表示
      document.getElementById( menuElements[i] ).addEventListener( 'mouseover', function(){
        subMENUDispErase( i, 1 );
      });

      // 
      // ■ 引数にて指定された位置のメニューをクリックした！
      //   ☛ サブメニューが存在すれば、サブメニューの「opacity:0」にて消去する
      document.getElementById( menuElements[i] ).addEventListener( 'click', function(){
        subMENUDispErase( i, 0 );
      });

      // 
      // ■ 引数にて指定された位置のメニューにサブメニューが存在する！
      //   ☛ サブメニューからマウスが離れたら、「opacity:0」にてサブメニューを消去する
      if ( document.getElementById( subMenuElements[i] ) != null )  {
        // console.log("　　　　　サブメニュー有り！");

        document.getElementById( subMenuElements[i] ).addEventListener( 'mouseleave', function(){
          subMENUDispErase( i, 0 );
        });  
      }
    }  
  }
  
  // 
  // *****************************************************
  // ■ マウスがサイト本体部に乗った！
  //   ☛ 全サブメニューを「opacity:0」にて消去する
  // *****************************************************
  document.getElementById( 'mainArea'     ).addEventListener( 'mouseover', function(){
    // console.log( "\n MOUSE On【mainArea】TAG" );
    subMENUDispErase( mnuKind, 0 );
  });

  // 
  // *****************************************************
  // ナビメニュー上部領域にて、サブメニュー消去
  // *****************************************************
  document.getElementById( 'subMnuErase' ).addEventListener( 'mouseover', function(){
    // console.log( " ! recognize UPPER ERASE AREA." );
    subMENUDispErase( mnuKind, 0 );
  });

  // 
  // *****************************************************
  // ナビメニュー各項目間領域にて、サブメニュー消去
  // *****************************************************
  // console.log( ` サブメニュー数【${navInterElms.length}】` );
  navInterElms.forEach( function( navInterElm ) {
    navInterElm.addEventListener( 'mouseover', function() {
      // console.log( " ! recognize INTERVAL of nav-MENU." );
      subMENUDispErase( mnuKind, 0 );  
    });
  })

  // console.log( " <<<<< Exit- subMenusDispCtr() " );

}

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】subMENUDispErase( n )
//  機能：サブメニューダイアログ、全消去
//  引数：1～ / 表示対象サブメニュー表示位置番号（１始まり）
//  　　　0　 / 全サブメニュー消去     
// ******************************************************************
// ******************************************************************
function subMENUDispErase( mnuKind, ifc )  {
  // console.log( ` >>>>> Start subMENUDispErase( ${mnuKind} : ${ifc} ) >>>>>` );
  // 
  // サブメニュー全消去
  for( let i=0 ; i<GB_maxNavMenuCount ; i++ )  {
    // console.log( ' ? subMenuElements[i] [' + subMenuElements[i] + ']' );
    if ( document.getElementById( subMenuElements[i] ) )  {
         document.getElementById( subMenuElements[i] ).style.opacity = "0";
         document.getElementById( subMenuElements[i] ).style.visibility = "hidden";
         document.getElementById( subMenuElements[i] ).style.zIndex  = "0";  
    }
  }
  // 
  // 指定サブメニュー表示／消去指示
  if ( ifc )  {
    if ( document.getElementById( subMenuElements[mnuKind] ) )  {
         document.getElementById( subMenuElements[mnuKind] ).style.opacity = "1";
         document.getElementById( subMenuElements[mnuKind] ).style.visibility = "visible";
         document.getElementById( subMenuElements[mnuKind] ).style.zIndex  = "2";    
    }
  }
  // console.log( ` <<<<< Exit  subMENUDispErase(-) <<<<<` );
}

// ******************************************************************
// ******************************************************************
// ******************************************************************
// 【関数名】getPosSubM_SubMnuErase()
//  機能：サブメニューの表示位置取得
//  　　　個別サブメニューダイアログ、表示位置、それぞれを取得
//  　　「document.getElementById(～).style.left」の設定
//  引数：無し
// ******************************************************************
// ******************************************************************
function getPosSubM_SubMnuErase( mnuKind ) {

  // console.log( "\n\n >>>>> Enter getPosSubM_SubMnuErase(" + mnuKind + ") >>>>>" );

  // 
  // *****************************************************
  // *****************************************************
  // サブメニュー消去領域位置（ナビメニュー上部）を、ナビゲーションメニュー位置から設定
  // *****************************************************
  // *****************************************************
  let navArea   = document.getElementById( 'navigation' );
  let subMErase =  navArea.getBoundingClientRect();
  // サブメニュー表示位置「CSS」設定
  document.getElementById( 'subMnuErase' ).style.left  = String(subMErase.left)+"px";
  document.getElementById( 'subMnuErase' ).style.width = String(navArea.clientWidth)+"px";

  //
  // 各種サブメニュー表示位置の設定
  // *****************************************************
  let tagtMnu;
  let sbmnPos;
  let is = mnuKind;
  for( let i=is ; i<GB_maxNavMenuCount ; i++ )  {

    if ( document.getElementById( menuElements[i] ) )  {
      // 
      //「サブメニュー」表示位置を「ヘッダー部・ナビメニュー」位置から取得
      tagtMnu = document.getElementById( menuElements[i] );
      sbmnPos =  tagtMnu.getBoundingClientRect();
      // サブメニュー表示位置「CSS」設定
      if ( document.getElementById( subMenuElements[i] ) )  {
           document.getElementById( subMenuElements[i] ).style.left = String((Math.round(sbmnPos.left)-20))+"px";
      }
    }
  }

  // console.log( " <<<<< Exit  getPosSubM_SubMnuErase() <<<<<" );

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