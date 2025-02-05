import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { MyDailyStatus } from "./pages/MyDailyStatus/MyDailyStatus";
import { MyLeave } from "./pages/Myleave/MyLeave";
import Holidays from "./pages/Holidays/Holidays";
import SendMyDailyStatus from "./pages/SendMyDailyStatus/SendMyDailyStatus";
import { MyDailyStatusNew_id } from "./pages/MyDailyStatus/MyDailyStatusNew";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/notFound/NotFound";
import ForgotPassword from "./Auth/ForgotPassword";
import Signup from "../src/Auth/signup/index";
import Login from "../src/Auth/Login/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthenticationRoutes } from "./Auth/authentication";
import { EditEmployeesDetails } from "./pages/editEmployeesDetails/EditEmployeesDetails";
import { AddSkills } from "./pages/editSkills/AddSkills";
import { EditSkills } from "./pages/editSkills/EditSkills";
import EditPersonalInfo from "./pages/Edit_personal_info/EditPersonalInfo";
import { ApplyLeave } from "./pages/Myleave/ApplyLeave";
import { DiscussionDesk } from "./pages/discussionDesk/DiscussionDesk";
import { HelpDesk } from "./pages/helpDesk/HelpDesk";
import ProjectUpdate from "./pages/adminPanel/ProjectUpdate";
import EditProject from "./pages/adminPanel/EditProject";
import Calls from "./pages/TestCalls/Calls";
import Tests from "./pages/TestCalls/Tests";
import ResetPassword from "./Auth/resetPassword";
import { AddDiscussion } from "./pages/discussionDesk/AddDiscussion";
import Users from "./pages/adminPanel/Users";
import Projects from "./pages/ProjectUpdate/Projects";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "rgb(1, 4, 9)",
    },
  },
});
function App() {
  const role = localStorage.getItem("role");
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            {role === "admin" && (
              <>
                <Route path="/Signup" element={<Signup />} />
                <Route path="/projectUpdate" element={<ProjectUpdate />} />
                <Route path="/edit_project" element={<EditProject />} />
                <Route path="/All_users" element={<Users />} />
              </>
            )}
            <Route
              path="/"
              element={
                <AuthenticationRoutes>
                  <Dashboard />{" "}
                </AuthenticationRoutes>
              }
            />
            <Route path="/daily_status_updates" element={<MyDailyStatus />} />
            <Route
              path="/daily_status_updates_details/"
              element={<MyDailyStatusNew_id />}
            />
            <Route path="/send_daily_status" element={<SendMyDailyStatus />} />
            <Route path="/my_leave" element={<MyLeave />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/add-skills" element={<AddSkills />} />
            <Route path="/edit_skills" element={<EditSkills />} />
            <Route path="/edit_profile" element={<EditEmployeesDetails />} />
            <Route path="/edit_personal_info" element={<EditPersonalInfo />} />
            <Route path="/discussion_desk" element={<DiscussionDesk />} />
            <Route path="/discussion_desk/:new" element={<AddDiscussion />} />
            <Route path="/help_desk" element={<HelpDesk />} />
            <Route path="/my_leave/:new" element={<ApplyLeave />} />
            <Route path="*" element={<NotFound />} />
            <Route path="Calls" element={<Calls />} />
            <Route path="Tests" element={<Tests />} />
            <Route
              path="/forgotPass/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
