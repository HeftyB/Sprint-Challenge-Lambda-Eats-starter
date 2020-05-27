import React from 'react';
import { Table } from 'reactstrap';

export default function Specials(props) {
    return (

        <div id="specials">
            <Table>
            <thead>
                <tr>
                <th>Day</th>
                <th>Price</th>
                <th>Includes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Monday</td>
                <td>$7.99</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, amet?</td>
                </tr>

                <tr>
                <td>Tuesday</td>
                <td>$9.99</td>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ullam tempora? Temporibus quaerat esse laboriosam?</td>
                </tr>

                <tr>
                <td>Wednesday</td>
                <td>$14.00</td>
                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa necessitatibus non fugit, minima ipsam distinctio error doloribus sapiente tempore dignissimos.</td>
                </tr>

                <tr>
                <td>Thursday</td>
                <td>$.99</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, officia.</td>
                </tr>

                <tr>
                <td>Friday</td>
                <td>$19.99</td>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi?</td>
                </tr>
            </tbody>
            </Table>

        </div>
      );
}
