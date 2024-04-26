// 示例：添加一个点击事件，当点击标题时，切换对应内容的显示与隐藏
document.querySelectorAll('h2').forEach(function(h2) {
    h2.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
