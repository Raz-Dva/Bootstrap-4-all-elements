$(document).ready(function() {
    // carousel
    $('.carousel').carousel({
        interval: 2000
    });
    //toltip
    $(function() {
        $('.tooltip-test').tooltip()
    });
    // popover 
    $(function() {
        $('.popover-test').popover();
        $('.popover-test').on('click', function(event) {
            event.preventDefault();
        });
    })

    //toast
    $('#callToast').on('click', function() {
            $('.toast').toast('show')
        })
        // preventDefault
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });
    // lib. clipboard.js https://clipboardjs.com/
    var btnClipboard = new ClipboardJS('#btn-copy', {
        target: function(trigger) {
            trigger.clearSelection;
            return trigger.nextElementSibling;
        }
    });
    btnClipboard.on('success', function(e) {
        e.clearSelection();
    });

    // modal copy code
    var $button = $("<div id='source-button' class='btn btn-success btn-md' title='Show source'> ≡≡ </div>").click(function() {
        var html = $(this).parent().html();
        html = cleanSource(html);
        $("#source-modal pre").text(html);
        $("#source-modal").modal();
        // 
    });

    function cleanSource(html) {
        var lines = html.split(/\n/);
        lines.shift();
        lines.splice(-1, 1);
        var indentSize = lines[0].length - lines[0].trim().length,
            re = new RegExp(" {" + indentSize + "}");
        lines = lines.map(function(line) {
            if (line.match(re)) {
                line = line.substring(indentSize);
            }
            return line;
        });
        lines = lines.join("\n");
        return lines;
    };
    // hover button
    $(".bs-component").hover(function() {
        $(this).append($button);
        $button.show();
    }, function() {
        $button.hide();
    });
}); // $(document).ready






var $button = $("<div id='source-button' class='btn btn-success btn-md' title='Show source'> ≡≡ </div>").click(function() {
    var html = $(this).parent().html();
    html = cleanSource(html);
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
    // 
});

function cleanSource(html) {
    var lines = html.split(/\n/);
    lines.shift();
    lines.splice(-1, 1);
    var indentSize = lines[0].length - lines[0].trim().length,
        re = new RegExp(" {" + indentSize + "}");
    lines = lines.map(function(line) {
        if (line.match(re)) {
            line = line.substring(indentSize);
        }
        return line;
    });
    lines = lines.join("\n");
    return lines;
};
// hover button
$(".bs-component").hover(function() {
    $(this).append($button);
    $button.show();
}, function() {
    $button.hide();
});