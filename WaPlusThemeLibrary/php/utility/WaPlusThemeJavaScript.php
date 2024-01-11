<?php

if ( ! is_admin() ) {

  // 
  // *******************************************************
  // *******************************************************
  // ★ 【JavaScriptファイル】の取込み
  // *******************************************************
  // *******************************************************
  function init_WaPlusThemeJavaScript() {
    
    // WordPressに含まれているjquery.jsを読み込まない
    wp_deregister_script('jquery');

    // GreenSock用Scriptの読み込み
    // ハンドル名（識別要の文字列）.
    $handle = 'gsap_js';
    // 特定のスクリプトの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
    $deps = array();
    // 読み込むファイルのバージョン（省略可）.
    $ver = '';
    // 追加したい「GSAP効果ライブラリ」のURL.
    $src = "//cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
    // Scriptの取込み実行
    wp_enqueue_script( $handle, $src, $deps, $ver );

    // GreenSock・ScrollTriger用Scriptの読み込み
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
    // $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/subMenusCtr.min.js';
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
    // $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/loadScreen.min.js';
    $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/loadScreen.js';
    // JavaScriptファイルの取込み実行
    wp_enqueue_script( $handle, $src, $deps, $ver );

    // メインナビゲーションメニュー配下サブメニュー制御用Scriptの読み込み
    // ハンドル名（識別要の文字列）.
    $handle = 'mobileChkByWindowSize_js';
    // 追加したい「メインナビゲーションメニュー・サブメニュー表示制御ライブラリ」のURL.
    // $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/breakPointsSetByWindowSize.min.js';
    $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/breakPointsSetByWindowSize.js';
    // JavaScriptファイルの取込み実行
    wp_enqueue_script( $handle, $src, $deps, $ver );
          
    // 🌟🌟🌟 2024/01/09 WaPlusTheme 組込JavaScript へ移動（共通機能化）
    // ビューポート形状縦型・横型判定Scriptの読み込み
    // ハンドル名（識別要の文字列）.
    $handle = 'checkViewportDirection_js';
    // 追加したい「parallaxアニメーション機能実施コード」のURL.
    // $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/checkViewportDirection.min.js';
    $src = get_template_directory_uri().'/WaPlusThemeLibrary/js/checkViewportDirection.js';
    // JavaScriptファイルの取込み実行
    wp_enqueue_script( $handle, $src, $deps, $ver );

    //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
    //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
    //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
    // ★ クライアントサイト固有スクリプト
    //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
    // 
    // ホームページ・トップページ表示制御用Scriptの読み込み
    // ハンドル名（識別要の文字列）.
    $handle = 'customerDefineFrontPageContents_js';
    // 追加したいjQueryのURL.
    // $src = get_template_directory_uri().'/customerSiteConfiguration/js/CustomerFrontPageContents.min.js';
    $src = get_template_directory_uri().'/customerSiteConfiguration/js/CustomerFrontPageContents.js';
    // JavaScriptファイルの取込み実行
    wp_enqueue_script( $handle, $src, $deps, $ver );

  }
  add_action( 'wp_enqueue_scripts', 'init_WaPlusThemeJavaScript');

}
?>