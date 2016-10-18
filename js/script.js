$(document).ready(function () {
    
    'use strict';
    console.log("jQuery is ready");

    window.onload = function () {
        $('#btnTranslate').on('click', translateText); 
        $('#result').html('What would you like me to translate?'.toUpperCase());
    };
    

    function translateText() {
        var textToTranslate = $('#textToTranslate').val();
        var url = "https://yoda.p.mashape.com/yoda?sentence=" + textToTranslate;
        console.log(url);
        $.ajax({
            url: url,
            headers: {
                "X-Mashape-Key": "EFbijzu2EtmshbWxfW2JbLHhSIomp1LPQVzjsnIMtAfgpnlhdL"
            },
            success: function (result) {
                console.log(result);
                $('#result').html(result.toUpperCase());
            }
        });
    }
});

