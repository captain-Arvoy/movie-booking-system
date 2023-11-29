import {Paper, Button} from '@mui/material'
export default function Item({props}){
    return(
        <Paper>
            <div>
                {console.log(props)}
                sx={{
                    backgroundImage: `url(${props.item})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "200px",
                }}
            </div>
        </Paper>
    )
}