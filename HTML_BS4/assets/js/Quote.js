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
    $(document).click(function() {
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
    $(document).click(function() {
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

    //Hybrid
    $(document).keyup(function() {
        var occuH = $('#numberOccH').val();
        var floorsH = $('#numberFloorsH').val();
        var basementsH = $('#numberBasementsH').val();
        var totalOccuH = occuH * (floorsH + basementsH);
        var eleH = totalOccuH/1000;
        var colH = (floorsH + basementsH)/20;
        var ElePerColH = eleH/colH;
        var estiHybrid = ElePerColH * colH;
        $('#estiHyb').val(Math.round(estiHybrid));
    });
    $(document).click(function() {
        var occuH = $('#numberOccH').val();
        var floorsH = $('#numberFloorsH').val();
        var basementsH = $('#numberBasementsH').val();
        var totalOccuH = occuH * (floorsH + basementsH);
        var eleH = totalOccuH/1000;
        var colH = (floorsH + basementsH)/20;
        var ElePerColH = eleH/colH;
        var estiHybrid = ElePerColH * colH;
        $('#estiHyb').val(Math.round(estiHybrid));
    });

    //Corporate
    $(document).keyup(function() {
        var occuC1 = $('#numberOccC1').val();
        var floorsC1 = $('#numberFloorsC1').val();
        var basementsC1 = $('#numberBasementsC1').val();
        var totlaOccuC1 = occuC1 * (floorsC1 + basementsC1);
        var eleC1 = totlaOccuC1/1000;
        var colC1 = (floorsC1 + basementsC1)/20;
        var ElePerColC1 = eleC1/colC1;
        var estiCorpo = ElePerColC1 * colC1;
        $('#estiCorp').val(Math.round(estiCorpo));
    });
    $(document).click(function() {
        var occuC1 = $('#numberOccC1').val();
        var floorsC1 = $('#numberFloorsC1').val();
        var basementsC1 = $('#numberBasementsC1').val();
        var totlaOccuC1 = occuC1 * (floorsC1 + basementsC1);
        var eleC1 = totlaOccuC1/1000;
        var colC1 = (floorsC1 + basementsC1)/20;
        var ElePerColC1 = eleC1/colC1;
        var estiCorpo = ElePerColC1 * colC1;
        $('#estiCorp').val(Math.round(estiCorpo));
    });

    //UNIT PRICE PER ELEVATOR DEPENDING ON THE RANGE
        //Commercial
        $(document).click(function() {
            if ($("#standardComm").is(":checked")) {

                $('#unitComm').val(7565);
    
            }   else if ($("#premiumComm").is(":checked")) {
    
                $('#unitComm').val(12500);
    
            } else if ($("#exceliumComm").is(":checked")) {
    
                $('#unitComm').val(12345);
    
            }
        });   
