//
//「documet/HTML全て読み込んだら実行される関数」として定義する。
//「必ず」記述する。
//
document.addEventListener( 'DOMContentLoaded', function() {

  //
  //「getElementById」にて指定したIDを含む要素を指定し、
  //「addEventListener」にて、指定したイベントが発生するのをキャッチする。
  //
  // ID:hamburgerMenuButton の要素が「click」されたら動き出す。
  document.getElementById( 'hamburgerMenuButton' ).addEventListener( 'click', function() {

    //
    // クリックされた要素に対し、「active」と言うクラスを「toggle:切り替える」事をする。
    // サイクリックに、「active」クラスが付いたり外れたりする。
    // これにて、「menuButton」の図柄を切り替える。
    this.classList.toggle( 'active' );
    //
    // ID:hamburgerNav の要素を取得し、「active」と言うクラスを「toggle:切り替える」事をする。
    // サイクリックに、「active」クラスが付いたり外れたりする。
    // これにて、メニュー本体の表示／非表示を切り替える。
    document.getElementById( 'hamburgerNav'  ).classList.toggle( 'active' );

    //
    // ID:mask の要素を取得し、「active」と言うクラスを「toggle:切り替える」事をする。
    // サイクリックに、「active」クラスが付いたり外れたりする。
    // メニュー表示中は、メインコンテンツのクリックを出来なくする。
    document.getElementById( 'mask' ).classList.toggle( 'active' );
  });
});