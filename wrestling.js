"use strict";

var Promise = require('promise');
var _ = require('lodash');

function getKarmaScore(product) {
    return _.reduce(product.factors, function (sum, x) {
        return sum + x * (Math.random() * 10);
    });
}

module.exports = {
    runMatch: function(xProduct, yProduct) {
        return new Promise(function(resolve, reject) {
            var xKarma = getKarmaScore(xProduct);
            var yKarma = getKarmaScore(yProduct);

            resolve(xKarma > yKarma ? xProduct : yProduct);
        });
    }
};