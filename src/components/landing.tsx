import { Checkbox, Box, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { spacing } from "@mui/system";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import { api } from "~/utils/api";

function Landing() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);

  console.log(checkbox1);
  console.log(checkbox2);

  const ballot = {
    a: checkbox1,
    b: checkbox2,
    c: checkbox3,
    d: checkbox4,
  };

  //Each checkboz should have an id asociated with it, pass in the id to update ballot, now we know which box to update

  // I want this function to post the ballot to the backend
  const mutation = api.example.postBallot.useMutation();

  function postBallot(newBallot: any) {
    mutation.mutate({ ...newBallot });
  }

  // sync the ballot state in the UI and in the state
  return (
    <Box className="bg-blue flex h-[600px] w-[500px] flex-col items-center justify-center bg-blue-600">
      {/* Make a list of checkboxes, then each needs an ID and setBallot
      and based on the ID, pass the id for each checkbox */}

      <Checkbox
        checked={checkbox1}
        onChange={() => setCheckbox1(!checkbox1)}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Checkbox
        checked={checkbox2}
        onChange={() => setCheckbox2(!checkbox2)}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Checkbox
        checked={checkbox3}
        onChange={() => setCheckbox3(!checkbox3)}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Checkbox
        checked={checkbox4}
        onChange={() => setCheckbox4(!checkbox4)}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Button
        variant="contained"
        onClick={() => postBallot(ballot)}
        color="primary"
        sx={{
          mt: 3,
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Landing;
