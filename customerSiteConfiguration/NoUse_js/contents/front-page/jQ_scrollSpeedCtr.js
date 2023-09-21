
  // 
  // ******************************************************************
  //  ■ スクロールスピード制御
  // 【参考】「https://into-the-program.com/mousewheel-scroll-smooth/」
  // ******************************************************************
  $( document ).ready( function() {
    console.log( " >>>>> Enter jQ_scrollSpeedCtr.js >>>>> \n" );
    $('#sideScrollArea').easeScroll({
      animationTime: 10000
    });
    console.log( " <<<<< Exit- jQ_scrollSpeedCtr.js <<<<< \n" );
  });
