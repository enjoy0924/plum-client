/**
 * Created by Andy on 2015/10/5.
 */
define(['./index'], function(angularServiceModule){
    angularServiceModule.factory('ValidateCode', function (CONST) {
        return {
            getImageValidateCode : function(){
                return CONST.URL_VALIDATE_GET_IMG_CODE;
            },

            getSMSValidateCode : function () {
                return CONST.URL_VALIDATE_GET_SMS_CODE;
            }
        }
    });
});