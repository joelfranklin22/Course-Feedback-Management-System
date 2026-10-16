import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, Feedback, School, ExitToApp } from "@mui/icons-material";
import StaticFeedbackReviews from "./StaticFeedbackReviews";

const drawerWidth = 240;

const getCourses = (u) =>
  u.courses || (u.course && u.course !== "Not selected" ? [u.course] : []);

const Admin = () => {
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const [section, setSection] = useState("users");

  const courseCounts = users.reduce((acc, u) => {
    getCourses(u).forEach((c) => {
      acc[c] = (acc[c] || 0) + 1;
    });
    return acc;
  }, {});

  const menu = [
    { key: "users", label: "Registered Users", icon: <Home /> },
    { key: "feedback", label: "Feedback Reviews", icon: <Feedback /> },
    { key: "courses", label: "Course Enrolled", icon: <School /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "73vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: 1201, backgroundColor: "#1e1e1e" }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            maxHeight: "575px",
            overflowY: "auto",
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        <Toolbar />
        <List>
          {menu.map((m) => (
            <ListItemButton
              key={m.key}
              selected={section === m.key}
              onClick={() => setSection(m.key)}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
                {m.icon}
              </ListItemIcon>
              <ListItemText primary={m.label} />
            </ListItemButton>
          ))}
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon sx={{ color: "#fff", minWidth: 40 }}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Drawer>

      <main style={{ flexGrow: 1, padding: 24 }}>
        <Toolbar />
        {section === "users" && (
          <>
            <h2>Registered Users</h2>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Course</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((u, i) => (
                    <TableRow key={i}>
                      <TableCell>{u.username}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>
                        {getCourses(u).join(", ") || "Not enrolled"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box
              sx={{
                py: 2,
                px: 3,
                textAlign: "center",
                bgcolor: "#1e88e5",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: 1,
              }}
            >
              Total Registered Users: {users.length}
            </Box>
          </>
        )}
        {section === "feedback" && <StaticFeedbackReviews />}
        {section === "courses" && (
          <>
            <h2>Course Enrolled</h2>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Course</TableCell>
                    <TableCell>Students</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(courseCounts).map(([c, n]) => (
                    <TableRow key={c}>
                      <TableCell>{c}</TableCell>
                      <TableCell>{n}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </main>
    </div>
  );
};

export default Admin;
