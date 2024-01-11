<?php
  
  // 
  // デバッグ用各種フラグ設定関数定義ファイル
  require_once( get_template_directory() . '/WaPlusThemeLibrary/php/utility/_DEBUG-Setting.php' );

	//   
	// グローバル変数定義ファイル
  require_once( get_template_directory() . '/WaPlusThemeLibrary/php/utility/WaPlusThemeGlobalVariables.php' );

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

?>