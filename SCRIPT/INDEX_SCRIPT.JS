let COUNTRY_LIST = 
{
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

const DROP_LIST = document.querySelectorAll('.DROP_LIST select'),
FORM_CURRENCY = document.querySelector('.FROM select'),
TO_CURRENCT = document.querySelector('.TO select'),
GET_BUTTON = document.querySelector('form button');

for (let i = 0; i < DROP_LIST.length; i++) 
{
    for(CURRENCY_CODE in COUNTRY_LIST)
    {
        let SELECTED;

        if(i == 0)
        {
            SELECTED = CURRENCY_CODE == "USD" ? "SELECTED" : "";
        }
        else if(i == 1)
        {
            SELECTED = CURRENCY_CODE == "NPR" ? "SELECTED" : "";
        }

        let OPTION_TAG = `<option value="${CURRENCY_CODE}" ${SELECTED}>${CURRENCY_CODE}</option>`;
        DROP_LIST[i].insertAdjacentHTML("beforeend", OPTION_TAG);
    } 
    
    DROP_LIST[i].addEventListener('change', E =>
    {
        LOAD_FLAG(E.target);
    });
}

function LOAD_FLAG(ELEMENT)
{
    for(CODE in COUNTRY_LIST)
    {
        if(CODE == ELEMENT.value)
        {
            let IMG_TAG = ELEMENT.parentElement.querySelector('img');
            IMG_TAG.src = `https://www.countryflags.io/${COUNTRY_LIST[CODE]}/flat/64.png`;
        }
    }
}

window.addEventListener('load', () =>
{
    GET_EXCHANGE_RATE();
});

GET_BUTTON.addEventListener('click', E =>
{
    E.preventDefault();
    GET_EXCHANGE_RATE();
});

const EXCHNAGE_ICON = document.querySelector('.DROP_LIST .ICON');
EXCHNAGE_ICON.addEventListener('click', () => 
{
    let TEMP_CODE = FORM_CURRENCY.value;
    FORM_CURRENCY.value = TO_CURRENCT.value;
    TO_CURRENCT.value = TEMP_CODE;

    LOAD_FLAG(FORM_CURRENCY);
    LOAD_FLAG(TO_CURRENCT);
    GET_EXCHANGE_RATE();
});

function GET_EXCHANGE_RATE()
{
    const AMOUNT = document.querySelector('.AMOUNT input');
    const EXCHNAGE_RATE_TXT = document.querySelector('.EXCHANGE_RATE');
    let AMOUNT_VALUE = AMOUNT.value;
    
    if(AMOUNT_VALUE == '' || AMOUNT_VALUE == '0')
    {
        AMOUNT.value = '1';
        AMOUNT_VALUE = 1;
    }

    EXCHNAGE_RATE_TXT.innerHTML = "GETTING EXCHNAGE RATE..."

    let URL = `https://v6.exchangerate-api.com/v6/a1409e80ea2403cd68425657/latest/${FORM_CURRENCY.value}`;
    fetch(URL).then(RESPONSE => RESPONSE.json()).then(RESULT => 
        {
            let EXCHNAGE_RATE = RESULT.conversion_rates[TO_CURRENCT.value];
            let TOTAL_EXCHANGE_RATE = (AMOUNT_VALUE * EXCHNAGE_RATE).toFixed(2);

            EXCHNAGE_RATE_TXT.innerHTML = `${AMOUNT_VALUE} ${FORM_CURRENCY.value} = ${TOTAL_EXCHANGE_RATE} ${TO_CURRENCT.value}`;
        }).catch(() => 
        {
            EXCHNAGE_RATE_TXT.innerHTML = "SOME-THING WENT WORNG !";
        });
}