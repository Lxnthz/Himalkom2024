import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileDivisi() {
    const { division } = useParams();
    const [divisionData, setDivisionData] = useState(null);

    useEffect(() => {
        const fetchDivisionData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/divisi/${division}`);
            setDivisionData(response.data);
        } catch (error) {
            console.error('Error fetching division data:', error);
        }
        };

    fetchDivisionData();
    }, [division]);

    if (!divisionData) return <div>Loading...</div>;

    return (
        <div>
        <h1>{divisionData.name}</h1>
        <p>{divisionData.description}</p>
        {/* Render more division details here */}
        </div>
    );
}

export default ProfileDivisi;
