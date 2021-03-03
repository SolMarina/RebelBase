import React, { Component } from "react";
import {

    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    
    ListItemSecondaryAction,


} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DragHandle from "@material-ui/icons/DragHandle";


// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        primary: `item ${k}`,
        secondary: `View builder`
    }));






// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // styles we need to apply on draggables
    ...draggableStyle,

    ...(isDragging && {
        background: "rgb(235,235,235)"
    })
});

const getListStyle = isDraggingOver => ({
    //background: isDraggingOver ? 'lightblue' : 'lightgrey',
});



export class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: getItems(10),
            cat: props.details()
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items
        });



    }



    render() {

        {console.log("ANTES DEL BUILD");
        console.log(this.state.items);
        console.log(" a ver a ver que vieneeeeee")
        console.log(this.state.cat);
        console.log("============================")
    }

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <RootRef rootRef={provided.innerRef}>
                            <List style={getListStyle(snapshot.isDraggingOver)}>
                                {this.state.items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <ListItem
                                                ContainerComponent="li"
                                                ContainerProps={{ ref: provided.innerRef }}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <ListItemIcon>

                                                    <DragHandle color="primary" />

                                                </ListItemIcon>


                                                <ListItemText


                                                    primary={item.primary}
                                                    secondary={item.secondary}
                                                />
                                                <ListItemSecondaryAction>
                                                    

                                                        <input type="date" id="start" name="trip-start"
                                                            value="2018-07-22"
                                                            min="2018-01-01" max="2018-12-31"></input>
                                                        <input type="time" id="appt" name="appt"
                                                            min="09:00" max="18:00" required></input>

                                                    
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </List>
                        </RootRef>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default DragAndDrop
