"use strict";
var Sharing = {
    options: {},

    init: function (options) {
        this.options = options || {};

        var vkontakte = function(appId) {
            window.vkAsyncInit = function() {
                VK.init({
                    apiId: appId
                });
            };
            setTimeout(function() {
                var el = document.createElement("script");
                el.type = "text/javascript";
                el.src = "//vk.com/js/api/openapi.js";
                el.async = true;
                document.getElementById("vk_api_transport").appendChild(el);
            }, 0);
        };
        var facebook = function(appId) {
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : appId,
                    xfbml      : true,
                    status     : true,
                    version    : 'v2.2'
                });
            };
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        };

        vkontakte(this.options.vkontakte_app_id);
        facebook(this.options.facebook_app_id);
    },
    facebook: function (options, callback) {
        FB.ui({
            method: 'feed',
            link: options.url,
            caption: options.title,
            description: options.message,
            picture: options.image
        }, callback);
    },
    vkontakte: function (options, callback) {
        this._share("//vk.com/share.php", {
            url: options.url,
            title: options.title,
            description: options.message,
            image: options.image
        }, callback);
    },
    fbCount: function (options) {
        $.getJSON("//graph.facebook.com/?id=" + options.url, function (response) {
            console.log(response);
            options.self.text(response.shares || 0);
        });
    },
    vkCount: function (options) {
        window.VK = {};
        VK.Share = {};
        VK.Share.count = function (index, count) {
            console.log(index, count);
            //options.self.text(response.shares || 0);
        };

        $.ajax({
            url: '//vk.com/share.php?act=count&index=1&url=' + options.url + '&callback=?',
            dataType: "jsonp"
        });
    },
    _share: function (baseUrl, params, callback) {
        var url = baseUrl + "?" + $.param(params);
        this.window = window.open(url, "Sharing", "width=740,height=440");

        clearInterval(this.interval);
        return this.interval = setInterval(function () {
            return this.window.closed && (clearInterval(this.interval), callback) ? callback() : void 0;
        }.bind(this), 500);
    }
};