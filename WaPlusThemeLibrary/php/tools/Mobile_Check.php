<?php

  // require_once get_theme_file_path( 'WP-config/common-php/_DEBUG-Setting.php' );
  require_once( get_template_directory() . '/WaPlusThemeLibrary/php/_DEBUG-Setting.php' );
  
  // 
  // ********************************************
  //  ■ 表示デバイスがモバイルか否かを判定す
  //   １．TRUE：モバイル
  //   ２．FALSE：PC環境
  // ********************************************
  function mobileCheck() {

    echo "<br> >>>>> Enter mobileCheck() >>>>> <br>";

    // 
    // ■ デバッグ機能定義関数呼出し
    //   デバッグにてモバイル端末定義有無チェック
    $values           = debugDefine();
    $GB_MOBILE_DEFINE = $values['GB_MOBILE_DEFINE'];

    // 
    // ■ デバイスチェック
    $GB_MOBILE_FLAG = false;
    // メソッド【wp_is_mobile()】は
    // デバイスがスマホまたはタブレットの場合「true」を返す
    if ( wp_is_mobile() ) {
      $GB_MOBILE_FLAG = true;
    }

    // 
    // デバッグ機能にて、強制的にモバイルデバイス利用に設定
    if ( $GB_MOBILE_DEFINE )  {
      $GB_MOBILE_FLAG = true;   // for DEBUG !!!!!
    }

    echo " <<<<< Exit- mobileCheck( ". $GB_MOBILE_FLAG ." ) <<<<< <br>";

    return $GB_MOBILE_FLAG;

  }
  function mobileCheck_Mobile_Detect() {

    // echo "<br><br><br><br><br>";
    // echo " >>>>> Enter mobileCheck_Mobile_Detect() >>>>> <br>";

    // 
    // ■ デバッグ機能定義関数呼出し
    //   デバッグにてモバイル端末定義有無チェック
    $values           = debugDefine();
    $GB_MOBILE_DEFINE = $values['GB_MOBILE_DEFINE'];

    // 
    // ■ デバイスチェック
    //   インスタンスを生成
    $detect         = new Mobile_Detect;
    $GB_MOBILE_FLAG = false;

    // メソッド isMobile() はデバイスがスマホまたはタブレットの場合 true を返す
    if ( $detect->isMobile() ) {
      $GB_MOBILE_FLAG = true;

      // // メソッド isTablet() はデバイスがタブレットの場合 true を返す
      if( $detect->isTablet() )  {
        // デバイスがタブレットの場合に実行する処理
        $GB_MOBILE_FLAG = false;
      }
    }

    if ( $GB_MOBILE_DEFINE )  {
      $GB_MOBILE_FLAG = true;   // for DEBUG !!!!!
    }

    // // 
    // //  for DEBUG!
    // // ****************************************
    // if ( $GB_MOBILE_FLAG )  {
    //   echo " <<<<< Exit- mobileCheck_Mobile_Detect( true:Mobile ) <<<<< <br>";
    // } else  {
    //   echo " <<<<< Exit- mobileCheck_Mobile_Detect( false:PC ) <<<<< <br>";
    // }

    return $GB_MOBILE_FLAG;

  }

  // 
  // ******************************************************
  // ■ 当サイトに於ける「PALLAX効果・Rellax」動作有無設定関数
  //    ★ デバッグ用関数
  // 【戻り値】
  //    TRUE ：Pallax効果有り
  //    FALSE：Pallax効果無し
  // ******************************************************
  // 
  function rellaxExecFlg()  {

    // 
    // ■ デバッグ機能定義関数呼出し
    //   デバッグにてPALLAX効果フラグ定義チェック
    $values           = debugDefine();
    $GB_PALLAX_DEFINE = $values['GB_PALLAX_DEFINE'];

    return( $GB_PALLAX_DEFINE );
  }
?>