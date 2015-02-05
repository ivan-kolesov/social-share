"use strict";
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
    },
    getAfterSharingCallback: function (network) {
        var self = this;
        switch (network) {
            case "vkontakte":
                return function() {
                    VK.Auth.getLoginStatus(function(response) {
                        if (response.session) {
                            self.setUserSocialData(response.session.mid, network);
                        }
                    });
                };
            case "facebook":
                return function() {
                    FB.getLoginStatus(function(response) {
                        console.log(response);
                        if (response.status === 'connected') {
                            console.log('https://www.facebook.com/app_scoped_user_id/' + response.authResponse.userID);
                        }
                    });
                }
        }
    }
};