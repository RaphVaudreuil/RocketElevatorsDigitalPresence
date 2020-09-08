//Hide show the questions depending on the building's type
$(document).ready(function () {
    $('.building_type').hide();
    
    $('#selectMe').change(function () {
        $('.building_type').hide();
        $('#'+$(this).val()).show();
    })
});

//Estimation of the number of required cages 

    //Commercial
    var estiComme = $('#numberShaftsC').val();

    //Residential
    var apResi = $('#numberApsR').val();
    var floorsResi = $('#numberFloorsR').val();
    var apPerFloors = apResi/floorsResi; 
    var estiResi = apResi/6;
    


