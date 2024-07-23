const baseUrl = 'https://localhost:7182';

const activities = [
    {
        "id": "0",
        "name": "Aquatic Leadership",
        "category": "Aquatics"
    },
    {
        "id": "1",
        "name": "Drop In Aquatic Fitness",
        "category": "Aquatics"
    },
    {
        "id": "2",
        "name": "Swim Lessons",
        "category": "Aquatics"
    },//////
    {
        "id": "3",
        "name": "Drop In Hockey",
        "category": "Arenas"
    },
    {
        "id": "4",
        "name": "Drop In Skating",
        "category": "Arenas"
    },
    {
        "id": "5",
        "name": "Hockey and Ringette",
        "category": "Arenas"
    },
    {
        "id": "6",
        "name": "Skating Lessons",
        "category": "Arenas"
    },//////
    {
        "id": "7",
        "name": "Clay",
        "category": "Arts"
    },
    {
        "id": "8",
        "name": "Crafts and Textiles",
        "category": "Arts"
    },
    {
        "id": "9",
        "name": "Dance",
        "category": "Arts"
    },
    {
        "id": "10",
        "name": "Drawing and Painting",
        "category": "Arts"
    },
    {
        "id": "11",
        "name": "Drop In Arts",
        "category": "Arts"
    },
    {
        "id": "12",
        "name": "Mixed Media",
        "category": "Arts"
    },
    {
        "id": "13",
        "name": "Music",
        "category": "Arts"
    },
    {
        "id": "14",
        "name": "Photography",
        "category": "Arts"
    },
    {
        "id": "15",
        "name": "Theatre and Acting",
        "category": "Arts"
    },
    {
        "id": "16",
        "name": "Woodworking",
        "category": "Arts"
    },//////////
    {
        "id": "17",
        "name": "Adapted Camps",
        "category": "Day Camps"
    },
    {
        "id": "18",
        "name": "Fun Zone Weekly Camps",
        "category": "Day Camps"
    },
    {
        "id": "19",
        "name": "Performing Arts Camps",
        "category": "Day Camps"
    },    
    {
        "id": "20",
        "name": "School's Out Camps",
        "category": "Day Camps"
    },
    {
        "id": "21",
        "name": "Sports Camps",
        "category": "Day Camps"
    },
    {
        "id": "22",
        "name": "Themed Camps",
        "category": "Day Camps"
    },
    {
        "id": "23",
        "name": "Visual Arts Camps",
        "category": "Day Camps"
    },//////
    {
        "id": "24",
        "name": "Bootcamp",
        "category": "Fitness and Wellness"
    },
    {
        "id": "25",
        "name": "Dance Fitness",
        "category": "Fitness and Wellness"
    },
    {
        "id": "26",
        "name": "Drop In Fitness and Wellness",
        "category": "Fitness and Wellness"
    },
    {
        "id": "27",
        "name": "Fitness",
        "category": "Fitness and Wellness"
    },
    {
        "id": "28",
        "name": "Indoor Cycling",
        "category": "Fitness and Wellness"
    },
    {
        "id": "29",
        "name": "Meditation and Tai Chi",
        "category": "Fitness and Wellness"
    },
    {
        "id": "30",
        "name": "Weight Room",
        "category": "Fitness and Wellness"
    },
    {
        "id": "31",
        "name": "Yoga",
        "category": "Fitness and Wellness"
    },//////
    {
        "id": "32",
        "name": "Badminton",
        "category": "Sports"
    },
    {
        "id": "33",
        "name": "Basketball",
        "category": "Sports"
    },
    {
        "id": "34",
        "name": "Drop In Sports",
        "category": "Sports"
    },
    {
        "id": "35",
        "name": "Floor Hockey and Floorball",
        "category": "Sports"
    },
    {
        "id": "36",
        "name": "Martial Arts",
        "category": "Sports"
    },
    {
        "id": "37",
        "name": "Other Sports",
        "category": "Sports"
    },
    {
        "id": "38",
        "name": "Pickleball",
        "category": "Sports"
    },
    {
        "id": "39",
        "name": "Soccer",
        "category": "Sports"
    },    
    {
        "id": "40",
        "name": "Volleyball",
        "category": "Sports"
    },//////////    
    {
        "id": "41",
        "name": "Online - Adult",
        "category": "Online Programs"
    },
    {
        "id": "42",
        "name": "Online - Arts",
        "category": "Online Programs"
    },
    {
        "id": "43",
        "name": "Online - Heritage",
        "category": "Online Programs"
    },
    {
        "id": "44",
        "name": "Online - Seniors",
        "category": "Online Programs"
    },//////////    
    {
        "id": "45",
        "name": "Adapted Courses",
        "category": "General Interest"
    },
    {
        "id": "46",
        "name": "Birthday Parties",
        "category": "General Interest"
    },
    {
        "id": "47",
        "name": "Bus Trips",
        "category": "General Interest"
    },
    {
        "id": "48",
        "name": "Cooking",
        "category": "General Interest"
    },
    {
        "id": "49",
        "name": "Drop In 0-12",
        "category": "General Interest"
    },
    {
        "id": "50",
        "name": "Drop In Seniors Services",
        "category": "General Interest"
    },
    {
        "id": "51",
        "name": "Drop In Youth Services",
        "category": "General Interest"
    },
    {
        "id": "52",
        "name": "Facility Visits and Guided Tours",
        "category": "General Interest"
    },    
    {
        "id": "53",
        "name": "First Aid",
        "category": "General Interest"
    },
    {
        "id": "54",
        "name": "Languages",
        "category": "General Interest"
    },
    {
        "id": "55",
        "name": "Nature Discovery",
        "category": "General Interest"
    },
    {
        "id": "56",
        "name": "One Day Wonders",
        "category": "General Interest"
    },
    {
        "id": "57",
        "name": "Personal Development",
        "category": "General Interest"
    },
    {
        "id": "58",
        "name": "Preschool",
        "category": "General Interest"
    },
    {
        "id": "59",
        "name": "Science",
        "category": "General Interest"
    },
    {
        "id": "60",
        "name": "Seniors Services Activities",
        "category": "General Interest"
    },
    {
        "id": "61",
        "name": "Seniors Services Special Events",
        "category": "General Interest"
    },    
    {
        "id": "62",
        "name": "Special Events",
        "category": "General Interest"
    },    
    {
        "id": "63",
        "name": "Workshops",
        "category": "General Interest"
    },//////////    
];

const findStr = (arr, str) => arr.some(e => e.checked && e.category.toLowerCase().search(str.toLowerCase()) !== -1);

export const ActivitiesApi = {

    getCategories: async (keyword, categories) => {
        const list = activities.filter((item) => (keyword.length == 0 ||item.name.toLowerCase().includes(keyword.toLowerCase())) && (categories.length == 0 || findStr(categories, item.category)));
        const categoriesFiltered = [...new Set(list.map(item => item.category))];
        return categoriesFiltered.sort();
    },

    getActivitiesByCategory: async (category, keyword) => {
        const list = activities.filter((item) => item.category === category && item.name.toLowerCase().includes(keyword.toLowerCase()));
        return list.sort();
    }
};