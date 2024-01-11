<?php
  // 
  // *******************************************************
  // *******************************************************
  // ★ 【global：グローバル変数・メニューポジション】の取込み
  // *******************************************************
  // *******************************************************

  // echo "【comFooter.php】\$args ☛【". $args['GB_pageKind'] . "】\n";

  // ■ ページ種別判定フラグ・グローバル変数定義（$GB_menu_POS）
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
  
?>

      <!-- ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃ -->
      <!-- ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃ -->
      </div>    <!-- 【comHeader.php】にて定義！ .main / #mainArea-->
      <!-- ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃ -->
      <!-- ＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃ -->

      <footer>
        <!-- <div class="siteFooter" id="footerSection"> -->
        <div class="siteFooter">
          <div class="cmpyInfo" >

            <!-- ヘッダー部ロゴマーク -->
            <div class="footerLogo">
              <a href="<?php echo esc_url( home_url('/') ); ?>">
                <?php if( ! has_custom_logo() ):?>
                  <img src="<?php echo esc_url( get_template_directory_uri().'/WaPlusThemeLibrary/Images/loadScreen/WaPlus-Logo.png' ) ?>" alt="株式会社和Plus・和プラス・ワプラスのロゴマークが入った画像">
                <?php else: ?>
                  <?php
                    // 
                    //【外観】☛【カスタマイズ】☛【サイト基本情報】☛【ロゴ】設定有り
                    $custom_logo_id = get_theme_mod( 'custom_logo' ); 
                    $image          = wp_get_attachment_image_src( $custom_logo_id , 'full' ); 
                    $mylogo         = $image[0]; 
                    $mylogo = '<img src="'. $mylogo .'" alt="'. get_bloginfo( 'name' ) .'" />'; 
                  ?>
                  <?php echo $mylogo ?> 
                <?php endif; ?>
              </a>  
            </div>

            <h2>We will change charms much more!</h2>
            <div class="waPlusAddr">
              <p>
                N&E BLD. 7F<br>
                1-12-4, Ginza, Chuo<br>
                Tokyo, 104-0061, Japan<br>
                WaPlus Co., Ltd.
              </p>
            </div>
          </div>
          <?php if ( $GB_page_flag != 1 ): ?>
            <div id="footerNav">
              <ul>
                <?php
                  $params = [ 'GB_pageKind' => $GB_pageKind ]; 
                  get_template_part( '/WaPlusThemeLibrary/php/utility/WaPlusThemeCreateNavMenuforHbg', null, $params );
                ?>
              </ul>  
            </div>
            <div class="brandLink">
              <a href="<?php echo esc_url( home_url('05_inekkaec' ) ); ?>"><div class="inekkaLink" ></div></a>
              <a href="<?php echo esc_url( home_url('06_acestus'  ) ); ?>"><div class="ACestusLink"></div></a>
            </div>
          <?php else: ?>
            <div id="footerNav">
              <ul>
                <li style="color: silver;">-</li>
              </ul>  
            </div>
            <div class="brandLink">
              <div class="inekkaLinkNL" ></div>
              <div class="ACestusLinkNL"></div>
            </div>
          <?php endif; ?>
        </div>

        <!-- ***************************************** -->
        <!-- ***************************************** -->
        <!-- DigiCert Seal HTML -->
        <!-- Place HTML on your site where the seal should appear -->
        <div class="digiCertImg">
          <div id="DigiCertClickID_KbMS0Jnn"></div>

          <!-- DigiCert Seal Code -->
          <!-- Place with DigiCert Seal HTML or with other scripts -->
          <!-- <script type="text/javascript"> -->
          <script>
            var __dcid = __dcid || [];
            __dcid.push({"cid":"DigiCertClickID_KbMS0Jnn","tag":"KbMS0Jnn"});
            (function(){var cid=document.createElement("script");cid.async=true;cid.src="//seal.digicert.com/seals/cascade/seal.min.js";var s = document.getElementsByTagName("script");var ls = s[(s.length - 1)];ls.parentNode.insertBefore(cid, ls.nextSibling);}());
          </script>
        </div>
        <!-- ***************************************** -->
        <!-- ***************************************** -->

        <!-- ***************************************** -->
        <!-- ***************************************** -->
        <!-- W3C CSS Validation -->
        <!-- <a href="http://jigsaw.w3.org/css-validator/check/referer"> -->
        <!-- <div class="w3cValidation">
          <a href="<?php echo esc_url( get_template_directory_uri().'/WaPlusThemeLibrary/w3cValidation/w3cValidate.html' ); ?>" target="_blank" rel="noopener noreferrer">
            <img style="width:88px;height:31px"
                  src="<?php echo esc_url( get_template_directory_uri().'/WaPlusThemeLibrary/w3cValidation/images/vcss.gif' ); ?>"
                  alt="当該ホームページの「CSS」が正当である事を証明する画像" />
          </a>    
        </div> -->
        <!-- ***************************************** -->
        <!-- ***************************************** -->

        <div class="rightsNote"><p>Copyright © 2018 WaPlus Co., Ltd. All Rights Reserved.</p></div>
      </footer>

    </div>        <!-- 【comHeader.php】にて定義！ $pageWrapper / #pageWrapper -->

    <?php
        // ★【重要】WORDPRESSのお約束
        wp_footer();
    ?>

  </body>
</html>