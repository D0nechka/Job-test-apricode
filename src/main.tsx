import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { rootStore } from './store/rootStore.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider {...rootStore}>
            <App />
        </Provider>
    </BrowserRouter>
);
