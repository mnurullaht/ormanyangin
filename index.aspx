<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <title>Orman Yangın Raporu 5 Günlük Hava Durumu | Meteoroloji Genel Müdürlüğü</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/custom.css" />
    <link href="css/loader.css" rel="stylesheet" />
    
    <script data-require="jquery@*" data-semver="2.1.4" src="https://code.jquery.com/jquery-2.1.4.js"></script>
    <style>
        /* Remove the navbar's default margin-bottom and rounded borders */
        .navbar {
            margin-bottom: 0;
            border-radius: 0;
        }

        /* Add a gray background color and some padding to the footer */
        footer {
            background-color: #f2f2f2;
            padding: 25px;
        }
    </style>
    <script type="text/javascript" src="js/angular.min.js"></script>
    <script type="text/javascript" src="js/angular-locale_tr-tr.js"></script>
    <script type="text/javascript" src="js/JSLINQ.js"></script>

</head>

<body ng-app="kontrolModule">

    <div class="container" ng-controller="CtrlMain">

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Orman Yangın Raporu 5 Günlük Hava Durumu </a>
                </div>
              
            </div>
        </nav>

        <div class="mnt">            
            
            <div class="form-control-static">

                <%--İL SEÇİMİ...:--%>
                <div class="col-md-2 col-sm-3 col-xs-12">

                    <select name="İL SEÇİMİ" class="form-control" ng-model="selectedIl" ng-change="ilChange(selectedIl)">
                                               
                        <option value="01" selected="selected">Adana</option>
                        <option value="02">Adıyaman</option>
                        <option value="03">Afyonkarahisar</option>
                        <option value="04">Ağrı</option>
                        <option value="05">Amasya</option>
                        <option value="06">Ankara</option>
                        <option value="07">Antalya</option>
                        <option value="08">Artvin</option>
                        <option value="09">Aydın</option>
                        <option value="10">Balıkesir</option>
                        <option value="11">Bilecik</option>
                        <option value="12">Bingöl</option>
                        <option value="13">Bitlis</option>
                        <option value="14">Bolu</option>
                        <option value="15">Burdur</option>
                        <option value="16">Bursa</option>
                        <option value="17">Çanakkale</option>
                        <option value="18">Çankırı</option>
                        <option value="19">Çorum</option>
                        <option value="20">Denizli</option>
                        <option value="21">Diyarbakır</option>
                        <option value="22">Edirne</option>
                        <option value="23">Elazığ</option>
                        <option value="24">Erzincan</option>
                        <option value="25">Erzurum</option>
                        <option value="26">Eskişehir</option>
                        <option value="27">Gaziantep</option>
                        <option value="28">Giresun</option>
                        <option value="29">Gümüşhane</option>
                        <option value="30">Hakkari</option>
                        <option value="31">Hatay</option>
                        <option value="32">Isparta</option>
                        <option value="33">Mersin</option>
                        <option value="34">İstanbul</option>
                        <option value="35">İzmir</option>
                        <option value="36">Kars</option>
                        <option value="37">Kastamonu</option>
                        <option value="38">Kayseri</option>
                        <option value="39">Kırklareli</option>
                        <option value="40">Kırşehir</option>
                        <option value="41">Kocaeli</option>
                        <option value="42">Konya</option>
                        <option value="43">Kütahya</option>
                        <option value="44">Malatya</option>
                        <option value="45">Manisa</option>
                        <option value="46">Kahramanmaraş</option>
                        <option value="47">Mardin</option>
                        <option value="48">Muğla</option>
                        <option value="49">Muş</option>
                        <option value="50">Nevşehir</option>
                        <option value="51">Niğde</option>
                        <option value="52">Ordu</option>
                        <option value="53">Rize</option>
                        <option value="54">Sakarya</option>
                        <option value="55">Samsun</option>
                        <option value="56">Siirt</option>
                        <option value="57">Sinop</option>
                        <option value="58">Sivas</option>
                        <option value="59">Tekirdağ</option>
                        <option value="60">Tokat</option>
                        <option value="61">Trabzon</option>
                        <option value="62">Tunceli</option>
                        <option value="63">Şanlıurfa</option>
                        <option value="64">Uşak</option>
                        <option value="65">Van</option>
                        <option value="66">Yozgat</option>
                        <option value="67">Zonguldak</option>
                        <option value="68">Aksaray</option>
                        <option value="69">Bayburt</option>
                        <option value="70">Karaman</option>
                        <option value="71">Kırıkkale</option>
                        <option value="72">Batman</option>
                        <option value="73">Şırnak</option>
                        <option value="74">Bartın</option>
                        <option value="75">Ardahan</option>
                        <option value="76">Iğdır</option>
                        <option value="77">Yalova</option>
                        <option value="78">Karabük</option>
                        <option value="79">Kilis</option>
                        <option value="80">Osmaniye</option>
                        <option value="81">Düzce</option>
                    </select>              
                </div> 
                <%--<div class="col-md-2 col-sm-2 col-xs-6">

                    <select name="tarih" class="form-control" ng-change="tarihChange(selectedtarih)" ng-model="selectedtarih">
                        <option value="1">1. Gün</option>
                        <option value="2">2. Gün</option>
                        <option value="3">3. Gün</option>
                        <option value="4">4. Gün</option>
                        <option value="5">5. Gün</option>
                    </select>
                </div>--%>   
                <div class="col-md-2 col-sm-2 col-xs-12">
                    <input class="form-control " style="width:90%;float:left;" type="text" placeholder="En Düşük Nem" ng-model="nemEsik"/>
                    <span class="" style="float:left;padding-left:10px; width:10%;line-height:50%;margin-top:10px;">
                    <img style="height:15px;" src="images/unlem.svg" title="En Düşük Nem Eşik Değeri" /></span>
                </div>

                <div class="col-md-2 col-sm-2 col-xs-12 pull-right">                                               
                        <input type="image" class="form-control pull-left" value="submit" src="images/icon.svg" ng-click="exportToExcel('#tableToExport')" title="Excele Aktar" />
                </div>
                 <div class="col-md-1 col-sm-1 col-xs-12 pull-right">
                    <input class="btn-success form-control pull-left " type="button" ng-click="tarihChange(5); getIlceList(selectedIl)" value="5.Gün" />
                </div>
				
				 <div class="col-md-1 col-sm-1 col-xs-12 pull-right">
                    <input class="btn-success form-control pull-left " type="button" ng-click="tarihChange(4); getIlceList(selectedIl)" value="4.Gün" />
                </div>
                <div class="col-md-1 col-sm-1 col-xs-12 pull-right">
                    <input class="btn-success form-control pull-left " type="button" ng-click="tarihChange(3); getIlceList(selectedIl)"  value="3.Gün" />
                </div>
                <div class="col-md-1 col-sm-1 col-xs-12 pull-right">
                    <input class="btn-success form-control pull-left " type="button" ng-click="tarihChange(2); getIlceList(selectedIl)" value="2.Gün" />
                </div>
                <div class="col-md-1 col-sm-1 col-xs-12 pull-right">
                    <input class="btn-success form-control pull-left " type="button" ng-click="tarihChange(1); getIlceList(selectedIl)" value="1.Gün" />
                </div>              

            </div>          
         

        </div>

        <div class="jumbotron">
            <div class="container text-center">

                <table id="tableToExport">
                    <thead>
                        <tr>
                            <th class="sola">İli</th>
                            <th class="sola">İlçesi</th>
                            <th class="sola">Tarih</th>
                            <th class="sola">En Düşük Sıc. (°C)</th>
                            <th class="sola">En Yüksek Sıc. (°C)</th>
                            <th class="sola">En Düşük Nem (%)</th>
                            <th class="sola">En Yüksek Nem (%)</th>
                            <th class="sola">Hadise</th>
                            <th class="sola">Rüzgar Yön (°)</th>
                            <th class="sola">Rüzgar Hız (km/sa)</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                       

                        <tr ng-repeat="veri in tahminData | orderBy:sortType">
                            <td ng-bind="veri.istBilgi.il"></td>                                                         
                            <td ng-bind="veri.istBilgi.ilce"></td>
                            <td ng-bind="veri.data.tarih | meteorDateFormat "></td>                            
                            <td ng-bind="veri.data.enDusuk"></td>
                            <td ng-bind="veri.data.enYuksek"></td>
                            <td ng-bind="veri.data.enDusukNem"></td>
                            <td ng-bind="veri.data.enYuksekNem"></td>
                            <td ><img ng-src="../images/hadiseler/{{veri.data.hadise}}.svg" title="{{veri.data.hadise | hadiseDonustur}}" /></td>
                            <td title="{{veri.data.ruzgarYon}}">
                            <img ng-src="../images/ryon-gri.svg" ng-style="{'transform': 'rotate('+veri.data.ruzgarYon+'deg)'}" />
                            </td>


                            <%--<td ng-bind="veri.data.ruzgarYon"></td>--%>
                            <td ng-bind="veri.data.ruzgarHiz"></td>
                           
                        </tr>
                        <tr ng-show="degisken">
                            <td colspan="10" style="width:100%; font-size:15px; font-weight:500; background-color:#eeeeee" align="center">Aranılan kritere uygun veri bulunamadı. Lütfen Nem Eşik değerini değiştirin.</td>
                        </tr>
                    </tbody>
                </table>

                <div ng-show="loading" class="loader"></div>
            </div>
        </div>
        

        <footer class="container-fluid">
            <span style="font-size:13px;"><img style="height:15px;" src="images/unlem.svg" /> Tablodaki verileri Excel'e Aktarmak için Chrome Kullanın</span>
            <p class="text-center">© 2017 - Yazılım ve Donanım Şube Müdürlüğü  </p>
        </footer>

    </div>

    <script type="text/javascript" src="JS/default.js"></script>
</body>

</html>
