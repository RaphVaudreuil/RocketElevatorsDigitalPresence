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
        var aveAps = Math.ceil(apResi/floorsResi);
        var estiResid = Math.ceil(aveAps/6);
        var colResi = Math.ceil(floorsResi/20);
        var total = colResi * estiResid;
        $('#estiResi').val(Math.ceil(total));
        $('#aveResi').val(Math.ceil(aveAps)); 
    });
    $(document).click(function() {
        var apResi = $('#numberApsR').val();
        var floorsResi = $('#numberFloorsR').val();
        var aveAps = Math.ceil(apResi/floorsResi);
        var estiResid = Math.ceil(aveAps/6);
        var colResi = Math.ceil(floorsResi/20);
        var total = colResi * estiResid;
        $('#estiResi').val(Math.ceil(total));
        $('#aveResi').val(Math.ceil(aveAps));
    }); 


    //Hybrid
    $(document).keyup(function() {
        var occuH = $('#numberOccH').val();
        var floorsH = $('#numberFloorsH').val();
        var basementsH = $('#numberBasementsH').val();
        var totalFH = Math.ceil(parseInt(floorsH) + parseInt(basementsH));
        var totalOH = Math.ceil(totalFH * occuH);
        var eleH = Math.ceil(totalOH/1000);
        var colH = Math.ceil(totalFH/20);
        var ElePerColH = Math.ceil(eleH/colH);
        var estiHybrid = ElePerColH * colH;
        $('#estiHyb').val(estiHybrid);

    });
    $(document).click(function() {
        var occuH = $('#numberOccH').val();
        var floorsH = $('#numberFloorsH').val();
        var basementsH = $('#numberBasementsH').val();
        var totalFH = Math.ceil(parseInt(floorsH) + parseInt(basementsH));
        var totalOH = Math.ceil(totalFH * occuH);
        var eleH = Math.ceil(totalOH/1000);
        var colH = Math.ceil(totalFH/20);
        var ElePerColH = Math.ceil(eleH/colH);
        var estiHybrid = ElePerColH * colH;
        $('#estiHyb').val(estiHybrid);
    });

    //Corporate
    $(document).keyup(function() {
        var occuC1 = $('#numberOccC1').val();
        var floorsC1 = $('#numberFloorsC1').val();
        var basementsC1 = $('#numberBasementsC1').val();
        var totalF = Math.ceil(parseInt(floorsC1) + parseInt(basementsC1));
        var totalOccu = Math.ceil(totalF * occuC1);
        var eleC1 = Math.ceil(totalOccu/1000);
        var colC1 = Math.ceil(totalF/20);
        var ElePerColC1 = Math.ceil(eleC1/colC1);
        var estiCorpo = ElePerColC1 * colC1;
        $('#estiCorp').val(estiCorpo);
    });
    $(document).click(function() {
        var occuC1 = $('#numberOccC1').val();
        var floorsC1 = $('#numberFloorsC1').val();
        var basementsC1 = $('#numberBasementsC1').val();
        var totalF = Math.ceil(parseInt(floorsC1) + parseInt(basementsC1));
        var totalOccu = Math.ceil(totalF * occuC1);
        var eleC1 = Math.ceil(totalOccu/1000);
        var colC1 = Math.ceil(totalF/20);
        var ElePerColC1 = Math.ceil(eleC1/colC1);
        var estiCorpo = ElePerColC1 * colC1;
        $('#estiCorp').val(estiCorpo);
    });

    //UNIT PRICE PER ELEVATOR DEPENDING ON THE RANGE
        //Commercial
        var x = 7565;
        var y = 12345;
        var a = 15400;

        $(document).click(function() {
            if ($("#standardComm").is(":checked")) {

                $('#unitComm').val(x.toFixed(2));
    
            }   else if ($("#premiumComm").is(":checked")) {
    
                $('#unitComm').val(y.toFixed(2));
    
            } else if ($("#exceliumComm").is(":checked")) {
    
                $('#unitComm').val(a.toFixed(2));
    
            }
        });  
        
        //Residential
        $(document).click(function() {
            if ($("#standardR").is(":checked")) {

                $('#unitR').val(x.toFixed(2));
    
            }   else if ($("#premiumR").is(":checked")) {
    
                $('#unitR').val(y.toFixed(2));
    
            } else if ($("#exceliumR").is(":checked")) {
    
                $('#unitR').val(a.toFixed(2));
    
            }
        });
        
        //Corporate
        $(document).click(function() {
            if ($("#standardCorp").is(":checked")) {

                $('#unitCorp').val(x.toFixed(2));
    
            }   else if ($("#premiumCorp").is(":checked")) {
    
                $('#unitCorp').val(y.toFixed(2));
    
            } else if ($("#exceliumCorp").is(":checked")) {
    
                $('#unitCorp').val(a.toFixed(2));
    
            }
        });  

        //Hybrid
        $(document).click(function() {
            if ($("#standardH").is(":checked")) {

                $('#unitH').val(x.toFixed(2));
    
            }   else if ($("#premiumH").is(":checked")) {
    
                $('#unitH').val(y.toFixed(2));
    
            } else if ($("#exceliumH").is(":checked")) {
    
                $('#unitH').val(a.toFixed(2));
    
            }
        }); 
        
    //INSTALLATION COST
        
        //Commercial

        $(document).keyup(function() {
            var iSC = $('#estiComm').val() * $('#unitComm').val() * 0.10;
            var iPC = $('#estiComm').val() * $('#unitComm').val() * 0.13;
            var iEC = $('#estiComm').val() * $('#unitComm').val() * 0.16;

            if ($('#standardComm').is(':checked')) {

                $('#instComm').val(iSC.toFixed(2));

            } else if ($('#premiumComm').is(':checked')) {

                $('#instComm').val(iPC.toFixed(2));

            } else if ($('#exceliumComm').is(':checked')) {

                $('#instComm').val(iEC.toFixed(2));
            }

        });
        $(document).click(function() {
            var iSC = $('#estiComm').val() * $('#unitComm').val() * 0.10;
            var iPC = $('#estiComm').val() * $('#unitComm').val() * 0.13;
            var iEC = $('#estiComm').val() * $('#unitComm').val() * 0.16;

            if ($('#standardComm').is(':checked')) {

                $('#instComm').val(iSC.toFixed(2));

            } else if ($('#premiumComm').is(':checked')) {

                $('#instComm').val(iPC.toFixed(2));

            } else if ($('#exceliumComm').is(':checked')) {

                $('#instComm').val(iEC.toFixed(2));
            }

        });

        //Residential

        $(document).keyup(function() {
            var iSR = $('#estiResi').val() * $('#unitR').val() * 0.10;
            var iPR = $('#estiResi').val() * $('#unitR').val() * 0.13;
            var iER = $('#estiResi').val() * $('#unitR').val() * 0.16;

            if ($('#standardR').is(':checked')) {

                $('#instR').val(iSR.toFixed(2));

            } else if ($('#premiumR').is(':checked')) {

                $('#instR').val(iPR.toFixed(2));

            } else if ($('#exceliumR').is(':checked')) {

                $('#instR').val(iER.toFixed(2));
            }

        });
        $(document).click(function() {
            var iSR = $('#estiResi').val() * $('#unitR').val() * 0.10;
            var iPR = $('#estiResi').val() * $('#unitR').val() * 0.13;
            var iER = $('#estiResi').val() * $('#unitR').val() * 0.16;

            if ($('#standardR').is(':checked')) {

                $('#instR').val(iSR.toFixed(2));

            } else if ($('#premiumR').is(':checked')) {

                $('#instR').val(iPR.toFixed(2));

            } else if ($('#exceliumR').is(':checked')) {

                $('#instR').val(iER.toFixed(2));
            }

        });

        //Corporate

        $(document).keyup(function() {
            var iSCo = $('#estiCorp').val() * $('#unitCorp').val() * 0.10;
            var iPCo = $('#estiCorp').val() * $('#unitCorp').val() * 0.13;
            var iECo = $('#estiCorp').val() * $('#unitCorp').val() * 0.16;

            if ($('#standardCorp').is(':checked')) {

                $('#instCorp').val(iSCo.toFixed(2));

            } else if ($('#premiumCorp').is(':checked')) {

                $('#instCorp').val(iPCo.toFixed(2));

            } else if ($('#exceliumCorp').is(':checked')) {

                $('#instCorp').val(iECo.toFixed(2));
            }

        });
        $(document).click(function() {
            var iSCo = $('#estiCorp').val() * $('#unitCorp').val() * 0.10;
            var iPCo = $('#estiCorp').val() * $('#unitCorp').val() * 0.13;
            var iECo = $('#estiCorp').val() * $('#unitCorp').val() * 0.16;

            if ($('#standardCorp').is(':checked')) {

                $('#instCorp').val(iSCo.toFixed(2));

            } else if ($('#premiumCorp').is(':checked')) {

                $('#instCorp').val(iPCo.toFixed(2));

            } else if ($('#exceliumCorp').is(':checked')) {

                $('#instCorp').val(iECo.toFixed(2));
            }

        });

        //Hybrid

        $(document).keyup(function() {
            var iSH = $('#estiHyb').val() * $('#unitH').val() * 0.10;
            var iPH = $('#estiHyb').val() * $('#unitH').val() * 0.13;
            var iEH = $('#estiHyb').val() * $('#unitH').val() * 0.16;

            if ($('#standardH').is(':checked')) {

                $('#instH').val(iSH.toFixed(2));

            } else if ($('#premiumH').is(':checked')) {

                $('#instH').val(iPH.toFixed(2));

            } else if ($('#exceliumH').is(':checked')) {

                $('#instH').val(iEH.toFixed(2));
            }

        });
        $(document).click(function() {
            var iSH = $('#estiHyb').val() * $('#unitH').val() * 0.10;
            var iPH = $('#estiHyb').val() * $('#unitH').val() * 0.13;
            var iEH = $('#estiHyb').val() * $('#unitH').val() * 0.16;

            if ($('#standardH').is(':checked')) {

                $('#instH').val(iSH.toFixed(2));

            } else if ($('#premiumH').is(':checked')) {

                $('#instH').val(iPH.toFixed(2));

            } else if ($('#exceliumH').is(':checked')) {

                $('#instH').val(iEH.toFixed(2));
            }

        });

    //TOTAL COST
    
        //Residential
        $(document).click(function() {
            var priceR = $('#estiResi').val() * $('#unitR').val();
            var insR = $('#instR').val();
            var totalR = priceR+ +insR;

            $('#totalR').val(totalR.toFixed(2));
            
        });
        $(document).keyup(function() {
            var priceR = $('#estiResi').val() * $('#unitR').val();
            var insR = $('#instR').val();
            var totalR = priceR+ +insR;

            $('#totalR').val(totalR.toFixed(2));
            
        });

        //Commercial
        $(document).click(function() {
            var priceComm = $('#estiComm').val() * $('#unitComm').val();
            var insComm = $('#instComm').val();
            var totalComm = priceComm+ +insComm;

            $('#totalC').val(totalComm.toFixed(2));
            
        });
        $(document).keyup(function() {
            var priceComm = $('#estiComm').val() * $('#unitComm').val();
            var insComm = $('#instComm').val();
            var totalComm = priceComm+ +insComm;

            $('#totalComm').val(totalComm.toFixed(2));
            
        });

        //Corporate
        $(document).click(function() {
            var priceCorp = $('#estiCorp').val() * $('#unitCorp').val();
            var insCorp = $('#instCorp').val();
            var totalCorp = priceCorp+ +insCorp;

            $('#totalCorp').val(totalCorp.toFixed(2));
            
        });
        $(document).keyup(function() {
            var priceCorp = $('#estiCorp').val() * $('#unitCorp').val();
            var insCorp = $('#instCorp').val();
            var totalCorp = priceCorp+ +insCorp;

            $('#totalCorp').val(totalCorp.toFixed(2));
            
        });

        //Hybrid
        $(document).click(function() {
            var priceH = $('#estiHyb').val() * $('#unitH').val();
            var insH = $('#instH').val();
            var totalH = priceH+ +insH;

            $('#totalH').val(totalH.toFixed(2));
            
        });
        $(document).keyup(function() {
            var priceH = $('#estiHyb').val() * $('#unitH').val();
            var insH = $('#instH').val();
            var totalH = priceH+ +insH;

            $('#totalH').val(totalH.toFixed(2));
            
        });







        

    
