"use strict";
var Sharing = {
    pageuri: App.rootUrl,
    facebook: function (options, callback) {
        callback = function() {
            this.fbCount();
        }.bind(this);

        return this._share("//www.facebook.com/sharer.php", {u: options.url}, callback);
    },
    vkontakte: function (options, callback) {
        callback = function() {
            this.vkCount();
        }.bind(this);

        return this._share("//vk.com/share.php", {
            url: options.url,
            title: options.title,
            description: options.message,
            image: options.image
        }, callback);
    },
    fbCount: function () {
        return $.getJSON("//graph.facebook.com/?id=" + this.pageuri, function (response) {
            return $(".js-fb_count").text(response.shares);
        })
    },
    vkCount: function () {
        window.VK = {};
        VK.Share = {};

        return VK.Share.count = function (e, t) {
            return $(".js-vk_count").text(t);
        }, $.getJSON("//vk.com/share.php?act=count&index=1&url=" + this.pageuri + "&format=json&callback=?");
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

$(function () {
    window.App = window.App || {};

    $(document).on("click", ".js-share", function () {
        var network = $(this).data("network");
        if ("function" == typeof Sharing[network]) {
            Sharing[network]({
                url: location.href,
                title: App.metaTags.title,
                message: App.metaTags.description,
                image: App.metaTags.vkontakte_image
            });
        }
    });
});