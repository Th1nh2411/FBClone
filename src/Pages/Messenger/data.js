const MESSAGE_DATA = {
    contacts: [
        {
            id: 2,
            name: 'Nguyễn Đức Thịnh',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'hehe',
            time: '3 giờ',
            status: 'Online',
            address: 'Tp Hồ Chí Minh',
            friend: false,
            messages: [
                {
                    sender: 2,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 3,
            name: 'Nguyễn Đức Huy1',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Tp Hồ Chí Minh',
            friend: false,
            messages: [
                {
                    sender: 3,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 4,
            name: 'Nguyễn Đức Huy2',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Đà Nẵng',
            friend: true,
            messages: [
                {
                    sender: 4,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 5,
            name: 'Nguyễn Đức Huy3',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Đà Nẵng',
            friend: true,
            messages: [
                {
                    sender: 5,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 6,
            name: 'Nguyễn Đức Huy4',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Đà Nẵng',
            friend: true,
            messages: [
                {
                    sender: 6,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 7,
            name: 'Nguyễn Đức Huy5',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Đà Nẵng',
            friend: true,
            messages: [
                {
                    sender: 7,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 8,
            name: 'Nguyễn Đức Huy6',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Đà Nẵng',
            friend: true,
            messages: [
                {
                    sender: 8,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 9,
            name: 'Nguyễn Đức Huy7',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Tp Hồ Chí Minh',
            friend: false,
            messages: [
                {
                    sender: 9,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
        {
            id: 10,
            name: 'Nguyễn Đức Huy8',
            image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/356416946_3422575894663971_6002705568271401146_n.jpg?stp=c340.292.238.239a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=EzR8D8knXwkAX_qW_BY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOdmxJHFf5aGO4gK3Rrv53iQwmRXO1cWxPlTfjIsh-4g&oe=65258A82',
            lastMess: 'Bạn đã gửi 1 ảnh',
            time: '3 giờ',
            status: 'Online',
            address: 'Tp Hồ Chí Minh',
            friend: false,
            messages: [
                {
                    sender: 10,
                    content: 'Chào bạn',
                },
                { sender: 1, content: 'Chào bạn, bạn có việc gì không?' },
            ],
        },
    ],
};
export default MESSAGE_DATA;
