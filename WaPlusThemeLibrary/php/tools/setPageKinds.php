<?php
  // 
  // *******************************************************
  // *******************************************************
  // ★ 【global：グローバル変数・メニューポジション】の取込み
  // *******************************************************
  // *******************************************************
        global $GB_pageKind;

        // echo "【setHeaderKinds.php】\$GB_pageKind ☛【". $GB_pageKind . "】\n";

        // 
        // これら「メニュー位置とページ制御用フラグ」は、
        // グローバル変数化して呼出し元にて定義、ここで受ける。
        //
        switch( $GB_pageKind )  {

          // トップページ向け設定
          case 0:
            // ヘッダー部向け設定
            $titleMsg    = "This THEME was made for the standard the projects of WaPlus Co.,Ltd. . | ";
            $descriptMsg = "If you order to create your WEB-SITE, we will start tto create it based on this THEME.";
            // ページ本体向け設定
            $pageWrapper = "mainContents";
            // 
            // ギャラリー機能、写真種別設定フラグ
            // ギャラリー保有固定ページ、bodyタグに設定される
            // 「-all」：全画像等
            $galleryFlg  = "";
            break;
          
          // 企業理念ページ向け設定
          case 1:
            $titleMsg    = "企業理念 | 事業支援【和】のフィルターを通して、更に大きな魅力に創造します |";
            $descriptMsg = "和Plusの企業理念は【笑顔創造企業】、お客様・ビジネスパートナー様・他、関係する方の、多くの笑顔を導き出す為の事業を真摯に行う、と言う事です。「１．海外にあって日本国内には無いもの」「２．日本国内にあって海外には無いもの」。【和Plus】このフィルタを透過させる事により、小さな「Plus-α」を加え「更に大きな魅力」に創造し、その存在価値を見出して参ります";
            $pageWrapper = "philosophyContents";
            $galleryFlg  = "";
            break;

          // 経営支援ページ向け設定
          case 2:
            $titleMsg    = "経営支援| 起業家の【熱い想いの実現に集中出来る環境】創りを応援します |";
            $descriptMsg = "【実現したい！】その熱い想いを【経営支援】と言う形でサポート致します。【想いの実現に集中出来る環境】創りが大切です。財務・会計・人事等の付随作業、更にはマーケティング・営業コンサルティング、そして商品開発迄、鋭意支援をさせて頂きます。先ずは【想い貯めている構想】を形にして下さい";
            $pageWrapper = "manageSupContents";
            $galleryFlg  = "";
            break;

          // IT WEB ソリューションページ向け設定
          case 3:
            $titleMsg = "IT WEB ソリューション | スクラッチ開発から WordPress開発迄 | ホームページ制作についてはお任せ下さい |";
            $descriptMsg = "「IT 技術」を駆使しより発展的事業展開を為せるインフラ環境構築、またホームページ開発については「スクラッチ」での開発から「WordPress」環境を用いた開発迄。他にはパソコントラブルの対応と、ITインフラ関連の事なら大小問わず何でもお任せ下さい";
            $pageWrapper = "ITWebSolContents";
            $galleryFlg  = "";
            break;

          // IT WEB 開発実績ページ向け設定
          case 30:
            $titleMsg = "IT WEB 開発実績 | 30年以上に渡る開発実績を基に、多様な情報発信の為のサイトを構築致します |";
            $descriptMsg = "国内外ITベンダーでの豊かな経験を活かし、発展的事業展開を為せるインフラ環境構築から、またホームページ開発については「スクラッチ」での開発から「WordPress」環境を用いた開発迄。他にはパソコントラブルの対応とITインフラ関連の事なら大小問わず何でも、丁寧に対応致します";
            $pageWrapper = "mainContents";
            $galleryFlg  = "";
            break;

          // オリジナル商品販売ページ向け設定
          case 4:
            $titleMsg = "オリジナル商品販売 |";
            $descriptMsg = "２つのブランド【i-nekka・いーねっか】と【Aphrodite Cestus】、その向こうに見える【たくさんの笑顔】の為に・・・。「海外に有って日本には無い様々な魅力（From oversea）」「日本に有って海外にな無い様々な魅力（From Japan）」。これらに少しだけ「和Plus」のエッセンスを加え、　より魅力的なお品として創造し、お届けして参ります";
            $pageWrapper = "orgPrdSalesContents";
            $galleryFlg  = "";
            break;

          // i-nekka：大人の素敵雑貨ページ向け設定
          case 5:
            $titleMsg = "i-nekka「大人の素敵雑貨」| 手芸作品「ニット・刺し子・レース編み」販売 | いーねっか |";
            $descriptMsg = "【i-nekka・いーねっか】オリジナルのお品の数々・・・「素敵な大人の女性を演出したい、一助となりたい」「手に取って頂けたとき、思わず笑顔が広がる様に」。こんな気持ちを込めて一つ一つ丁寧に手作りしています。一瞬でも、気持ちが華やいで頂けたらとても嬉しい・・・　「それ、とても【いーねっか】」";
            $pageWrapper = "iNekkaDetailContents";
            // 
            // ギャラリー機能、写真種別設定フラグ
            // ギャラリー保有固定ページ、bodyタグに設定される
            // 「-all」：全画像等
            $galleryFlg  = "-all";
            break;

          // i-nekka：大人の素敵雑貨・オンラインショップご案内ページ向け設定
          case 12:
            $titleMsg = "i-nekka「大人の素敵雑貨」| 手芸作品「ニット・刺し子・レース編み」販売 | いーねっか |";
            $descriptMsg = "【i-nekka・いーねっか】オリジナルのお品の数々・・・「素敵な大人の女性を演出したい、一助となりたい」「手に取って頂けたとき、思わず笑顔が広がる様に」。こんな気持ちを込めて一つ一つ丁寧に手作りしています。オンラインショップにてお分けして居ります。是非一度ご訪問下さいませ。宜しくお願い致します。";
            $pageWrapper = "iNekkaOLShopContents";
            $galleryFlg  = "オリジナルのお品の数々・・・　気持ちを込めて一つ一つ丁寧に手作りしています。オンラインショップにてお届けして居ります。宜しくお願い致します。";
            break;

          // ACestus：クロコダイルアイテムページ向け設定
          case 6:
            $titleMsg = "Aphorodite Cestus「クロコダイルアイテム」 |";
            $descriptMsg = "【Aphrodite Cestus・アフロディーテケストス】オリジナルのお品の数々・・・「素敵な大人の女性を演出したい、一助となりたい」「手に取って頂けたとき、思わず笑顔が広がる様に」。素敵な瞬間・出会いのために思いを込めて、一つ一つデザインから縫製まで丁寧に仕上げております。ご期待下さい";
            $pageWrapper = "ACestusDetailContents";
            // 
            // ギャラリー機能、写真種別設定フラグ
            // ギャラリー保有固定ページ、bodyタグに設定される
            // 「-all」：全画像等
            $galleryFlg  = "-all";
            break;

          // <category> ご案内ページ向け設定
          case 7:
            $titleMsg    = "お知らせ | 新着のご案内です |";
            $descriptMsg = "「皆様の笑顔に沢山出会いたい」その為の新着ニュースをお届け致します";
            $pageWrapper = "newsContents";
            // $pageWrapper = "postsContents";
            $galleryFlg  = "";
            break;

          // <category> ブログ日記ページ向け設定
          case 8:
            $titleMsg = "ブログ日記 | 活動をご紹介致します |";
            $descriptMsg = "「皆様の笑顔に沢山出会いたい」その為に沢山活動して参りました。　その足跡をお届け致します";
            $pageWrapper = "blogContents";
            // $pageWrapper = "postsContents";
            $galleryFlg  = "";
            break;

          // <category> 技術の種ブログページ向け設定
          case 31:
            $titleMsg = "技術の種 |";
            $descriptMsg = "テクニカルトピックをお届け致します！";
            $pageWrapper = "techContents";
            // $pageWrapper = "postsContents";
            $galleryFlg  = "";
            break;

          // <category> 技術の種ブログページ向け設定
          case 32:
            $titleMsg = "使い方 |";
            $descriptMsg = "当サイトの「投稿方法」等、使い方のご案内です";
            $pageWrapper = "howToContents";
            // $pageWrapper = "postsContents";
            $galleryFlg  = "";
            break;

          // <single> 個別投稿ページ向け設定
          case 33:
            // $titleMsg = "最新ニュース・投稿記事 |";
            $titleStr    = get_the_title();
            $descriptMsg = get_the_title();
            $titleMsg    = $titleStr . " |";
            $pageWrapper = "postPageContents";
            $galleryFlg  = "";
            break;

          //  会社概要ページ向け設定
          case 9:
            $titleMsg    = "会社概要 |";
            $descriptMsg = "会社に関するご案内です";
            $pageWrapper = "cpProfileContents";
            $galleryFlg  = "";
            break;

          // 個人情報保護指針ページ向け設定
          case 10:
            $titleMsg = "Privacy policy | 個人情報保護指針 |";
            $descriptMsg = "弊社での個人情報保護指針に成ります";
            $pageWrapper = "privacyPolicyContents";
            $galleryFlg  = "";
            break;

          // お問い合わせページ向け設定
          case 11:
            $titleMsg    = "お問い合わせ |";
            $descriptMsg = "お問い合わせ・ご相談はこちらから。";
            $pageWrapper = "contactFormContents";
            $galleryFlg  = "";
            break;

          // 投稿記事検索結果ページ向け設定
          case 405:
            $titleMsg = "投稿記事 | 検索結果をご案内致します |";
            $descriptMsg = "「ご興味のある投稿記事」検索結果です。　ご希望に有っていると嬉しいのですが・・・";
            $pageWrapper = "searchResultContents";
            $galleryFlg  = "";
            break;

          // その他ページ向け設定
          default:
            $titleMsg    = "笑顔創造 | We will change charms much more! |";
            $descriptMsg = "笑顔創造企業 | 経営支援の成功実績2件、やりたい事支援をさせて頂きます |";
            $pageWrapper = "mainContents";
            $galleryFlg  = "";
        }

?>
