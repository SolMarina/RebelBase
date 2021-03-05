import React, { useEffect, useState } from "react";
import DragAndDrop from '../dragAndDrop/DragAndDrop'

const DataTable = (props) => {

    const [data, setData] = useState(props.details);


    useEffect(() => {
        setData(props.details);
    });

    const getArrayDragsItems = (data) => {

        const dragItems = [];
        for (const [key, value] of Object.entries(data)) {
            let card = {
                id: value.id,
                image: value.img,
                primary: value.product,
                secondary: 'View builder',
                status: true
            }
            dragItems.push(card);
        }
        return dragItems;
    }

    if (Array.isArray(data)) {

        return (

            <div>
                {
                    data.map(item => {
                        const rows = getArrayDragsItems(item.task)
                        return (
                            <div >
                                <h5> {item.id} </h5>
                                <DragAndDrop getItems={rows} />
                            </div >
                        )
                    })
                }
            </div >
        )


    } else {

        return (
            <div>
                <h5> {data.id} </h5>
                <DragAndDrop getItems={getArrayDragsItems(data.task)} />
            </div >
        )
    }

}
export default DataTable