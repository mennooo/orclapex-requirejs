require(['ojs/ojcore', 'jquery', 'ojs/ojinputnumber'], function(oj, $) {

        $('#inputnumber-id').ojInputNumber({
            'value': 10,
            'max': 100,
            'min': 0,
            'step': 2
        });

    });
