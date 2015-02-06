"use strict";
(function ($, w, d, undefined) {

    var SocialNetworkConfiguration = function (conf) {
        var vkontakte = function (appId) {
            window.vkAsyncInit = function () {
                VK.init({
                    apiId: appId
                });
            };
            setTimeout(function () {
                var el = document.createElement("script");
                el.type = "text/javascript";
                el.src = "//vk.com/js/api/openapi.js";
                el.async = true;
                document.getElementById("vk_api_transport").appendChild(el);
            }, 0);
        };
        var facebook = function (appId) {
            window.fbAsyncInit = function () {
                FB.init({
                    appId: appId,
                    xfbml: true,
                    status: true,
                    version: 'v2.2'
                });
            };
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        };

        if (conf.vkontakte_app_id) {
            vkontakte(conf.vkontakte_app_id);
        }
        if (conf.facebook_app_id) {
            facebook(conf.facebook_app_id);
        }
    };

    var ButtonConfiguration = function (params) {
        if (params) {
            return $.extend(true, {}, ButtonConfiguration.defaults, params);
        }

        return ButtonConfiguration.defaults;
    };

    ButtonConfiguration.defaults = {
        selectors: {
            facebookButton: '.l-fb',
            twitterButton: '.l-tw',
            vkontakteButton: '.l-vk',

            count: '.l-count',
            ico: '.l-ico',

            shareData: '.social-share-data'
        },

        classes: {
            countVisibleClass: 'like-not-empty'
        },

        popupWindowOptions: [
            'left=0',
            'top=0',
            'width=500',
            'height=250',
            'personalbar=0',
            'toolbar=0',
            'scrollbars=1',
            'resizable=1'
        ]
    };


    var Button = function () {
    };
    Button.lastIndex = 0;

    Button.prototype = {
        /*@methods*/
        init: function ($context, conf, index) {
            this.config = conf;
            this.index = index;

            this.$context = $context;
            this.$count = $(this.config.selectors.count, this.$context);
            this.$ico = $(this.config.selectors.ico, this.$context);

            this.collectShareInfo();
            this.bindEvents();
            this.ajaxRequest = this.countLikes();
        },

        bindEvents: function () {
            this
                .$context
                .bind('click', Button.returnFalse);

            this
                .$ico
                .bind('click', this, this.openShareWindow);

        },

        setCountValue: function (count) {
            this
                .$context
                .addClass(this.config.classes.countVisibleClass);

            this
                .$count
                .text(count);
        },

        getCountLink: function (url) {
            return this.countServiceUrl + encodeURIComponent(url);
        },

        getAfterSharingCallback: function () {
            return function () {
            };
        },

        collectShareInfo: function () {
            var $shareData = this.$context.closest(this.config.selectors.shareData);
            this.title = $shareData.data('title') || "";
            this.summary = $shareData.data('description') || "";
            this.image = $shareData.data('image');
            this.linkToShare = $shareData.data('link');

            SharingManager.resetSharedData();
            SharingManager.setArticle($shareData.data('article'));
        },

        getPopupOptions: function () {
            return this.config.popupWindowOptions.join(',');
        },

        openShareWindow: function (e) {
            var
                button = e.data,
                shareUri = button.getShareLink(),
                windowOptions = button.getPopupOptions();

            var
                newWindow = w.open(shareUri, '', windowOptions);

            if (w.focus) {
                newWindow.focus();

                var callback = button.getAfterSharingCallback();

                clearInterval(this.interval);
                return this.interval = setInterval(function () {
                    return newWindow.closed && (clearInterval(this.interval), callback) ? callback() : void 0;
                }.bind(this), 500);
            }
        },

        /*@properties*/
        linkToShare: null,
        title: d.title,
        summary: null,
        image: null,

        countServiceUrl: null,
        $context: null,
        $count: null,
        $ico: null
    };

    Button = $.extend(Button, {
        /*@methods*/
        returnFalse: function (e) {
            return false;
        }

        /*@properties*/
    });


    var FacebookButton = function ($context, conf, index) {
        this.init($context, conf, index);
        this.type = 'facebook';
    };
    FacebookButton.prototype = new Button;
    FacebookButton.prototype
        = $.extend(FacebookButton.prototype,
        {
            /*@methods*/
            countLikes: function () {
                var
                    serviceURI = this.getCountLink(this.linkToShare),
                    execContext = this;

                return $.ajax({
                    url: serviceURI,
                    dataType: 'jsonp',
                    success: function (data, status, jqXHR) {
                        if (status == 'success' && data[0]) {
                            if (data[0].share_count > 0) {
                                execContext.setCountValue(data[0].share_count);
                            }
                        }
                    }
                });
            },

            getCountLink: function (url) {
                var fql = 'SELECT share_count FROM link_stat WHERE url="' + url + '"';
                return this.countServiceUrl + encodeURIComponent(fql);
            },

            openShareWindow: function (e) {
                var self = e.data;

                FB.ui({
                    method: 'feed',
                    link: self.linkToShare,
                    caption: self.title,
                    description: self.summary,
                    picture: self.image
                }, self.getAfterSharingCallback().bind(self));
            },

            getAfterSharingCallback: function () {
                var self = this;

                return function (response) {
                    if (response != undefined && response.post_id != undefined) {
                        var postInfo = response.post_id.split('_');
                        SharingManager.setUserSocialData(postInfo[0], self.type);
                    }
                };
            },

            /*@properties*/
            countServiceUrl: 'https://api.facebook.com/method/fql.query?format=json&query='
        });


    var TwitterButton = function ($context, conf, index) {
        this.init($context, conf, index);
        this.type = 'twitter';
    };
    TwitterButton.prototype = new Button;
    TwitterButton.prototype
        = $.extend(TwitterButton.prototype,
        {
            /*@methods*/
            countLikes: function () {
                var
                    serviceURI = this.getCountLink(this.linkToShare),
                    execContext = this;

                return $.ajax({
                    url: serviceURI,
                    dataType: 'jsonp',
                    success: function (data, status, jqXHR) {
                        if (status == 'success' && data.count > 0) {
                            execContext.setCountValue(data.count);
                        }
                    }
                });
            },

            getShareLink: function () {
                return 'https://twitter.com/share'
                    + '?url=' + encodeURIComponent(this.linkToShare)
                    + (this.title ? '&text=' + encodeURIComponent(this.title) : '');
            },

            /*@properties*/
            countServiceUrl: 'http://urls.api.twitter.com/1/urls/count.json?url='
        });


    var VkontakteButton = function ($context, conf, index) {
        this.init($context, conf, index);
        this.type = 'vkontakte';
    };
    VkontakteButton.prototype = new Button;
    VkontakteButton.prototype
        = $.extend(VkontakteButton.prototype,
        {
            /*@methods*/
            countLikes: function () {
                var serviceURI = this.getCountLink(this.linkToShare) + '&index=' + this.index;

                w.socialButtonCountObjects[this.index] = this;

                return $.ajax({
                    url: serviceURI,
                    dataType: 'jsonp'
                });
            },

            getShareLink: function () {
                return 'http://vk.com/share.php?'
                    + 'url=' + encodeURIComponent(this.linkToShare)
                    + '&description=' + encodeURIComponent(this.summary)
                    + '&title=' + encodeURIComponent(this.title)
                    + '&image=' + encodeURIComponent(this.image);
            },

            getAfterSharingCallback: function () {
                return function () {
                    var self = this;
                    VK.Auth.getLoginStatus(function (response) {
                        if (response.session) {
                            SharingManager.setUserSocialData(response.session.mid, self.type)
                        }
                    });
                }.bind(this);
            },

            /*@properties*/
            countServiceUrl: 'http://vk.com/share.php?act=count&url='
        });


    // костыль для Вконтакте
    w.socialButtonCountObjects = {};

    function vkShare(index, count) {
        var button = w.socialButtonCountObjects[index];
        if (count > 0) {
            button.setCountValue(count);
        }
        delete w.socialButtonCountObjects[index];
    }

    if (!w.VK) {
        w.VK = {
            Share: {
                count: function (index, count) {
                    vkShare(index, count);
                }
            }
        }
    } else {
        var originalVkCount = w.VK.Share.count;

        w.VK.Share.count = function (index, count) {
            vkShare(index, count);
            originalVkCount.call(w.VK.Share, index, count);
        };
    }

    var SharingManager = {
        sharedData: {
            article: null,
            email: null,
            agreed: null,
            userId: null,
            network: null
        },
        resetSharedData: function () {
            this.sharedData = {};
        },
        setArticle: function (article) {
            this.sharedData.article = article;
        },
        setEmail: function (email) {
            this.sharedData.email = email;
        },
        setSubscribeAgreed: function (agreed) {
            this.sharedData.agreed = agreed || false;
        },
        setUserSocialData: function (userId, network) {
            console.log(userId, network);
            this.sharedData.userId = userId;
            this.sharedData.network = network;
        },
        showUserInfoPopup: function () {
        },
        saveSharedData: function () {
            // отправить данные в бекенд
            console.log(this.sharedData);
        }
    };

    $.fn.socialButton = function (config) {
        SocialNetworkConfiguration(config);

        this.each(function (index, element) {
            setTimeout(function () {
                var
                    $element = $(element),
                    conf = new ButtonConfiguration(config),
                    b = false;

                Button.lastIndex++;

                if ($element.is(conf.selectors.facebookButton)) {
                    b = new FacebookButton($element, conf, Button.lastIndex);
                } else if ($element.is(conf.selectors.twitterButton)) {
                    b = new TwitterButton($element, conf, Button.lastIndex);
                } else if ($element.is(conf.selectors.vkontakteButton)) {
                    b = new VkontakteButton($element, conf, Button.lastIndex);
                }

                $
                    .when(b.ajaxRequest)
                    .then(
                    function () {
                        $element.trigger('socialButton.done', [b.type]);
                    }
                    , function () {
                        $element.trigger('socialButton.done', [b.type]);
                    }
                );
            }, 0);
        });

        return this;
    };

})(jQuery, window, document);