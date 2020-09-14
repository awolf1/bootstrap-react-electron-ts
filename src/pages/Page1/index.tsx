import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { Printer } from '../../utils/Printer';

import { Button } from 'react-bootstrap';



let printer = new Printer();

function handlePrintPage(e:any) {
    e.preventDefault();
    printer.options.silent = false;
    printer.print();
}
function handlePrintPageSilent(e:any) {
    e.preventDefault();
    printer.options.silent = true;
    printer.print();
}
function handlePrintHello(e:any) {
    e.preventDefault();
    console.log("All printer available are ", printer.listPrinters());
    
    printer.printTextHTML("Oi oi oi");
}

function Page1(){



    return (
        <div>
            <h1>Page1</h1>
            <Link to="/">
                Home
            </Link>
            <p>
            <Button variant="success" className="mr-1" onClick={handlePrintPage}>Print Page</Button>
            <Button variant="info"    className="mr-1" onClick={handlePrintPageSilent}>Print Page Silent</Button>
            <Button variant="dark"    className="mr-1" onClick={handlePrintHello}>Print Hello</Button>
            </p>
            

        </div>
    )
}

export default Page1;