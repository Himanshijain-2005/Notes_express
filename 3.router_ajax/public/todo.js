$(function() {
    let box = $('#intodo');
    let btn = $('#btn');
    let todoli = $('#todoli');

    btn.click(function() {
        let newto = box.val();
        // console.log(newto);
        $.post('/todoroutes', { task: newto }, function(data) {
            todoli.empty()
            for(todo of data)
            {
                todoli.append("<li>" + todo.task + "</li>")
            }
        });
    });
});
