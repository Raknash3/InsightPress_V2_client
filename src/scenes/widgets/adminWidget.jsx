import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminWidget = () => {
    const [userCount, setUserCount] = useState(0);
    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
        // Fetch the total number of users
        axios.get('http://localhost:6001/users/count')
            .then(response => {
                setUserCount(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching user count:', error);
            });

        // Fetch the total number of posts
        axios.get('http://localhost:6001/posts/count')
            .then(response => {
                setPostCount(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching post count:', error);
            });
    }, []);

    return (
        <div>



            <h2>Application Details</h2>
            {/* <p>Total number of users: {userCount}</p> */}
            <p>Total number of posts: {postCount}</p>
        </div>
    );
};

export default AdminWidget;