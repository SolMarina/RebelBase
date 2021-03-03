import React from "react";
import DragAndDrop from '../dragAndDrop/DragAndDrop'

const DataTable = (props) => {

    const data = props.details;
    console.log("dentro de data table a ver que llegaaaaaa")
    console.log(data)
    console.log("dentro de data table a ver que llegaaaaaawwwwwww")

    const getArrayDragsItems = (data) => {

        const dragItems = [];
        for (const [key, value] of Object.entries(data)) {
            let card = {
                id: value.id,
                image: value.img,
                primary: value.product,
                secondary: 'View builder'
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
                            <div>
                                <h5> {item.id} </h5>
                                <DragAndDrop getItems={rows} />
                            </div >
                        )
                    })
                }
            </div >
        )


    } else {

        let itemsDragable = getArrayDragsItems(data.task);
        console.log("antes del render")
        console.log(itemsDragable)
        return (
            <div>
                <h1> {data.id} </h1>
                <DragAndDrop getItems={itemsDragable} />
            </div >
        )
    }

}
export default DataTable