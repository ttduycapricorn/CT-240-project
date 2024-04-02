import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/home/homePage';
import LoginPage from './pages/login';
import TableActive from './components/table/table';

import { data } from './data/exampleData';

import './App.module.scss';
import { Button } from 'react-bootstrap';

const App = () => {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <div style={{ maxWidth: '97%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Link to={'/add'}>
                    <Button className="btn btn-success" style={{ marginBottom: '10px', fontWeight: '700' }}>
                        Add Sample
                    </Button>
                </Link>
                <TableActive data={data} />
            </div>
        </div>
    );
};

export default App;
