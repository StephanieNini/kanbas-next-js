import { redirect } from "next/navigation";

export default function Home() {
  // 页面加载时立即重定向到 Signin 页面
  redirect("/Account/Signin");
}
