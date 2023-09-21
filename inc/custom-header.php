<?php
/**
 * Sample implementation of the Custom Header feature
 *
 * You can add an optional custom header image to header.php like so ...
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
// 		1．「custom-header」として、ヘッダー部のサイズを指定
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
// echo "<br><br><br>>>>>> start custom-header.php >>>>><br>";
//　？？？？？？？？？？？？？？？？？？

/**
 * Set up the WordPress core custom header feature.
 * 
 * ■ 当該テーマ、ヘッダー部に関する定義
 * 　【外観】☛【カスタマイズ】☛【ヘッダー画像】にて指定する画像の条件を定義。
 *
 * @uses waplustheme_header_style()
 * 
 * 【ORIGINAL Settings】
 * ffffff
 * 1000
 * 250
 * true
 */
function waplustheme_custom_header_setup() {
	// echo "<br>>>>>> Enter waplustheme_custom_header_setup() >>>>><br>";
	add_theme_support(
		'custom-header',
		apply_filters(
			'waplustheme_custom_header_args',
			array(
				'default-image'      => '',
				'default-text-color' => '112233',
				'width'              => 1170,
				'height'             => 110,
				'flex-height'        => false,
				'wp-head-callback'   => 'waplustheme_header_style',
			)
		)
	);
	// echo "<<<<< exit  waplustheme_custom_header_setup() <<<<<<br>";
}
add_action( 'after_setup_theme', 'waplustheme_custom_header_setup' );

// 
// ■ 「function.php」にて WordPress テーマカスタマイザーに、
// 　【外観】☛【カスタマイズ】☛【色】☛【ヘッダー背景色】が追加されて居る！
// 
// 　☛ 設定した【ヘッダー背景色】、
// 　☛【外観】☛【カスタマイズ】☛【ヘッダー画像】、この二つを取込み反映させる
// 
// 【参考】「https://fantastech.net/theme-customizer-color」
// 
function customizer_header() {
	// echo "<br>>>>>> Enter customizer_header( custom-header.php ) >>>>><br>";

	// 
	// 初期値と共に、上記カスタム項目として追加した「ヘッダー背景色」の「ID」を用いて値を取得する
	$header_background_color = get_theme_mod( 'WPheader_background_color', '#f6f6f6');
	// echo "　? header_background_color 【" . $header_background_color . "】<br>";
	
	$header_background_image = get_header_image();
	// echo "　? background_image 【" . $header_background_image . "】<br>";
	?>

	<!-- <header>タグの背景色に設定 -->
	<!-- ここは、「CSS変数を用いて、美しくコーディングしたい！」 -->
	<style type="text/css">
		/* ヘッダー */
		header {
			background-color: <?php echo $header_background_color; ?>;
			background-image: url( <?php echo $header_background_image; ?> );
		}
	</style>

	<?php

	// echo "<<<<< Exit  customizer_header() <<<<<<br>";
}
add_action( 'wp_head', 'customizer_header');
// 
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー 
// 



// 
// ■ 上記、カスタムヘッダーセットアップにて定義したコールバック関数を定義
// 
if ( ! function_exists( 'waplustheme_header_style' ) ) :
	/**
	 * Styles the header image and text displayed on the blog.
	 *
	 * @see waplustheme_custom_header_setup().
	 */
	function waplustheme_header_style() {

//　？？？？？？？？？？？？？？？？？？
// echo "<br> >>>>> Enter waplustheme_header_style() >>>>><br>";
//　？？？？？？？？？？？？？？？？？？

		$header_text_color = get_header_textcolor();

		/*
		 * If no custom options for text are set, let's bail.
		 * get_header_textcolor() options: Any hex value, 'blank' to hide text. Default: add_theme_support( 'custom-header' ).
		 * 
		 * 【外観】☛【カスタマイズ】☛【色】☛【ヘッダーテキスト色】を未設定だと、ここで終了する。
		 * 【外観】☛【カスタマイズ】☛【色】☛【ヘッダーテキスト色】を設定してあると、処理は継続される。
		 */
		if ( get_theme_support( 'custom-header', 'default-text-color' ) === $header_text_color ) {
			return;
		} else  {

//　？？？？？？？？？？？？？？？？？？
// echo "　！《設定済み》【外観】☛【カスタマイズ】☛【色】☛【ヘッダーテキスト色】<br>";
// echo "　　　　　　　　【header_text_color】☛【" . $header_text_color . "】<br>";
//　？？？？？？？？？？？？？？？？？？

		}

		/*
		 * ■ 「カスタマイズ > サイト基本情報」の設定項目「サイトのタイトルとキャッチフレーズを表示」を有効にしたうえで、
		 * 　【外観】☛【カスタマイズ】☛【色】☛【ヘッダーテキスト色】を使うう事が出来る様になる！
		 * 
		 */
		// If we get this far, we have custom styles. Let's do this.
		?>
		<style type="text/css">
		<?php
		// Has the text been hidden?

		if ( ! display_header_text() ) :
			?>
			.site-title,
			.site-description {
				position: absolute;
				clip: rect(1px, 1px, 1px, 1px);
				}
			<?php
			// If the user has set a custom color for the text use that.
		else :
			?>
			.site-title,
			.site-description {
				/* color: #dd3333; */
				color: #<?php echo esc_attr( $header_text_color ); ?>;
			}
		<?php endif; ?>
		</style>
		<?php

//　？？？？？？？？？？？？？？？？？？
// echo " <<<<< exit  waplustheme_header_style(②) <<<<< <br>";
//　？？？？？？？？？？？？？？？？？？

	}
endif;

//　？？？？？？？？？？？？？？？？？？
// echo "<<<<< Exit  custom-header.php <<<<<<br>";
//　？？？？？？？？？？？？？？？？？？
