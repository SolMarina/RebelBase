import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar/NavBar';
import dataInfo from './dataInfo.json';
import DataTable from './components/dataTable/DataTable';
import NavMobile from './components/navmobile/NavMobile';
const RebelBaseApp = () => {
    const [categoryList, SetcategoryList] = useState([]);
    const [categorySelected, setCategorySelected] = useState('All');

    const getCategories = () => {
        const options = ['All'];
        //dataInfo.map(category => { categoryList.push(category.id) })
        dataInfo.map(category => { options.push(category.id) })
        return options;
    }

    const getFilterCategory = () => {
        if (categorySelected === 'All') {
            return dataInfo;
        }
        else {
            return dataInfo.find(item => item.id === categorySelected);
        }
    }

    useEffect(() => {
        SetcategoryList(getCategories());
    }, [])



    const updatecategorySelected = (val) => {
        setCategorySelected(val.target.attributes[1].nodeValue);
    };

    //getCategories();
    console.log("categorySelected")
    console.log(categorySelected)

    return (
        <div className="box">
            <div className="box1">
                <NavBar details={categoryList} onClick={() => updatecategorySelected} />
            </div>
            <div className="box4">
                <h4>Select Builder Schedule-2019 Fall Cohort</h4>
                <NavMobile details={categoryList} onClick={() => updatecategorySelected}/>
                <div className="box2" >


                    <div className="box3" >
                        <DataTable details={getFilterCategory()} />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default RebelBaseApp;