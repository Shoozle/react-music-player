import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "travelbag",
            artists: ["mommy, Sleepy Fish"],
            cover: "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#5A8DCE', '#EED7D1'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=19062"
        },
        {
            name: "Paraglider",
            artists: ["Kendall Miles, HERB"],
            cover: "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D76F4C', '#1B1612'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9318"
        },
        {
            name: "Stagnant",
            artists: ["Supertask"],
            cover: "https://chillhop.com/wp-content/uploads/2020/07/b162505d856f1b7326401a00d716f48be4529ed7-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#EBBAAC', '#4A1F16'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=20122"
        },
        {
            name: "Ocean Patio",
            artists: ["Philanthrope", "Dayle"],
            cover: "https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#E2563B', '#304B54'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8036"
        },
    ]
}

export default chillHop;