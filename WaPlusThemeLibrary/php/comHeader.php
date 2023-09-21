<?php
  // 
  // *******************************************************
  // *******************************************************
  // ★ 【共通ヘッダー部】
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
  global $GB_pageKind;

  $params = [ 'GB_pageKind' => $GB_pageKind ]; 

  // 
  // ■ WordPress テーマカスタマイザー
  // 【カスタマイズ】☛【外観】☛【メニュー】☛「メニュー名」
  global $GB_WaPlusGlobalNavMenu;

  // 
  // ■ お問い合わせフォーム・状態フラグ
  // $GB_page_flag = 0：入力フォームページ
  // $GB_page_flag = 1：入力内容確認ページ
  // $GB_page_flag = 2：送信完了報告ページ
  global $GB_page_flag;

  // $GB_page_flag = 1;
  // $locations = get_nav_menu_locations();
  // echo "<br>>>>>> Enter comHeader.php 【". var_dump($locations) ."】>>>>><br>";
  // echo "<br>>>>>> Enter comHeader.php 【". $GB_page_flag ."】>>>>><br>";
  ?>

<!DOCTYPE html>
<!-- WordPress の持つ国際化、原語翻訳に対応させる -->
<html class="no-js" <?php language_attributes(); ?>>

	<head>

    <!-- WordPress の持つ国際化、原語翻訳に対応させる -->
    <!-- 使用文字コードを「utf-8」に固定させない -->
    <meta charset="<?php bloginfo( 'charset' ); ?>">

    <!-- レスポンシブ対応設定。-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
    
		<link rel="profile" href="//gmpg.org/xfn/11">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>
      <?php
        
        // // 
        // // メニュー位置・ページ種別判定及び設定
        require_once( get_template_directory() . '/WaPlusThemeLibrary/php/tools/setPageKinds.php' );

        echo "This THEME was made for the standard the projects of WaPlus Co.,Ltd. .";
        echo $titleMsg;
        echo bloginfo( 'name' );  // 【bloginfo('name')】Wordpress ダッシュボードにて設定した情報を取得
      ?>
    </title>

    <!-- サイト説明：SEO対策一環 -->
    <!-- 「WordPressダッシュボード：【設定】☛【一般】☛【キャッチフレーズ】引用」 -->
    <?php if ( $GB_menuPos == 0 ): ?>
      <meta name="description" content="<?php echo bloginfo( 'description' ); ?>" >
    <?php else: ?>
      <meta name="description" content="<?php echo $descriptMsg; ?>" >
    <?php endif; ?>


    <!-- ブラウザタブ・ファビコン表示 -->
    <!-- <link rel="shortcut icon" href="<?php // echo esc_url( get_template_directory_uri().'/wp-config/Images/favicon.ico' ); ?>"> -->

    <!-- ★【重要】WORDPRESSのお約束：WORDPRESS利用のJavascript/PHP等の取込み（WORDPRESS管理バー表示等々） -->
    <?php wp_head(); ?>
	</head>

	<!--【body_class()】 -->
	<!-- ★ WordPress にて当該ページ種別に応じたクラスを「<body>タグ」に追加 -->
	<body class="bodyLock" <?php body_class(); ?>>

		<?php
			// //
			// // ★ function.php に下記コードを追加すると、
			// ーーーーーーーーーーーーーーーーーーーーーーー
			// add_action( 'wp_body_open', function() {
			// 	\?^>
			// 	!-- ここから挿入したいソースコードなどスタート --
			// 	・・・・・
			// 	!-- ここまで --
			// 	\<\?php
			// }); 
			// ーーーーーーーーーーーーーーーーーーーーーーー
			// // 下記の様に関数【wp_body_open()】を呼ぶと、
			// // 上記挿入したいソースコードが、ここに展開される！
			// // 
			wp_body_open(); 
		?>

  <div class="mask" id="mask"></div>

  <!--  -->
  <!-- 和Plus ホームページ・トップページ表示時のみ、ロード待ち画面表示 -->
  <?php if ( $GB_pageKind == 0 ): ?>
    <?php require_once( get_template_directory() . "/WaPlusThemeLibrary/php/tools/loadScreen.php" ); ?>
  <?php endif; ?>

  

  <?php // $GB_pageKind = 5; echo " >>>>> (1) \$GB_pageKind【 " . $GB_pageKind . " 】\n"; ?>

  <!--  -->
  <!-- サイトロード画面消去後ロード -->
  <div class="<?php echo $pageWrapper ?>" id="pageWrapper" >

  <div id="page" class="site" >
    <!--  -->
    <!-- メインページ内ヘッダー部 -->
    <header class="siteHeader">

      <!--  -->
      <!-- サイトロゴ：【外観】☛【カスタマイズ】☛【サイト基本設定】☛【ロゴ】設定有無判別 -->
      <!-- サイトロゴ・未定義の場合 -->
      <?php if( ! has_custom_logo() ):?>
        <!-- ヘッダー部ロゴマーク -->
        <div class="headerLogo">
          <!--  -->
          <!-- // ■ 表示ページが、お問い合わせ入力・確認ページ以外の場合 -->
          <?php if ( $GB_page_flag != 1 ): ?>
              <a href="<?php echo esc_url( home_url('/') ); ?>">
                <img class="waPlusLogoDef" src="<?php echo esc_url( get_template_directory_uri().'/wp-config/Images/WaPlus-Logo.png' ) ?>" alt="株式会社和Plus・和プラス・ワプラスのロゴマークと会社名が入った画像">
              </a>
          <!--  -->
          <!-- // ■ 表示ページが、お問い合わせ入力・確認ページの場合、他のページには遷移させない！ -->
          <?php else: ?>
              <img class="waPlusLogoDef" src="<?php echo esc_url( get_template_directory_uri().'/wp-config/Images/WaPlus-Logo.png' ) ?>" alt="株式会社和Plus・和プラス・ワプラスのロゴマークと会社名が入った画像">
          <?php endif; ?>
        </div>
      <?php else: ?>
        <div class="headerLogo">
        <?php
          // 
          //【外観】☛【カスタマイズ】☛【サイト基本情報】☛【ロゴ】設定有り
          $custom_logo_id = get_theme_mod( 'custom_logo' ); 
          $image          = wp_get_attachment_image_src( $custom_logo_id , 'full' ); 

          // ■ 表示ページが、お問い合わせ入力・確認ページ以外の場合 -->
          if ( $GB_page_flag != 1 )  {
            $mylogo  = '<a href="' . esc_url( home_url("/") ) . '">'; 
            $mylogo .= '<img class="waPlusLogo" src="'. $image[0] .'" alt="'. get_bloginfo( 'name' ) .'" />'; 
            $mylogo .= '</a>';
          } else  {
            $mylogo = '<img class="waPlusLogo" src="'. $image[0] .'" alt="'. get_bloginfo( 'name' ) .'" />';   
          }

        ?>
        <?php echo $mylogo ?>
        </div>
        <?php // the_custom_logo() ?>
      <?php endif; ?>

      <!--  -->
      <!-- ■ お問い合わせフォーム、入力値確認画面は、メニュー表示無し -->
      <!--   $GB_page_Flag : 0 / お問い合わせフォーム、入力値確認画面以外 -->
      <!--   $GB_page_Flag : 1 / お問い合わせフォーム、入力値確認画面、多画面への遷移をロックする -->
      <!--  -->
      <?php if ( $GB_page_flag != 1 ): ?>
        <div class="hamburgerMenu-Wrapper">
          <div class="hamburgerMenuButton" id="hamburgerMenuButton">
            <div></div>
            <div></div>
            <div></div>
          </div>


          <!-- WordPress テーマカスタマイザー【外観】【カスタマイズ】【メニュー】の有無チェック -->
          <?php if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $GB_WaPlusGlobalNavMenu ] ) ): ?>
            <?php // echo "　? カスタマイザー【外観】☛【カスタマイズ】☛【メニュー】《有り！》【" . $GB_pageKind . "】<br>"; ?>

            <div class="hamburgerNav" id="hamburgerNav">
              <ul>
                <?php
                  $params = [ 'GB_pageKind' => $GB_pageKind ]; 
                  get_template_part( '/WaPlusThemeLibrary/php/WaPlusThemeCreateNavMenuforHbg', null, $params );
                ?>
              </ul>
            </div>

          <?php else: ?>
            <?php // echo "　? カスタマイザー【外観】☛【カスタマイズ】☛【メニュー】《無し！》<br>"; ?>

            <div class="hamburgerNav" id="hamburgerNav">
              <ul>
                <li>-【外観】☛【カスタマイズ】☛【メニュー】《指定無し！》</li>
              </ul>
            </div>

            <?php endif; ?>
        </div>
        <!-- ここ迄 ********************************************* -->


        <!-- WordPress テーマカスタマイザー【外観】【カスタマイズ】【メニュー】の有無チェック -->
        <?php if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $GB_WaPlusGlobalNavMenu ] ) ): ?>

          <div id="subMnuErase"></div>
          <nav id="navigation">
            <ul class="mainNav">

              <?php
                  $params = [ 'GB_pageKind' => $GB_pageKind ]; 
                  get_template_part( '/WaPlusThemeLibrary/php/WaPlusThemeCreateNavMenu', null, $params );
              ?>

            </ul>
          </nav>

        <?php else: ?>

          <div id="subMnuErase"></div>
          <nav id="navigation">
            <p><br>　■ カスタマイザー【外観】☛【カスタマイズ】☛【メニュー】定義されていません！<br></p>
          </nav>

        <?php endif; ?>
      <?php endif; ?>
    </header>
  </div>

  <!--  -->
  <!-- スクロールガイド -->
  <div class="scrollGuideArea">
    <p>scroll</p><div class="downArrow"></div>
  </div>

  <!-- ページ本体表示位置、page-11.php から移動 -->
  <?php if ( $GB_pageKind == 11 ): ?>
    <!--  -->
    <!-- サイト：活動理念ページ・メインコンテンツ -->
    <div class="main" id="mainArea">
  <?php endif; ?>
  <?php  // echo "<br><<<<< Exit comHeader.php <<<<<<br>"; ?>

