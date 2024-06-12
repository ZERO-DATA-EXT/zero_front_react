import React from 'react';
import '../styles/Menu.css';

const Menu = ({ setFilter, lot, setter }) => {
  return (
      <nav className="menu">
          <button onClick={() => setFilter('all')}>Todos os Itens</button>
          <button onClick={() => setFilter('expired')}>Vencido</button>
          <button onClick={() => setFilter('near_expiry')}>Próximo ao Vencimento</button>
          <button onClick={() => setFilter('valid')}>Válidos</button>
          <button onClick={() => setFilter('by_lot')}>Por Lote</button>
          <input placeholder={"Digite o lote"} value={lot} onChange={event =>
              setter(event.target.value)}/>
      </nav>
  );
};

export default Menu;
