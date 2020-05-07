import React from "react"
import{List,ListItem,ListItemAvatar,ListItemText} from "@material-ui/core"

const  ResultList =()=> {
return(
<List>
    <ListItem>

<ListItemAvatar>Poster </ListItemAvatar>
<ListItemText primary="Movie title" secondary="Year,Cast"></ListItemText>

    </ListItem>
</List>
)
}

export default ResultList ;