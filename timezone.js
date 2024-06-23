const country=["Africa/Abidjan",
"Africa/Algiers",
"Africa/Bissau",
"Africa/Cairo",
"Africa/Casablanca",
"Africa/Ceuta",
"Africa/El_Aaiun",
"Africa/Johannesburg",
"Africa/Juba",
"Africa/Khartoum",
"Africa/Lagos",
"Africa/Maputo",
"Africa/Monrovia",
"Africa/Nairobi",
"Africa/Ndjamena",
"Africa/Sao_Tome",
"Africa/Tripoli",
"Africa/Tunis",
"Africa/Windhoek",
"America/Adak",
"America/Anchorage",
"America/Araguaina",
"America/Argentina/Buenos_Aires",
"America/Argentina/Catamarca",
"America/Argentina/Cordoba",
"America/Argentina/Jujuy",
"America/Argentina/La_Rioja",
"America/Argentina/Mendoza",
"America/Argentina/Rio_Gallegos",
"America/Argentina/Salta",
"America/Argentina/San_Juan",
"America/Argentina/San_Luis",
"America/Argentina/Tucuman",
"America/Argentina/Ushuaia",
"America/Asuncion",
"America/Bahia",
"America/Bahia_Banderas",
"America/Barbados",
"America/Belem",
"America/Belize",
"America/Boa_Vista",
"America/Bogota",
"America/Boise",
"America/Cambridge_Bay",
"America/Campo_Grande",
"America/Cancun",
"America/Caracas",
"America/Cayenne",
"America/Chicago",
"America/Chihuahua",
"America/Ciudad_Juarez",
"America/Costa_Rica",
"America/Cuiaba",
"America/Danmarkshavn",
"America/Dawson",
"America/Dawson_Creek",
"America/Denver",
"America/Detroit",
"America/Edmonton",
"America/Eirunepe",
"America/El_Salvador",
"America/Fort_Nelson",
"America/Fortaleza",
"America/Glace_Bay",
"America/Goose_Bay",
"America/Grand_Turk",
"America/Guatemala",
"America/Guayaquil",
"America/Guyana",
"America/Halifax",
"America/Havana",
"America/Hermosillo",
"America/Indiana/Indianapolis",
"America/Indiana/Knox",
"America/Indiana/Marengo",
"America/Indiana/Petersburg",
"America/Indiana/Tell_City",
"America/Indiana/Vevay",
"America/Indiana/Vincennes",
"America/Indiana/Winamac","America/Inuvik",
"America/Iqaluit",
"America/Jamaica",
"America/Juneau",
"America/Kentucky/Louisville",
"America/Kentucky/Monticello",
"America/La_Paz",
"America/Lima",
"America/Los_Angeles",
"America/Maceio",
"America/Managua",
"America/Manaus",
"America/Martinique",
"America/Matamoros",
"America/Mazatlan",
"America/Menominee",
"America/Merida",
"America/Metlakatla",
"America/Mexico_City",
"America/Miquelon",
"America/Moncton",
"America/Monterrey",
"America/Montevideo",
"America/New_York",
"America/Nome",
"America/Noronha",
"America/North_Dakota/Beulah",
"America/North_Dakota/Center",
"America/North_Dakota/New_Salem",
"America/Nuuk",
"America/Ojinaga",
"America/Panama",
"America/Paramaribo",
"America/Phoenix",
"America/Port-au-Prince",
"America/Porto_Velho",
"America/Puerto_Rico",
"America/Punta_Arenas",
"America/Rankin_Inlet",
"America/Recife",
"America/Regina",
"America/Resolute",
"America/Rio_Branco",
"America/Santarem",
"America/Santiago",
"America/Santo_Domingo",
"America/Sao_Paulo",
"America/Scoresbysund",
"America/Sitka",
"America/St_Johns",
"America/Swift_Current",
"America/Tegucigalpa",
"America/Thule",
"America/Tijuana",
"America/Toronto",
"America/Vancouver",
"America/Whitehorse",
"America/Winnipeg",
"America/Yakutat",
"Antarctica/Casey",
"Antarctica/Davis",
"Antarctica/Macquarie",
"Antarctica/Mawson",
"Antarctica/Palmer",
"Antarctica/Rothera",
"Antarctica/Troll",
"Asia/Almaty",
"Asia/Amman",
"Asia/Anadyr",
"Asia/Aqtau",
"Asia/Aqtobe",
"Asia/Ashgabat",
"Asia/Atyrau",
"Asia/Baghdad",
"Asia/Baku",
"Asia/Bangkok",
"Asia/Barnaul",
"Asia/Beirut",
"Asia/Bishkek",
"Asia/Chita",
"Asia/Choibalsan",
"Asia/Colombo",
"Asia/Damascus",
"Asia/Dhaka",
"Asia/Dili",
"Asia/Dubai",
"Asia/Dushanbe",
"Asia/Famagusta",
"Asia/Gaza",
"Asia/Hebron",
"Asia/Ho_Chi_Minh",
"Asia/Hong_Kong",
"Asia/Hovd",
"Asia/Irkutsk",
"Asia/Jakarta",
"Asia/Jayapura",
"Asia/Jerusalem",
"Asia/Kabul",
"Asia/Kamchatka",
"Asia/Karachi",
"Asia/Kathmandu",
"Asia/Khandyga",
"Asia/Kolkata",
"Asia/Krasnoyarsk",
"Asia/Kuching",
"Asia/Macau",
"Asia/Magadan",
"Asia/Makassar",
"Asia/Manila",
"Asia/Nicosia",
"Asia/Novokuznetsk",
"Asia/Novosibirsk",
"Asia/Omsk",
"Asia/Oral",
"Asia/Pontianak",
"Asia/Pyongyang",
"Asia/Qatar",
"Asia/Qostanay",
"Asia/Qyzylorda",
"Asia/Riyadh",
"Asia/Sakhalin",
"Asia/Samarkand",
"Asia/Seoul",
"Asia/Shanghai",
"Asia/Singapore",
"Asia/Srednekolymsk",
"Asia/Taipei",
"Asia/Tashkent",
"Asia/Tbilisi",
"Asia/Tehran",
"Asia/Thimphu",
"Asia/Tokyo",
"Asia/Tomsk",
"Asia/Ulaanbaatar",
"Asia/Urumqi",
"Asia/Ust-Nera",
"Asia/Vladivostok",
"Asia/Yakutsk",
"Asia/Yangon",
"Asia/Yekaterinburg",
"Asia/Yerevan",
"Atlantic/Azores",
"Atlantic/Bermuda",
"Atlantic/Canary",
"Atlantic/Cape_Verde",
"Atlantic/Faroe",
"Atlantic/Madeira",
"Atlantic/South_Georgia",
"Atlantic/Stanley",
"Australia/Adelaide",
"Australia/Brisbane",
"Australia/Broken_Hill",
"Australia/Darwin",
"Australia/Eucla",
"Australia/Hobart",
"Australia/Lindeman",
"Australia/Lord_Howe",
"Australia/Melbourne",
"Australia/Perth",
"Australia/Sydney",
"CET",
"CST6CDT",
"EET",
"EST",
"EST5EDT",
"Etc/GMT",
"Etc/GMT+1",
"Etc/GMT+10",
"Etc/GMT+11",
"Etc/GMT+12",
"Etc/GMT+2",
"Etc/GMT+3",
"Etc/GMT+4",
"Etc/GMT+5",
"Etc/GMT+6",
"Etc/GMT+7",
"Etc/GMT+8",
"Etc/GMT+9",
"Etc/GMT-1",
"Etc/GMT-10",
"Etc/GMT-11",
"Etc/GMT-12",
"Etc/GMT-13",
"Etc/GMT-14",
"Etc/GMT-2",
"Etc/GMT-3",
"Etc/GMT-4",
"Etc/GMT-5",
"Etc/GMT-6",
"Etc/GMT-7",
"Etc/GMT-8",
"Etc/GMT-9",
"Etc/UTC",
"Europe/Andorra",
"Europe/Astrakhan",
"Europe/Athens",
"Europe/Belgrade",
"Europe/Berlin",
"Europe/Brussels",
"Europe/Bucharest",
"Europe/Budapest",
"Europe/Chisinau",
"Europe/Dublin",
"Europe/Gibraltar",
"Europe/Helsinki",
"Europe/Istanbul",
"Europe/Kaliningrad"
,"Europe/Kirov",
"Europe/Kyiv",
"Europe/Lisbon",
"Europe/London",
"Europe/Madrid",
"Europe/Malta",
"Europe/Minsk",
"Europe/Moscow",
"Europe/Paris"
,"Europe/Prague",
"Europe/Riga",
"Europe/Rome",
"Europe/Samara",
"Europe/Saratov",
"Europe/Simferopol",
"Europe/Sofia",
"Europe/Tallinn",
"Europe/Tirane",
"Europe/Ulyanovsk",
"Europe/Vienna",
"Europe/Vilnius",
"Europe/Volgograd",
"Europe/Warsaw",
"Europe/Zurich",
"HST",
"Indian/Chagos",
"Indian/Maldives",
"Indian/Mauritius",
"MET",
"MST",
"MST7MDT",
"PST8PDT",
"Pacific/Apia",
"Pacific/Auckland",
"Pacific/Bougainville",
"Pacific/Chatham",
"Pacific/Easter",
"Pacific/Efate",
"Pacific/Fakaofo",
"Pacific/Fiji",
"Pacific/Galapagos",
"Pacific/Gambier",
"Pacific/Guadalcanal",
"Pacific/Guam",
"Pacific/Honolulu",
"Pacific/Kanton",
"Pacific/Kiritimati",
"Pacific/Kosrae",
"Pacific/Kwajalein",
"Pacific/Marquesas",
"Pacific/Nauru",
"Pacific/Niue",
"Pacific/Norfolk",
"Pacific/Noumea",
"Pacific/Pago_Pago",
"Pacific/Palau",
"Pacific/Pitcairn",
"Pacific/Port_Moresby",
"Pacific/Rarotonga",
"Pacific/Tahiti",
"Pacific/Tarawa",
"Pacific/Tongatapu",
"WET"
];
// const time =new Date();
// console.log(time.toString());
let url="http://worldtimeapi.org/api/timezone/";
let sel=document.querySelector(".selectti select");
let btn=document.querySelector("#submit");
let tz=document.querySelector(".timeattz");
let lo=document.querySelector(".local");
let n=country.length;
let ch="";  
let time,off;
for(let i=0;i<n;i++){
    let option=document.createElement("option");
    option.value=country[i];
    option.innerText=country[i];
    sel.append(option);
}
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let val=sel.value;
    const u=`${url}/${val}`;
    let response =await fetch(u);
    let data= await response.json();
    console.log(data);
    let time_data=data["datetime"].toString();
    console.log(time_data);
    let date=time_data.substring(0,time_data.indexOf("T"));
    console.log(date);
    let f=0;
    f=time_data.indexOf("+");
    console.log(f);
    if(f>=0){
     time=time_data.substring(time_data.indexOf("T")+1,time_data.lastIndexOf("+"));
    console.log(time);
    off=time_data.substring(time_data.lastIndexOf("+")+1);
    console.log(off);
    }
    else if(f<0){
     time=time_data.substring(time_data.indexOf("T")+1,time_data.lastIndexOf("-"));
        console.log(time);
     off=time_data.substring(time_data.lastIndexOf("-")+1);
        console.log(off);
    }
    tz.innerText=`Date: ${date}\n
                  Time: ${time}\n
                  Offset: ${off}`;
})