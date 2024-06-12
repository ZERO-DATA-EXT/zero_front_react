import React from 'react';
import '../styles/DesperdicioTable.css';

const DesperdicioTable = ({ desperdicios }) => {
  return (
    <table className="desperdicio-table">
      <thead>
        <tr>
          <th>Lote</th>
          <th>Data</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {desperdicios.map((desperdicio) => (
          <tr key={desperdicio.id}>
            <td>{desperdicio.lot}</td>
            <td>{desperdicio.expiryDate}</td>
            <td>{desperdicio.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DesperdicioTable;
