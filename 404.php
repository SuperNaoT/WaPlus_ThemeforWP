<?php
/*
Template Name: 和Plus：企業理念
*/

  // 
  // *******************************************************
  // *******************************************************
  // ★ 【global：グローバル変数】の取込み
  // *******************************************************
  // *******************************************************

  // 
  // 当該固定ページ種別設定
  global $GB_menuPos;
  global $GB_page_flag;

  $GB_menuPos     = 99;    // 企業理念(1) 404 Page(99)
  $GB_page_flag   = 0;

  // // 
  // // 【WordPress・get_header】用引数設定
  // $params       = [ 'GB_menuPos'     => $GB_menuPos,
  //                   'GB_page_flag'   => $GB_page_flag ];

  // ヘッダー部の取込み
  // get_header( null, $params );
  get_header( null );
?>

    <!--  -->
    <!-- サイト：活動理念ページ・メインコンテンツ -->
    <!-- <div class="main" id="mainArea" style="border: 2px solid green;"> -->

      <?php
        // get_template_part( 'WaPlusCfg/contents/404/subPage', "404" );
      ?>

      <p><br><br><br>　■ ご指定のページは見つかりませんでした。<br><br><br><br></p>
    <!-- </div>     main -->

<?php 
  // フッター部の取込み
  // get_footer( null, $params );
  get_footer( null );
?>