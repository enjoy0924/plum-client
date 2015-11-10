/**
 *
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function (services) {
    services.service('ValidateService',['$http','REQ_URLS', function($http, REQ_URLS){

        function getImageCodeUrl(){
            return REQ_URLS.URL_VALIDATE_GET_IMG_CODE+'?d='+new Date();
        };

        function getSmsCode(cellphone){
            var params ={ };
            params.cellphone = cellphone;
            $http.post(REQ_URLS.URL_VALIDATE_GET_SMS_CODE,params).success(
                function(response){
                    alert(response+'sms message has been sent to ' + cellphone);
                }
            );
        };

        function validateImageCode(imagecode){
            var params = { };
            params.imgcode = imagecode;
            $http.post(REQ_URLS.URL_VALIDATE_POST_IMG_CODE, params).success(
                function(response){
                    alert(response+'validate validate-code successfully!');
                }
            );
        };

        function validateSmsCode(smscode){

        }

        return {
            getImageCodeUrl : getImageCodeUrl,
            getSmsCode : getSmsCode,
            validateImageCode : validateImageCode,
            validateSmsCode : validateSmsCode
        }
    }]);
})