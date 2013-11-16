;(function() {

    function runCode() {
        var code = $('#editor').val();

        $.ajax('index.php', {
            type: 'POST',
            data: {
                code: code,
                lang: 'php'
            }
        }).done(function(data) {
            $('#output').html(data);
        });
    }

    function initAceEditor() {
        var editor = ace.edit('editor');
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/php");
    }

    $(function() {

        initAceEditor();

        $('#btnRun').click(function(event) {
            event.preventDefault();
            runCode();
        });

    });


})(jQuery);
