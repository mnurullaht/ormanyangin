var app = angular.module('kontrolModule', []);

var tahminServisURL = "https://servis.mgm.gov.tr/api/tahminler/gunluk?istno=";
var ilceServisURL = "https://servis.mgm.gov.tr/api/merkezler?sorgu=";
var sondurumServisURL = "https://servis.mgm.gov.tr/api/sondurumlar?istno=";

app.controller("CtrlMain", function ($scope, $rootScope, $http, CallServiceFactory, Excel, $timeout) {

    $rootScope.loading = false;
    $rootScope.ilceList = [];
    $rootScope.tahminData = [];
    $rootScope.selectedIl = "01";
    $rootScope.selectedtarih = "1";
    $scope.nemEsik = 30;
    $scope.degisken = true;
    $scope.getIlceList = function (merkezId) {

        $rootScope.loading = true;
        $rootScope.tahminData = [];
        $rootScope.ilceList = [];
        CallServiceFactory.getData(ilceServisURL + getIlAd($rootScope.selectedIl) + "&limit=100").then(function (data) {

            $rootScope.ilceList = data;
            for (var i = 0; i < $rootScope.ilceList.length; i++) {
                $scope.getTahminList($rootScope.ilceList[i]);
            }
			$rootScope.loading = false;
        });
        
    }

    $scope.getTahminList = function (info) {
      
        CallServiceFactory.getData(tahminServisURL + info.merkezId).then(function (data) {
           
            if (data.length > 0) {
               
                if ($scope.nemEsik >= data[0]["enDusukNemGun" + $rootScope.selectedtarih]) {
                    //En Düşük Nemi Eşik Değeri (30) altında olanları göster
                    var tmpTahminData = {
                        enYuksek: data[0]["enYuksekGun" + $rootScope.selectedtarih],
                        enDusuk: data[0]["enDusukGun" + $rootScope.selectedtarih],
                        enDusukNem: data[0]["enDusukNemGun" + $rootScope.selectedtarih],
                        enYuksekNem: data[0]["enYuksekNemGun" + $rootScope.selectedtarih],
                        hadise: data[0]["hadiseGun" + $rootScope.selectedtarih],
                        ruzgarYon: data[0]["ruzgarYonGun" + $rootScope.selectedtarih],
                        ruzgarHiz: data[0]["ruzgarHizGun" + $rootScope.selectedtarih],
                        tarih: data[0]["tarihGun" + $rootScope.selectedtarih]

                    }
                 
                    var veri = { istBilgi: info, data: tmpTahminData };
                    
                    $rootScope.tahminData.push(veri);
                   
                }
                if ($rootScope.tahminData.length>0) {
                 $scope.degisken = false;
                }
                else {
                    $scope.degisken = true;
                }
                
            }
            
        });
        
    }
    
    $scope.ilChange = function (il) {
        $rootScope.selectedIl = il;

    }
    $scope.tarihChange = function (selectedtarih) {
        $rootScope.selectedtarih = selectedtarih;

    }

    function getIlAd(plaka) {

        switch (plaka) {
            case "01": return "Adana";
            case "02": return "Adiyaman";
            case "03": return "Afyonkarahisar";
            case "04": return "Ağri";
            case "05": return "Amasya";
            case "06": return "Ankara";
            case "07": return "Antalya";
            case "08": return "Artvin";
            case "09": return "Aydin";
            case "10": return "Balikesir";
            case "11": return "Bilecik";
            case "12": return "Bingöl";
            case "13": return "Bitlis";
            case "14": return "Bolu";
            case "15": return "Burdur";
            case "16": return "Bursa";
            case "17": return "Çanakkale";
            case "18": return "Çankiri";
            case "19": return "Çorum";
            case "20": return "Denizli";
            case "21": return "Diyarbakir";
            case "22": return "Edirne";
            case "23": return "Elaziğ";
            case "24": return "Erzincan";
            case "25": return "Erzurum";
            case "26": return "Eskişehir";
            case "27": return "Gaziantep";
            case "28": return "Giresun";
            case "29": return "Gümüşhane";
            case "30": return "Hakkari";
            case "31": return "Hatay";
            case "32": return "Isparta";
            case "33": return "Mersin";
            case "34": return "İstanbul";
            case "35": return "İzmir";
            case "36": return "Kars";
            case "37": return "Kastamonu";
            case "38": return "Kayseri";
            case "39": return "Kirklareli";
            case "40": return "Kirsehir";
            case "41": return "Kocaeli";
            case "42": return "Konya";
            case "43": return "Kütahya";
            case "44": return "Malatya";
            case "45": return "Manisa";
            case "46": return "Kahramanmaraş";
            case "47": return "Mardin";
            case "48": return "Muğla";
            case "49": return "Muş";
            case "50": return "Nevsehir";
            case "51": return "Nigde";
            case "52": return "Ordu";
            case "53": return "Rize";
            case "54": return "Sakarya";
            case "55": return "Samsun";
            case "56": return "Siirt";
            case "57": return "Sinop";
            case "58": return "Sivas";
            case "59": return "Tekirdag";
            case "60": return "Tokat";
            case "61": return "Trabzon";
            case "62": return "Tunceli";
            case "63": return "Sanliurfa";
            case "64": return "Uşak";
            case "65": return "Van";
            case "66": return "Yozgat";
            case "67": return "Zonguldak";
            case "68": return "Aksaray";
            case "69": return "Bayburt";
            case "70": return "Karaman";
            case "71": return "Kirikkale";
            case "72": return "Batman";
            case "73": return "Sirnak";
            case "74": return "Bartin";
            case "75": return "Ardahan";
            case "76": return "Iğdir";
            case "77": return "Yalova";
            case "78": return "Karabük";
            case "79": return "Kilis";
            case "80": return "Osmaniye";
            case "81": return "Düzce";
            default: return "";

        }
    }
    $scope.getIlceList($rootScope.selectedIl);

    $scope.exportToExcel = function (tableId) { // ex: '#my-table'
        var exportHref = Excel.tableToExcel(tableId, 'Orman Yangın Raporu 5 Günlük Hava Durumu');
        $timeout(function () { location.href = exportHref; }, 100); // trigger download
    }
    

});

