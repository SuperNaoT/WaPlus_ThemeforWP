<?php

  if ( ! is_admin() ) {
    
    // 
    // *******************************************************
    // *******************************************************
    // ★ 【独自スタイルシート】の取込み
    // *******************************************************
    // *******************************************************
    function add_WaPlusThemeStyleSheet() {

      // ハンドル名（識別要の文字列）.CSSリセット用
      $handle = 'resetCss';
      // 追加したいCSSのURL.
      $src = get_template_directory_uri().'/WaPlusThemeLibrary/scss/clearEnvStyle.min.css';

      // 特定のCSSの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
      $deps = array();
      // 読み込むファイルのバージョン（省略可）.
      $ver = '';
      // 'all'、'screen'、'handheld'、'print' など 対象とするメディア.
      $media = 'all';
      // CSSファイル取込実行
      wp_enqueue_style( $handle, $src, $deps, $ver, $media );

      // ハンドル名（識別要の文字列）.ハンバーガーメニュー表示用
      $handle = 'hbgMenu_css';
      // 特定のCSSの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
      $deps = array('resetCss');
      // 追加したいCSSのURL.
      $src = get_template_directory_uri().'/WaPlusThemeLibrary/scss/hbgMenu.min.css';
      // CSSファイル取込実行
      wp_enqueue_style( $handle, $src, $deps, $ver, $media );

      // ハンドル名（識別要の文字列）.ハンバーガーメニュー表示用
      $handle = 'WaPlusThemeCommonStyle_css';
      // 特定のCSSの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
      $deps = array('hbgMenu_css');
      // 追加したいCSSのURL.
      $src = get_template_directory_uri().'/WaPlusThemeLibrary/scss/common-style/WaPlusThemeCommonStyle.min.css';
      // CSSファイル取込実行
      wp_enqueue_style( $handle, $src, $deps, $ver, $media );

      // ハンドル名（識別要の文字列）.Googleフォント取込み用
      $handle = 'googleApis_css';
      // 特定のCSSの後で読み込ませたい場合はそのハンドル名（指定がなければ空の array() でも可）.
      $deps = array();
      // 追加したいCSSのURL.
      $src = '//fonts.googleapis.com/css2?family=Work+Sans:wght@100;200&display=swap';
      // CSSファイル取込実行
      wp_enqueue_style( $handle, $src, $deps, $ver, $media );
    }

    // enqueue：「ＦＩＦＯスタック」に積み込む事
    // dequeue：「ＦＩＦＯスタック」から取り出す事（古い物から取り出す）
    add_action( 'wp_enqueue_scripts', 'add_WaPlusThemeStyleSheet' );

  }

?>