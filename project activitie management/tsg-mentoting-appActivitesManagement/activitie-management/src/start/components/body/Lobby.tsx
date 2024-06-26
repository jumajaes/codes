import Typography from "@mui/material/Typography";
import { Task, TaskAlt } from "@mui/icons-material";
import { Box, ListItem, ListItemText } from "@mui/material";
//import depress from "./depress.jpg"
const depress = require("./depress.jpg");

export const Lobby = () => {
  const items = [
    "Our Task Manager is designed to help you prioritize your tasks, optimize your time, and boost your productivity.",
    "With our intuitive interface, you can easily create, read, update, and delete tasks. In addition, you can filter your tasks by status (completed/not completed) and sort them by due date or priority.",
    "Our Task Manager is designed to help you prioritize your tasks, optimize your time, and boost your productivity.",
    "Whether you’re managing a large project or simply organizing your daily task list, our Task Manager provides you with the tools you need to keep everything in order.",
  ];

  return (
    <Box display={"flex"} width={"100%"}>
      <Typography component="div" align="center" padding={2}>
        <Typography
          padding={2}
          variant="h1"
          component="div"
          style={{ fontSize: 70 }}
        >
          Welcome to our Task Manager
        </Typography>
        <TaskAlt style={{ fontSize: 100 }} />

        <Typography>Your ally in productivity</Typography>
        <br />
        <hr />
        <br />
        <Typography variant="h5" margin={1}>
          Do you feel overwhelmed with all your tasks and projects?
        </Typography>

        <img
          src={depress}
          width="270px"
          height="370px"
          alt="imgdepress"
          style={{ borderRadius: "50%" }}
        ></img>

        <Typography variant="h5" margin={2}>
          Are you looking for an efficient way to organize your day-to-day?
        </Typography>

        <br />
        <hr />
        <Typography variant="h3" color={"#1976d2"} padding={2}>
          You’ve come to the right place.
          <hr style={{ width: "50%" }} />
        </Typography>
        <Box>
          {items.map((item, index) => (
            <Box
              border={2}
              borderRadius={25}
              margin={2}
              padding={1}
              key={index}
            >
              <ListItem
                alignItems="flex-start"
                disableGutters
                secondaryAction={<Task />}
              >
                <ListItemText primary={`*${item}`} />
              </ListItem>
            </Box>
          ))}
        </Box>
        <hr></hr>
        <br></br>
        <Typography color={"blue"}>
          Start taking control of your tasks and projects today. Register and
          discover how our Task Manager can transform your productivity!
        </Typography>
      </Typography>
    </Box>
  );
};
