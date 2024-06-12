import React, {useState} from 'react';
import Modal from './components/Modal';
import ItemTable from './components/ItemTable';
import DesperdicioTable from './components/DesperdicioTable';
import Graficos from './components/Graficos';
import GraficosTotal from "./components/GraficoTotal";
import './App.css';
import Menu from "./components/Menu";
import icon from "./userfoto.png"
import {
    items, desperdicios,
    dadosGraficoDesperdicioPorMes, dadosGraficoQuantidadeDesperdicioPorLote,
    dadosGraficoTotalDisperdicioVsTotalItens
} from "./mocks/dataMocks";

const App = () => {
    const [itemFilter, setItemFilter] = useState('all');
    const [desperdicioFilter, setDesperdicioFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [lot, setLot] = useState('');
    const [desperLot, setDesperLote] = useState('');

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const Topbar = ({onOpenModal, userName, userIcon}) => (<header className="topbar">
        <button id='zeroBTN' className="open-modal-btn" onClick={onOpenModal}>
            Zero
        </button>
        <div className="topbar-content">
            <img id='usericon' src={userIcon} alt="User Icon" className="user-icon"/>
            <span className="user-name">{userName}</span>
        </div>
    </header>);

    return (<div className="App">
        <Topbar
            onOpenModal={handleOpenModal}
            userName="Ana"
            userIcon={icon}
        />

        <Modal show={showModal} onClose={handleCloseModal}>
            <h2>Bem Vindo ao Zero</h2>
            <p>Aqui você poderá verificar a validade e desperdícios da produção de forma mais simplificada.</p>
        </Modal>

        <div className="header">
            <div className="title-filters-container">
                <h1 id="title">Itens</h1>
                <div className="filters">
                    <Menu setFilter={setItemFilter} lot={lot} setter={setLot}></Menu>
                </div>
            </div>

            <div className="title-filters-container">
                <h1 id="title">Desperdícios</h1>
                <div className="filters">
                    <button onClick={() => setDesperdicioFilter('all')}>Todos</button>
                    <button onClick={() => setDesperdicioFilter('by_lot')}>Por Lote</button>
                    <input id={"lote-input"} placeholder={"Lote"} value={desperLot} onChange={event =>
                        setDesperLote(event.target.value)}/>
                </div>
            </div>
        </div>

        <div className="tables-container">
            <div className="table-wrapper">
                <ItemTable items={items.filter(item => {
                    if (itemFilter === 'all') return true;
                    if (itemFilter === 'expired') return new Date(item.expiryDate) < new Date();
                    if (itemFilter === 'near_expiry') return new Date(item.expiryDate) > new Date() && new Date(item.expiryDate) <= new Date(new Date().setDate(new Date().getDate() + 7));
                    if (itemFilter === 'by_lot') return item.lot === lot;
                    if (itemFilter === 'valid') return new Date(item.expiryDate) > new Date();
                    return true;
                })}/>
            </div>

            <div className="table-wrapper">
                <DesperdicioTable desperdicios={desperdicios
                    .filter(desperdicio => {
                        if (desperdicioFilter === 'all') return true;
                        if (desperdicioFilter === 'by_lot') return desperdicio.lot === desperLot;
                        return true;
                    })}/>
            </div>
        </div>
        <h1>Gráficos</h1>
        <div className="tables-container">
            <Graficos data={dadosGraficoDesperdicioPorMes}/>
            <Graficos data={dadosGraficoQuantidadeDesperdicioPorLote}/>
            <GraficosTotal data={dadosGraficoTotalDisperdicioVsTotalItens}/>
        </div>
    </div>);
};

export default App;
