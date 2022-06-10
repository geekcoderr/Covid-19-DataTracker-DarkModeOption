var districtNames = {
    '1': [
        'Nicobars',
        'North and Middle Andaman',
        'South Andaman',
        'Unknown'
    ],
    '2': [
        'Foreign Evacuees', 'Anantapur',
        'Chittoor', 'East Godavari',
        'Guntur', 'Krishna',
        'Kurnool', 'Other State',
        'Prakasam', 'S.P.S. Nellore',
        'Srikakulam', 'Visakhapatnam',
        'Vizianagaram', 'West Godavari',
        'Y.S.R. Kadapa'
    ],
    '3': [
        'Anjaw', 'Changlang',
        'East Kameng', 'East Siang',
        'Kamle', 'Kra Daadi',
        'Kurung Kumey', 'Lepa Rada',
        'Lohit', 'Longding',
        'Lower Dibang Valley', 'Lower Siang',
        'Lower Subansiri', 'Namsai',
        'Pakke Kessang', 'Papum Pare',
        'Shi Yomi', 'Siang',
        'Tawang', 'Tirap',
        'Upper Dibang Valley', 'Upper Siang',
        'Upper Subansiri', 'West Kameng',
        'West Siang'
    ],
    '4': [
        'Airport Quarantine',
        'Baksa',
        'Barpeta',
        'Biswanath',
        'Bongaigaon',
        'Cachar',
        'Charaideo',
        'Chirang',
        'Darrang',
        'Dhemaji',
        'Dhubri',
        'Dibrugarh',
        'Dima Hasao',
        'Goalpara',
        'Golaghat',
        'Hailakandi',
        'Hojai',
        'Jorhat',
        'Kamrup',
        'Kamrup Metropolitan',
        'Karbi Anglong',
        'Karimganj',
        'Kokrajhar',
        'Lakhimpur',
        'Majuli',
        'Morigaon',
        'Nagaon',
        'Nalbari',
        'Other State',
        'Sivasagar',
        'Sonitpur',
        'South Salmara Mankachar',
        'Tinsukia',
        'Udalguri',
        'West Karbi Anglong',
        'Unknown'
    ],
    '5': [
        'Araria', 'Arwal', 'Aurangabad',
        'Banka', 'Begusarai', 'Bhagalpur',
        'Bhojpur', 'Buxar', 'Darbhanga',
        'East Champaran', 'Gaya', 'Gopalganj',
        'Jamui', 'Jehanabad', 'Kaimur',
        'Katihar', 'Khagaria', 'Kishanganj',
        'Lakhisarai', 'Madhepura', 'Madhubani',
        'Munger', 'Muzaffarpur', 'Nalanda',
        'Nawada', 'Patna', 'Purnia',
        'Rohtas', 'Saharsa', 'Samastipur',
        'Saran', 'Sheikhpura', 'Sheohar',
        'Sitamarhi', 'Siwan', 'Supaul',
        'Vaishali', 'West Champaran'
    ],
    '6': ['Chandigarh'],
    '7': [
        'Other State',
        'Balod',
        'Baloda Bazar',
        'Balrampur',
        'Bametara',
        'Bastar',
        'Bijapur',
        'Bilaspur',
        'Dakshin Bastar Dantewada',
        'Dhamtari',
        'Durg',
        'Gariaband',
        'Janjgir Champa',
        'Jashpur',
        'Kabeerdham',
        'Kondagaon',
        'Korba',
        'Koriya',
        'Mahasamund',
        'Mungeli',
        'Narayanpur',
        'Raigarh',
        'Raipur',
        'Rajnandgaon',
        'Sukma',
        'Surajpur',
        'Surguja',
        'Uttar Bastar Kanker',
        'Gaurela Pendra Marwahi'
    ],
    '8': [
        'Central Delhi',
        'East Delhi',
        'New Delhi',
        'North Delhi',
        'North East Delhi',
        'North West Delhi',
        'Shahdara',
        'South Delhi',
        'South East Delhi',
        'South West Delhi',
        'West Delhi',
        'Unknown'
    ],
    '9': ['Other State', 'Dadra and Nagar Haveli', 'Daman', 'Diu'],
    '10': ['Other State', 'North Goa', 'South Goa', 'Unknown'],
    '11': [
        'Other State', 'Ahmedabad', 'Amreli',
        'Anand', 'Aravalli', 'Banaskantha',
        'Bharuch', 'Bhavnagar', 'Botad',
        'Chhota Udaipur', 'Dahod', 'Dang',
        'Devbhumi Dwarka', 'Gandhinagar', 'Gir Somnath',
        'Jamnagar', 'Junagadh', 'Kheda',
        'Kutch', 'Mahisagar', 'Mehsana',
        'Morbi', 'Narmada', 'Navsari',
        'Panchmahal', 'Patan', 'Porbandar',
        'Rajkot', 'Sabarkantha', 'Surat',
        'Surendranagar', 'Tapi', 'Vadodara',
        'Valsad'
    ],
    '12': [
        'Bilaspur',
        'Chamba',
        'Hamirpur',
        'Kangra',
        'Kinnaur',
        'Kullu',
        'Lahaul and Spiti',
        'Mandi',
        'Shimla',
        'Sirmaur',
        'Solan',
        'Una'
    ],
    '13': [
        'Foreign Evacuees', 'Ambala',
        'Bhiwani', 'Charkhi Dadri',
        'Faridabad', 'Fatehabad',
        'Gurugram', 'Hisar',
        'Italians', 'Jhajjar',
        'Jind', 'Kaithal',
        'Karnal', 'Kurukshetra',
        'Mahendragarh', 'Nuh',
        'Palwal', 'Panchkula',
        'Panipat', 'Rewari',
        'Rohtak', 'Sirsa',
        'Sonipat', 'Yamunanagar'
    ],
    '14': [
        'Bokaro', 'Chatra',
        'Deoghar', 'Dhanbad',
        'Dumka', 'East Singhbhum',
        'Garhwa', 'Giridih',
        'Godda', 'Gumla',
        'Hazaribagh', 'Jamtara',
        'Khunti', 'Koderma',
        'Latehar', 'Lohardaga',
        'Pakur', 'Palamu',
        'Ramgarh', 'Ranchi',
        'Sahibganj', 'Saraikela-Kharsawan',
        'Simdega', 'West Singhbhum'
    ],
    '15': [
        'Anantnag', 'Bandipora',
        'Baramulla', 'Budgam',
        'Doda', 'Ganderbal',
        'Jammu', 'Kathua',
        'Kishtwar', 'Kulgam',
        'Kupwara', 'Mirpur',
        'Muzaffarabad', 'Pulwama',
        'Punch', 'Rajouri',
        'Ramban', 'Reasi',
        'Samba', 'Shopiyan',
        'Srinagar', 'Udhampur'
    ],
    '16': [
        'Bagalkote', 'Ballari',
        'Belagavi', 'Bengaluru Rural',
        'Bengaluru Urban', 'Bidar',
        'Chamarajanagara', 'Chikkaballapura',
        'Chikkamagaluru', 'Chitradurga',
        'Dakshina Kannada', 'Davanagere',
        'Dharwad', 'Gadag',
        'Hassan', 'Haveri',
        'Kalaburagi', 'Kodagu',
        'Kolar', 'Koppal',
        'Mandya', 'Mysuru',
        'Other State', 'Raichur',
        'Ramanagara', 'Shivamogga',
        'Tumakuru', 'Udupi',
        'Uttara Kannada', 'Vijayapura',
        'Yadgir'
    ],
    '17': [
        'Other State', 'Alappuzha',
        'Ernakulam', 'Idukki',
        'Kannur', 'Kasaragod',
        'Kollam', 'Kottayam',
        'Kozhikode', 'Malappuram',
        'Palakkad', 'Pathanamthitta',
        'Thiruvananthapuram', 'Thrissur',
        'Wayanad'
    ],
    '18': ['Kargil', 'Leh'],
    '19': ['Lakshadweep', 'Unknown'],
    '20': [
        'Ahmednagar', 'Akola', 'Amravati',
        'Aurangabad', 'Beed', 'Bhandara',
        'Buldhana', 'Chandrapur', 'Dhule',
        'Gadchiroli', 'Gondia', 'Hingoli',
        'Jalgaon', 'Jalna', 'Kolhapur',
        'Latur', 'Mumbai', 'Mumbai Suburban',
        'Nagpur', 'Nanded', 'Nandurbar',
        'Nashik', 'Osmanabad', 'Other State',
        'Palghar', 'Parbhani', 'Pune',
        'Raigad', 'Ratnagiri', 'Sangli',
        'Satara', 'Sindhudurg', 'Solapur',
        'Thane', 'Wardha', 'Washim',
        'Yavatmal'
    ],
    '21': [
        'East Garo Hills',
        'East Jaintia Hills',
        'East Khasi Hills',
        'North Garo Hills',
        'Ribhoi',
        'South Garo Hills',
        'South West Garo Hills',
        'South West Khasi Hills',
        'West Garo Hills',
        'West Jaintia Hills',
        'West Khasi Hills'
    ],
    '22': [
        'CAPF Personnel', 'Bishnupur',
        'Chandel', 'Churachandpur',
        'Imphal East', 'Imphal West',
        'Jiribam', 'Kakching',
        'Kamjong', 'Kangpokpi',
        'Noney', 'Pherzawl',
        'Senapati', 'Tamenglong',
        'Tengnoupal', 'Thoubal',
        'Ukhrul', 'Unknown'
    ],
    '23': [
        'Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar',
        'Balaghat', 'Barwani', 'Betul', 'Bhind',
        'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara',
        'Damoh', 'Datia', 'Dewas', 'Dhar',
        'Dindori', 'Guna', 'Gwalior', 'Harda',
        'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua',
        'Katni', 'Khandwa', 'Khargone', 'Mandla',
        'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch',
        'Niwari', 'Other Region', 'Panna', 'Raisen',
        'Rajgarh', 'Ratlam', 'Rewa', 'Sagar',
        'Satna', 'Sehore', 'Seoni', 'Shahdol',
        'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi',
        'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria',
        'Vidisha', 'Unknown'
    ],
    '24': [
        'Aizawl', 'Champhai',
        'Hnahthial', 'Khawzawl',
        'Kolasib', 'Lawngtlai',
        'Lunglei', 'Mamit',
        'Saiha', 'Saitual',
        'Serchhip'
    ],
    '25': [
        'Others', 'Dimapur',
        'Kiphire', 'Kohima',
        'Longleng', 'Mokokchung',
        'Mon', 'Peren',
        'Phek', 'Tuensang',
        'Wokha', 'Zunheboto'
    ],
    '26': [
        'State Pool', 'Others', 'Angul',
        'Balangir', 'Balasore', 'Bargarh',
        'Bhadrak', 'Boudh', 'Cuttack',
        'Deogarh', 'Dhenkanal', 'Gajapati',
        'Ganjam', 'Jagatsinghpur', 'Jajpur',
        'Jharsuguda', 'Kalahandi', 'Kandhamal',
        'Kendrapara', 'Kendujhar', 'Khordha',
        'Koraput', 'Malkangiri', 'Mayurbhanj',
        'Nabarangapur', 'Nayagarh', 'Nuapada',
        'Puri', 'Rayagada', 'Sambalpur',
        'Subarnapur', 'Sundargarh'
    ],
    '27': [
        'Amritsar',
        'Barnala',
        'Bathinda',
        'Faridkot',
        'Fatehgarh Sahib',
        'Fazilka',
        'Ferozepur',
        'Gurdaspur',
        'Hoshiarpur',
        'Jalandhar',
        'Kapurthala',
        'Ludhiana',
        'Mansa',
        'Moga',
        'Pathankot',
        'Patiala',
        'Rupnagar',
        'S.A.S. Nagar',
        'Sangrur',
        'Shahid Bhagat Singh Nagar',
        'Sri Muktsar Sahib',
        'Tarn Taran'
    ],
    '28': ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'],
    '29': [
        'Ajmer', 'Alwar', 'Banswara',
        'Baran', 'Barmer', 'Bharatpur',
        'Bhilwara', 'Bikaner', 'BSF Camp',
        'Bundi', 'Chittorgarh', 'Churu',
        'Dausa', 'Dholpur', 'Dungarpur',
        'Evacuees', 'Ganganagar', 'Hanumangarh',
        'Italians', 'Jaipur', 'Jaisalmer',
        'Jalore', 'Jhalawar', 'Jhunjhunu',
        'Jodhpur', 'Karauli', 'Kota',
        'Nagaur', 'Other State', 'Pali',
        'Pratapgarh', 'Rajsamand', 'Sawai Madhopur',
        'Sikar', 'Sirohi', 'Tonk',
        'Udaipur'
    ],
    '30': [
        'East Sikkim',
        'North Sikkim',
        'South Sikkim',
        'West Sikkim',
        'Unknown'
    ],
    '31': [
        'Foreign Evacuees',
        'Other State',
        'Adilabad',
        'Bhadradri Kothagudem',
        'Hyderabad',
        'Jagtial',
        'Jangaon',
        'Jayashankar Bhupalapally',
        'Jogulamba Gadwal',
        'Kamareddy',
        'Karimnagar',
        'Khammam',
        'Komaram Bheem',
        'Mahabubabad',
        'Mahabubnagar',
        'Mancherial',
        'Medak',
        'Medchal Malkajgiri',
        'Mulugu',
        'Nagarkurnool',
        'Nalgonda',
        'Narayanpet',
        'Nirmal',
        'Nizamabad',
        'Peddapalli',
        'Rajanna Sircilla',
        'Ranga Reddy',
        'Sangareddy',
        'Siddipet',
        'Suryapet',
        'Vikarabad',
        'Wanaparthy',
        'Warangal Rural',
        'Warangal Urban',
        'Yadadri Bhuvanagiri',
        'Unknown'
    ],
    '32': [
        'Railway Quarantine', 'Airport Quarantine', 'Other State',
        'Ariyalur', 'Chengalpattu', 'Chennai',
        'Coimbatore', 'Cuddalore', 'Dharmapuri',
        'Dindigul', 'Erode', 'Kallakurichi',
        'Kancheepuram', 'Kanyakumari', 'Karur',
        'Krishnagiri', 'Madurai', 'Nagapattinam',
        'Namakkal', 'Nilgiris', 'Perambalur',
        'Pudukkottai', 'Ramanathapuram', 'Ranipet',
        'Salem', 'Sivaganga', 'Tenkasi',
        'Thanjavur', 'Theni', 'Thiruvallur',
        'Thiruvarur', 'Thoothukkudi', 'Tiruchirappalli',
        'Tirunelveli', 'Tirupathur', 'Tiruppur',
        'Tiruvannamalai', 'Vellore', 'Viluppuram',
        'Virudhunagar', 'Mayiladuthurai'
    ],
    '33': [
        'Dhalai',
        'Gomati',
        'Khowai',
        'North Tripura',
        'Sipahijala',
        'South Tripura',
        'Unokoti',
        'West Tripura'
    ],
    '34': [
        'Agra', 'Aligarh', 'Ambedkar Nagar',
        'Amethi', 'Amroha', 'Auraiya',
        'Ayodhya', 'Azamgarh', 'Baghpat',
        'Bahraich', 'Ballia', 'Balrampur',
        'Banda', 'Barabanki', 'Bareilly',
        'Basti', 'Bhadohi', 'Bijnor',
        'Budaun', 'Bulandshahr', 'Chandauli',
        'Chitrakoot', 'Deoria', 'Etah',
        'Etawah', 'Farrukhabad', 'Fatehpur',
        'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad',
        'Ghazipur', 'Gonda', 'Gorakhpur',
        'Hamirpur', 'Hapur', 'Hardoi',
        'Hathras', 'Jalaun', 'Jaunpur',
        'Jhansi', 'Kannauj', 'Kanpur Dehat',
        'Kanpur Nagar', 'Kasganj', 'Kaushambi',
        'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur',
        'Lucknow', 'Maharajganj', 'Mahoba',
        'Mainpuri', 'Mathura', 'Mau',
        'Meerut', 'Mirzapur', 'Moradabad',
        'Muzaffarnagar', 'Pilibhit', 'Pratapgarh',
        'Prayagraj', 'Rae Bareli', 'Rampur',
        'Saharanpur', 'Sambhal', 'Sant Kabir Nagar',
        'Shahjahanpur', 'Shamli', 'Shrawasti',
        'Siddharthnagar', 'Sitapur', 'Sonbhadra',
        'Sultanpur', 'Unnao', 'Varanasi'
    ],
    '35': [
        'Almora',
        'Bageshwar',
        'Chamoli',
        'Champawat',
        'Dehradun',
        'Haridwar',
        'Nainital',
        'Pauri Garhwal',
        'Pithoragarh',
        'Rudraprayag',
        'Tehri Garhwal',
        'Udham Singh Nagar',
        'Uttarkashi'
    ],
    '36': [
        'Alipurduar', 'Bankura',
        'Birbhum', 'Cooch Behar',
        'Dakshin Dinajpur', 'Darjeeling',
        'Hooghly', 'Howrah',
        'Jalpaiguri', 'Jhargram',
        'Kalimpong', 'Kolkata',
        'Malda', 'Murshidabad',
        'Nadia', 'North 24 Parganas',
        'Other State', 'Paschim Bardhaman',
        'Paschim Medinipur', 'Purba Bardhaman',
        'Purba Medinipur', 'Purulia',
        'South 24 Parganas', 'Uttar Dinajpur'
    ]
};
// import fetch from 'node-fetch';
fetch('https://data.covid19india.org/state_district_wise.json')
    .then(response => response.json())
    .then(data => {
        //   console.log(data['Uttarakhand']['districtData']['Haridwar']['confirmed']); // Prints result from `response.json()` in getRequest
        displayApi(data);
    })
    .catch(error => console.error(error))

