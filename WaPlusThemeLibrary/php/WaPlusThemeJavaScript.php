<?php

if ( ! is_admin() ) {

    // 
    // *******************************************************
    // *******************************************************
    // ★ 【JavaScriptファイル】の取込み
    // *******************************************************
    // *******************************************************
    function init_WaPlusThemeJavaScript() {
      
      // echo "<br><br><br><br>　\$DEF_catName_news[ " . $DEF_catName_news . " ]<br>";
      // echo "　\$DEF_catName_blog[ " . $DEF_catName_blog . " ]<br>";

      // WordPressに含まれているjquery.jsを読み込まない
      wp_deregister_script('jquery');

      // パララックス効果用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'pallax_js';
      // 追加したい「rellax効果ライブラリ」のURL.
      $src = '//cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js';
      // 特定のスクリプトの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
      $deps = array();
      // 読み込むファイルのバージョン（省略可）.
      $ver = '';
      // JavaScriptファイルの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );

      // GreenSock用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'gsap_js';
      // 追加したい「GSAP効果ライブラリ」のURL.
      $src = "//cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
      // Scriptの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );

      // GreenSock用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'scrollTrigger_js';
      // 追加したい「GSAP/ScrollTrigger効果ライブラリ」のURL.
      $src = "//cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js";
      // Scriptの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );

      // ハンバーガーメニュー用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'hbgMenu_js';
      // 追加したい「ハンバーガーメニュー用ライブラリ」のURL.
      $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/hbgMenu.min.js';
      // JavaScriptファイルの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );

      // メインナビゲーションメニュー配下サブメニュー制御用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'subMenuCtr_js';
      // 追加したい「メインナビゲーションメニュー・サブメニュー表示制御ライブラリ」のURL.
      // $src = get_template_directory_uri().'/wp-config/WaPlusThemeib/js/subMenusCtr.min.js';
      $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/subMenusCtr.js';
      // JavaScriptファイルの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );

      // fontawesomeアイコン表示用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'fontAwesome_js';
      // 追加したいjQueryのURL.
      $src = '//kit.fontawesome.com/2a411c1cdb.js';
      // JavaScriptファイルの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );
      
      // ホームページ・トップページ表示制御用Scriptの読み込み
      // ハンドル名（識別要の文字列）.
      $handle = 'top-page_js';
      // 特定のスクリプトの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
      $deps = array();
      // 読み込むファイルのバージョン（省略可）.
      $ver = '';
      // 追加したいファイルのパス.
      // $src = get_template_directory_uri().'/wp-config/WaPlusThemeLib/js/loadScreen.min.js';
      $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/loadScreen.js';
      // JavaScriptファイルの取込み実行
      wp_enqueue_script( $handle, $src, $deps, $ver );


    }
    add_action( 'wp_enqueue_scripts', 'init_WaPlusThemeJavaScript');

  }
?>