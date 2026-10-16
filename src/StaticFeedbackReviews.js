import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faMeh, faSmile } from "@fortawesome/free-solid-svg-icons";
import { useFeedback } from "./FeedbackContext";
import { questions } from "./questions";

const getIcon = (r) => {
  if (r === "Worst") return <FontAwesomeIcon icon={faFrown} style={{ color: "red" }} />;
  if (r === "Better") return <FontAwesomeIcon icon={faMeh} style={{ color: "orange" }} />;
  if (r === "Best") return <FontAwesomeIcon icon={faSmile} style={{ color: "green" }} />;
  return null;
};

const StaticFeedbackReviews = () => {
  const { feedback } = useFeedback();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <h2>Feedback Reviews</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedback.length === 0 && (
              <TableRow>
                <TableCell colSpan={3}>No feedback submitted yet.</TableCell>
              </TableRow>
            )}
            {feedback.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => setSelected(row)}>
                    View Feedback
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!selected} onClose={() => setSelected(null)} maxWidth="md" fullWidth>
        <DialogTitle>Feedback Details</DialogTitle>
        {selected && (
          <DialogContent>
            <Typography variant="h6">Username: {selected.username}</Typography>
            <Typography variant="h6">Email: {selected.email}</Typography>
            <Table>
              <TableBody>
                {questions.map((q, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}. {q}</TableCell>
                    <TableCell>{getIcon(selected.responses[`question${i + 1}`])}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => setSelected(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StaticFeedbackReviews;
