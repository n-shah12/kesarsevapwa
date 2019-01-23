export class Globals {
    static weburl: String = 'app.kesarsewa.org'//window.location.hostname;   
    //'142.93.214.212';//window.location.hostname;
    static port: String = '8082';

    serviceurl: String = 'http://' + Globals.weburl + ':' + Globals.port + '/kesarapi/';
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

   
}