<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WaPlusTheme
 */

get_header();
?>

	<main id="primary" class="site-main">

		<?php

echo " >>>>> Enter index.php >>>>><br>";

		//
		// 投稿記事データある？ 
		if ( have_posts() ) :

echo "①<br>";

			// 
			// 投稿記事は、トップページか否か？
			if ( is_home() && ! is_front_page() ) :

echo "②<br>";

				?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
				<?php
			endif;

			// 
			// 投稿記事一覧表示ループ
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				/*
				 * Include the Post-Type-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Type name) and that will be used instead.
				 */
				get_template_part( 'template-parts/content', get_post_type() );

			endwhile;

			// 
			// ページネーション機能実現（WordPress関数）
			the_posts_navigation();

echo "③<br>";


		else :

echo "④<br>";

			// 
			// 投稿記事無し
			get_template_part( 'template-parts/content', 'none' );

		endif;
		?>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
