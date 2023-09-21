<?php

  // 
  // デバイスチェック：モバイル・PC
  require_once( get_template_directory() . '/WaPlusThemeLibrary/php/tools/Mobile_Check.php'    );

	//   
	// グローバル変数定義ファイル
  require_once( get_template_directory() . '/WaPlusThemeLibrary/php/WaPlusThemeGlobalVariables.php' );

  // 
  // WordPress テーマカスタマイザー
  // 【カスタマイズ】☛【外観】☛【メニュー】☛「定義名称」
  $GB_WaPlusGlobalNavMenu = "GlobalHeaderNavMenu";
  // 【カスタムナビゲーションメニュー】全メニュー（親・子）定義可能数
  $GB_maxNavMenuCount = 20;
  // 【カスタムナビゲーションメニュー】親メニュー数
  $GB_NavMenuParentCount  = 0;
  // 
  // ヘッダー部・横並びメインメニュー表示位置「１～ 
  // $GB_pageKind :  0 / Home
  // 各ページ用テンプレートにて設定される
  $GB_pageKind = 0;

  // 
  // ■ クライアントデバイス種別判定フラグ
  // 
  // WordPress関数に因る判定
	// $GB_MOBILE_FLAG = mobileCheck();
  // 
  // タブレットはPC扱い・・・
    	 $GB_MOBILE_FLAG = mobileCheck_Mobile_Detect();
  if ( $GB_MOBILE_FLAG )  { $GB_DEVICE_KIND = "MOBILE"; }
  else                    { $GB_DEVICE_KIND = "PC";     }

	$GB_RELLAX_FLAG = rellaxExecFlg();

  // echo "\n\n\n >>>>> WaPlusThemeGlobalVariablesDef.php [\$GB_pageKind] ☛【". $GB_pageKind . "】\n";

  // if ( $GB_RELLAX_FLAG )  {
  //   echo "\n\n\n >>>>> WaPlusThemeGlobalVariablesDef.php [\$GB_RELLAX_FLAG] ☛【TRUE】\n";
  // } else  {
  //   echo "\n\n\n >>>>> WaPlusThemeGlobalVariablesDef.php [\$GB_RELLAX_FLAG] ☛【FALSE】\n";
  // }

  // echo " >>>>> called WaPlusThemeGlobalVariablesDef !!!!!";
?>