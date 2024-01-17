import React from "react";
import { useLocation } from "react-router-dom";

export const MyDailyStatusNew_id = () => {
  const { state } = useLocation();
  const data = state.item;
  return (
    <div>
      <h2>Status Update on {data.dueDate}</h2>
      <div>
        <ul>
          <li>
            <b>In Time</b>
          </li>
          <li>
            <b>Out Time</b>
          </li>
          <li>
            <b>Total Hours:</b>
          </li>
        </ul>
        <h3>Please Find My Status Update:</h3>
        <ul>
          <span>
            <ul>
              {data.tasks.map((task, index) => (
                <li key={index}>
                  <span>
                    <b>1: Project Name:</b> {task.projectStatus}
                  </span>
                  <br />
                  <b>Tasks:</b>
                  <br />
                  <div>
                    <div>
                      EOD: {task.task}
                      <br />
                    </div>
                    <div>
                      <b>Working Hour:</b> {task.workingHour}
                    </div>
                    <div>
                      <b>Status:</b> {task.status}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </span>
          <br />
        </ul>
      </div>
    </div>
  );
};
