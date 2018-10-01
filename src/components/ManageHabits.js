import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SortableContainer, SortableElement, arrayMove, SortableHandle } from 'react-sortable-hoc';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

const DragHandle = SortableHandle(() => 
  <ListItemIcon>
    <DragHandleIcon />
  </ListItemIcon>);

const SortableItem = SortableElement(({value}) =>
  <ListItem button divider >
    <DragHandle />
    <ListItemText primary={value}/>
    <IconButton aria-label="Edit">
      <EditIcon />
    </IconButton>
    <IconButton aria-label="Delete">
      <DeleteIcon />
    </IconButton>
  </ListItem>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <List>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.title} />
      ))}
    </List>
  );
});

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
  },
  container: {
    marginTop: theme.spacing.unit * 3
  },
  button: {
    margin: 'auto',
    marginTop: theme.spacing.unit * 6,
  }
});

class Manage extends Component {

  state = {
    items: this.props.habits,
  }

  componentDidMount() {

  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };

  render() {
    const { classes, transition } = this.props;
    const { items } = this.state;
    return (
      <Grow in={transition}>
      <main className={classes.root}>
        <div className={classes.drawerHeader} />
        <form className={classes.container} >
          <SortableList items={items} onSortEnd={this.onSortEnd} lockAxis='y' useDragHandle/>
          <FormGroup row>
            <Button
              color="primary"
              children='Save'
              variant='contained'
              className={classes.button}
            />
          </FormGroup>
        </form>
      </main>
      </Grow>
    )
  }
}

export default withStyles(styles)(Manage);