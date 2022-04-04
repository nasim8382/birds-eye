import axios from 'axios';
import{ useEffect, useState } from 'react';

const useCustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        axios.get('person.json')
            .then(data => setReviews(data.data));
    }, [])
    return [reviews, setReviews];
};

export default useCustomerReviews;