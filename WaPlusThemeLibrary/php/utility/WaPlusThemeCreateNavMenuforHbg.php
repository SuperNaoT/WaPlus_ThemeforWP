

  <?php
    // 
    // *******************************************************
    // *******************************************************
    // ★ 「41．【メニュー】を実装しよう」《グローバルナビゲーションメニュー》
    // *******************************************************
    // *******************************************************
    // 【カスタムナビゲーションメニュー】全メニュー（親・子）定義可能数
    global $GB_maxNavMenuCount;
    // 【カスタマイズ】☛【外観】☛【メニュー】☛「メニュー名」
    global $GB_WaPlusGlobalNavMenu;

    // 
    // 【カスタマイズ】☛【外観】☛【色】☛「メニュー文字列カラー」取得
    $menuText_color = get_theme_mod( 'WP_MenuText_color', '#333333');

    // echo "<br> >>>>> Enter WaPlusThemeCreateNavMenuforHbg.php >>>>> \$GB_pageKind【" . $args['GB_pageKind'] . "】 <br>";
    // echo "<br> >>>>> Enter WaPlusThemeCreateNavMenuforHbg.php >>>>> \$menuText_color【" . $menuText_color . "】 <br>";
    // echo " ? \$GB_maxNavMenuCount【" . $GB_maxNavMenuCount . "】 <br>";
    // echo " ? \$GB_WaPlusGlobalNavMenu【" . $GB_WaPlusGlobalNavMenu . "】 <br>";

    // 
    // WordPressカスタマイザーにて設定の「グローバルナビゲーションメニュー名」を取得
    $menu_name = $GB_WaPlusGlobalNavMenu;

    for( $i=0 ; $i< $GB_maxNavMenuCount ; $i++ ) { $menuColor[$i]  = 'color: ' . $menuText_color . ' !important;'; }
                                          $menuColor[$args['GB_pageKind']] = 'color:limegreen !important;';
                                          $pageLink [$args['GB_pageKind']] = '#mainArea';
  
    //
    // グローバルナビゲーションメニューがない場合を想定
    //
    // a. WordPress「位置の管理」全メニューＩＤ情報
    if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {

        //
        // b.「全メニュー情報」から「個別メニューＩＤ情報」を取得
        $menuS = wp_get_nav_menu_object( $locations[ $menu_name ] );
        //
        // c.「個別メニューＩＤ情報」から「メニュー内個別項目情報」を取得
        $menu  = wp_get_nav_menu_items ( $menuS->term_id );


        $submenu       = false;
        $count         = 0;             // メインメニューカウンタ
        $parentMenuCnt = 0;             // 親メニューのみのカウンタ

        // 
        // 【メインメニュー】配下【サブメニュー】表示機能実装・・・
        // 【参考】：「https://qiita.com/Ficus/items/bbf3ad8b9922d4840952」
        // 
        foreach ( (array) $menu as $key => $menu_item ) {

          // 
          // ■ 親メニュー情報取得（コード出力）
          if ( !$menu_item->menu_item_parent )  {

            // echo "《親処理：" . $count . "》<br>";

            $parent_id  = $menu_item->ID;
            $title      = $menu_item->title;
            $url        = $menu_item->url;
            $curIDName  = 'menuPos-' . $parentMenuCnt;
                                       $parentMenuCnt++;
            //
            // ■ 表示ページが、お問い合わせ入力・確認ページ以外の場合
            if ( $GB_page_flag != 1 )  {
              $menu_list .= '<li>';
              $menu_list .= '<a style="' . $menuColor[$count] . '" href="' . $url . '" class="hbgrMenuElm">》' . $title . '</a></li>';              
            //
            // ■ 表示ページが、お問い合わせ入力・確認ページの場合、他のページには遷移させない！
            } else  {
              $menu_list .= '<li>》';
              $menu_list .= $title . '</li>';              
            }
          }

          // 
					// **********************************************************
					// **********************************************************
          // ■ サブメニュー有り時の一連の処理 
					// ★ 当該メニューの親メニューIDが先に出現のIDと「等しい」？
					// 「等しくない」：親メニュー処理中
          // 「等しい　　」：親メニューに対する子メニュー出現
					// **********************************************************
          if ( $parent_id == $menu_item->menu_item_parent )  {

            //      $chrChk = substr( $menu_list, -5 );    // -5
            // if ( $chrChk == '</li>' && !$submenu )  {
            //      $chrChk = substr( $menu_list, 0, (strlen($menu_list)-5 ) ); // '</li>'
            //   $menu_list = $chrChk;
            // }

						//
						// ■ 親メニューに対しての「初めてのサブメニュー」出現
            if ( !$submenu )  {
              $menu_list .= '<div class="subMenuDispPos">';
              $submenu    = true;
              // $menu_list .= '<ul>';
            }
            $submenu_url   = $menu_item->url;
            $submenu_title = $menu_item->title;

            //
            // ■ 表示ページが、お問い合わせ入力・確認ページ以外の場合
            if ( $GB_page_flag != 1 )  {
              $menu_list .= '<li><a style="' . $menuColor[$count] . '" href="' . $submenu_url . '" class="hbgrMenuElm">' . $submenu_title . '</a></li>';
            
            //
            // ■ 表示ページが、お問い合わせ入力・確認ページの場合、他のページには遷移させない！
            } else  {
              $menu_list .= '<li>' . $submenu_title . '</li>';
            }

            // 
            // ■ 当該メニューに関するサブメニューが終わった！
            if ( $menu[$count+1]->menu_item_parent != $parent_id && $submenu )  {
              // $menu_list .= '</ul></div></li>';
              $menu_list .= '</div>';
              // $menu_list .= '</li>';
              $submenu    = false; 
            }
          }
          $count++;
					// **********************************************************
					// **********************************************************
        }
        // $menu_list .= '</ul>①';
    } else {
        $menu_list = '<ul><li>Menu "' . $menu_name . '" not defined.</li></ul>';
    }
    echo $menu_list;

    $GB_NavMenuParentCount = $parentMenuCnt;
    // echo " <<<<< Exit- WaPlusThemeNavCreateMenuforHbg.php <<<<< <br>";                                       

  ?>