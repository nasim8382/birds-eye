import axios from 'axios';
import { useEffect, useState } from 'react';

const useCharts = () => {
    const [money, setMoney] = useState([]);
    useEffect( () => {
            axios.get('data.json')
                .then(data => setMoney(data.data));
    }, [])
    return [money, setMoney]
};

export default useCharts;