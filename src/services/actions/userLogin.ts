"use server";

import { IpatientLoginValue } from "@/app/login/page";

export const userLogin = async (data: IpatientLoginValue) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const userInfo = res.json();
  return userInfo;
};
