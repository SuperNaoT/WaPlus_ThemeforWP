//
//「documet/HTML全て読み込んだら実行される関数」として定義する。
//「必ず」記述する。
//
document.addEventListener( 'DOMContentLoaded', function() {

  // 移動させたい、スクロールを持つ要素を取得
  let targetElm    = document.getElementById("js-eraList"        );
  let resetSetElm  = document.getElementById("js-catBtnList"     );
  // let resetSetElmM = document.getElementById("js-catBtnList-main");
  let tgtScrPos;

  // 
  // ■ ターゲット要素上、クリックイベント発生
  // 注意）新着情報は、最大5件・最近の記事なので、年毎リストは表示しない。
  // 　　　従って、targetElm が存在しない。
  if ( targetElm != null )  {
       targetElm.onclick = function() {

      // 移動させたい、スクロールを持つ要素を取得
                                   tgtScrPos = targetElm.scrollTop;
      localStorage.setItem( 'key', tgtScrPos );
  
      // console.log( " >>>>> ScrollTop 確保（１） [ " + tgtScrPos + " ]\n" );
  
    };  
  }

  $( document ).ready( function() {
    let pos = localStorage.getItem('key');
    $(targetElm).animate({ scrollTop: pos }, 'slow');

    // console.log( " >>>>> ScrollTop 設定（２） [ " + pos + " ]\n" );

  });

  // 
  //  アーカイブ／個別投稿画面内カテゴリー種別選択ボタン、クリックイベント発生
  resetSetElm.onclick = function() {

    // 
    // 時代リスト・スクロール位置クリア
    localStorage.clear();

    // console.log( " >>>>> ScrollTop 設定（３） [ クリア！ ]\n" );
  };

});