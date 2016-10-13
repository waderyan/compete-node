"use strict";

var Promise = require('promise');
var _ = require('lodash');

function getScore(product) {
    return _.reduce(product.factors, function (sum, x) {
        //  * (Math.random() * 10)
        return sum + x;
    });
}

module.exports = {
    runMatch: function(xProduct, yProduct) {
        return new Promise(function(resolve, reject) {
            var xKarma = getScore(xProduct);
            var yKarma = getScore(yProduct);

            resolve(xKarma > yKarma ? xProduct : yProduct);
        });
    }
};