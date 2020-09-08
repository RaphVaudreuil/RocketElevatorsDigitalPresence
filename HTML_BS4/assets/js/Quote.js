//Hide show the questions depending on the building's type
$(document).ready(function () {
    $('.building_type').hide();
    
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});


