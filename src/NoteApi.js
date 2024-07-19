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
    }//////////    
];

export const NoteApi = {

    getCategories: async () => {
        const categories = [...new Set(activities.map(item => item.category))];
        return categories;
    },

    getActivitiesByCategory: async (category) => {
        const list = activities.filter((item) => item.category === category);
        return list;
    }
};