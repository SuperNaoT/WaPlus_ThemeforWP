<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WaPlusTheme
 */

  // 
  // *******************************************************
  // *******************************************************
  // ★ 【global：グローバル変数】の取込み
  // *******************************************************
  // *******************************************************

  // // 
  // // 当該固定ページ種別設定
  global $GB_pageKind;           // $GB_menuPos;
  global $GB_page_flag;

  // 表示対象ページ・メニュー種別
  $GB_pageKind  = 0;    // front-page：0
  // 
  // ■ お問い合わせフォーム・状態フラグ
  //   ☛ ０：入力フォームページ
  //   ☛ １：入力内容確認ページ
  //   ☛ ２：送信完了報告ページ
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

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			// if ( comments_open() || get_comments_number() ) :
			// 	comments_template();
			// endif;

		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php
	get_sidebar();
	get_footer( null, $params );
