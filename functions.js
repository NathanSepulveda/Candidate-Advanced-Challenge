const candidate = {
    name : "Elizabeth Sanger",
    congressionalDistrict : "Tennessee's 5th Congressional Distict",

    platformStatements : {
        taxes : "bad",
        job : "good",
        infrastructure : "small",
        healthCare : "universal",
        crimeAndEnforecment : "good"
    },

    urlForDonation : "www.givememoney.io",
    calendarOfEvents : {
        janEvents : true,
        febEvents : true,
        marchEvents : false,

    },
    voluneteerInformation : [
        {
            name: "Susan T.",
            address : "123 Fake Street",
            email : "fakeemail@gmail.com",
            phoneNumber : "12345678",
            availibilty : true,
            activities : [
                "cleaing", "phone calls", "taking polls"
            ],
        },
        {
            name: "Alan M.",
            address : "132 Faké Street",
            email : "fakéemail@gmail.com",
            phoneNumber : "87654321",
            availibilty : false,
            activities : [],
        }
    ],
    bio : "This woman is a candidate.",
    imageGaller : {
        headShot : "headshot.com",
        pictureOfFamily : "pictureoffamily.com",
        pictureOfConstituents : "picofthem.com"
    },
    missionStatement : "I want to be your represenative.",
    url : "elizabethsanger.com"
}

function changeName(name) {
    candidate.name = name;
}

function changeDistrict(newDistrict) {
    candidate.congressionalDistrict = newDistrict
}

function platformStatements(topic, statement) {
    candidate.platformStatements[topic] = statement
}

function urlChange(newUrl) {
    candidate.urlForDonation = newUrl;
}

function calenderModify(month, events) {
    candidate.calendarOfEvents[month] = events
}

function volunteerModify(index, newName, address, email, phoneNumber, availibilty) {
    candidate.voluneteerInformation[index] = {
        name : newName, 
        address : address,
        email : email,
        phoneNumber : phoneNumber,
        availibilty : availibilty
    }
}

console.table(candidate);
console.log;(candidate)

changeName("Alex Sanders");
changeDistrict("7th");
platformStatements("kids", "good");
urlChange("www.myspace/AlexSanders");
calenderModify("april", true)
calenderModify("janEvents", false )
volunteerModify(2, "bob", "321 Real Sreet", "hisemail.gmail", "6193876153", false)


console.table(candidate);
console.log;(candidate)