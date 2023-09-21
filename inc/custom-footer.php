<?php
/**
 * Sample implementation of the Custom Footer feature
 *
 * You can add an optional custom footer image to footer.php like so ...
 *
	<?php the_header_image_tag(); ?>
 *
 * @link https://developer.wordpress.org/themes/functionality/custom-headers/
 *
 * @package WaPlusTheme
 */

// 
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ■ カスタムヘッダーはWordPress2.1より搭載された機能で、
// 　選択された画像をテーマのヘッダー部分にサイトを象徴するイメージ
// 　として掲載する機能
// 
// ★ 当関数の機能一覧
// 		1．「custom-footer」として、ヘッダー部のサイズを指定
// 		2．更に、ヘッダー内表示文字列の色を、テーマカスタマイザー設定情報から取得する
// 				クラス「.site-title」
// 				クラス「.site-description」に設定される
// 
// 【参考】「https://olein-design.com/blog/add-custom-header-on-underscores」
// 【参考】「https://web-souko.com/custom-header/」
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// 

// //　？？？？？？？？？？？？？？？？？？
// echo "<br><br><br>>>>>> start custom-footer.php >>>>><br>";
//　？？？？？？？？？？？？？？？？？？

/**
 * Set up the WordPress core custom footer feature.
 * 
 * ■ 当該テーマ、ヘッダー部に関する定義
 * 　【外観】☛【カスタマイズ】☛【ヘッダー画像】にて指定する画像の条件を定義。
 *
 * @uses waplustheme_footer_style()
 * 
 * 【ORIGINAL Settings】
 * ffffff
 * 1000
 * 250
 * true
 */
function waplustheme_custom_footer_setup() {
	// echo "<br>>>>>> Enter waplustheme_custom_footer_setup() >>>>><br>";
	add_theme_support(
		'custom-footer',
		apply_filters(
			'waplustheme_custom_footer_args',
			array(
				'default-image'      => '',
				'default-text-color' => '112233',
				'width'              => 1170,
				'height'             => 110,
				'flex-height'        => false,
				'wp-head-callback'   => 'waplustheme_footer_style',
			)
		)
	);
	// echo "<<<<< exit  waplustheme_custom_footer_setup() <<<<<<br>";
}
add_action( 'after_setup_theme', 'waplustheme_custom_footer_setup' );

// 
// ■ 「function.php」にて WordPress テーマカスタマイザーに、
// 　【外観】☛【カスタマイズ】☛【色】☛【ヘッダー背景色】が追加されて居る！
// 
// 　☛ 設定した【ヘッダー背景色】、
// 　☛【外観】☛【カスタマイズ】☛【ヘッダー画像】、この二つを取込み反映させる
// 
// 【参考】「https://fantastech.net/theme-customizer-color」
// 
function customizer_footer() {
	// echo "<br>>>>>> Enter customizer_footer( custom-footer.php ) >>>>><br>";

	// 
	// 初期値と共に、上記カスタム項目として追加した「ヘッダー背景色」の「ID」を用いて値を取得する
	$footer_background_color = get_theme_mod( 'WPfooter_background_color', '#f6f6f6');
	// echo "　? footer_background_color 【" . $footer_background_color . "】<br>";
	
	// $footer_background_image = get_footer_image();
	// echo "　? background_image 【" . $footer_background_image . "】<br>";
	?>

	<!-- <header>タグの背景色に設定 -->
	<!-- ここは、「CSS変数を用いて、美しくコーディングしたい！」 -->
	<style type="text/css">
		/* ヘッダー */
		footer {
			background-color: <?php echo $footer_background_color; ?> !important;
			/* background-image: url( <?php // echo $footer_background_image; ?> ); */
		/* } */
	</style>

	<?php

	// echo "<<<<< Exit  customizer_footer() <<<<<<br>";
}
add_action( 'wp_footer', 'customizer_footer');
// 
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー 
// 



// 
// ■ 上記、カスタムヘッダーセットアップにて定義したコールバック関数を定義
// 
if ( ! function_exists( 'waplustheme_footer_style' ) ) :
	/**
	 * Styles the footer image and text displayed on the blog.
	 *
	 * @see waplustheme_custom_footer_setup().
	 */
	function waplustheme_footer_style() {}
endif;

//　？？？？？？？？？？？？？？？？？？
// echo "<<<<< Exit  custom-footer.php <<<<<<br>";
//　？？？？？？？？？？？？？？？？？？
