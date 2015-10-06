/**
 * Created by Andy on 2015/10/6.
 */

app.factory('ValidateCode', function () {

    return {
        getImageValidateCode : function(){
            return 'http://localhost:8080/cas/validate/getimage';
        },

        getSMSValidateCode : function () {
            return 'http://localhost:8080/cas/validate/getsms';
        }
    }
});