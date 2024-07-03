// src/components/UserList.tsx
import React from "react";
import { useUsers, useDeleteUser } from "../hooks/useUsers";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList: React.FC = () => {
  const { data: users, error, isLoading } = useUsers();
  const deleteUserMutation = useDeleteUser();

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Error loading users</Typography>;

  const handleDelete = (id: string) => {
    deleteUserMutation.mutate(id);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        User List
      </Typography>
      <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
        <List>
          {users.map(
            (user: {
              id: string;
              first_name: string;
              last_name: string;
              personal_email: string;
              employment_type_rev_uuid: string;
            }) => (
              <ListItem key={user.id}>
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={user.personal_email}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(user.employment_type_rev_uuid)}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          )}
        </List>
      </Box>
    </>
  );
};

export default UserList;
