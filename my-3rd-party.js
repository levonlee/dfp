/**
 * Created by Li Li on 8/15/2017.
 */
var scripts = document.getElementsByTagName('script');
var myScript = scripts[ scripts.length - 1 ];

var queryString = myScript.src.replace(/^[^\?]+\??/,'');

var params = parseQuery( queryString );

function parseQuery ( query ) {
  var Params = new Object ();
  if ( ! query ) return Params; // return empty object
  var Pairs = query.split(/[;&]/);
  for ( var i = 0; i < Pairs.length; i++ ) {
    var KeyVal = Pairs[i].split('=');
    if ( ! KeyVal || KeyVal.length != 2 ) continue;
    var key = unescape( KeyVal[0] );
    var val = unescape( KeyVal[1] );
    val = val.replace(/\+/g, ' ');
    Params[key] = val;
  }
  return Params;
}

var clickMacro = "";

if (typeof params['ord'] !== "undefined") {
  clickMacro = params['ord'];
}

if (clickMacro.indexOf('http://adclick.g.doubleclick.net/') != 0) {
  clickMarco = '';
}

document.write("<link href='http:\/\/fonts.googleapis.com\/css?family=Roboto:700' rel='stylesheet' type='text\/css'><style> #tandt_search{ width:300px; height:250px; background:url('http:\/\/www.truckandtrailer.ca\/sites\/default\/files\/tandt-banners\/TandT_Widget_bg.jpg'); overflow:hidden; font-family:'Roboto', sans-serif; } #title_row{ width:300px; margin-top:84px; } #title_row ul, #title_row ul li{ list-style:none; } #title_row ul{ margin:0 auto; padding:0px; width:fit-content; display:table; } #title_row ul li{ float:left; display:block; padding:0px 15px; margin:0 5px; font:bold 18px\/25px 'Roboto', sans-serif; color:#000; cursor:pointer; text-shadow:-1px -1px 1px rgba(255, 255, 255, 0.4), 1px 1px 1px rgba(0, 0, 0, 0.4); } #title_row ul li:hover, #title_row ul li.active{ background-color:#F6F6F6; color:#333; border-top-left-radius:5px; border-top-right-radius:5px; } .search_box{ padding:18px 0 0 8px; } #Trailers_search, #Search_search{ display:none; } #quick_search{ width:180px; padding:0px 3px; } .form_row{ margin:0px 0px 10px 0px; } .form_select{ background-color:#F9F9F9; background:url('http:\/\/www.truckandtrailer.ca\/sites\/default\/files\/tandt-banners\/TandT_Select_Box.png') no-repeat 153px 0, linear-gradient(90deg, rgba(249, 249, 249, 1), rgba(249, 249, 249, 0)); overflow:hidden; width:180px; } .form_select, #quick_search{ height:28px; border-radius:5px; border:solid 1px #C2C2C2; box-sizing:border-box; } .form_select select{ height:28px; width:208px; border:none; background:transparent; margin:0; padding:5px; color:#2d2d2d; } .search_btn a{ display:block; width:113px; height:40px; background:url('http:\/\/www.truckandtrailer.ca\/sites\/default\/files\/tandt-banners\/search-btn.png') no-repeat; } label{ font-size:16px; font-weight:100; display:block; padding:0 0 10px 0; }<\/style><div id=\"tandt_search\"> <div id=\"title_row\"> <ul id=\"nav\"> <li class=\"active\">Trucks<\/li> <li>Trailers<\/li> <li>Search<\/li> <\/ul> <\/div> <div id=\"Trucks_search\" class=\"search_box\"> <form name=\"truck_quick_search\" id=\"truck_quick_search\"> <div class=\"form_row form_select\"> <select name=\"intCategoryID\" id=\"truck_type\"> <option value=\"-2\" selected=\"selected\">All Applications<\/option> <option value=\"50\">Aggregate Spreader<\/option> <option value=\"36\">Beverage Truck<\/option> <option value=\"10\">Bucket Truck<\/option> <option value=\"8\">Cabover Cab &amp; Chassis<\/option> <option value=\"15\">Cabover Tractor<\/option> <option value=\"52\">Cabover w\/Flat-Deck<\/option> <option value=\"32\">Cabover w\/Van<\/option> <option value=\"23\">Car Hauler<\/option> <option value=\"20\">Components\/Parts<\/option> <option value=\"251\">Construction Equip.<\/option> <option value=\"77\">Container Chassis<\/option> <option value=\"48\">Crane Truck<\/option> <option value=\"33\">Cube Van<\/option> <option value=\"608\">Damaged\/Wrecked Trucks<\/option> <option value=\"92\">Daycab Tractor<\/option> <option value=\"199\">Dump Truck<\/option> <option value=\"110\">Expedite Truck<\/option> <option value=\"364\">Feed\/Grain Truck<\/option> <option value=\"117\">Fire\/Ladder Truck<\/option> <option value=\"331\">Fuel Truck<\/option> <option value=\"205\">Garbage\/Refuse Truck<\/option> <option value=\"98\">Heavy-Haul Daycab<\/option> <option value=\"104\">Heavy-Haul Tractor<\/option> <option value=\"94\">Highway Tractor<\/option> <option value=\"116\">Lift Truck<\/option> <option value=\"730\">Livestock Truck<\/option> <option value=\"731\">Logging Equipment<\/option> <option value=\"357\">Logging Truck<\/option> <option value=\"540\">Lugger Truck<\/option> <option value=\"599\">Mining Equip.<\/option> <option value=\"358\">Mixer Truck<\/option> <option value=\"99\">Other Trucks<\/option> <option value=\"330\">Pickup Truck<\/option> <option value=\"768\">Propane\/CNG\/LNG<\/option> <option value=\"733\">Recycling Truck<\/option> <option value=\"103\">Refrigerated Truck<\/option> <option value=\"732\">Roll-Off Bodies<\/option> <option value=\"115\">Roll-off Truck<\/option> <option value=\"250\">Shunt Truck<\/option> <option value=\"196\">Single\/Axle Tractor<\/option> <option value=\"203\">Snow - Plow\/Sander Truck<\/option> <option value=\"734\">Steering\/Lift Axle\/Axle<\/option> <option value=\"735\">Step Van<\/option> <option value=\"102\">Straight Truck (Cab and Chassis)<\/option> <option value=\"121\">Straight Truck w\/Flat Deck<\/option> <option value=\"101\">Straight Truck w\/Van<\/option> <option value=\"210\">Tank Truck<\/option> <option value=\"119\">Tow Truck<\/option> <option value=\"583\">Truck Bodies (see Trailers)<\/option> <option value=\"542\">Trucks for Salvage<\/option> <option value=\"225\">Used Components\/Parts<\/option> <option value=\"223\">Utility\/Service Truck<\/option> <option value=\"313\">Vacuum Truck<\/option> <option value=\"120\">Van\/Panel Truck<\/option> <\/select> <\/div> <div class=\"form_row form_select\"> <select name=\"intMakeID\" id=\"truck_make\"> <option value=\"0\">All Makes<\/option> <option value=\"183\">STERLING<\/option> <option value=\"587\">TICO<\/option> <option value=\"763\">REITNOUER<\/option> <option value=\"135\">PETERBILT<\/option> <option value=\"556\">OTTAWA<\/option> <option value=\"737\">PACIFIC<\/option> <option value=\"146\">VOLVO<\/option> <option value=\"176\">WESTERN STAR<\/option> <option value=\"738\">WHITEGMC<\/option> <option value=\"145\">OTHER<\/option> <option value=\"359\">MITSUBISHI FUSO<\/option> <option value=\"133\">FORD<\/option> <option value=\"141\">FREIGHTLINER<\/option> <option value=\"614\">FUSO<\/option> <option value=\"194\">DODGE<\/option> <option value=\"182\">CHEVROLET<\/option> <option value=\"249\">CAPACITY<\/option> <option value=\"131\">CAT<\/option> <option value=\"181\">GMC<\/option> <option value=\"736\">LOAD LIFTER<\/option> <option value=\"180\">MACK<\/option> <option value=\"144\">KENWORTH<\/option> <option value=\"204\">ISUZU<\/option> <option value=\"136\">HINO<\/option> <option value=\"142\">INTERNATIONAL<\/option> <option value=\"325\">AUTOCAR<\/option> <\/select> <\/div> <div class=\"form_row\"> <div class=\"search_btn\"><a target=\"_blank\" id=\"truck\" class=\"submit\" href=\"http:\/\/www.truckandtrailer.ca\/en\/solrsearch\"><\/a> <\/div> <\/div> <\/form> <\/div> <div id=\"Trailers_search\" class=\"search_box\"> <form name=\"trailer_quick_search\" id=\"trailer_quick_search\"> <div class=\"form_row form_select\"> <select name=\"trailer_type\" id=\"trailer_type\"> <option value=\"-2\" selected=\"selected\">All Applications<\/option> <option value=\"713\">A Train End Dump<\/option> <option value=\"140\">\"A\" Train Flat<\/option> <option value=\"714\">A Train Van<\/option> <option value=\"715\">B Train End Dump<\/option> <option value=\"193\">B Train Flat<\/option> <option value=\"230\">B Train Hopper Dump<\/option> <option value=\"580\">B Train Van<\/option> <option value=\"216\">Alum. Drop-Frame\/Step-Deck Flat<\/option> <option value=\"232\">Aluminum End Dump<\/option> <option value=\"138\">Aluminum Flat<\/option> <option value=\"233\">Aluminum Hopper Dump<\/option> <option value=\"213\">Aluminum Tank\/Tanker<\/option> <option value=\"607\">Belly Dump<\/option> <option value=\"153\">Beverage Trailer<\/option> <option value=\"717\">Bogie\/Lift-Axle\/Axle<\/option> <option value=\"547\">Car-Carrier<\/option> <option value=\"198\">Cargo Container<\/option> <option value=\"227\">Chip Van<\/option> <option value=\"170\">Combo Drop-Frame\/Step-Deck Flat<\/option> <option value=\"175\">Combo Flat<\/option> <option value=\"570\">Components\/Parts<\/option> <option value=\"559\">Compressed Gas Tank\/Tanker<\/option> <option value=\"317\">Construction\/Machinery Trailer<\/option> <option value=\"173\">Container Chassis<\/option> <option value=\"220\">Converter Dolly<\/option> <option value=\"374\">Crude Tank\/Tanker<\/option> <option value=\"718\">Custom Built<\/option> <option value=\"329\">Double\/Drop Flat<\/option> <option value=\"320\">Drop-Frame Van<\/option> <option value=\"165\">Dry Bulk\/Pneumatic Tanker<\/option> <option value=\"160\">Dry Freight Van<\/option> <option value=\"155\">Dump Body<\/option> <option value=\"549\">Enclosed Trailer<\/option> <option value=\"245\">Extendable Flat<\/option> <option value=\"432\">Extendable\/Train Container Chassis<\/option> <option value=\"572\">Fiberglass Tanker<\/option> <option value=\"545\">Gooseneck Trailer<\/option> <option value=\"318\">Heated Van<\/option> <option value=\"156\">Hopper Dump\/Trains<\/option> <option value=\"551\">Hot Product Tanker<\/option> <option value=\"168\">Jeep\/Booster<\/option> <option value=\"586\">Landscape Trailer<\/option> <option value=\"208\">Live-Bottom Trailer<\/option> <option value=\"178\">Livestock Trailer<\/option> <option value=\"569\">Logging Trailer<\/option> <option value=\"195\">Lowbed\/Float<\/option> <option value=\"719\">LPG Tank\/Tanker<\/option> <option value=\"720\">Lugger Trailer<\/option> <option value=\"253\">Moving Van<\/option> <option value=\"566\">Multi-Axle Flat<\/option> <option value=\"242\">Open-Top Van<\/option> <option value=\"366\">Paver Trailer<\/option> <option value=\"212\">Petroleum Tank\/Tanker<\/option> <option value=\"246\">Plate Van<\/option> <option value=\"534\">Pony\/Pup Dump<\/option> <option value=\"597\">Pony\/Pup Flat<\/option> <option value=\"197\">Pup Van<\/option> <option value=\"529\">Rack &amp; Tarp Flat<\/option> <option value=\"157\">Refrigerated Van<\/option> <option value=\"723\">Refuse Trailer<\/option> <option value=\"217\">Roll-Off Trailer<\/option> <option value=\"568\">Sanitary Tank\/Tanker<\/option> <option value=\"334\">Shuttle Floor Trailer<\/option> <option value=\"139\">Side Dump<\/option> <option value=\"724\">Side Dump Trains<\/option> <option value=\"594\">Site\/Office Trailer<\/option> <option value=\"332\">Sliding Tarp System Trailer<\/option> <option value=\"371\">Sliding-Axle Trailer<\/option> <option value=\"725\">Sour-Sealed Tank\/Tanker<\/option> <option value=\"163\">Stainless Tank\/Tanker<\/option> <option value=\"154\">Steel Drop-Frame\/Step-Deck Flat<\/option> <option value=\"171\">Steel End Dump<\/option> <option value=\"222\">Steel Flat<\/option> <option value=\"231\">Steel Hopper Dump<\/option> <option value=\"535\">Steel Tank\/Tanker<\/option> <option value=\"235\">Storage Van<\/option> <option value=\"206\">Tag-A-Long Trailer<\/option> <option value=\"726\">Tailgate Trailer<\/option> <option value=\"589\">Tandem Aluminum Flat<\/option> <option value=\"581\">Tandem Combo Flat<\/option> <option value=\"336\">Tandem Steel Flat<\/option> <option value=\"531\">Tilting Bed Trailer<\/option> <option value=\"361\">Tin Scow<\/option> <option value=\"727\">Tipper Trailer<\/option> <option value=\"728\">Trailers for Salvage<\/option> <option value=\"555\">Transfer Trailer<\/option> <option value=\"729\">Transporter<\/option> <option value=\"563\">Truck Bodies<\/option> <option value=\"247\">Used Components\/Parts<\/option> <option value=\"595\">Used Trailer Components\/Parts<\/option> <option value=\"380\">Utility Trailer<\/option> <option value=\"372\">Vacuum Tank\/Trailer<\/option> <option value=\"229\">Walking-Floor Trailer<\/option> <option value=\"584\">Other Trailers<\/option> <\/select> <\/div> <div class=\"form_row form_select\"> <select name=\"trailer_make\" id=\"trailer_make\"> <option value=\"0\" selected=\"selected\">All Makes<\/option> <option value=\"557\">ABS<\/option> <option value=\"211\">ADVANCE<\/option> <option value=\"617\">ALFORGE<\/option> <option value=\"132\">ALLOY<\/option> <option value=\"618\">ALLWELD<\/option> <option value=\"619\">ALMAC<\/option> <option value=\"244\">ALUTREC<\/option> <option value=\"620\">AMERICAN CARGO<\/option> <option value=\"621\">ANSER<\/option> <option value=\"148\">ARNES<\/option> <option value=\"137\">ASPEN TRAILERS<\/option> <option value=\"546\">ATC<\/option> <option value=\"548\">ATLAS<\/option> <option value=\"622\">AZTEC<\/option> <option value=\"623\">BAR-BEL<\/option> <option value=\"177\">BARRETT<\/option> <option value=\"550\">BEALL<\/option> <option value=\"593\">BEAU-ROC<\/option> <option value=\"218\">BEDARD<\/option> <option value=\"624\">BELGIUM STANDARD<\/option> <option value=\"625\">BENLEE<\/option> <option value=\"577\">BENSON<\/option> <option value=\"626\">BIBEAU<\/option> <option value=\"627\">BIG TOW<\/option> <option value=\"162\">BRENNER<\/option> <option value=\"239\">BWS<\/option> <option value=\"628\">C.D.E.<\/option> <option value=\"629\">CANADA<\/option> <option value=\"369\">CANCADE<\/option> <option value=\"379\">CANUCK<\/option> <option value=\"766\">CAPACITY<\/option> <option value=\"630\">CASTLETON<\/option> <option value=\"543\">CHAGNON<\/option> <option value=\"631\">CHALLENGER<\/option> <option value=\"601\">CHAPARRAL<\/option> <option value=\"315\">CHEETAH<\/option> <option value=\"632\">CHOICE<\/option> <option value=\"633\">CIMC<\/option> <option value=\"335\">COBRA<\/option> <option value=\"377\">COLUMBIA-REMTEC<\/option> <option value=\"634\">COMPTANK<\/option> <option value=\"635\">COTTRELL<\/option> <option value=\"187\">CROSS COUNTRY<\/option> <option value=\"367\">CUSTOM<\/option> <option value=\"636\">DAHMS<\/option> <option value=\"637\">DALOR<\/option> <option value=\"638\">DAMSEN<\/option> <option value=\"639\">DANALI<\/option> <option value=\"640\">DEBLOIS<\/option> <option value=\"375\">DELOUPE<\/option> <option value=\"641\">DEPENDABLE<\/option> <option value=\"532\">DI-MOND<\/option> <option value=\"324\">DOEPKER<\/option> <option value=\"561\">DOONAN<\/option> <option value=\"319\">DORSEY<\/option> <option value=\"642\">DRAGON<\/option> <option value=\"134\">DRAKE<\/option> <option value=\"643\">DURABODY<\/option> <option value=\"537\">EAGER BEAVER<\/option> <option value=\"321\">EAST<\/option> <option value=\"179\">EBY<\/option> <option value=\"613\">ECONOLINE<\/option> <option value=\"536\">ELGIN<\/option> <option value=\"188\">ETNYRE<\/option> <option value=\"645\">EXISS<\/option> <option value=\"646\">EZ-2-LOAD<\/option> <option value=\"647\">FABREX<\/option> <option value=\"648\">FANOTECH<\/option> <option value=\"649\">FEATHERLITE<\/option> <option value=\"376\">FELLING<\/option> <option value=\"650\">FERREE<\/option> <option value=\"651\">FLOAT KING<\/option> <option value=\"314\">FONTAINE<\/option> <option value=\"362\">FRUEHAUF<\/option> <option value=\"652\">G&amp;F<\/option> <option value=\"592\">GLOBE<\/option> <option value=\"653\">GOODING<\/option> <option value=\"562\">GRAINMASTER<\/option> <option value=\"654\">GRAVHAUL<\/option> <option value=\"147\">GREAT DANE<\/option> <option value=\"655\">HEARST<\/option> <option value=\"373\">HEIL<\/option> <option value=\"739\">HENRY<\/option> <option value=\"429\">HOMEMADE<\/option> <option value=\"567\">HUTCHINSON<\/option> <option value=\"538\">HYUNDAI<\/option> <option value=\"656\">IBL<\/option> <option value=\"606\">ICD<\/option> <option value=\"248\">J &amp; J<\/option> <option value=\"237\">J &amp; L<\/option> <option value=\"657\">JAMCO<\/option> <option value=\"553\">JC<\/option> <option value=\"658\">JDJ<\/option> <option value=\"659\">JET<\/option> <option value=\"660\">JINDO<\/option> <option value=\"254\">K-LINE<\/option> <option value=\"661\">KALYN<\/option> <option value=\"167\">KALYN\/SIEBERT<\/option> <option value=\"662\">KARI-KOOL<\/option> <option value=\"186\">KAUFMAN<\/option> <option value=\"252\">KENTUCKY<\/option> <option value=\"166\">KING<\/option> <option value=\"663\">KNAPHEIDE<\/option> <option value=\"191\">KROHNERT<\/option> <option value=\"664\">LABRIE<\/option> <option value=\"665\">LACASSE<\/option> <option value=\"666\">LANAU<\/option> <option value=\"219\">LANDOLL<\/option> <option value=\"560\">LAZER<\/option> <option value=\"573\">LBT<\/option> <option value=\"667\">LEADER<\/option> <option value=\"668\">LIDDELL<\/option> <option value=\"174\">LOAD KING<\/option> <option value=\"669\">LOAD LIFTER<\/option> <option value=\"238\">LOADSTAR - PARON<\/option> <option value=\"192\">LODE-KING<\/option> <option value=\"670\">LODECRAFT<\/option> <option value=\"671\">LUFKIN<\/option> <option value=\"215\">MAC<\/option> <option value=\"169\">MANAC<\/option> <option value=\"672\">MARKHAM<\/option> <option value=\"172\">MAX-ATLAS<\/option> <option value=\"673\">MAXFIELD<\/option> <option value=\"674\">MERRITT<\/option> <option value=\"370\">MIDLAND<\/option> <option value=\"576\">MILANO<\/option> <option value=\"675\">MISSISSIPPI<\/option> <option value=\"200\">MOND<\/option> <option value=\"590\">MONON<\/option> <option value=\"676\">MULTiVANS<\/option> <option value=\"565\">MUV-ALL<\/option> <option value=\"564\">NEU-STAR<\/option> <option value=\"552\">NORTH COUNTRY<\/option> <option value=\"143\">OTHER<\/option> <option value=\"746\">OTTAWA<\/option> <option value=\"677\">PACE AMERICAN<\/option> <option value=\"164\">PARON<\/option> <option value=\"747\">PETERBILT<\/option> <option value=\"588\">PEZZAIOLI<\/option> <option value=\"678\">PITTS<\/option> <option value=\"189\">POLAR<\/option> <option value=\"679\">PORTA<\/option> <option value=\"574\">PRATT<\/option> <option value=\"226\">RAGLAN<\/option> <option value=\"680\">RAJA<\/option> <option value=\"681\">RAVENS<\/option> <option value=\"682\">RAYFAB<\/option> <option value=\"207\">RED RIVER<\/option> <option value=\"683\">REID<\/option> <option value=\"684\">REINKE<\/option> <option value=\"685\">REIST<\/option> <option value=\"322\">REITNOUER<\/option> <option value=\"533\">REMTEC<\/option> <option value=\"378\">RENN<\/option> <option value=\"686\">REXINGER<\/option> <option value=\"687\">RHODES<\/option> <option value=\"688\">ROADMASTER<\/option> <option value=\"689\">ROADWAY<\/option> <option value=\"690\">ROBICA\/FORMAN<\/option> <option value=\"596\">ROGERS<\/option> <option value=\"541\">ROUSSY<\/option> <option value=\"691\">SCHELTEMA<\/option> <option value=\"256\">STARGATE<\/option> <option value=\"575\">STE<\/option> <option value=\"748\">STERLING<\/option> <option value=\"692\">STOLL<\/option> <option value=\"201\">STOUGHTON<\/option> <option value=\"161\">STRICK<\/option> <option value=\"693\">SUMMIT<\/option> <option value=\"579\">SUPERIOR<\/option> <option value=\"184\">TALBERT<\/option> <option value=\"582\">TANKCON<\/option> <option value=\"694\">TECHNOVA<\/option> <option value=\"591\">TECUMSEH<\/option> <option value=\"228\">TEMISKO<\/option> <option value=\"221\">THRU-WAY<\/option> <option value=\"695\">TIMMINS<\/option> <option value=\"255\">TIMPTE<\/option> <option value=\"214\">TITAN<\/option> <option value=\"696\">TITAN\/EAST<\/option> <option value=\"697\">TOUGAS<\/option> <option value=\"698\">TOWMASTER<\/option> <option value=\"323\">TRAIL KING<\/option> <option value=\"530\">TRAILLEASE<\/option> <option value=\"316\">TRAILMOBILE<\/option> <option value=\"699\">TRAILSTAR<\/option> <option value=\"243\">TRANSCRAFT<\/option> <option value=\"190\">TREMCAR<\/option> <option value=\"333\">TROUT RIVER<\/option> <option value=\"598\">TROXELL<\/option> <option value=\"700\">TUSCO<\/option> <option value=\"701\">TY-CROP<\/option> <option value=\"360\">UHE<\/option> <option value=\"544\">UNIVERSAL<\/option> <option value=\"159\">UTILITY<\/option> <option value=\"363\">VANGUARD<\/option> <option value=\"702\">VANTAGE<\/option> <option value=\"234\">VARIOUS<\/option> <option value=\"749\">VOLVO<\/option> <option value=\"158\">WABASH<\/option> <option value=\"431\">WALINGA<\/option> <option value=\"578\">WALKER<\/option> <option value=\"703\">WALTRON<\/option> <option value=\"704\">WELDEX<\/option> <option value=\"585\">WELLS CARGO<\/option> <option value=\"705\">WEST<\/option> <option value=\"600\">WESTANK<\/option> <option value=\"706\">WESTMARK<\/option> <option value=\"558\">WESTMOR<\/option> <option value=\"707\">WILLOCK<\/option> <option value=\"149\">WILSON<\/option> <option value=\"708\">WILTSIE<\/option> <option value=\"709\">WIND TOWER TRAILER<\/option> <option value=\"710\">WINSTON<\/option> <option value=\"711\">WITZCO<\/option> <option value=\"328\">XL SPECIALIZED<\/option> <\/select> <\/div> <div class=\"form_row\"> <div class=\"search_btn\"><a target=\"_blank\" id=\"trailer\" class=\"submit\" href=\"http:\/\/www.truckandtrailer.ca\/en\/solrsearch\"><\/a> <\/div> <\/div> <\/form> <\/div> <div id=\"Search_search\" class=\"search_box\"> <form name=\"text_quick_search\" id=\"text_quick_search\" onsubmit=\"return false;\"> <div class=\"form_row\"> <label for=\"quick_search\">Quick Search<\/label> <input name=\"quick_search\" id=\"quick_search\" type=\"text\" placeholder=\"Search inventory\"\/> <\/div> <div class=\"form_row\"> <div class=\"search_btn\"><a target=\"_blank\" id=\"quick\" class=\"submit\" href=\"http:\/\/www.truckandtrailer.ca\/en\/sitesearch\"><\/a> <\/div> <\/div> <\/form> <\/div><\/div><script type=\"text\/javascript\"> function searchTandT() { var A = 6, E = clickMacro; if (\"truck\" == this.id || \"trailer\" == this.id) { var T = document.getElementById(this.id + \"_type\"); T = T.options[T.selectedIndex].value; var R = document.getElementById(this.id + \"_make\"); R = R.options[R.selectedIndex].value; E += \"http:\/\/www.truckandtrailer.ca\/en\/solrsearch?f[0]=field_industry%3A\"; if (\"truck\" == this.id) { E += A; if (T > 0) { E += \"&f[1]=field_truck_category%3A\" + T; } if (R > 0) { E += \"&f[2]=field_truck_make%3A\" + R; } } else { A = 60; E += A; if (T > 0) { E += \"&f[1]=field_trailer_category%3A\" + T; } if (R > 0) { E += \"&f[2]=field_trailer_make%3A\" + R; } } } else if (\"quick\" == this.id && (A = 4)) { var N = encodeURIComponent(document.getElementById(\"quick_search\").value); E += \"http:\/\/www.truckandtrailer.ca\/en\/sitesearch?search_api_views_fulltext=\" + N } this.setAttribute(\"href\", E) } for (var nav = document.getElementById(\"nav\").getElementsByTagName(\"li\"), search_boxes = document.getElementsByClassName(\"search_box\"), i = 0; i < nav.length; i++)nav[i].addEventListener(\"click\", function () { for (var A = 0; A < nav.length; A++)nav[A].className = \"\"; for (var E = 0; E < search_boxes.length; E++)search_boxes[E].style.display = \"none\"; this.className = \"active\", document.getElementById(this.innerHTML + \"_search\").style.display = \"block\" }, !1); for (var elem = document.getElementsByClassName(\"submit\"), i = 0; i < elem.length; i++)elem[i].addEventListener(\"click\", searchTandT, !1);<\/script>");