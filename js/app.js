(() => {
    'use strict';

    let app = angular.module('conversorApp', [])

    /* Controller */
    app.controller('conversorCtrl', () => {
        return new Conversor()
    })

    /** Filter, muestra un número con coma decimal */
    app.filter('numero', () => {
        return (input) => {
            if (input === null || isNaN(input)) {
                return "Ingrese un número"
            }
            return input.toString().replace('.', ',')
        }
    })

})()
