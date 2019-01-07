export class Globals {
<<<<<<< HEAD
    static weburl: String = 'http://142.93.214.212';
    static port: String = '8082';

    serviceurl: String = 'http://' + Globals.weburl + ':' + Globals.port + '/';
=======
    static weburl: String = window.location.hostname;
    static port: String = '8082';
    
    serviceurl: String = 'http://' + Globals.weburl + ':' + Globals.port + '/kesarapi/';
>>>>>>> aa70bcf17a6acca93092910e3e1d153940e20911
    uploadurl: String = 'http://' + Globals.weburl + ':' + Globals.port + '/images/';

    filepath: String = 'www\\uploads\\';
    xlsfilepath: String = 'www\\exceluploads\\';

    // filepath: String = 'www/uploads/';
    // xlsfilepath: String = 'www/uploads/bulkupload/';

    // Functions

    public static getWSDetails() {
        let _wsdetails = sessionStorage.getItem('_wsdetails_');

        if (_wsdetails !== null) {
            return JSON.parse(_wsdetails);
        }
        else {
            return {};
        }
    }

    public static getEntityDetails() {
        let _enttdetails = sessionStorage.getItem('_enttdetails_');

        if (_enttdetails !== null) {
            return JSON.parse(_enttdetails);
        }
        else {
            return {};
        }
    }

    public static setuser(userdata){
        localStorage.setItem('user',userdata);
    }

    public static get(){
        return localStorage.getItem('user');
    }
}