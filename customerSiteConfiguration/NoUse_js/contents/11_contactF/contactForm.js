
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
    // console.log( `\n\n 【contactForm.js】>>>>> Start window.addEventListener( LOAD ) >>>>> `);

    // 
    // 画面ロード時の、始めのフォーカス設定
    // 
    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
      if ( document.getElementById("nameLMB") != null )  {
        // document.contactForm1.yourLnameMB.focus();
        document.getElementById("nameLMB").focus();
      }
    } else  {
      if ( document.getElementById("nameLPC") != null )  {
        // document.contactForm1.yourLnamePC.focus();
        document.getElementById("nameLPC").focus();
      }
    }
  
    // 
    // サブメニュー表示位置、サブメニュー上部消去領域位置の取得
    // getPosSubM_SubMnuErase( 0 );

    // console.log( ` 【技術経験】<<<<< Exit  window.addEventListener( LOAD ) <<<<< `);
  })
  // ******************************************************************
  // ******************************************************************
  
  // ******************************************************************
  // ******************************************************************
  // ハンバーガーメニュー内、個別メニュークリックイベント対応ハンドラ
  // ******************************************************************
  //   document.getElementById( 'hamburgerNav'        ).addEventListener( 'click', function() {
  //   document.getElementById( 'hamburgerMenuButton' ).classList.toggle( 'active' );
  //   document.getElementById( 'hamburgerNav'        ).classList.toggle( 'active' );
  //   document.getElementById( 'mask'                ).classList.toggle( 'active' );
  //   // console.log( "\n\n\n !!!!!!!!!! Hamburger Menu was CLICKED !!!!! \n\n\n");
  // })

})

// 
// ******************************************************************
// ******************************************************************
//  入力フォームでの、TABキー・Enterキー制御
// 【参考：https://1-notes.com/javascript-addeventlistener-key-ivent/】
// 
// 【関数名】window.addEventListener()
//  機能：ロードイベント対応ページ表示
//  引数：無し
// ***************************************
let currentFNo = 0;
document.addEventListener('keydown', keyPressEvent);
function                             keyPressEvent(e) {
  // console.log( `\n\n >>>>> keyPressEvent() >>>>>` );
  // console.log( " ! KEY PRESS event" );

  // 
  // 「TAB」キーが押された時の処理
  if(e.code === 'Tab')  {
    currentFNo++;
    currentFNo %= 9;

    // console.log( ` ! TAB KEY PRESSED【 currentFNo : ${currentFNo} 】` );

    if ( document.querySelector( 'body' ).classList.contains( 'MOBILE' ) )  {
      if ( currentFNo == 0 )  {
        // console.log( " > 氏" );
        document.getElementById("nameLMB").focus();
      } else if ( currentFNo == 1 )  {
        // console.log( " > 名" );
        document.getElementById("nameFMB").focus();
      } else if ( currentFNo == 2 )  {
        // console.log( " > 氏　カナ" );
        document.getElementById("nameKLMB").focus();
      } else if ( currentFNo == 3 )  {
        // console.log( " > 名　カナ" );
        document.getElementById("nameKFMB").focus();
      } else if ( currentFNo == 4 )  {
        // console.log( " > email" );
        document.getElementById("emailMB").focus();
      } else if ( currentFNo == 5 )  {
        // console.log( " > 選択肢" );
        document.getElementById("itemOptionMB").focus();
      } else if ( currentFNo == 6 )  {
        // console.log( " > お問い合わせ" );
        document.getElementById("textarea-itemMB").focus();
      } else if ( currentFNo == 7 )  {
        // console.log( " > チェックボックス" );
        document.getElementById("pvChkBoxMB").focus();
      } else  {
        let cfmBtn = document.getElementById("submitBtn").focus();
        // cfmBtn.style.backgroundCOlor = "red";
      }
    } else  {
      if ( currentFNo == 0 )  {
        // console.log( " > 氏" );
        document.getElementById("nameLPC").focus();
      } else if ( currentFNo == 1 )  {
        // console.log( " > 名" );
        document.getElementById("nameFPC").focus();
      } else if ( currentFNo == 2 )  {
        // console.log( " > 氏　カナ" );
        document.getElementById("nameKLPC").focus();
      } else if ( currentFNo == 3 )  {
        // console.log( " > 名　カナ" );
        document.getElementById("nameKFPC").focus();
      } else if ( currentFNo == 4 )  {
        // console.log( " > email" );
        document.getElementById("emailPC").focus();
      } else if ( currentFNo == 5 )  {
        // console.log( " > 選択肢" );
        document.getElementById("itemOptionPC").focus();
      } else if ( currentFNo == 6 )  {
        // console.log( " > お問い合わせ" );
        document.getElementById("textarea-itemPC").focus();
      } else if ( currentFNo == 7 )  {
        // console.log( " > チェックボックス" );
        document.getElementById("pvChkBoxPC").focus();
      } else  {
        let cfmBtn = document.getElementById("submitBtn").focus();
        // cfmBtn.style.backgroundCOlor = "red";
      }
    }

    // console.log( ` <<<<< exit  keyPressEvent(1) <<<<< exit ` );
    e.preventDefault();
    return false;

  // 「ENTER」キーが押された時の処理
  } else if ( e.code === 'Enter' )  {
    currentFNo %= 8;
    // console.log( ` ! ENTER KEY PRESSED【 currentFNO : ${currentFNo} 】` );

    // 
    // お問い合わせ内容・内容確認ボタン
    if ( currentFNo == 6 || currentFNo == 7 )  {
      // console.log( " <<<<< Exit keyPressEvent( ENT PRESSED :TRUE ) <<<<<\n" );
      // window.alert( ` ! ENTER KEY PRESSED【 currentFNO : ${currentFNo} 】 TRUE return!` );
      // console.log( ` <<<<< exit  keyPressEvent( ENT/true ) <<<<< exit ` );
      return true;
    } else  {
      // window.alert( ` ! ENTER KEY PRESSED【 currentFNO : ${currentFNo} 】 FALSE return!` );
      // console.log( ` <<<<< exit  keyPressEvent( ENT/false ) <<<<< exit ` );
      e.preventDefault();
      return false;    
    }
  }
}
// ******************************************************************
// ******************************************************************

window.addEventListener( 'click', ()=>{

  // console.log( ` 【contactForm.js】! MOUSE Click event【 currentFNO : ${currentFNo} 】` );

  // 
  // 入力要素、マウスクリック時、ターゲットインデックスの調整実施
  // for PC
  let clkTgts = document.querySelectorAll(".inElmPC");
      clkTgts.forEach(function(clkTgt, index) {
        clkTgt.addEventListener('click', function() {
          currentFNo = index;
          // console.log( `\n\n !!!!! [PC] CLICK Event recognized【 ${clkTgts.length} / currentFNo : ${currentFNo} 】` );       
        });
      });

  // for mobile
  clkTgts = document.querySelectorAll(".inElmMB");
  clkTgts.forEach(function(clkTgt, index) {
    clkTgt.addEventListener('click', function() {
      currentFNo = index;
      // console.log( `\n\n !!!!! [MB] CLICK Event recognized【 ${clkTgts.length} / currentFNo : ${currentFNo} 】` );       
    });
  });
})

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