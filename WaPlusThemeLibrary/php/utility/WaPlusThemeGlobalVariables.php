<?php

  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  // ■ 和プラス標準テーマ利用グローバル変数
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  // 

  // 
  // WordPress テーマカスタマイザー
  // 【カスタマイズ】☛【外観】☛【メニュー】☛「メニュー名」
  global $GB_WaPlusGlobalNavMenu;
  // 【カスタムナビゲーションメニュー】全メニュー（親・子）定義可能数
  global $GB_maxNavMenuCount;
  // 【カスタムナビゲーションメニュー】親メニュー数
  global $GB_NavMenuParentCount;
  
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  // ★ クライアントサイト固有定義：ヘッダー部・横並びメインメニュー表示位置「１～ 
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  // 
  // $GB_pageKind :  0 / Home
  // $GB_pageKind :  1 / Philosophy
  // $GB_pageKind :  2 / Management
  // $GB_pageKind :  3 / IT WEB Sol
  // $GB_pageKind :  4 / Original Products Sales
  // $GB_pageKind :  5 / i-nekka
  // $GB_pageKind :  6 / ACestus
  // $GB_pageKind :  7 / <category>News
  // $GB_pageKind :  8 / <category>Blog
  // $GB_pageKind :  9 / Company Profile
  // $GB_pageKind : 10 / Provacy Policy
  // $GB_pageKind : 11 / Contact Us
  // $GB_pageKind : 30 / IT WEB Past Dev Result
  // $GB_pageKind : 31 / <category>tech
  global $GB_pageKind;

  // echo "\n\n\n >>>>> globalVariablesDef.php [\$GB_pageKind] ☛【". $GB_pageKind . "】\n";

  //
  // ■ pageComElmDspCtr 表示ID切り替え用スイッチ設定
  //  ★ スクロール時表示・非表示する【固定位置表示ナビゲーションメニュー】の制御関連
  //     1．入力フォーム・データ確認画面ではこれを表示していない。　　　　　　　
  //     2．Javascript/スクロールに応じた表示コントロールにてエラーが発生する。
  // 
  // 入力フォーム関連ページ指定フラグ
  // $GB_page_flag = 0：入力フォームページ
  // $GB_page_flag = 1：入力内容確認ページ
  // $GB_page_flag = 2：送信完了報告ページ
  global $GB_page_flag;

  // 
  // 「archive.php」投稿一覧タイル表示画面にて表示する、
  // 「ページタイトル文字列」格納用変数
  global $GB_tileListPageTitle;


  // 
  // ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  // ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  // pallaxアニメーション動作フラグ
  // 当サイトに於ける「PALLAX効果・Rellax」動作有無設定関数
  // global $GB_RELLAX_FLAG;

  // 
  // 「front-page.php：新着ニュースセクション」「archive.php」投稿一覧表示画面にて表示対象となる、
  // 「カテゴリー名称」格納用変数
  global $GB_categoryType;
  // 「カテゴリーＩＤ」格納用変数
  global $GB_categoryID;

  //
  // 投稿一覧表示に於ける、表示件数指定 
  // Wordpress に於ける表示数とは別に、強制的に指定変更する
  global $GB_countOfPosts;

  // 
  // 「カテゴリ：ＩＤ」
  global $DEF_catID_news;
  global $DEF_catID_blog;
  global $DEF_catID_tech;
  global $DEF_catID_howTo;

  global $DEF_catName_news;
  global $DEF_catName_blog;
  global $DEF_catName_tech;
  global $DEF_catName_howTo;

  // 
  // 表示中投稿年月
  global $GB_postYear;
  global $GB_postMonth;

  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
  //＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃

  // echo " >>>>> called globalVariableDef !!!!!";
?>