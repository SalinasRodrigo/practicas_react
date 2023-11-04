/* eslint-disable react/prop-types */
import {} from '@react-pdf/renderer'
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export function MatchesPDF({ teams, matches }) {
  const componentToPrint = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentToPrint.current,
    documentTitle: 'emp-data',
  })

  return (
    <div >
      <div hidden>
        <div>
          <table ref={componentToPrint} className='print-table'>
            <thead>
              <tr >
                <th colSpan={7}>Partidos</th>
              </tr>
              <tr>
                <th>Fecha</th>
                <th>Equipo</th>
                <th>Tantos</th>
                <th>vs</th>
                <th>Tantos</th>
                <th>Equipo</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((fecha, index) => {
                const fechaIndex = index;
                return (
                  <>
                    {fecha.map((match, index) => {
                      return (
                        <tr key={[index, fechaIndex]}>
                          {index % fecha.length == 0 ? (
                            <td rowSpan={fecha.length}>
                              Fecha {fechaIndex + 1}
                            </td>
                          ) : null}
                          <td>
                            {teams[match[0]].name}</td>
                          <td>
                          </td>
                          <td>vs</td>
                          <td>
                          </td>
                          <td>{teams[match[1]].name}</td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button className='button' onClick={handlePrint}>Imprimir</button>
    </div>
  );
}

