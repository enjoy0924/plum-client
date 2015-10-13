/**
 *
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function (services) {
    services.factory('validate',['$http','globalVariable', function($http, globalVariable){
        return {
            getImageCode : function(){
                return globalVariable.URL_VALIDATE_GET_IMG_CODE+'?d='+new Date();
            },

            getSmsCode : function(cellphone){
                var params ={ };
                params.cellphone = cellphone;
                $http.post(globalVariable.URL_VALIDATE_GET_SMS_CODE,params).success(
                    function(response){
                        alert(response+'sms message has been sent to ' + cellphone);
                    }
                );
            },

            validateImageCode : function(imagecode){
                var params = { };
                params.imgcode = imagecode;
                $http.post(globalVariable.URL_VALIDATE_POST_IMG_CODE, params).success(
                    function(response){
                        alert(response+'validate validate-code successfully!');
                    }
                );
            }
        }
    }]);
})