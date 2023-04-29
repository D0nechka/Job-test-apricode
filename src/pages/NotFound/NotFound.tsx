import { Text } from '../../ui';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <Text>Страница не найдена</Text>
            <Link to="/">На главную</Link>
        </div>
    );
};