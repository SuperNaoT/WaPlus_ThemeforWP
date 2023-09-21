<?php
/**
 * WaPlusTheme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WaPlusTheme
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function waplustheme_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on WaPlusTheme, use a find and replace
		* to change 'waplustheme' to the name of your theme in all the template files.
		*/
	//
	// ■ 多言語翻訳用設定：テーマ翻訳ファイルをロード 
	// 　国際化したWordPressテーマには、翻訳ファイルを格納しますので、
	// 　エラーなく翻訳ファイルが読み込まれるようfunctions.phpに命令を記述します。
	// 　テーマ翻訳ファイルを読み込みます。
	// 
	// 【参考】「https://www.appleach.co.jp/kobanashi/web/2863/」
	// 　※ 要確認
	//  
	load_theme_textdomain( 'waplustheme', get_template_directory() . '/languages' );

	// 
	// Add default posts and comments RSS feed links to head.
	// RSSフィードをコントロールする為の設定
	// 
	// 【参考】「https://seous.info/wp-customize/5335」
	// 　※ 要確認
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	// 
	// ■ <head>タグ内記述の<title>タグ定義内容を表示させる他の方法（こちらが推奨されている）
	// 　※ 要確認
	// 
	add_theme_support( 'title-tag' );

	// 
	// ■ 【外観】☛【カスタマイズ】☛【カスタムヘッダー】を可能にする、とあるが・・・
	// 　※ 要確認：「https://web-souko.com/custom-header/」
	// 　　 今のWordPressバージョンでは【ヘッダー画像】と言うメニューが既にある！
	// 
	// add_theme_support( 'custom-header' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	// 
	// ■ テーマカスタマイザー・管理画面：メニューでの「ナビゲーションメニュー」構築可能とする定義
	//  （「メニューの位置」の識別子' => 'メニューの説明の文字列' ）
	// 
	register_nav_menus(
		array(
			'GlobalHeaderNavMenu' => esc_html__( 'グローバル・ヘッダーメニュー', 'waplustheme' ),
			'GlobalFooterNavMenu' => esc_html__( 'グローバル・フッターメニュー', 'waplustheme' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	// 
	// ■ WordPressコアから出力されるHTMLタグをHTML5のフォーマットにする定義
	// 【参考】「https://qiita.com/gatespace/items/d6419b0b7e49c98ce829」
	// 
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// 
	// Set up the WordPress core custom background feature.
	// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
	// ■ テーマカスタマイザー・管理画面：背景を変更可能にする為の設定
	// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
	// 
	// 【参考】「https://web-souko.com/wp-custom-background/」
	// 　※ 要確認
	// 
	add_theme_support(
		'custom-background',
		apply_filters(
			'waplustheme_custom_background_args',
			array(
				'default-color' => '#f6f6f6',
				'default-image' => '',
			)
		)
	);

	// 
	// Add theme support for selective refresh for widgets.
	// ■ テーマカスタマイザー・管理画面：ウィジェットを設置した際に自動でリフレッシュ（見た目の更新）を実行してくれる。
	// 
	// 【参考】「https://qiita.com/gatespace/items/d6419b0b7e49c98ce829」
	// 
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	// 
	// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
	// ■ テーマカスタマイザー・管理画面：サイト基本情報にてロゴの定義を可能にしてくれる。
	//   サイトロゴ：【外観】☛【カスタマイズ】☛【サイト基本設定】☛【ロゴ】
	// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
	// 	// 
	// 【参考】「https://qiita.com/gatespace/items/d6419b0b7e49c98ce829」
	// 
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 1032, // 250,
			'width'       =>  300, // 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'waplustheme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
// 
// ■ 動画や写真を投稿する際のコンテンツの最大幅を設定
// 
// 【参考】「https://olein-design.com/blog/my-functions-php」
// 　※ 要確認
// 
function waplustheme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'waplustheme_content_width', 640 );
}
add_action( 'after_setup_theme', 'waplustheme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
// 
// ■ テーマカスタマイザー・管理画面：ウィジェットでの「サイドバー」を定義
// 
function waplustheme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'waplustheme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'waplustheme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'waplustheme_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function waplustheme_scripts() {
	wp_enqueue_style ( 'waplustheme-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'waplustheme-style', 'rtl', 'replace' );

	wp_enqueue_script( 'waplustheme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'waplustheme_scripts' );

// 
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー 
// 
// ■ 下記コードを追加すると、WordPress テーマカスタマイザーに、独自設定項目を追加できる
// 　☛【外観】☛【カスタマイズ】☛【色】☛【ヘッダー背景色】を追加！
// 
// 【参考】「https://fantastech.net/theme-customizer-color」
// 
function theme_customizer_extension($wp_customize) {

	// ヘッダー部背景色
	$wp_customize->add_setting( 'WPheader_background_color', array(
		'default' => '#f6f6f6',
	));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'WPheader_background_color', array(
		'label' => 'ヘッダー背景色',
		'section' => 'colors',
		'settings' => 'WPheader_background_color',
		'priority' => 20,
	)));

	// フッター部背景色
	$wp_customize->add_setting( 'WPfooter_background_color', array(
		'default' => '#f6f6f6',
	));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'WPfooter_background_color', array(
		'label' => 'フッター背景色',
		'section' => 'colors',
		'settings' => 'WPfooter_background_color',
		'priority' => 20,
	)));
	
	// メニュー文字列カラー指定
	$wp_customize->add_setting( 'WP_MenuText_color', array(
		'default' => '#333333',
	));
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'WP_MenuText_color', array(
		'label' => 'メニュー文字列カラー',
		'section' => 'colors',
		'settings' => 'WP_MenuText_color',
		'priority' => 20,
	)));

}
add_action('customize_register', 'theme_customizer_extension');

