import { Checkbox, Box, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { spacing } from "@mui/system";
import { useState } from "react";

function Landing() {
  const [ballot, setBallot] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });
  function postBallot(newBallot: any) {
    const prisma = new PrismaClient();
    setBallot(newBallot);
  }

  // sync the ballot state in the UI and in the state
  // Post the ballot to the backend
  return (
    <Box className="bg-blue flex h-[600px] w-[500px] flex-col items-center justify-center bg-blue-600">
      {/* Make a list of checkboxes, then each needs an ID and setBallot
      and based on the ID, pass the id for each checkbox */}

      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Checkbox
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 80 },
          "&.Mui-checked": {
            color: purple[600],
          },
        }}
      />
      <Button
        variant="contained"
        onClick={postBallot}
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
