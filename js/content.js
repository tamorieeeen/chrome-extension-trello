$(function(){
    setTimeout(function(){
        slimLists();
    }, 1500);
});

/*
  すべてのListが一画面で見えるようにする
 */
function slimLists() {
    // 画面サイズから左側のバーを引く
    const winWidth = jQuery(window).width() - 16;
    const listSize = $('#board > li').length;
    // 両側のpaddingを引く
    const listWidth = Math.floor((winWidth / listSize) - 6 * 2);
    $('#board > li').each(function(){
        $(this).width(listWidth + 'px');
        $(this).children('div').width(listWidth + 'px');
    });
}