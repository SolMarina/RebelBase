import React from 'react';
import DragAndDrop from './components/DragAndDrop';
import NavBar from './components/NavBar';
import dataInfo from './dataInfo.json';
import App from './components/DragAndDrop'
const RebelBaseApp = () => {
    const categoryList = dataInfo.map(category => {
        return {
            nameid: category.id,
        }

    })
    
    return (
        <div className="box">
            <div className="box1">
                <NavBar />
            </div>
            <div className="box2" >
                <h4>Select Builder Schedule-2019 Fall Cohort</h4>
                <div>
                    <DragAndDrop/>
                </div>
            </div>
        </div>
    )

}
export default RebelBaseApp;