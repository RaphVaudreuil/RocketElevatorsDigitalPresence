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
    $(document).keyup(function() {
        var estiComme = $('#numberShaftC').val();
        $('#estiComm').val(estiComme);
    });
       
    //Residential
    $(document).keyup(function() {
        var apResi = $('#numberApsR').val();
        var floorsResi = $('#numberFloorsR').val();
        var aveAps = apResi/floorsResi;
        var estiResid = apResi/6;
        $('#estiResi').val(Math.round(estiResid));
        $('#aveResi').val(Math.round(aveAps));
    
        if (apResi > 20) {
            $('#estiResi').val(Math.round(estiResid*2));
        };
    
        if (apResi > 40) {
            $('#estiResi').val(Math.round(estiResid*3));
        };
    
        if(apResi > 60) {
            $('#estiResi').val(Math.round(estiResid*4));
        };
    });

    //Hybrid or Corporate
    var occuH = $('#numberOccH').val();
    var occuC1 = $('#numberOccC1').val();
    var floorsH = $('#numberFloorsH').val();
    var floorsC1 = $('#numberFloorsC1').val();
    var basementsH = $('#numberBasementsH').val();
    var basementsC1 = $('#numberBasementsC1').val();
    var totalOccuH = occuH * (floorsH + basementsH);
    var totlaOccuC1 = occuC1 * (floorsC1 + basementsC1);



