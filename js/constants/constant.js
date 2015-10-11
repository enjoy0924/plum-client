/**
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function(constants){
    var backendBase = "http://localhost:8080/";
    constants.constant('globalVariable', {
        /**1.验证相关的URL **/
        URL_VALIDATE_GET_IMG_CODE  : backendBase + "cas/validate/getimage",
        URL_VALIDATE_GET_SMS_CODE  : backendBase + "cas/validate/getsms",
        URL_VALIDATE_POST_IMG_CODE : backendBase + "cas/validate/imgcode",
        URL_VALIDATE_POST_SMS_CODE : backendBase + "cas/validate/smscode",

        /**2.创建用户URL**/
        URL_USER_POST_CREATE : backendBase + "cas/user/create",
        URL_USER_DEL_DELETE  : backendBase + "cas/user/delete",
        URL_USER_POST_UPDATE : backendBase + "cas/user/update",
        URL_USER_GET_LIST_ALL: backendBase + "cas/user/getall"
    });
});