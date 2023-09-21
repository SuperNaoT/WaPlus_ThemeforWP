//
//「documet/HTML全て読み込んだら実行される関数」として定義する。
//「必ず」記述する。
//
document.addEventListener( 'DOMContentLoaded', function() {

  // 
  // ********************************************************************
  // ********************************************************************
  // ギャラリー内画像種別選択ボタン全てに、クリックイベントの割り当て
  // ********************************************************************
  const  btns = document.getElementsByClassName('eachBtn');

  // console.log( " >>>>> クリックイベント割り当て対象ボタン数【" + btns.length + "】\n\n" );
  
  for( let i=0; i<btns.length; i++ )  {
    btns[i].addEventListener( 'click', btnClick, false );
  }
  // ********************************************************************
  // ********************************************************************

  // 
  // ********************************************************************
  // ********************************************************************
  // ギャラリー内画像種別選択ボタンクリック対応【コールバックノーティファイア】
  // ********************************************************************
  function btnClick() {
    // 
    // 現在選択中のボタンから「active」クラスを削除
    let btns = document.querySelectorAll( ".eachBtn" );

    // console.log( " >>>>> 選択対象ボタン数【" + btns.length + "】" );

    // 
    // 現在（旧）選択中カテゴリー消去処理
    for( let i=0 ; i<btns.length; i++ )  {
      if ( btns[i].classList.contains( 'active' ) )  {

        // console.log( " >>>>> 再表示対象クラス名【" + btns[i].classList[btns[i].classList.length-2] + "】\n\n" );

        displayChange( "none", btns[i].classList[btns[i].classList.length-2] );
                               btns[i].classList.remove  ( 'active' );

        break;  
      }
    }
    
    // 
    // 新しくクリック（選択）されたボタンに「Active」クラスを追加
    this.classList.add( 'active' );

    // console.log( "\n\n ##########################################");
    // console.log( " >>>>> 新規クリックボタン【" + this.textContent + "】" );
    // console.log( " >>>>> 全ての所有クラス名【" + this.classList[this.classList.length-2] + "】\n\n" );

    displayChange( "block", this.classList[this.classList.length-2] );

         if ( document.querySelector( 'body' ).classList.contains('-red'  ) == true ){ document.querySelector( 'body' ).classList.remove( '-red'   ); }
    else if ( document.querySelector( 'body' ).classList.contains('-green') == true ){ document.querySelector( 'body' ).classList.remove( '-green' ); }
    else if ( document.querySelector( 'body' ).classList.contains('-blue' ) == true ){ document.querySelector( 'body' ).classList.remove( '-blue'  ); }
    else if ( document.querySelector( 'body' ).classList.contains('-all'  ) == true ){ document.querySelector( 'body' ).classList.remove( '-all'   ); }

    let dspKind = "-" + this.classList[this.classList.length-2];

    // console.log( " >>>>> 新規追加のクラス名【" + dspKind + "】\n\n" );

    document.querySelector( 'body' ).classList.add( dspKind );

    // ******************************************************************
    // ******************************************************************
    // ******************************************************************
    // // 
    // // ここに、セクションブロックの高さを計算する関数を呼びたい！
    // if ( this.textContent == "全て" ||
    //      this.textContent == "ニット編み物" ||
    //      this.textContent == "レース編み物" ||
    //      this.textContent == "刺し子・他"      )  {
    //   console.log( " 》》》》》　いーねっか画面ギャラりー表示変更！\n" );
    //   iNekkaCalcRollingSecHeight();
    // } else  {
    //   console.log( " 》》》》》　アフロディーテ・ケストス画面ギャラりー表示変更！\n" );
    //   ACestusCalcRollingSecHeight();
    // }
    // ******************************************************************
    // ******************************************************************
    // ******************************************************************

  }

  // 
  // 表示切替え処理関数
  // 引数：
  //      (1) ：表示「block」非表示「none」フラグ
  //      (2) ：表示非表示対象クラス名
  // 
  function displayChange( dFlag, target ) {
    // console.log( " >>>>> Enter displayChange( " + dFlag + " / " + target + " ) >>>>>" );

    if ( target == 'all' )  {
      let               ccdElms = document.getElementsByClassName( 'item' );
      for( let i=0 ; i< ccdElms.length ; i++ )  {
        ccdElms[i].style.display = dFlag;
      }  
      // console.log( " >>>>> 色変更対象ボタン数 [all]【" + ccdElms.length + "】" );


      if ( dFlag != 'none' )  {
        // console.log( "     ☛ ALL Display!!!!!" );

        // 
        // スライドショー向けグループ設定を「group」に設定したい！
        let               ccdElms = document.getElementsByClassName( 'all' );
        for( let i=1 ; i< ccdElms.length ; i++ )  {
          ccdElms[i].style.display = dFlag;
        }  
  
      }

    } else  {
      // 
      // for文「i=1」なのは、選択ボタン自体も「red/green/blue」クラスを持つ
      // その為「i=0」とすると、選択ボタン自体も「表示/非表示」の対象に成って仕舞う為。
      let               ccdElms = document.getElementsByClassName( target );
      for( let i=1 ; i< ccdElms.length ; i++ )  {
        ccdElms[i].style.display = dFlag;
      }  
      // console.log( " >>>>> 色変更対象ボタン数 [ " + target + " ]【" + ccdElms.length + "】" );
    }
    // console.log( " <<<<< Exit! displayChange() <<<<<" );
  }
})
