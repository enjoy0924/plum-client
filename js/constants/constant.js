/**
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function(constants){
    var backendBase = "http://localhost:8080/";
    constants.constant('REQ_URLS', {
        URL_VALIDATE_GET_IMG_CODE  : backendBase + "cas/validate/getimage",
        URL_VALIDATE_GET_SMS_CODE  : backendBase + "cas/validate/getsms",
        URL_VALIDATE_POST_IMG_CODE : backendBase + "cas/validate/imgcode",
        URL_VALIDATE_POST_SMS_CODE : backendBase + "cas/validate/smscode",

        URL_AUTH_POST_LOGIN: backendBase + "cas/api/auth/login",
        URL_AUTH_DELETE_LOGOUT : backendBase + "cas/api/auth/logout",

        URL_USER_POST_CREATE : backendBase + "cas/user/create",
        URL_USER_DEL_DELETE  : backendBase + "cas/user/delete",
        URL_USER_POST_UPDATE : backendBase + "cas/user/update",
        URL_USER_GET_LIST_ALL: backendBase + "cas/user/getall"

    }).constant('AUTH_EVENTS', {  //认证事件
        NOT_AUTHENTICATED: 'auth-not-authenticated',
        NOT_AUTHORIZED: 'auth-not-authorized'
    }).constant('USER_ROLES', {  //用户角色
        ROLE_ADMIN: 'admin_role',
        ROLE_PUBLIC: 'public_role'
    }).constant('APP_KEYS',{     //这里暂时把app key写死，后面可能会从后台获取然后选择
        APP_KEY_01 : '645ba616-370a-43a8-a8e0-993e7a590cf0'
    });
});