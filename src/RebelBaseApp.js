import React from 'react';
import DragAndDrop from './components/dragAndDrop/DragAndDrop'
import NavBar from './components/navbar/NavBar';
import dataInfo from './dataInfo.json';

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