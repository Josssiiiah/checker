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

  const ballot = {
    a: checkbox1,
    b: checkbox2,
    c: checkbox3,
    d: checkbox4,
  };

  // post the ballot to the backend
  const mutation: any = api.example.postBallot.useMutation();

  function postBallot(newBallot: any) {
    mutation.mutate({ ...newBallot });
  }

  mutation.data && console.log(mutation.data);

  function ObjectComponent() {
    const myObject = mutation.data;

    return (
      <div>
        <p>{myObject?.message}</p>
      </div>
    );
  }

  // Now I want this to post to the backend ONLY IF it is not in there alr

  // sync the ballot state in the UI and in the state

  // You can fetch the potential options, then redner a checkbox for each otpion
  // ONce someone votes for a checbox,

  return (
    <Box className="bg-blue flex h-[600px] w-[500px] flex-col items-center justify-center bg-blue-600">
      {/* Make a list of checkboxes, then each needs an ID and setBallot
      and based on the ID, pass the id for each checkbox */}
      <h1>
        <ObjectComponent />
      </h1>

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
