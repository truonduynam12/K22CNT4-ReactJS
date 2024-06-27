import { render } from "@testing-library/react";
import React from "react";
export default function TdnListUser() {
    console.log("TdnListUsers:",renderTdnListUser);
    // hiêm thi
    return (
        <div className="row">
            <table className="table table-borderd">
                <thead>
            <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Chức năng</th>
            </tr>
             </thead>
             <tbody>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                 
             </tbody>
            </table>
        </div>
    );

}