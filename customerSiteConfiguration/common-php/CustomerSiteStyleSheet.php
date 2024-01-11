<?php

  if ( ! is_admin() ) {

    // echo " <br><br><br>　>>>>> Enter CustomerSiteStyleSeet.php >>>>> <br>";
    // 
    // *******************************************************
    // *******************************************************
    // ★ 【独自スタイルシート】の取込み
    // *******************************************************
    // *******************************************************
    function add_myStyleSheet() {

      // 
      // ■ 和Plus・トップページ関連
      // **************************************************
      if ( is_home() )  {

        $ver   = "";
        $media = "";
        // ハンドル名（識別要の文字列）.トップページ表示、個別定義用
        $handle = 'customerSite_css';
        // 特定のCSSの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
        $deps = array();
        // 追加したいCSSのURL.
        $src = get_template_directory_uri().'/customerSiteConfiguration/assets/scss/contents/index/style.min.css';
        // CSSファイル取込実行
        wp_enqueue_style( $handle, $src, $deps, $ver, $media );
      }
    }
    // enqueue：「ＦＩＦＯスタック」に積み込む事
    // dequeue：「ＦＩＦＯスタック」から取り出す事（古い物から取り出す）
    add_action( 'wp_enqueue_scripts', 'add_myStyleSheet' );
  }

?>