var displayApi = function (obj) {
    // Code-Start
    // var districtDataIndia = {};
    // var statesIndia = Object.keys(obj);
    // Getting data as districtlist 
    // for (let i = 1; i < statesIndia.length; i++) {
    //     var tempdata = (Object.keys(obj[statesIndia[i]]['districtData']));
    //     Object.assign(districtDataIndia, { [i]: tempdata });
    // }

    window.alpha = obj;
    // Code-End    
}
var updated = function () {
    document.getElementById('districts').innerHTML = "";
    document.getElementById('districts').innerHTML += `<option value="" class="dt"> -- Select District -- </option>`;
    var stateValue = document.getElementById('states');
    window.selectedValue = stateValue.options[stateValue.selectedIndex];
    for (let i = 0; i < districtNames[selectedValue.value].length; i++) {
        var district = document.getElementById('districts');
        district.innerHTML += `<option value="${i + 1}">${districtNames[selectedValue.value][i]}</option>`;
    }
    document.getElementById('states').options[0].disabled = true;
}
var specified = function () {
    var districtValue = document.getElementById('districts');
    window.selectedDistrictValue = districtValue.options[districtValue.selectedIndex].innerHTML;
    // console.log(` State [${window.selectedValue.innerHTML}] having DISTRICT [${window.selectedDistrictValue}] `);
    // console.log(alpha[window.selectedValue.innerHTML]['districtData'][window.selectedDistrictValue]['confirmed']);
    var active = alpha[window.selectedValue.innerHTML]['districtData'][window.selectedDistrictValue]['active'];
    var confirmed = alpha[window.selectedValue.innerHTML]['districtData'][window.selectedDistrictValue]['confirmed'];
    var deceased = alpha[window.selectedValue.innerHTML]['districtData'][window.selectedDistrictValue]['deceased'];
    var recovered = alpha[window.selectedValue.innerHTML]['districtData'][window.selectedDistrictValue]['recovered'];
    var migratedOther = alpha[window.selectedValue.innerHTML]['districtData'][window.selectedDistrictValue]['migratedother'];
    document.querySelector('.div-2-1-child-1-2').innerHTML = active;
    document.querySelector('.div-2-2-child-1-2').innerHTML = confirmed;
    document.querySelector('.div-2-3-child-1-2').innerHTML = deceased;
    document.querySelector('.div-2-4-child-1-2').innerHTML = recovered;
    document.querySelector('.div-2-5-child-1-2').innerHTML = migratedOther;
}

