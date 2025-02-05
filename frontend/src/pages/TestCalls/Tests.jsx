import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Table } from "react-bootstrap";
import style from "./InterviewCalls.module.css";
import Input from "./Input";
import SelectInput from "./SelectInput";
import Layout from "../../components/Layout";
import OptionsSelect from "../../components/selectOption/selectOption";
import {
  selectMode,
  selectPriority,
  selectStatus,
  selectTech,
} from "../../Utils/constant";
const Tests = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    DeveloperProfile: Yup.string().required(),
    assigned: Yup.string().required(),
    round: Yup.number().positive().integer().required(),
    status: Yup.string().required(),
    mode: Yup.string().required(),
    DeadlineTo: Yup.date().required(),
    DeadlineFrom: Yup.date().required(),
    priority: Yup.string().oneOf(["High", "Medium", "Low"]).required(),
    technology: Yup.string().required(),
  });

  const onSubmit = async (actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const handleReset = (values) => {
    values = {};
  };

  return (
    <>
      <Layout>
        <div className={style.mainContainer}>
          <div className="container" style={{ flex: 2 }}>
            <h5 className={style.createheading}>Test Tasks</h5>
            <Table striped hover variant="dark">
              <thead>
                <tr>
                  <th>Client's Details</th>
                  <th>Profile</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>one</td>
                  <td>java</td>
                  <td>online</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={style.form}>
            <Formik
              initialValues={{
                name: "",
                DeveloperProfile: "",
                assigned: "",
                round: "",
                status: "",
                technology: "",
                DeadlineTo: "",
                DeadlineFrom: "",
                priority: "",
                mode: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              onReset={handleReset}
            >
              <Form>
                <Input
                  label="By Client name"
                  style={style}
                  type="text"
                  id="name"
                  name="name"
                />
                <SelectInput
                  label="By developer profile"
                  style={style}
                  type="text"
                  name="DeveloperProfile"
                  id="DeveloperProfile"
                />
                <SelectInput
                  label="Assigned to"
                  style={style}
                  type="text"
                  name="assigned"
                  id="assigned"
                />
                <Input
                  label="Round Contains"
                  style={style}
                  min={1}
                  max={10}
                  type="number"
                  id="round"
                  name="round"
                />
                <SelectInput
                  label="Status"
                  style={style}
                  type="text"
                  name="status"
                  id="status"
                >
                  <OptionsSelect options={selectStatus} />
                </SelectInput>
                <SelectInput label="Mode" id="mode" name="mode" style={style}>
                  <OptionsSelect options={selectMode} />
                </SelectInput>
                <Input
                  label="Deadline from"
                  style={style}
                  type="date"
                  id="timeFrom"
                  name="DeadlineFrom"
                />
                <Input
                  label="Deadline to"
                  style={style}
                  type="date"
                  id="timeTo"
                  name="DeadlineTo"
                />
                <SelectInput
                  label="Priority"
                  id="priority"
                  name="priority"
                  style={style}
                >
                  <OptionsSelect options={selectPriority} />
                </SelectInput>
                <SelectInput
                  label="Primary technology"
                  id="technology"
                  name="technology"
                  style={style}
                >
                  <OptionsSelect options={selectTech} />
                </SelectInput>
                <button type="submit" className={style.submitbtn}>
                  Search
                </button>
                <button type="reset" className={style.searchbtn}>
                  Clear Search
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tests;
