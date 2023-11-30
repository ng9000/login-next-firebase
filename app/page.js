import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogOutBtn from "./components/LogOutBtn"

export default function Home() {
  const auth = cookies();
  if (!auth.get("auth")) {
    redirect("/sign-in");
  } else {
    return (
      <main className="p-4">
        <h1>Home Page</h1>
        <LogOutBtn />
      </main>
    )
  }
}
