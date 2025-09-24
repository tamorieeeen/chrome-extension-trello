$(function(){
    setTimeout(function(){
        slimLists();
    }, 1500);
});

/*
  すべてのListが一画面で見えるようにする
 */
function slimLists() {
    const winWidth = $(window).width();
    // もう1つリストを追加分は隠す
    const listSize = $('#board > li').length -1;
    // 両側のpaddingを引く
    const listWidth = Math.floor((winWidth / listSize) - 6 * 2);
    $('#board > li').each(function(){
        $(this).width(listWidth + 'px');
        $(this).children('div').width(listWidth + 'px');
    });
}
