import React from 'react';
import '../styles/ItemTable.css';

const ItemTable = ({ items }) => {
  return (
    <table className="item-table">
      <thead>
      <tr>
          <th>Nome</th>
          <th>Lote</th>
          <th>Data de Validade</th>
          <th>Quantidade</th>
      </tr>
      </thead>
        <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.lot}</td>
            <td>{item.expiryDate}</td>
              <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemTable;
