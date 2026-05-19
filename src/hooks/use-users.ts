"use client";

import { useEffect, useState } from "react";

import { userService } from "@/services/user.service";

import { User } from "@/types/user.types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await userService.getAll();

      setUsers(data);
    }

    loadUsers();
  }, []);

  return {
    users,
  };
}