function customizer_color() {
	// echo "<br>>>>>> Enter customize_color( function.php ) >>>>><br>";
	 
	// 元々WordPressが持って居る背景色の情報を取得
	// 　☛【外観】☛【カスタマイズ】☛【色】☛【背景色】
	$background_color = get_theme_mod( 'background_color', '#000');
	// echo "　? background_color 【" . $background_color . "】<br>";

	// echo "<<<<< Exit  customize_color() <<<<<<br>";
}
add_action( 'wp_head', 'customizer_color');
// 
// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー 
// 


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Implement the Custom Footer feature.
 */
require get_template_directory() . '/inc/custom-footer.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

// 
// *******************************************************
// *******************************************************
// ★ モバイル or パソコン判定
// *******************************************************
// *******************************************************
// require_once get_theme_file_path( '/WaPlusCfg/common-php/Mobile_Detect.php' );
require_once( get_template_directory() . '/WaPlusThemeLibrary/php/tools/Mobile_Detect.php' );

// 
// *******************************************************
// *******************************************************
// ★ 「和プラス標準テーマ」【グローバル変数値定義ファイル】の取込み
// *******************************************************
// *******************************************************
require_once( get_template_directory() . '/WaPlusThemeLibrary/php/WaPlusThemeGlobalVariablesDef.php' );

// 
// *******************************************************
// *******************************************************
// ★ 「和プラス標準テーマ」【JavaScriptファイル】の取込み
// *******************************************************
// *******************************************************
require_once( get_template_directory() . '/WaPlusThemeLibrary/php/WaPlusThemeJavaScript.php' );

// 
// *******************************************************
// *******************************************************
// ★ 「和プラス標準テーマ」【スタイルシート】の取込み
// *******************************************************
// *******************************************************
require_once( get_template_directory() . '/WaPlusThemeLibrary/php/WaPlusThemeStyleSheet.php' );

// 
// *******************************************************
// *******************************************************
// ★【カスタマーサイト独自JavaScriptファイル】の取込み
// *******************************************************
// *******************************************************
// require_once( get_template_directory() . '/wp-config/common-php/myJavaScript.php' );

// 
// *******************************************************
// *******************************************************
// ★【カスタマーサイト独自スタイルシート】の取込み
// *******************************************************
// *******************************************************
// require_once( get_template_directory() . '/wp-config/common-php/myStyleSheet.php' );
  
