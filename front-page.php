<!-- ■ トップページ【front-page.php】 -->    
<?php
// echo "<br><br>》》》》》■ トップページ【front-page.php】<br>";

  // 
  // *******************************************************
  // *******************************************************
  // *******************************************************
  // ★★★ カスタマーサイト個別定義部 ★★★
  // ★ 【global：グローバル変数】の取込み
  // *******************************************************
  // *******************************************************

  // 
  // ■ ページ種別判定フラグ・グローバル変数定義（$GB_menuPOS）
  // $GB_pageKind :  0 / Home
  // $GB_pageKind :  1 / Philosophy
  // $GB_pageKind :  2 / Management
  // $GB_pageKind :  3 / IT WEB Sol
  // $GB_pageKind :  4 / Original Products Sales
  // $GB_pageKind :  5 / i-nekka
  // $GB_pageKind :  6 / ACestus
  // $GB_pageKind :  7 / Our Information
  // $GB_pageKind :  8 / Management
  // $GB_pageKind :  9 / Company Profile
  // $GB_pageKind : 10 / Provacy Policy
  // $GB_pageKind : 11 / Contact Us
  // $GB_pageKind : 12 / i-nekka OnLineShop
  // $GB_pageKind : 30 / IT WEB Past Dev Result
  // global $GB_pageKind; // $GB_menuPos;

  // ■ 表示対象ページ・メニュー種別
  $GB_pageKind  = 0;    // front-page：0

  // 
  // ■ お問い合わせフォーム・状態フラグ
  // $GB_page_flag = 0：入力フォームページ
  // $GB_page_flag = 1：入力内容確認ページ
  // $GB_page_flag = 2：送信完了報告ページ
  // global $GB_page_flag;

  // ■ お問い合わせフォーム・状態フラグ
  $GB_page_flag = 0;  
  
  // 
  // 【WordPress・get_header】用引数設定
  $params       = [ 'GB_pageKind'     => $GB_pageKind,
                    'GB_page_flag'    => $GB_page_flag,
                    'GB_categoryType' => $GB_categoryType
                  ]; 

  // *******************************************************
  // ★★★ カスタマーサイト個別定義部 ★★★ ここ迄！
  // ★ 【global：グローバル変数】の取込み
  // *******************************************************
  // *******************************************************
  // *******************************************************


  // ヘッダー部の取込み
  get_header( null, $params );
?>

    <!--  -->
    <!-- サイトトップページ・メインコンテンツ -->
    <div class="container" id="DispScrollGuide">
      <p>
        ① 【#pageWrapper】: Limegreen 線（comHeader.php  定義）<br>
        ② 【.container】  : Red 線      （front-page.php 定義）<br>
      </p>
    </div>

<!-- **************************************************************** -->
<!-- **************************************************************** -->
<!-- **************************************************************** -->
<?php 
  // フッター部の取込み
  get_footer( null, $params );
?>
<!-- **************************************************************** -->
<!-- **************************************************************** -->
<!-- **************************************************************** -->front-p