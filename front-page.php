<!-- ■ トップページ【front-page.php】 -->    
<?php
// echo "<br><br>》》》》》■ トップページ【front-page.php】<br>";

  // 
  // *******************************************************
  // *******************************************************
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
  global $GB_pageKind; // $GB_menuPos;

  // ■ 表示対象ページ・メニュー種別
  $GB_pageKind  = 0;    // front-page：0

  // 
  // ■ お問い合わせフォーム・状態フラグ
  // $GB_page_flag = 0：入力フォームページ
  // $GB_page_flag = 1：入力内容確認ページ
  // $GB_page_flag = 2：送信完了報告ページ
  global $GB_page_flag;

  // ■ お問い合わせフォーム・状態フラグ
  $GB_page_flag = 0;  
  
  // 
  // // 【WordPress・get_header】用引数設定
  $params       = [ 'GB_pageKind'     => $GB_pageKind,
                    'GB_page_flag'    => $GB_page_flag,
                    'GB_categoryType' => $GB_categoryType
                  ]; 

  // ヘッダー部の取込み
  get_header( null, $params );
  // get_header( null );
?>

    <!--  -->
    <!-- サイトトップページ・メインコンテンツ -->
    <div class="main" id="mainArea" style="height: 500px;">
        <div class="areaChk" >000</div>
        <div class="areaChk1">100</div>
        <div class="areaChk2">200</div>
        <div class="areaChk3">300</div>
        <div class="areaChk4">400</div>
    </div> <!-- main -->

<!-- **************************************************************** -->
<!-- **************************************************************** -->
<!-- **************************************************************** -->
<?php 
  // フッター部の取込み
  get_footer( null, $params );
  // get_footer( null );
?>
<!-- **************************************************************** -->
<!-- **************************************************************** -->
<!-- **************************************************************** -->