app.filter('meteorDateFormat', function ($filter) {
    return function (givenTime) {
        var _date = $filter('date')(new Date(givenTime),
                            'dd MMMM EEEE', '+0300');
        if (_date == "Invalid Date")
            _date = "";
        return _date;
    };
})

app.filter('hadiseDonustur', function ($filter) {
    return function (input) {
        return convertHadise(input);
    };
})

app.factory('CallServiceFactory', function ($http, $q) {

    var CallServiceFactory = {};

    CallServiceFactory.getData = function (url) {

        var deferred = $q.defer();
        $http.get(url)
            .then(function (response) {
                deferred.resolve(response.data);
            });
        return deferred.promise;
    };
    return CallServiceFactory;

});

function convertHadise(hadiseKodu) {


    switch (hadiseKodu) {
        case "A": return "Açık";
        case "AB": return "Az Bulutlu";
        case "PB": return "Parçalı Bulutlu";
        case "CB": return "Çok Bulutlu";
        case "HY": return "Hafif Yağmurlu";
        case "Y": return "Yağmurlu";
        case "KY": return "Kuvvetli Yağmurlu";
        case "KKY": return "Karla Karışık Yağmurlu";
        case "HKY": return "Hafif Kar Yağışlı";
        case "K": return "Kar Yağışlı";
        case "KYK": return "Yoğun Kar Yağışlı";
        case "HSY": return "Hafif Sağanak Yağışlı";
        case "SY": return "Sağanak Yağışlı";
        case "KSY": return "Kuvvetli Sağanak Yağışlı";
        case "MSY": return "Mevzi Sağanak Yağışlı";
        case "DY": return "Dolu";
        case "GSY": return "Gökgürültülü Sağanak Yağışlı";
        case "KGSY": return "Kuvvetli Gökgürültülü Sağanak Yağışlı";
        case "SIS": return "Sisli";
        case "PUS": return "Puslu";
        case "DNM": return "Dumanlı";
        case "KF": return "Toz veya Kum Fırtınası";
        case "R": return "Rüzgarlı";
        case "GKR": return "Güneyli Kuvvetli Rüzgar";
        case "KKR": return "Kuzeyli Kuvvetli Rüzgar";
        case "SCK": return "Sıcak";
        case "SGK": return "Soğuk";
        case "HHY": return "Yağışlı";
        default: return "";

    }
}

//EXCEL'E AKTARMA

app.factory('Excel', function ($window) {
    var uri = 'data:application/vnd.ms-excel;base64,',
        //?xml version = "1.0" encoding = "UTF-8" standalone = "yes" ?
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><?xml version="1.0" encoding="UTF-8" standalone="yes"?><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',

        

        base64 = function (s) { return $window.btoa(unescape(encodeURIComponent(s))); },
        format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };
    return {
        tableToExcel: function (tableId, worksheetName) {
            var table = $(tableId),
                ctx = { worksheet: worksheetName, table: table.html() },
                href = uri + base64(format(template, ctx));
            return href;
        }
    };
})  
