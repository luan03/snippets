// Copyright 2013 Simple Module Pattern
// @Authors - Luan Fagundes
// @Reference - BRAZILJS

$(function(){

    'use strict';

    var PUBLIC = {},
        PRIVATE = {};

   PRIVATE.setLanguage = function () {

        if (body.hasClass('LNG-en-us')) {

            internationalCountry = true;

        }

    };

    PRIVATE.configRequirePaths = function () {

        var facebookURL = "http://connect.facebook.net/pt_BR/all.js#xfbml=1";

        if (internationalCountry) {

            facebookURL = "http://connect.facebook.net/en_US/all.js#xfbml=1";

        }


    PUBLIC.init = function() {

        //We need to see if the user is in the pt-BR or en-US page
        PRIVATE.setLanguage();

        PRIVATE.configRequirePaths();

        //Just load the facebook, gplus and twitter API´s
        PUBLIC.loadSocialAPPS();

         //Open all the rel="external" links in another tab
        PUBLIC.externalLinks();

    };

    PUBLIC.loadSocialAPPS = function () {

        require(['facebook', 'twitter', 'g+']);

    };

    PUBLIC.externalLinks = function () {

        body.on('click', 'a[rel="external"]', function () {

            window.open($(this).attr('href'));

            return false;

        });

    };

    return PUBLIC.init();
});