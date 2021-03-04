import React, { Component } from "react";
import {

    List,
    ListItem,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,

} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
        background: "rgb(255, 255, 255)"
    })
});

const getListStyle = isDraggingOver => ({
    //background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

export class DragAndDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.getItems

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

                                                <IconButton >
                                                    <button className="buttonr">.</button>
                                                </IconButton>

                                                <div className="cards">
                                                    <ListItemText
                                                        primary={item.primary}
                                                        secondary={item.secondary}
                                                    />

                                                    <img className="imgicon" src={item.image} alt="" width="80" height="80" ></img>
                                                </div>

                                                <ListItemSecondaryAction>

                                                    <div className="date">
                                                        <div>
                                                            <input type="date" id="start"
                                                                placeholder="MMM DD,YYYY" />
                                                        </div>
                                                        <div>
                                                            <input type="time" id="appt" min="09:00"
                                                                max="18:00" />
                                                        </div>
                                                    </div>

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