var changeTheme = function (modebtn) {
    console.log(modebtn.value);
    var bodystyle = document.body.style;
    var div1 = document.getElementById('div-1').style;
    var statesDiv = document.getElementById('states').style;
    var districtsDiv = document.getElementById('districts').style;
    if (modebtn.value === "0") {
        // command
        modebtn.style.backgroundColor = "#FA7F08";
        modebtn.style.transition = "1s";
        bodystyle.background = "linear-gradient(120deg, #BFBFBF 10%, #595959 64%)";
        bodystyle.backgroundPosition = "center";
        bodystyle.backgroundRepeat = "no-repeat";
        bodystyle.backgroundAttachment = "fixed";
        bodystyle.backgroundSize = "cover";
        div1.background = "#E6E6E6";
        div1.transition = "2s";
        statesDiv.mixBlendMode = "luminosity";
        districtsDiv.mixBlendMode = "luminosity";
        modebtn.value = "1";
    }
    else {
        // command
        modebtn.style.backgroundColor = "#BFBFBF";
        modebtn.style.transition = "1s";
        districtsDiv.mixBlendMode = "darken";
        statesDiv.mixBlendMode = "darken";
        div1.background = "linear-gradient(to right, #ff512f, #dd2476)";
        div1.transition = "2s";
        bodystyle.backgroundImage = "radial-gradient(circle, #1fd1f9 20%, #b621fe 74%)";
        bodystyle.transitionDelay = "1s";
        modebtn.value = "0";
    }
}
