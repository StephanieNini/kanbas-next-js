/* eslint-disable @typescript-eslint/no-explicit-any */
import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      // profile 会 401，如果没登录这里直接进入 catch
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err) {
      // 未登录是正常情况，不应该 console.error 让页面崩
      // console.warn("No active session");
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // 必须有 fallback，不然 pending=true 时页面不渲染导致报错
  if (pending) {
    return <div></div>;
  }

  return children;
}
