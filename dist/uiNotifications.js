(function () {

    "use strict";

    angular
        .module("FE.utils")
        .service("utils.uiNotifications", uiNotifications);

    /**
     * Special anglar.js factory to manage modal notifications.
     */
    function uiNotifications() {

        var defaultMessages = {
            "CallbackIsNotFunction": "Specified parameter tried to implement the function behavior, however it doesn't have an appropriate functionality.",
            "LoginFailed": "Authorization error: login or password is incorrect. Please, check it and try again.",
            "MethodNotFound": "UI-side error: a specified 'method' is not found. Please, check http-request and try again.",
            "ServerIsOffline": "The server is not responding [500].",
            "ServerUnexpectedError": "Unexpected server error.",
            "VariableIsUndefined": "Attempt to get a non-existent variable. Make sure that the variable is declared.",
            "Unauthorized": "Unauthorized [401]."
        };

        return {
            msg: defaultMessages,
            popup: popup,
            confirm: confirm,
            inform: inform
        };

        /**
         * Generate callback-function with an appropriate actions method.
         * @param action {Function | null}
         * @param msg {String | null}
         * @param opts {Object | null}
         * @returns {*}
         */
        function confirm(action, msg, opts){
            if (action == null) throw new Error (defaultMessages.VariableIsUndefined);
            return Lobibox.confirm({
                msg: msg || "Do you really want to do this?",
                callback: function ($this, type, ev) {
                    if (type == "yes") {
                        try {
                            action();
                        }
                        catch (err) {
                            console.log(err);
                            throw new Error([err, ". ", defaultMessages.CallbackIsNotFunction].join(""));
                        }
                    }
                },
                title: opts ? opts.title : "Confirmation"
            });
        }

        /**
         * Plain and simple window to describe a specific user action.
         * @param msg {String|null}
         * @param type {String|null}
         * @param opts {Object|null}
         */
        function inform(msg, type, opts){
            Lobibox.notify(type || "success", {
                msg: msg || "Description.",
                sound: opts ? opts.sound : false,
                title: opts ? opts.title : upperFirstLetter(type || "success")
            });
        }

        /**
         * Validate data and if received type 'array' - concatenate all messages or just display itself.
         * @param {Array|String|Number} data
         * @param {String} msgType
         */
        function popup(data, msgType) {
            if (angular.isArray(data)) {
                var errorList = data.join(' ');
                simplePopup(errorList, msgType);
            } else if (angular.isString(data)) {
                simplePopup(data, msgType);
            } else {
                simplePopup(data ? data.Exception : defaultMessages.ServerIsOffline, msgType);
            }
        }

        /**
         * Default popup messenger.
         * @param {String|Number} msg
         * @param {String} type
         */
        function simplePopup(msg, type) {
            Lobibox.alert(type || 'error', {
                msg: msg
            });
            $(".lobibox").css({
                'z-index': '999999999'
            });
        }

        function upperFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

    }

    // IoC container.
    uiNotifications.$inject = [];

})();