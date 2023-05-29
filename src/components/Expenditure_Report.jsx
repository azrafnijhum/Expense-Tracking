import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Expenditure_Report = () => {
  return (
    <div>
      <h1>Expenditure_report</h1>
      <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Total Expense of 'datetime'  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h2>Expense List</h2>
                    <br />
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th>Update</th>
                        </tr>
                        <tr>
                            <td>Eats out</td>
                            <td>Helvetia Eats out</td>
                            <td>500 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Gardening</td>
                            <td>Water Mug</td>
                            <td>200 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Health Care</td>
                            <td>Medicine</td>
                            <td>150 Tk</td>
                            <td>
                                <a href="">Edit </a> | 
                                <a href=""> Delete</a>
                            </td>
                        </tr>
    
                    </table>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Total Expense of 'datetime 2'  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h2>Expense List 2</h2>
                    <br />
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th>Update</th>
                        </tr>
                        <tr>
                            <td>Eats out</td>
                            <td>Helvetia Eats out</td>
                            <td>400 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Gardening</td>
                            <td>Water Mug</td>
                            <td>300 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Health Care</td>
                            <td>Medicine</td>
                            <td>250 Tk</td>
                            <td>
                                <a href="">Edit </a> | 
                                <a href=""> Delete</a>
                            </td>
                        </tr>
    
                    </table>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Total Expense of 'datetime 3'  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h2>Expense List 3</h2>
                    <br />
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th>Update</th>
                        </tr>
                        <tr>
                            <td>Eats out</td>
                            <td>Helvetia Eats out</td>
                            <td>450 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Gardening</td>
                            <td>Water Mug</td>
                            <td>350 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Health Care</td>
                            <td>Medicine</td>
                            <td>150 Tk</td>
                            <td>
                                <a href="">Edit </a> | 
                                <a href=""> Delete</a>
                            </td>
                        </tr>
    
                    </table>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Total Expense of 'datetime 4'  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <h2>Expense List 4</h2>
                    <br />
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th>Update</th>
                        </tr>
                        <tr>
                            <td>Eats out</td>
                            <td>Helvetia Eats out</td>
                            <td>350 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Gardening</td>
                            <td>Water Mug</td>
                            <td>300 Tk</td>
                            <td>
                                <a href="">Edit </a> |
                                <a href=""> Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Health Care</td>
                            <td>Medicine</td>
                            <td>200 Tk</td>
                            <td>
                                <a href="">Edit </a> | 
                                <a href=""> Delete</a>
                            </td>
                        </tr>
    
                    </table>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
        
    </div>
  );
}

export default Expenditure_Report;
