// src/components/AddUserForm.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FilledInput,
} from "@mui/material";
import { useAddUser, useUsers } from "../hooks/useUsers";

const AddUserForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const mutation = useAddUser();
  const { data: users } = useUsers();

  useEffect(() => {
    if (selectedUser) {
      const user = users.find(
        (user) => user.employment_type_rev_uuid === selectedUser
      );
      if (user) {
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.personal_email);
        setEmploymentType(user.employment_type_rev_uuid);
      }
    }
  }, [selectedUser, users]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      first_name: firstName,
      last_name: lastName,
      personal_email: email,
      employment_type_rev_uuid: employmentType,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setEmploymentType("");
    setSelectedUser("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <Typography variant="h6" gutterBottom>
        Add New User
      </Typography>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="select-user-label">Select Existing User</InputLabel>
        <Select
          labelId="select-user-label"
          value={selectedUser}
          variant="outlined"
          onChange={(e) => setSelectedUser(e.target.value as string)}
          input={<FilledInput />}
        >
          {users &&
            users.map(
              (user: {
                employment_type_rev_uuid: string;
                first_name: string;
                last_name: string;
              }) => (
                <MenuItem
                  key={user.employment_type_rev_uuid}
                  value={user.employment_type_rev_uuid}
                >
                  {user.first_name} {user.last_name}
                </MenuItem>
              )
            )}
        </Select>
      </FormControl>
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Personal Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Employment Type"
        variant="outlined"
        value={employmentType}
        onChange={(e) => setEmploymentType(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </Box>
  );
};

export default AddUserForm;
