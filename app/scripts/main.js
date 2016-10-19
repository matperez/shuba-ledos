'use strict';

$(function() {

    $(document).on('submit', '[rel=customer-form]', function() {
        var $form = $(this);
        var data = $form.serialize();
        alert(data);
        return false;
    });

    
});