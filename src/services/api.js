export function loadLists() {
    return [
        {
            title: "To-do",
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: "Finish the #100DaysOfGatsby Challenge",
                    labels: ["#3b5bfd"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
                {
                    id: 2,
                    content: "Make my Personal Portfolio",
                    labels: ["#3b5bfd"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
                {
                    id: 3,
                    content: "Add new features to Nubelsondev Blog",
                    labels: ["#3b5bfd"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
                {
                    id: 4,
                    content: "Make a Blog Post about React and React Native",
                    labels: ["#54e1f7"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
                {
                    id: 5,
                    content: "Learn the basics of TDD",
                    labels: ["#54e1f7"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
            ],
        },
        {
            title: "Doing",
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: "Create a Google Maps for Developers",
                    labels: [],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
            ],
        },
        {
            title: "Paused",
            creatable: false,
            cards: [
                {
                    id: 7,
                    content: "Learn more about maps on React and React Native",
                    labels: ["#3b5bfd"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
                {
                    id: 8,
                    content: "Learn Jest.js",
                    labels: ["#54e1f7"],
                    user:
                        "https://avatars3.githubusercontent.com/u/46088089?s=460&v=4",
                },
                {
                    id: 9,
                    content: "Make the Twitter Clone",
                    labels: [],
                },
            ],
        },
        {
            title: "Done",
            creatable: false,
            done: true,
            cards: [
                {
                    id: 10,
                    content: "Make my Personal Blog",
                    labels: [],
                },
                {
                    id: 12,
                    content: "Make a Tinder Clone for developers (Tindev)",
                    labels: ["#54e1f7"],
                },
                {
                    id: 13,
                    content: 'Publish my first Blog Post"',
                    labels: ["#3b5bfd"],
                },
            ],
        },
    ]
}
