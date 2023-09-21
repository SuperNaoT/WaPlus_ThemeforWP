/*
 * jQuery archiveList control.
 * This script was used for sidebar-archiveList.php
 */
jQuery( function($) {
  $( '.accordion p' ).click( function() {
    // console.log( " !!!!! 年号＋ボタン・クリック！" );

    if ( $(this).next( 'ul' ).is( ':visible' ) )  { //既に開いている場所なら
         $(this).next( 'ul' ).slideUp( 300 ); //閉じる
         $(this).children( 'span' ).removeClass( 'acv_open' ); //.acv_openを削除
        //  $(this).css( 'color', '#333' );
    } else  { //閉じている場所なら
      $( '.accordion ul' ).slideUp(); //全部閉じる
      $( '.accordion'    ).find( 'span' ).removeClass( 'acv_open' ); //.acv_open全削除
      // $( '.accordion p'  ).css( 'color', '#333' );
      $(this).next( 'ul' ).slideDown( 300 ); //開く
      $(this).children( 'span' ).addClass( 'acv_open' ); //.acv_open付加
      // $(this).css( 'color', 'red' );
    }
  });
});
